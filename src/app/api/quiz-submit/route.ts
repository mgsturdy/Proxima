import { NextRequest, NextResponse } from "next/server";
import { isRateLimited } from "@/lib/rate-limit";
import { isValidEmail, sanitizeString } from "@/lib/validation";

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

  const email = sanitizeString(body.email, 254);
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const score = typeof body.score === "number" ? Math.min(Math.max(body.score, 0), 150) : 0;
  const tier = VALID_TIERS.includes(body.tier) ? body.tier : "unknown";
  const topCategory = sanitizeString(body.topCategory, 100);

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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quiz submit error:", error instanceof Error ? error.message : "Unknown");
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
