import { NextRequest, NextResponse } from "next/server";
import { isRateLimited } from "@/lib/rate-limit";
import { isHoneypotTripped, isValidEmail, sanitizeString } from "@/lib/validation";
import {
  AUDIENCE,
  HS_PROP,
  HUBSPOT_FORMS,
  QUIZ_TIER_HS,
  readHutk,
  submitHubSpotForm,
} from "@/lib/hubspot";

const VALID_TIERS = ["low", "moderate", "high"];
const MAX_ANSWERS = 10;

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const sheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!sheetUrl) {
    console.error("GOOGLE_SHEET_WEBHOOK_URL not configured");
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: silently accept and drop bot submissions before any work.
  if (isHoneypotTripped(body)) {
    return NextResponse.json({ success: true });
  }

  const email = sanitizeString(body.email, 254);
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const score = typeof body.score === "number" ? Math.min(Math.max(body.score, 0), 100) : 0;
  const tier = VALID_TIERS.includes(body.tier) ? body.tier : "unknown";
  const topCategory = sanitizeString(body.topCategory, 100);
  const utmSource = sanitizeString(body.utmSource, 100);
  const utmMedium = sanitizeString(body.utmMedium, 100);
  const utmCampaign = sanitizeString(body.utmCampaign, 100);

  const answers = Array.isArray(body.answers)
    ? body.answers.slice(0, MAX_ANSWERS).map((a: Record<string, unknown>) => ({
        question: sanitizeString(a?.question, 200),
        category: sanitizeString(a?.category, 50),
        answer: sanitizeString(a?.answer, 200),
        points: typeof a?.points === "number" ? Math.min(Math.max(a.points, 0), 15) : 0,
      }))
    : [];

  try {
    const response = await fetch(sheetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        score,
        tier,
        topCategory,
        answers,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      console.error("Google Sheet webhook failed:", response.status);
      return NextResponse.json({ error: "Failed to save" }, { status: 502 });
    }

    // Mirror to HubSpot (Form 1 — Quiz Submission). Audience = Patient.
    await submitHubSpotForm(
      HUBSPOT_FORMS.quiz,
      [
        { name: HS_PROP.email, value: email },
        { name: HS_PROP.audience, value: AUDIENCE.patient },
        { name: HS_PROP.toxinLoadScore, value: String(score) },
        { name: HS_PROP.quizTier, value: QUIZ_TIER_HS[tier] ?? "" },
        { name: HS_PROP.utmSource, value: utmSource },
        { name: HS_PROP.utmMedium, value: utmMedium },
        { name: HS_PROP.utmCampaign, value: utmCampaign },
      ],
      {
        hutk: readHutk(req.headers.get("cookie")),
        pageUri: req.headers.get("referer") ?? undefined,
        pageName: "Diagnostic Quiz",
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quiz submit error:", error instanceof Error ? error.message : "Unknown");
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
