// reCAPTCHA v3 (invisible) server-side verification.
//
// The practitioner inquiry form was getting 25+ bot submissions/day, so it
// runs reCAPTCHA v3 in the browser (action "practitioner_inquiry") and posts
// the resulting token. We verify the token here against Google's siteverify
// endpoint and reject low-score (likely-bot) submissions.
//
// Config:
//   NEXT_PUBLIC_RECAPTCHA_SITE_KEY  — public site key, loaded in the browser.
//   RECAPTCHA_SECRET_KEY            — secret key, server only.
//
// If RECAPTCHA_SECRET_KEY is unset (e.g. local dev without keys configured),
// verification is skipped so the form still works — only configured
// environments enforce the check.

const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

// v3 returns a 0.0–1.0 score (1.0 = very likely human). 0.5 is Google's
// recommended default; raised to 0.7 because bots were still clearing 0.5 on
// the practitioner form. Higher is stricter (fewer bots, more false rejects).
const SCORE_THRESHOLD = 0.7;

export type RecaptchaResult = {
  /** True if the request should be allowed through. */
  ok: boolean;
  /** Short reason for a rejection, for server-side logging. */
  reason?: string;
};

/**
 * Verify a reCAPTCHA v3 token. Never throws.
 *
 * Returns ok:true when no secret is configured (verification disabled), when
 * Google is unreachable (fail-open so a Google outage can't take the form
 * down), or when the token passes with a sufficient score for the expected
 * action. Returns ok:false only on a definitive failure (missing/invalid
 * token or a low score).
 */
export async function verifyRecaptcha(
  token: unknown,
  expectedAction: string
): Promise<RecaptchaResult> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return { ok: true, reason: "disabled" };

  if (typeof token !== "string" || token.length === 0) {
    return { ok: false, reason: "missing-token" };
  }

  try {
    const res = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });

    if (!res.ok) {
      console.error("reCAPTCHA siteverify HTTP error:", res.status);
      return { ok: true, reason: "verify-unreachable" }; // fail open
    }

    const data = (await res.json()) as {
      success?: boolean;
      score?: number;
      action?: string;
      "error-codes"?: string[];
    };

    if (!data.success) {
      return { ok: false, reason: `failed:${(data["error-codes"] || []).join(",")}` };
    }
    if (data.action && data.action !== expectedAction) {
      return { ok: false, reason: `action-mismatch:${data.action}` };
    }
    if (typeof data.score === "number" && data.score < SCORE_THRESHOLD) {
      return { ok: false, reason: `low-score:${data.score}` };
    }
    return { ok: true };
  } catch (error) {
    console.error("reCAPTCHA verify error:", error instanceof Error ? error.message : "Unknown");
    return { ok: true, reason: "verify-error" }; // fail open
  }
}
