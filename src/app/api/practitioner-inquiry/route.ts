import { NextRequest, NextResponse } from "next/server";
import { isRateLimited } from "@/lib/rate-limit";
import { isValidEmail, sanitizeString, sanitizeStringArray } from "@/lib/validation";
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

  const firstName = sanitizeString(body.firstName, 100);
  if (!firstName) {
    return NextResponse.json({ error: "First name required" }, { status: 400 });
  }

  const lastName = sanitizeString(body.lastName, 100);
  const practice = sanitizeString(body.practice, 200);
  const specialty = sanitizeString(body.specialty, 100);
  const interests = sanitizeStringArray(body.interests, 5, 200);
  const notes = sanitizeString(body.notes, 1000);

  try {
    const response = await fetch(sheetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "practitioner_inquiry",
        firstName,
        lastName,
        practice,
        email,
        specialty,
        interests,
        notes,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      console.error("Google Sheet webhook failed:", response.status);
      return NextResponse.json({ error: "Failed to save" }, { status: 502 });
    }

    // Mirror to HubSpot (Form 2 — Practitioner Inquiry). Audience = Practitioner.
    // We only send fields the form collects; the other practitioner-group
    // properties are enriched manually by Sarah after intake calls.
    await submitHubSpotForm(
      HUBSPOT_FORMS.practitioner,
      [
        { name: HS_PROP.email, value: email },
        { name: HS_PROP.firstName, value: firstName },
        { name: HS_PROP.lastName, value: lastName },
        { name: HS_PROP.audience, value: AUDIENCE.practitioner },
        { name: HS_PROP.specialty, value: specialty },
        { name: HS_PROP.clinicName, value: practice },
        { name: HS_PROP.partnershipInterest, value: interests.join("; ") },
      ],
      {
        hutk: readHutk(req.headers.get("cookie")),
        pageUri: req.headers.get("referer") ?? undefined,
        pageName: "Practitioner Inquiry",
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Practitioner inquiry error:", error instanceof Error ? error.message : "Unknown");
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
