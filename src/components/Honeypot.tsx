"use client";

/**
 * Hidden anti-bot honeypot field. Real users never see or fill it: it's pushed
 * off-screen, hidden from assistive tech, and skipped by keyboard tabbing.
 * Bots that blindly fill every field set a value, and the server silently
 * drops those submissions (see isHoneypotTripped in lib/validation). Named
 * "website" because that's a field automated form-fillers love to complete.
 */
export function Honeypot({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-9999px",
        top: 0,
        width: 1,
        height: 1,
        overflow: "hidden",
      }}
    >
      <label>
        Website
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
