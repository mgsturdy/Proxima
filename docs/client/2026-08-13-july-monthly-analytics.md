---
title: "Proxima Health — July Monthly Analytics Report"
subtitle: "proxima.health | July 1–31, 2026"
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
  blockquote { background: #ecfdf5; border-left: 4px solid #10b981; margin: 16px 0; padding: 12px 18px; color: #064e3b; font-size: 10.5pt; }
  .note { font-size: 9pt; color: #64748b; font-style: italic; margin-top: 4px; }
  .footer { margin-top: 40px; padding-top: 12px; border-top: 1px solid #e2e8f0; font-size: 8pt; color: #94a3b8; }
</style>

**Site:** proxima.health | **Period:** July 1--31, 2026 (full month) | **Source:** Vercel Web Analytics

> **The bot wave is over.** June's report closed on one open question: would the July 8 countermeasures (honeypot fields on all forms plus a stricter reCAPTCHA threshold) kill the form-spam flood that started June 23? Answer: yes. Practitioner-form submissions fell from 59 in June to **9 in July --- one every three days or so, exactly the organic cadence from April and May --- with zero flood days.** Some background crawler traffic persisted in the first week of July (visible in the geographic data), but it no longer touches the forms, and it faded as the month went on. July is the cleanest data month since April.

## Summary

| Total Pageviews | Unique Visitors | Pages / Visitor | Bounce Rate |
|:---:|:---:|:---:|:---:|
| **1,224** | **590** | **2.1** | **60%** |

### Month-over-month

| Month | Days | Pageviews | Visitors | PV / day | Bounce |
|-------|----:|----------:|---------:|---------:|-------:|
| April (active days) | 24 | 1,509 | 591 | 63 | 71% |
| May | 31 | 1,047 | 475 | 34 | 63% |
| June | 30 | 1,121 | 420 | 37 | 54% |
| **July** | 31 | **1,224** | **590** | **39** | **60%** |

**Visitors jumped 40% (420 → 590), the best month on record** --- and unlike June's numbers, this growth is real. June's totals were propped up by bot traffic; July's stand on their own. The like-for-like read is even cleaner: comparing July's post-mitigation window (July 9--31, ~37 pv/day) against June's pre-bot window (June 1--22, ~27 pv/day) gives **~35% underlying traffic growth**.

Two comparability notes:

- **Bounce rate (60%) is now genuinely comparable month-to-month** --- June and July were both measured on the v2 methodology. The 6-point rise from June's 54% mostly reflects composition: far more first-time visitors arriving from Google search (who bounce more than repeat visitors), and the removal of bots that crawled many pages per visit and thus suppressed June's bounce figure.
- **Pages/visitor fell 2.7 → 2.1 for the same reason.** Bots inflate depth; real new visitors browse less on a first visit. This is the honest baseline going forward.

## Daily Traffic

| Date | Pageviews | Unique Visitors |
|------|----------:|----------------:|
| Wed, Jul 1 | 117 | 40 |
| Thu, Jul 2 | 70 | 18 |
| Fri, Jul 3 | 9 | 4 |
| Sat, Jul 4 | 16 | 5 |
| Sun, Jul 5 | 16 | 5 |
| Mon, Jul 6 | 18 | 10 |
| Tue, Jul 7 | 34 | 24 |
| **Wed, Jul 8** | **101** | **50** |
| Thu, Jul 9 | 54 | 33 |
| Fri, Jul 10 | 68 | 34 |
| Sat, Jul 11 | 40 | 22 |
| Sun, Jul 12 | 26 | 22 |
| Mon, Jul 13 | 35 | 21 |
| Tue, Jul 14 | 23 | 15 |
| Wed, Jul 15 | 13 | 8 |
| Thu, Jul 16 | 31 | 18 |
| Fri, Jul 17 | 40 | 15 |
| Sat, Jul 18 | 17 | 10 |
| Sun, Jul 19 | 36 | 17 |
| Mon, Jul 20 | 47 | 20 |
| Tue, Jul 21 | 60 | 31 |
| Wed, Jul 22 | 45 | 17 |
| Thu, Jul 23 | 49 | 26 |
| Fri, Jul 24 | 38 | 21 |
| Sat, Jul 25 | 38 | 20 |
| Sun, Jul 26 | 20 | 10 |
| Mon, Jul 27 | 30 | 19 |
| Tue, Jul 28 | 46 | 14 |
| Wed, Jul 29 | 33 | 15 |
| Thu, Jul 30 | 36 | 16 |
| Fri, Jul 31 | 18 | 10 |
| **Total** | **1,224** | --- |

- **July 1--2 is the tail of the June bot wave** (117 and 70 pv on thin visitor counts), and **July 8 (101 pv, 50 visitors) is the mitigation ship day** --- a mix of deployment verification and real traffic. From July 9 onward the pattern is clean.
- **The clean weeks are healthy and consistent:** July 9--31 averaged ~37 pv/day with no dead days (contrast June's zero-pageview Sunday). Tuesdays remain reliably strong (Jul 21: 60 pv on 31 visitors, Jul 28: 46); weekends soft but never silent.
- **Visitor counts per day are noticeably higher than prior months** --- ten days topped 20 unique visitors versus four such days in June's clean window.

## Top Pages

| Page | Pageviews | % of Total | Visitors | Bounce Rate* |
|------|----------:|-----------:|---------:|------------:|
| / (Homepage) | 385 | 31% | 326 | 56% |
| /diagnostics | 238 | 19% | 183 | 34% |
| /interventions | 148 | 12% | 114 | 25% |
| /about | 120 | 10% | 101 | 34% |
| /practitioners | 105 | 9% | 93 | 15% |
| /science | 97 | 8% | 88 | 10% |
| /quiz | 66 | 5% | 61 | 15% |
| /terms | 37 | 3% | 32 | --- |
| /privacy | 13 | 1% | 13 | --- |
| /physicianagreement | 10 | 1% | 6 | --- |
| Other (portal, PDF booklet, misc) | ~5 | <1% | --- | --- |

<p class="note">*Per-page bounce on the v2 methodology --- now directly comparable to the June report.</p>

### Key observations

- **/diagnostics pulled away decisively: 238 pv (19% of the site), up 83% from June's 130.** It now draws more traffic than the next two content pages combined and holds a solid 34% bounce. The June recommendation stands stronger than ever: this is the page to point the homepage CTA at.
- **The engagement pages are excellent.** /science (10% bounce), /practitioners (15%), and /quiz (15%) hold visitors almost without fail once reached. The site does not have a content-quality problem; it has a routing problem --- getting more of the homepage's 326 visitors one click deeper.
- **/terms fell 59 → 37 pv** --- the bot-crawl artifact receding on schedule.
- **/physicianagreement appeared with 10 views from 6 visitors** --- practitioners are moving through the onboarding paperwork. Paired with the JotForm referrals below, there is a small but real practitioner-onboarding pipeline visible in the data for the first time.
- **The blog recorded zero pageviews in July --- expected, since the blog remains unlisted** (not linked from site navigation). June's handful of views were one-off direct visits. The post library keeps growing in the background; whenever the blog is opened up and linked, it starts from a standing library of content rather than from scratch.

## Traffic Sources

| Referrer | Pageviews | % of Total |
|----------|----------:|-----------:|
| Direct / No referrer | 991 | 81% |
| google.com (+ google.ca) | 167 | 14% |
| longjourney.vc | 24 | 2% |
| JotForm (form.jotform.com, jotform.com) | 12 | 1% |
| l.instagram.com | 7 | 1% |
| bing.com | 6 | <1% |
| Salesforce instances (Stripe, Ramp, Rillet) | 5 | <1% |
| duckduckgo.com | 3 | <1% |
| linkedin.com | 2 | <1% |
| m.facebook.com | 2 | <1% |
| Other (Yahoo, t.co, misc) | ~5 | <1% |

### Key observations

- **Google referrals nearly doubled: 89 → 167 pv from 142 unique visitors.** This is the month organic search started compounding, right on the schedule projected in May. Google-referred traffic is now 14% of the site and the single largest driver of July's visitor growth. Notably, it is landing on the core product pages rather than blog posts --- more reason to sort out the blog indexing question above.
- **longjourney.vc is now a four-month streak and accelerating** (13 → 15 → 24 pv, 23 unique visitors this month). That is not idle curiosity; that is a fund socializing a deal internally. If the conversation recommended in June has not happened yet, it should.
- **Three separate corporate Salesforce instances sent traffic: Stripe, Ramp, and Rillet.** All three are fintech/finance-operations companies, and Salesforce referrals mean someone opened proxima.health from inside a CRM record. Combined with June's Specter (investor-intelligence) visit, Proxima is circulating in professional deal-flow and partnership tooling.
- **JotForm referrals (12 pv) are practitioners clicking back from intake forms** --- the onboarding loop is generating its own traffic.
- **Direct fell to 81% (from 87%)** as bot traffic receded and search grew --- the healthy direction.

## Geographic Breakdown

| Country | Pageviews | Visitors | % of PV |
|---------|----------:|---------:|--------:|
| United States | 838 | 400 | 68% |
| Germany | 87 | 25 | 7% |
| United Kingdom | 58 | 33 | 5% |
| Sweden | 36 | 15 | 3% |
| Canada | 35 | 18 | 3% |
| Austria | 24 | 4 | 2% |
| India | 18 | 11 | 1% |
| Netherlands | 16 | 7 | 1% |
| Switzerland | 16 | 8 | 1% |
| China | 14 | 14 | 1% |
| France | 12 | 7 | 1% |
| Other (~35 countries) | ~70 | ~48 | 6% |

### Key observations

- **US share snapped back to 68% (from 56%), as predicted** once bot mitigations landed. By visitor count the picture is unambiguous: 400 US visitors out of 590 total, with the UK (33) now the clear #2 human audience.
- **Residual crawler signatures remain in Germany (87 pv from 25 visitors) and Austria (24 pv from 4)** --- the deep-crawl, few-visitors pattern. These crawlers browse but no longer touch forms; most of this activity sits in the July 1--8 window.
- **UK visitors doubled (16 → 33)** --- the strongest genuine international growth, plausibly search-driven.
- **China appeared with 14 visitors at exactly one page each** --- an indexing-crawler signature, not an audience.

## Device & Technology

### Device Type

| Type | Pageviews | % |
|------|----------:|--:|
| Desktop | 921 | 75% |
| Mobile | 302 | 25% |
| Tablet | 1 | <1% |

### Browser

| Browser | Pageviews | % |
|---------|----------:|--:|
| Chrome (Desktop) | 759 | 62% |
| Mobile Safari | 198 | 16% |
| Safari (Desktop) | 95 | 8% |
| Chrome Mobile iOS | 58 | 5% |
| Microsoft Edge | 45 | 4% |
| Chrome Mobile (Android) | 26 | 2% |
| Firefox | 21 | 2% |
| In-app (Instagram, Facebook, WeChat, Google) | 16 | 1% |
| Other | 6 | <1% |

### Operating System

| OS | Pageviews | % |
|----|----------:|--:|
| macOS | 654 | 53% |
| iOS | 272 | 22% |
| Windows | 209 | 17% |
| GNU/Linux | 55 | 4% |
| Android | 31 | 3% |
| Chrome OS | 3 | <1% |

- **Mobile share jumped 18% → 25% --- the real device mix emerging** as desktop-presenting bots receded. iOS pageviews rose 156 → 272; the human audience is more mobile than the bot-era numbers suggested.
- **Windows recovered to 17%** after June's suspect dip, easing the concern flagged last month about the practitioner segment.
- **GNU/Linux at 55 pv from 54 distinct one-page visitors** is the residual-crawler bucket in miniature --- discount it.

## Custom Event Tracking

| Event | Count | Unique Visitors |
|-------|------:|----------------:|
| scroll_depth | 346 | 75 |
| nav_clicked | 269 | 119 |
| footer_link_clicked | 101 | 70 |
| quiz_question_answered | 74 | 8 |
| cta_clicked | 17 | 17 |
| research_link_clicked | 13 | 8 |
| practitioner_inquiry_submitted | 9 | 9 |
| quiz_started | 9 | 9 |
| quiz_completed | 7 | 7 |
| diagnostics_signup_submitted | 5 | 5 |
| quiz_email_submitted | 5 | 5 |
| quiz_email_skipped | 2 | 2 |
| quiz_question_back | 2 | 2 |

### Practitioner inquiries: the wave is confirmed dead

| Window | Submissions | Pattern |
|--------|------------:|---------|
| June 1--22 (pre-wave) | 8 | ~1 every 2--3 days |
| June 23--30 (bot wave) | 51 | Daily flood, 14 on the worst day |
| **July 1--31 (post-mitigation)** | **9** | **~1 every 3 days --- organic cadence restored** |

Nine submissions spread across nine separate days (Jul 1, 7, 11, 17, 18, 21, 22, 27, 29), never more than one per day. That is the April/May organic rhythm exactly. The honeypot-plus-reCAPTCHA combination shipped July 8 held all month --- notably, even the July 1--7 window before the second round shipped shows no flood, indicating the June 29 reCAPTCHA had already blunted the attack and the July 8 round finished it. **No further bot countermeasures are needed at this time.** The nine July inquiries can be treated as genuine practitioner leads.

### Funnel Analysis: Diagnostic Quiz (full month)

| Stage | Unique Visitors | Rate |
|-------|------:|-----:|
| Quiz started | 9 | --- |
| Quiz completed | 7 | 78% complete |
| Email submitted | 5 | 71% of completers |
| Email skipped | 2 | 29% of completers |
| Diagnostic signup | 5 | 56% of starters |

- **The funnel still converts well but is being starved.** Completion (78%) and email capture (71%) remain strong, and diagnostic signups held at 5 --- but quiz starts fell 15 → 9 and /quiz pageviews fell 97 → 66. June's start numbers were flattered by the /quiz rename traffic; July shows the steady state: **the quiz gets almost no feed despite converting over half its starters into diagnostic signups.**
- **This is the sharpest mismatch in the data.** /diagnostics drew 183 visitors; the quiz started 9. The diagnostics-page-to-quiz handoff is where July's growth failed to cash into pipeline.
- **CTA clicks fell to 17 (1.4% of pageviews).** The homepage CTA experiment recommended in May and June remains unexecuted and remains the top on-site lever.
- **research_link_clicked steadied at 13 fires from 8 visitors** --- the evidence-checking behavior spread back across more people after June's concentration.

## Recommendations for August

1. **Fix the quiz feed.** The month's clearest finding: record visitors, a strongly-converting quiz, and only 9 starts. Put a prominent quiz CTA on /diagnostics (183 visitors, zero-friction handoff) and point the homepage primary CTA at the diagnostics → quiz path. This experiment has now been recommended three months running; with search traffic compounding, each month of delay costs more than the last.
2. **Decide when to list the blog.** It stays intentionally unlisted for now, so zero views is by design --- but Google referral growth proves the domain can rank, and the post library is sitting idle. When the timing is right, adding it to the sitemap and site navigation converts a sunk cost into a compounding search asset.
3. **Call Long Journey.** Four consecutive months, 23 unique visitors in July alone. This is the most persistent inbound signal Proxima has.
4. **Track the fintech cluster.** Stripe, Ramp, and Rillet Salesforce instances all opened the site from CRM records in one month. Worth a LinkedIn check on second-degree connections into those teams --- something is circulating.
5. **Close out the HubSpot purge** of June 23--July 8 junk contacts if not already done; July's nine clean inquiries make the before/after cut unambiguous. Exact submission timestamps available on request.
6. **Stand down on further bot work.** Mitigations held for a full month with zero flood days. Edge-level filtering (Vercel BotID) stays in the back pocket only if a new wave appears; the residual read-only crawling is harmless and fading.
7. **July is the first true baseline month** --- v2 methodology, clean forms, organic traffic. August vs. July will be the first fully like-for-like comparison since the analytics migration.

---

*Generated August 13, 2026 | Data source: Vercel Web Analytics API (v2) | Site: proxima.health*
