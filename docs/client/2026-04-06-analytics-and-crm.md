---
title: "Proxima Health — Analytics & CRM Strategy"
subtitle: "Current state, assumptions, and open questions"
date: "April 6, 2026"
geometry: margin=1in
fontsize: 11pt
---

# 1. Analytics — What we've built

The Proxima site is instrumented with **Vercel Web Analytics** and **Vercel Speed Insights**, both enabled site-wide via the root layout. These run automatically on every page and require no per-page setup.

## 1.1 What's captured automatically

**Vercel Web Analytics** — traffic and audience

- Pageviews and unique visitors
- Top pages, entry pages, exit pages
- Referrers (where traffic came from — Google, direct, social, etc.)
- Country, device type, OS, browser
- UTM parameter tracking for campaigns

**Vercel Speed Insights** — site performance

- Core Web Vitals (LCP, CLS, INP, FCP, TTFB)
- Real-user performance data, broken down by page and device
- Regressions flagged automatically after each deploy

Both are privacy-first and cookieless, so they work without a cookie banner and are GDPR-friendly out of the box.

## 1.2 Custom events we're tracking

On top of the automatic data, we track specific user actions so we can measure intent, not just traffic. Each event can carry properties (e.g., quiz tier, CTA location) so we can segment later.

### Waitlist / Toxin Assessment Quiz

| Event | When it fires | Properties |
|---|---|---|
| `quiz_started` | User clicks "Start quiz" | — |
| `quiz_completed` | User reaches the final question | — |
| `quiz_email_submitted` | User submits their email | `tier`, `score` |
| `quiz_email_skipped` | User declines to submit email | `tier`, `score` |

This gives us a full funnel: **visit → start → complete → submit email**, broken down by toxin load tier.

### Practitioner inquiry

| Event | When it fires | Properties |
|---|---|---|
| `practitioner_inquiry_submitted` | Practitioner submits inquiry form | `interests` |

### Diagnostics page

| Event | When it fires | Properties |
|---|---|---|
| `diagnostics_signup_submitted` | User submits diagnostics interest form | — |

### Site-wide engagement

| Event | When it fires | Properties |
|---|---|---|
| `cta_clicked` | Any homepage CTA button | `location`, `label` |
| `nav_clicked` | Navbar link or logo | `link`, `source` |
| `footer_link_clicked` | Footer link | `link` |
| `stat_source_clicked` | Homepage stat citation link | `stat` |

## 1.3 What this lets us answer

With the current setup we can answer questions like:

- How many people visit the site each week, and where are they coming from?
- What percentage of visitors start the quiz? Complete it? Submit their email?
- Which homepage CTA drives the most quiz starts?
- Are practitioners arriving from a different source than consumers?
- Which toxin load tier are our waitlist signups skewing toward?
- Is the site fast enough on mobile, and is that changing over time?

## 1.4 Sharing analytics with the client

Three options, roughly ordered from lightest to heaviest lift:

**Option A — Read-only Vercel access**  (recommended for now)
Add the client as a Viewer on the Vercel project. They get direct access to the live Analytics and Speed Insights dashboards. No additional tooling, zero cost, real-time data. Caveat: they also see the Vercel project UI (deployments, logs), which can feel technical.

**Option B — Weekly or monthly digest**
A curated summary (email or PDF) with the numbers that matter: traffic, quiz funnel conversion, new signups, top referrers. Lower access surface area, easier for non-technical stakeholders, but no ability to self-serve.

**Option C — Branded dashboard inside proxima.health**
A password-protected `/admin/analytics` page pulling from the Vercel Analytics API, styled to match Proxima. Most control and most polished, but meaningful build time. Worth it only if the client wants a recurring self-serve experience without seeing Vercel's UI.

**Our recommendation:** start with **Option A** for the founding team, and layer **Option B** (a monthly digest) if broader stakeholders need visibility. Option C is a "when we have real traction" decision.

---

# 2. CRM — Where we are and where we need to go

## 2.1 Current state

Today, every lead from the site (waitlist, practitioner, diagnostics) lands in a **Google Sheet**. This is fine for the first few dozen leads but creates real risk as volume grows:

- No backups or audit trail
- No deduplication (same email can appear many times)
- No segmentation or tagging
- Manually exporting to send an email blast
- No pipeline for practitioner sales follow-up
- Fragile — one accidental edit can corrupt the list

## 2.2 Assumptions we're making

We need client confirmation on the following before we pick a tool, but these are our working assumptions:

1. **Two distinct audiences, one system.** Proxima has consumers (waitlist quiz takers) and practitioners (B2B prospects). These should live in one CRM but in separate pipelines — consumers as a marketing list, practitioners as a sales pipeline with stages and notes.

2. **Marketing-first, not clinical.** All data captured today is pre-patient marketing data, not Protected Health Information (PHI). We are **not** yet operating in a HIPAA-regulated context. This changes the moment a user becomes a patient, and we'll need a clean handoff to a separate HIPAA-compliant system at that point.

3. **Email blast is the immediate need.** The first real use case is "announce a new product or milestone to everyone on the waitlist." Nurture sequences and segmentation come next.

4. **Quiz tier is valuable segmentation.** Because we capture toxin load tier at quiz submission, we can eventually send different messaging to high-tier vs. low-tier respondents. Worth setting up from day one even if we don't use it immediately.

5. **Off-the-shelf over custom.** We recommend HubSpot (free tier), Attio, or Folk rather than building a custom CRM in the Proxima codebase. A custom build is expensive, doesn't add product value, and forces us to reinvent things like email deliverability, unsubscribe handling, and import/export.

6. **HubSpot Free is the default starting point** unless a specific requirement pushes us elsewhere. It handles both consumer lists and practitioner pipelines, has generous free limits, integrates with most tools, and is easy to migrate out of later if needed.

## 2.3 How CRM and analytics work together

Analytics and CRM answer different questions and are stronger together:

- **Analytics tells us how many people did X.** How many started the quiz, where traffic came from, what the conversion rate is.
- **CRM tells us who specifically did X, and what to do next.** Which individual practitioners are in the pipeline, what stage they're at, when to follow up.

The bridge between them is the form submission. When someone submits the quiz, two things happen in parallel:

1. An analytics event fires (`quiz_email_submitted` with tier and score) — anonymous, aggregated.
2. The contact record is created in the CRM with their name, email, and tier — identified, actionable.

This lets us answer layered questions like: *"Our quiz completion rate dropped 20% this week — is it one audience segment, and who do we need to re-engage?"*

## 2.4 Questions for the client

We need answers to the following before we commit to a CRM tool and data model:

**Access & team**

1. Who needs login access today — just you, or others? Will there be a sales, marketing, or ops person in the next 6 months who needs to work leads inside the CRM?

**Practitioner sales motion**

2. When a practitioner fills out the inquiry form, what happens next? Does someone call, email, or schedule a demo? Is there a defined pipeline (new → contacted → demo → signed)?
3. Is practitioner outreach primarily inbound (they find us) or outbound (we reach out to them)?

**Consumer communications**

4. Beyond "email blast when new products come," are you planning nurture sequences? (E.g., welcome email, educational content, follow-ups based on quiz tier.)
5. Do you want to segment consumer emails by toxin load tier from day one?

**Compliance & data**

6. **HIPAA / PHI timing.** Today we're collecting marketing leads, not patient data. When does that change? The first time someone books a diagnostic, their data becomes regulated. Do we want a CRM that supports a BAA (Business Associate Agreement) from the start, or a clean handoff from "marketing CRM" to "clinical system" later?
7. Any existing data in Google Sheets we need to migrate in, and does it include anything sensitive?

**Budget & tools**

8. Is there a monthly budget ceiling for CRM tooling? (HubSpot free covers a lot; paid CRMs are typically \$20–\$100 per user per month.)
9. Are you already using any tools we should consider integrating or replacing? (Mailchimp, ConvertKit, Salesforce, Notion, etc.)

**Brand & communications**

10. Who does email come from — a founder's name, a generic `hello@proxima.health`, or a named team member? This affects deliverability setup (domain authentication, sender warming).
11. Any brand or legal guidance on email content, unsubscribe handling, or jurisdictions we need to worry about (e.g., EU / GDPR)?

**Reporting expectations**

12. What does "good reporting" look like to you? A weekly number in an email? A dashboard you can open anytime? A monthly review meeting?

## 2.5 Our recommended next step

Once we have answers to the questions above, we propose:

1. **Stand up HubSpot Free** (or the client's preferred tool) with two pipelines: Consumer Waitlist and Practitioner Sales.
2. **Migrate the existing Google Sheet** into the CRM with proper deduplication and tagging.
3. **Wire form submissions directly to the CRM** so new leads land in the right pipeline automatically — no more manual sheet updates.
4. **Set up domain authentication** for sending (SPF, DKIM, DMARC) so the first email blast lands in inboxes, not spam.
5. **Draft the first email blast template** so we're ready to send on day one.

This gets Proxima off fragile infrastructure, unlocks segmentation and pipelines, and prepares the ground for the HIPAA-compliant clinical system that comes later.

---

*Prepared for Proxima Health — April 6, 2026*
