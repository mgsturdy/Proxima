---
title: "Proxima Health — Integration QA Follow-Up: Confirmation"
subtitle: "Practitioner form mapping · Waitlist UTMs · CAPTCHA · /quiz rename | Prepared June 29, 2026"
---

<style>
  body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11pt; color: #1a1a1a; margin: 40px 50px; line-height: 1.5; }
  h1 { font-size: 22pt; color: #0f172a; border-bottom: 2px solid #0ea5e9; padding-bottom: 8px; margin-top: 0; }
  h2 { font-size: 14pt; color: #0369a1; margin-top: 28px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; }
  h3 { font-size: 12pt; color: #334155; margin-top: 20px; }
  table { border-collapse: collapse; width: 100%; margin: 12px 0; font-size: 10pt; }
  th { background: #f1f5f9; text-align: left; padding: 6px 10px; border: 1px solid #cbd5e1; font-weight: 600; }
  td { padding: 6px 10px; border: 1px solid #e2e8f0; }
  tr:nth-child(even) { background: #f8fafc; }
  blockquote { background: #f8fafc; border-left: 4px solid #0ea5e9; margin: 16px 0; padding: 12px 18px; color: #334155; font-size: 10.5pt; }
  .note { font-size: 9pt; color: #64748b; font-style: italic; margin-top: 4px; }
  .ok { color: #047857; font-weight: 600; }
  .action { color: #b45309; font-weight: 600; }
  .footer { margin-top: 40px; padding-top: 12px; border-top: 1px solid #e2e8f0; font-size: 8pt; color: #94a3b8; }
</style>

*All four items from the June 29 QA follow-up are implemented and deployed to production. This document confirms each against the changes shipped. Two items require keys/configuration on the HubSpot and reCAPTCHA side before final QA — flagged below.*

## Summary

| # | Item | Status |
|---|------|--------|
| 1 | Practitioner inquiry — field mapping | <span class="ok">Shipped</span> |
| 2 | Waitlist UTM persistence (diagnostics lightbox) | <span class="ok">Shipped</span> |
| 3 | CAPTCHA on practitioner form (reCAPTCHA v3) | <span class="ok">Shipped</span> — <span class="action">needs keys</span> |
| — | Housekeeping: rename /waitlist → /quiz | <span class="ok">Shipped</span> |

## 1. Practitioner inquiry — field mapping

All seven fields now map to the exact HubSpot internal names specified.

| Site form field | HubSpot internal name | Notes |
|-----------------|----------------------|-------|
| First name | `firstname` | — |
| Last name | `lastname` | — |
| Email | `email` | — |
| Practice / institution | `clinic_name` | — |
| Specialty (dropdown) | `clinic_specialty2` | Corrected — was previously mapped to `specialty` |
| Partnership interest (multi-checkbox) | `partnership_interest` | Now sends internal values (see below) |
| Additional notes | `practitioner_notes` | Newly mapped — was not being sent before |

**Partnership interest** now sends your internal checkbox values, semicolon-delimited with no spaces:

| Checkbox selected | Value sent |
|-------------------|-----------|
| Diagnostics Partnership (offer Proxima Health Baseline to patients) | `diagnostic_testing_partnership` |
| Inuspheresis Availability | `inuspheresis_loi` |
| Clinical Research Collaboration | `general_partnership` |

Examples: first two selected → `diagnostic_testing_partnership;inuspheresis_loi`. One selected → that single value. None selected → field left blank. This matches your spec exactly.

> **One confirmation needed on your side:** Specialty is sent as the exact dropdown label shown on the site (Functional Medicine, Integrative Medicine, Internal Medicine, Longevity / Anti-Aging, Naturopathic Medicine, Other). For these to land, the `clinic_specialty2` options in HubSpot must match those labels exactly — otherwise HubSpot silently drops the field. Please confirm the option labels line up, or send us your exact list and we'll align the form.

## 2. Waitlist UTM persistence (diagnostics lightbox)

**Root cause found and fixed.** UTM capture on `/diagnostics` was working (params were stored on landing and passed into the lightbox), but the server route that submits the waitlist signup was not forwarding those UTM values on to HubSpot. That forwarding is now in place.

All five UTM fields are now passed end-to-end from the diagnostics page through the lightbox submission: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`.

This means the exact test you ran — landing on `proxima.health/diagnostics?utm_source=qatest_real&utm_medium=email&utm_campaign=waitlist_retest`, opening the lightbox, and submitting — will now populate those fields on the HubSpot contact.

## 3. CAPTCHA on practitioner inquiry form

reCAPTCHA **v3 (invisible, no user friction)** is implemented on the practitioner form only. The quiz and waitlist forms are untouched. The form runs the check silently on submit and the server rejects low-score (likely-bot) submissions before they reach HubSpot or the spreadsheet.

> **Action required before it's live:** This needs a reCAPTCHA v3 site registered in Google (with the production domains) and two keys added to the hosting environment: `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET_KEY`. Until the secret is present the form continues to work normally with no bot filtering, so there is no risk of blocking real submissions during setup. These keys are being provisioned; CAPTCHA enforcement begins on the next deploy after they are set.

## Housekeeping — /waitlist → /quiz

The toxin assessment now lives at `/quiz`. All internal links across the site (homepage, blog posts, science page, footer) were updated, and a permanent redirect from `/waitlist` to `/quiz` is in place so existing links, bookmarks, and indexed URLs keep working.

## What's confirmed for re-QA

- **Item 1:** All 7 practitioner fields map to the correct HubSpot internal names. <span class="ok">Ready to test</span> (pending your `clinic_specialty2` option-label check).
- **Item 2:** Waitlist UTMs persist end-to-end from the diagnostics page through the lightbox submission. <span class="ok">Ready to test.</span>
- **Item 3:** CAPTCHA code is live on the practitioner form; <span class="action">enforcement activates once the reCAPTCHA keys are added to the environment.</span>

Happy to hop on a call for the final QA pass whenever works.

<div class="footer">Proxima Health — prepared June 29, 2026. Changes deployed to production via the standard pipeline.</div>
