import { NextRequest, NextResponse } from "next/server";
import { isRateLimited } from "@/lib/rate-limit";
import { isValidEmail, sanitizeString, sanitizeStringArray } from "@/lib/validation";

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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Practitioner inquiry error:", error instanceof Error ? error.message : "Unknown");
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
