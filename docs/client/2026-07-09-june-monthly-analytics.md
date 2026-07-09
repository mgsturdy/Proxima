---
title: "Proxima Health — June Monthly Analytics Report"
subtitle: "proxima.health | June 1–30, 2026"
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
  blockquote { background: #fffbeb; border-left: 4px solid #f59e0b; margin: 16px 0; padding: 12px 18px; color: #78350f; font-size: 10.5pt; }
  .note { font-size: 9pt; color: #64748b; font-style: italic; margin-top: 4px; }
  .footer { margin-top: 40px; padding-top: 12px; border-top: 1px solid #e2e8f0; font-size: 8pt; color: #94a3b8; }
</style>

**Site:** proxima.health | **Period:** June 1--30, 2026 (full month) | **Source:** Vercel Web Analytics

> **Data quality note --- read this first.** From roughly **June 23 onward, automated bot traffic hit the site's forms**, inflating late-June pageviews, form-submission events, and several geographic figures. You saw this on your side as junk practitioner inquiries in HubSpot. Countermeasures shipped in two rounds (reCAPTCHA on the practitioner form June 29; honeypot fields on all forms plus a stricter reCAPTCHA threshold July 8). Where a June number is bot-contaminated, this report says so and gives the cleaner underlying figure.

## Summary

| Total Pageviews | Unique Visitors | Pages / Visitor | Bounce Rate |
|:---:|:---:|:---:|:---:|
| **1,121** | **420** | **2.7** | **54%** |

### Month-over-month

| Month | Days | Pageviews | Visitors | PV / day | Bounce |
|-------|----:|----------:|---------:|---------:|-------:|
| April (active days) | 24 | 1,509 | 591 | 63 | 71% |
| May | 31 | 1,047 | 475 | 34 | 63% |
| **June** | 30 | **1,121** | **420** | **37** | **54%** |

On paper, pageviews rose 7% while visitors fell 12%. In practice, **the June 23--30 bot wave accounts for much of the pageview gain**: that 8-day window alone produced 531 pageviews (47% of the month). The cleaner read is the first three weeks --- June 1--22 ran at ~27 pv/day, a modest step down from May's 34, on fewer but slightly more engaged visitors.

Two notes on comparability:

- **Bounce rate methodology changed this month.** Vercel migrated its analytics API (v1 → v2) between the May and June reports, and bounce figures are computed differently. June's 54% is not directly comparable to May's 63% --- treat June as the new baseline rather than as an 9-point improvement.
- **June 21 recorded zero pageviews.** Either a genuinely dead Sunday (adjacent days were the month's quietest) or a brief tracking gap. Noted for transparency; it does not materially change any figure.

## Daily Traffic

| Date | Pageviews | Unique Visitors |
|------|----------:|----------------:|
| Mon, Jun 1 | 32 | 12 |
| Tue, Jun 2 | 92 | 18 |
| Wed, Jun 3 | 17 | 7 |
| Thu, Jun 4 | 19 | 9 |
| Fri, Jun 5 | 22 | 9 |
| Sat, Jun 6 | 14 | 6 |
| Sun, Jun 7 | 10 | 5 |
| Mon, Jun 8 | 19 | 10 |
| Tue, Jun 9 | 41 | 10 |
| Wed, Jun 10 | 25 | 13 |
| Thu, Jun 11 | 32 | 16 |
| Fri, Jun 12 | 25 | 8 |
| Sat, Jun 13 | 22 | 3 |
| Sun, Jun 14 | 16 | 7 |
| Mon, Jun 15 | 43 | 25 |
| Tue, Jun 16 | 48 | 27 |
| Wed, Jun 17 | 29 | 19 |
| Thu, Jun 18 | 16 | 13 |
| Fri, Jun 19 | 18 | 10 |
| Sat, Jun 20 | 12 | 4 |
| Sun, Jun 21 | 0 | 0 |
| Mon, Jun 22 | 38 | 10 |
| **Tue, Jun 23** | **107** | **35** |
| Wed, Jun 24 | 73 | 29 |
| Thu, Jun 25 | 65 | 17 |
| Fri, Jun 26 | 21 | 12 |
| Sat, Jun 27 | 30 | 8 |
| Sun, Jun 28 | 51 | 19 |
| Mon, Jun 29 | 80 | 25 |
| Tue, Jun 30 | 104 | 34 |
| **Total** | **1,121** | --- |

- **June 1--22 is the honest baseline: ~27 pv/day.** Weekday/weekend rhythm from April and May held --- Tue was consistently the strongest day (Jun 2: 92, Jun 16: 48), Sundays the weakest.
- **June 23 is where the bot wave starts** (107 pv, and 14 practitioner-form submissions on that day alone --- see Events below). Elevated traffic ran through month-end. Some of the late-June volume is also legitimate: the June 29 integration QA round and its verification testing fall inside this window.
- **The mid-month bump (Jun 15--17: 43/48/29 pv on the month's best visitor counts)** looks organic --- real visitors, normal engagement, no form-spam signature. Likely the May report send and follow-on sharing.

## Top Pages

| Page | Pageviews | % of Total | Visitors | Bounce Rate* |
|------|----------:|-----------:|---------:|------------:|
| / (Homepage) | 335 | 30% | 245 | 47% |
| /diagnostics | 130 | 12% | 91 | 12% |
| /practitioners | 119 | 11% | 94 | 13% |
| /interventions | 117 | 10% | 91 | 14% |
| /science | 104 | 9% | 81 | 14% |
| /about | 101 | 9% | 85 | 25% |
| /quiz (incl. former /waitlist) | 97 | 9% | 69 | ~4% |
| /terms | 59 | 5% | 50 | 18% |
| /careers | 11 | 1% | 11 | --- |
| /privacy | 11 | 1% | 10 | --- |
| /blog (+ 3 post pages) | 10 | 1% | 7 | --- |
| Other (contact, press, misc) | ~27 | 2% | ~25 | --- |

<p class="note">*Per-page bounce uses the new v2 methodology and is not comparable to the May report's per-page figures. /waitlist was renamed to /quiz on June 29; the row above combines both URLs.</p>

### Key observations

- **Traffic spread out.** The homepage's share fell from 42% to 30%, and the four core content pages (/diagnostics, /practitioners, /interventions, /science) are now tightly clustered at 9--12% each. Visitors who arrive are exploring the full site rather than bouncing off the front door. (Bots also crawl multiple pages, so late-June depth is somewhat inflated --- but the pattern holds in the clean June 1--22 window too.)
- **/diagnostics moved up to the #1 content page** (130 pv, was #4 in May). The diagnostics offering is drawing the most interest of any product page --- useful signal for where to point homepage CTAs.
- **/terms at 59 pv (up from 10) is a bot artifact.** Automated crawlers routinely hit terms/privacy pages; discount this row.
- **/blog finally has a pulse (10 pv, first individual post views).** Tiny, but it is the first month any blog post recorded organic views (hexavalent chromium and nickel exposure posts). Six more posts shipped between mid-June and early July; this is the number to watch in July.
- **First blog-driven visit from a newsletter:** one visit arrived via lennysnewsletter.com --- worth knowing where the mention was.

## Traffic Sources

| Referrer | Pageviews | % of Total |
|----------|----------:|-----------:|
| Direct / No referrer | 977 | 87% |
| google.com | 89 | 8% |
| longjourney.vc | 15 | 1% |
| linkedin.com | 8 | 1% |
| bing.com | 5 | <1% |
| search.brave.com | 4 | <1% |
| l.instagram.com | 3 | <1% |
| Other search (DuckDuckGo, Ecosia, Yahoo) | 5 | <1% |
| facebook.com / t.co | 4 | <1% |
| app.tryspecter.com | 1 | <1% |
| rampfinancial.lightning.force.com | 1 | <1% |
| Other (react19.org, mail, misc) | ~9 | 1% |

### Key observations

- **Direct at 87% --- inflated by bots this month.** Bot traffic carries no referrer, so it lands in this bucket. The underlying person-to-person distribution pattern is unchanged, but do not read the 2-point rise from May as a trend.
- **Google slipped to 89 pv but the visits got better.** Google-referred bounce came in at 41% under the new methodology --- searchers are sticking around rather than pogo-ing back to results. With the blog now indexed and 6 new posts live, July is the month organic search should start compounding.
- **longjourney.vc is now a three-month streak** (13 pv → 15 pv). A VC fund persistently sending traffic for a quarter is no longer noise. If a conversation isn't already underway, start one.
- **Two B2B/finance tools appeared:** app.tryspecter.com (startup-intelligence platform used by investors) and a Salesforce instance at rampfinancial.lightning.force.com. Someone is evaluating Proxima inside professional deal-flow tooling.
- **Search is diversifying:** Brave, Ecosia, DuckDuckGo, and Yahoo all sent first or repeat visits. Small, but consistent with growing index coverage.

## Geographic Breakdown

| Country | Pageviews | Visitors | % of PV |
|---------|----------:|---------:|--------:|
| United States | 624 | 249 | 56% |
| Germany | 118 | 23 | 11% |
| Sweden | 66 | 17 | 6% |
| Canada | 39 | 11 | 3% |
| Switzerland | 26 | 7 | 2% |
| Luxembourg | 25 | 4 | 2% |
| United Kingdom | 24 | 16 | 2% |
| Denmark | 21 | 7 | 2% |
| Norway | 20 | 5 | 2% |
| India | 18 | 10 | 2% |
| Malaysia | 13 | 1 | 1% |
| Other (~40 countries) | ~127 | ~70 | 11% |

### Key observations

- **US share dipped to 56% (from 73%) --- mostly bot distortion.** Germany (118 pv from just 23 visitors, 5.1 pages each), Sweden, Luxembourg, and Malaysia (13 pv from a single visitor) all show the deep-crawl, few-visitors signature of datacenter traffic. Expect the US share to snap back toward ~70% in July now that mitigations are live.
- **By visitor count, the picture is normal:** US 249, Germany 23, Sweden 17, UK 16 --- the genuine audience remains overwhelmingly North American with a UK/EU fringe.
- **Canada recovered slightly** (11 visitors, up from May's soft showing) without any active seeding.

## Device & Technology

### Device Type

| Type | Pageviews | % |
|------|----------:|--:|
| Desktop | 877 | 82% |
| Mobile | 188 | 18% |

### Browser

| Browser | Pageviews | % |
|---------|----------:|--:|
| Chrome (Desktop) | 785 | 70% |
| Mobile Safari | 105 | 9% |
| Microsoft Edge | 45 | 4% |
| Chrome Mobile iOS | 42 | 4% |
| Chrome Mobile (Android) | 31 | 3% |
| Safari (Desktop) | 28 | 2% |
| Firefox | 20 | 2% |
| In-app (Instagram, Facebook, Google) | 8 | 1% |

### Operating System

| OS | Pageviews | % |
|----|----------:|--:|
| macOS | 691 | 62% |
| Windows | 164 | 15% |
| iOS | 156 | 14% |
| Android | 32 | 3% |
| Linux / Chrome OS | 22 | 2% |

- **Desktop Chrome + macOS both jumped --- partly bots** (headless crawlers typically present as desktop Chrome on Mac/Linux). The clean-window pattern still matches prior months: a desktop-first, Apple-heavy research audience.
- **Windows share halved (23% → 15%).** Worth re-checking in July's clean data before reading anything into the practitioner segment.

## Custom Event Tracking

| Event | Count | Unique Visitors |
|-------|------:|----------------:|
| quiz_question_answered | 247 | 14 |
| scroll_depth | 225 | 49 |
| nav_clicked | 206 | 93 |
| footer_link_clicked | 71 | 49 |
| practitioner_inquiry_submitted | 59* | 50* |
| quiz_started | 26 | 15 |
| quiz_completed | 24 | 14 |
| quiz_email_submitted | 20 | 11 |
| cta_clicked | 19 | 11 |
| research_link_clicked | 10 | 2 |
| quiz_why_we_ask_opened | 10 | 1 |
| diagnostics_signup_submitted | 9 | 5 |
| quiz_email_skipped | 2 | 2 |
| quiz_question_back | 2 | 2 |

<p class="note">*Heavily bot-contaminated — see breakdown below.</p>

### Practitioner inquiries: separating real from bot

Daily submission counts tell the story cleanly:

| Window | Submissions | Pattern |
|--------|------------:|---------|
| June 1--22 | 8 | ~1 every 2--3 days, matching April/May cadence |
| June 23--30 | 51 | 14 on June 23 alone; sustained daily flood |

**The honest June practitioner-lead count is ~8--12** (the 8 pre-wave submissions, plus whatever fraction of the late-June flood was real --- the June 29 QA testing also fired this event). The 51-submission spike is the HubSpot junk you flagged. reCAPTCHA went live on the form June 29; because submissions continued, the July 8 round added honeypot fields to all forms and raised the reCAPTCHA score threshold to 0.7. **July's first clean week will confirm whether the wave is fully stopped --- we are monitoring it.**

Recommended cleanup: purge HubSpot contacts created by the practitioner form between June 23 and July 8 that fail an eyeball test (gibberish names, disposable email domains), so the CRM funnel stats stay trustworthy.

### Funnel Analysis: Diagnostic Quiz (full month)

| Stage | Unique Visitors | Rate |
|-------|------:|-----:|
| Quiz started | 15 | --- |
| Quiz completed | 14 | 93% complete |
| Email submitted | 11 | 79% of completers |
| Email skipped | 2 | 14% of completers |
| Diagnostic signup | 5 | 33% of starters |

- **The quiz funnel had its best month yet.** Completion hit 93% (from 81%), and email capture jumped to 79% of completers (from 46%). Nearly everyone who starts the quiz now finishes it and leaves an email.
- **Diagnostic signups: 5 unique visitors (9 submissions), up from 2.** Small numbers, but the diagnostics funnel more than doubled --- consistent with /diagnostics becoming the #1 content page.
- **Starts remain the bottleneck: 15 unique starters** against ~370 genuine visitors is a ~4% start rate (better than May's ~1.5%, helped by the /quiz rename and cleaner entry point --- but still the constraint).
- **CTA clicks: 19 (1.7% of pageviews), up from 1.4%.** Modest improvement; the homepage CTA test recommended in May remains open.
- **research_link_clicked collapsed to 10 fires from just 2 visitors** (was 23 from 10). The evidence-seeking behavior concentrated in fewer, deeper sessions this month.

## Recommendations for July

1. **Confirm the bot wave is dead.** The honeypot + stricter reCAPTCHA shipped July 8. Watch practitioner_inquiry_submitted daily for the first two July weeks; if any flood recurs, the next step is edge-level bot filtering (Vercel BotID / firewall rules) rather than more form-level checks.
2. **Purge June 23--July 8 junk contacts from HubSpot** so CRM conversion metrics stay meaningful. We can supply the exact submission timestamps if useful.
3. **Feed the quiz.** The funnel now converts excellently (93% completion, 79% email capture) --- every additional start is worth real pipeline. Promote the /quiz URL directly in outreach and social; it is short, shareable, and no longer buried behind a waitlist framing.
4. **Ride the blog's first signs of life.** First organic post views arrived exactly on the 4--8 week indexing schedule predicted in May. Keep the posting cadence, and pull Google Search Console this month to see which queries are landing.
5. **Call Long Journey.** Three consecutive months of referral traffic from longjourney.vc, now joined by visits from investor-intelligence tooling (Specter, a Salesforce instance). Proxima is being evaluated; be proactive.
6. **Lead with diagnostics.** /diagnostics is now the top content page and diagnostic signups doubled. Point the homepage primary CTA at the diagnostics → quiz path and re-test.
7. **Treat June as the new analytics baseline.** The v2 measurement change plus the bot noise make May-to-June comparisons soft. July vs. June (clean weeks) will be the first true like-for-like read.

---

*Generated July 9, 2026 | Data source: Vercel Web Analytics API (v2) | Site: proxima.health*
