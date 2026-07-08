const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: unknown): email is string {
  return typeof email === "string" && email.length <= 254 && EMAIL_REGEX.test(email);
}

export function sanitizeString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.slice(0, maxLength).trim();
}

/**
 * Honeypot check. Every public form renders a hidden `website` field that real
 * users never see or fill (off-screen, not tabbable, autocomplete off). Bots
 * that fill every field trip it. Returns true when the submission looks like a
 * bot, in which case the route should silently accept and do no work — never
 * tip the bot off that it was caught.
 */
export function isHoneypotTripped(body: unknown): boolean {
  const value = (body as Record<string, unknown> | null | undefined)?.website;
  return typeof value === "string" && value.trim().length > 0;
}

export function sanitizeStringArray(value: unknown, maxItems: number, maxLength: number): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .slice(0, maxItems)
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.slice(0, maxLength).trim());
}
