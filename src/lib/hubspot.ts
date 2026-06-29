// HubSpot Forms API integration.
//
// Config from Mark Abere's "HubSpot Configuration Complete" handoff (2026-06-01).
// Account: Marketing Hub Starter (portal 246039967, na2 region).
//
// We POST to the HubSpot Forms Submission API from our own API routes, in
// addition to the existing Google Sheet webhook. Submitting against a form
// GUID (rather than the Contacts API) is what triggers the form's configured
// follow-up: lifecycle stage assignment, list membership, and the welcome
// email. Passing `hutk` (the hubspotutk cookie set by the site-wide tracking
// code) lets HubSpot attribute the contact's source/UTMs automatically.
//
// Failures here are logged and swallowed: a HubSpot outage must never break a
// form submission or the Google Sheet record.

export const HUBSPOT_PORTAL_ID = "246039967";

export const HUBSPOT_FORMS = {
  quiz: "4d48fb05-93c7-4adf-9ff9-9e2a2823f2b2",
  practitioner: "37b369ef-59d5-49a5-b00e-42ecbe5b97ce",
  diagnostics: "087aefd8-f1de-40a5-8960-ea9d6398a4ab",
} as const;

// HubSpot property INTERNAL names (not display labels). Confirmed against the
// portal's Contact properties on 2026-06-02. Note `quiz` is the internal name
// for the "Quiz Tier" property (not the conventional quiz_tier). Unknown field
// names are silently dropped by the submission API, so the contact + welcome
// email still land even if one of these drifts.
export const HS_PROP = {
  email: "email",
  firstName: "firstname",
  lastName: "lastname",
  audience: "audience",
  toxinLoadScore: "toxin_load_score",
  quizTier: "quiz",
  utmSource: "utm_source",
  utmMedium: "utm_medium",
  utmCampaign: "utm_campaign",
  utmContent: "utm_content",
  utmTerm: "utm_term",
  // The practitioner Specialty maps to `clinic_specialty2`, NOT `clinic_specialty`
  // — those are two distinct properties in the portal (per client QA 2026-06-29).
  clinicSpecialty: "clinic_specialty2",
  clinicName: "clinic_name",
  partnershipInterest: "partnership_interest",
  practitionerNotes: "practitioner_notes",
} as const;

// Values for the hidden Audience dropdown, passed per form.
export const AUDIENCE = { patient: "Patient", practitioner: "Practitioner" } as const;

// The Quiz Tier property is a HubSpot dropdown whose option values are
// capitalized (Low / Moderate / High / Very High). Enum values must match an
// option exactly or HubSpot silently drops the field, so map our internal
// lowercase tiers to the option labels. ("Very High" isn't produced by the
// quiz's three-tier scoring; it exists in HubSpot for manual segmentation.)
export const QUIZ_TIER_HS: Record<string, string> = {
  low: "Low",
  moderate: "Moderate",
  high: "High",
};

// `partnership_interest` is a HubSpot multi-checkbox. Its option *internal
// values* differ from the labels shown on the site form, so map each site
// label to its HubSpot internal value (per client QA 2026-06-29). Selected
// values are sent as a single semicolon-delimited string with no spaces
// (e.g. "diagnostic_testing_partnership;inuspheresis_loi"), which is how
// HubSpot encodes multiple checkbox selections. A label with no mapping is
// dropped rather than sent verbatim, since an unknown checkbox value makes
// HubSpot reject the field.
export const PARTNERSHIP_INTEREST_HS: Record<string, string> = {
  "Diagnostics Partnership (offer Proxima Health Baseline to patients)":
    "diagnostic_testing_partnership",
  "Inuspheresis Availability": "inuspheresis_loi",
  "Clinical Research Collaboration": "general_partnership",
};

/** Map selected partnership-interest labels to a HubSpot checkbox value string. */
export function partnershipInterestValue(labels: string[]): string {
  return labels
    .map((label) => PARTNERSHIP_INTEREST_HS[label])
    .filter(Boolean)
    .join(";");
}

// The submission endpoint is region-agnostic (api.hsforms.com works for all
// portals); only the *tracking script* is region-specific (js-na2...).
const SUBMIT_BASE = "https://api.hsforms.com/submissions/v3/integration/submit";

export type HubSpotField = { name: string; value: string };

export type HubSpotContext = {
  /** hubspotutk cookie value, for source/UTM attribution. */
  hutk?: string;
  /** Full URL of the page the visitor submitted from. */
  pageUri?: string;
  pageName?: string;
};

/** Pull the hubspotutk tracking cookie out of a request Cookie header. */
export function readHutk(cookieHeader: string | null): string | undefined {
  if (!cookieHeader) return undefined;
  return cookieHeader.match(/(?:^|;\s*)hubspotutk=([^;]+)/)?.[1];
}

/**
 * Submit a set of fields to a HubSpot form. Never throws.
 * Returns true on a 2xx response, false otherwise.
 *
 * Only non-empty fields are sent. Field `name`s must be the HubSpot property
 * *internal* names configured on the target form, or HubSpot rejects the whole
 * submission (400). See the field builders in each API route.
 */
export async function submitHubSpotForm(
  formGuid: string,
  fields: HubSpotField[],
  context: HubSpotContext = {}
): Promise<boolean> {
  const cleanFields = fields.filter((f) => f.value !== "" && f.value != null);
  if (cleanFields.length === 0) return false;

  const ctx: Record<string, string> = {};
  if (context.hutk) ctx.hutk = context.hutk;
  if (context.pageUri) ctx.pageUri = context.pageUri;
  if (context.pageName) ctx.pageName = context.pageName;

  // A malformed hutk makes HubSpot reject the ENTIRE submission with a 400
  // INVALID_HUTK — losing the contact, not just the attribution. So if that
  // happens we retry once without the hutk: better an un-attributed contact
  // than no contact. Unknown field names, by contrast, are silently dropped.
  const post = (body: Record<string, unknown>) =>
    fetch(`${SUBMIT_BASE}/${HUBSPOT_PORTAL_ID}/${formGuid}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

  try {
    let res = await post({
      fields: cleanFields,
      ...(Object.keys(ctx).length > 0 ? { context: ctx } : {}),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      if (res.status === 400 && detail.includes("INVALID_HUTK") && ctx.hutk) {
        const { hutk: _dropped, ...ctxNoHutk } = ctx;
        res = await post({
          fields: cleanFields,
          ...(Object.keys(ctxNoHutk).length > 0 ? { context: ctxNoHutk } : {}),
        });
        if (res.ok) return true;
        const detail2 = await res.text().catch(() => "");
        console.error(`HubSpot form ${formGuid} retry (no hutk) failed: ${res.status} ${detail2.slice(0, 300)}`);
        return false;
      }
      console.error(`HubSpot form ${formGuid} submit failed: ${res.status} ${detail.slice(0, 300)}`);
      return false;
    }
    return true;
  } catch (error) {
    console.error("HubSpot submit error:", error instanceof Error ? error.message : "Unknown");
    return false;
  }
}
