import { NextRequest, NextResponse } from "next/server";
import { isRateLimited } from "@/lib/rate-limit";
import { isValidEmail, sanitizeString } from "@/lib/validation";
import {
  AUDIENCE,
  HS_PROP,
  HUBSPOT_FORMS,
  readHutk,
  submitHubSpotForm,
} from "@/lib/hubspot";

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

  const email = sanitizeString(body.email, 254);
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const name = sanitizeString(body.name, 200);
  if (!name) {
    return NextResponse.json({ error: "Name required" }, { status: 400 });
  }

  // The site collects a single "name" field; the HubSpot form splits it into
  // firstname/lastname. Split on the first space (everything after = last name).
  const firstSpace = name.indexOf(" ");
  const firstName = firstSpace === -1 ? name : name.slice(0, firstSpace);
  const lastName = firstSpace === -1 ? "" : name.slice(firstSpace + 1);

  try {
    const response = await fetch(sheetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "diagnostics_signup",
        name,
        email,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      console.error("Google Sheet webhook failed:", response.status);
      return NextResponse.json({ error: "Failed to save" }, { status: 502 });
    }

    // Mirror to HubSpot (Form 3 — Diagnostics Waitlist). Audience = Patient,
    // lifecycle stage MQL is set on the form itself.
    await submitHubSpotForm(
      HUBSPOT_FORMS.diagnostics,
      [
        { name: HS_PROP.email, value: email },
        { name: HS_PROP.firstName, value: firstName },
        { name: HS_PROP.lastName, value: lastName },
        { name: HS_PROP.audience, value: AUDIENCE.patient },
      ],
      {
        hutk: readHutk(req.headers.get("cookie")),
        pageUri: req.headers.get("referer") ?? undefined,
        pageName: "Diagnostics Waitlist",
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Diagnostics signup error:", error instanceof Error ? error.message : "Unknown");
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
