// UTM capture for HubSpot's custom UTM properties (utm_source/medium/campaign).
//
// HubSpot's tracking cookie already attributes native source analytics, but
// Philip's custom UTM contact properties need explicit values. We grab the UTM
// params from the landing URL and persist them in sessionStorage so they
// survive multi-step flows (e.g. the quiz) and are still available at submit.

export type UtmParams = {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
};

const KEY = "proxima_utm";

/**
 * Capture UTM params from the current URL into sessionStorage (first touch
 * wins for the session) and return the stored set. Safe to call on mount.
 */
export function captureUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const fromUrl: UtmParams = {
    utmSource: params.get("utm_source") || undefined,
    utmMedium: params.get("utm_medium") || undefined,
    utmCampaign: params.get("utm_campaign") || undefined,
    utmContent: params.get("utm_content") || undefined,
    utmTerm: params.get("utm_term") || undefined,
  };

  const hasAny =
    fromUrl.utmSource ||
    fromUrl.utmMedium ||
    fromUrl.utmCampaign ||
    fromUrl.utmContent ||
    fromUrl.utmTerm;
  if (hasAny) {
    try {
      sessionStorage.setItem(KEY, JSON.stringify(fromUrl));
    } catch {
      // sessionStorage unavailable (private mode / blocked) — fall through.
    }
    return fromUrl;
  }
  return getUtmParams();
}

/** Read previously captured UTM params for this session. */
export function getUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as UtmParams) : {};
  } catch {
    return {};
  }
}
