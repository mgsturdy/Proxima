---
title: "Proxima Health — Scope & Pricing: Items 6–9"
subtitle: "Design refinement round | Prepared May 26, 2026"
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
  .footer { margin-top: 40px; padding-top: 12px; border-top: 1px solid #e2e8f0; font-size: 8pt; color: #94a3b8; }
</style>

*This document records the request and the scoping/pricing assessment that produced the quoted figure for items 6–9. The assessment was made against the actual production codebase (homepage, /diagnostics, /interventions, /science).*

## The Request

> considering the original scope of this project was 10,000 USD, how much should I charge for the following? I already did 1-5, here is 6 through 9.
>
> **6.** Reformat imagery emphasis on the site. Reduce the visual weight of existing images — smaller, less prominent placement — and lean more into text/visual information. Most relevant on the homepage, /diagnostics, and /interventions. Please scope what this looks like in practice.
>
> **7.** Homepage copy/hierarchy revision. Sequence with #6. Goal is to make the value prop language more prominent on the web alongside reducing image prominence — same underlying change.
>
> **8.** "Invisible Crisis" homepage section trim. Fold into #6 / #7. Keep the stats; trim the section.
>
> **9.** /science graph refinement and adjustment (if you're able to make changes to this without Lotipa – let us know).

## The Assessment

### What 6–9 actually involve

These four are really **one coordinated pass over 3 pages** (homepage, /diagnostics, /interventions) plus a small dependency-gated item on /science. They share files and have to be sequenced, which is why you'd bundle them, not bill them as four separate jobs.

**#6 — Imagery reformat (the anchor item)**

Each of the three pages currently leads with a full-bleed `next/image` hero plus secondary image columns (homepage `healthcare-professional.png` in a 4:3 grid, diagnostics `diagnostic.png`, interventions hero + Inuspheresis logo). Reducing visual weight in practice means:

- Shrinking/cropping heroes (full-viewport → contained or reduced-height band)
- Converting the 50/50 image+text grids to text-forward layouts (smaller inset image, wider copy column)
- Re-tuning the responsive breakpoints + Framer Motion reveals so the new ratios don't break on mobile
- 1–2 revision rounds with you/the client

Real work: ~6–9 hrs. This is iterative design, not a find-and-replace.

**#7 — Homepage copy/hierarchy**

Same files as #6, done in the same pass. Promote the value-prop typography, reorder/resize the stacked black-on-cream headline blocks, tighten body copy. ~3–4 hrs on top of #6 (cheap because the files are already open).

**#8 — Invisible Crisis trim**

Genuinely small. Keep the stats, cut the image column and shorten the section. ~1–2 hrs, fully absorbed into #6/#7.

**#9 — /science graph — flag this one**

The "graph" is `grafico-02.mp4`, an animated video asset, almost certainly Lotipa's deliverable. **I can resize it, recaption it, change its surrounding layout/emphasis (~1–2 hrs), but I cannot edit the animation itself without the source file.** If they want the data/visual *inside* the graph changed, that goes back to Lotipa or needs a rebuild — that's a separate line item, not part of this.

### Pricing

Total focused effort for 6–8 plus the layout-only version of 9: roughly **12–17 hours**.

Against a $10K original build, a coherent design-refinement round like this lands at **~20–25% of original scope**.

**Recommended: $2,200 fixed fee** for 6, 7, 8, and the layout/sizing portion of 9, including up to two revision rounds.

Caveats to put in writing:

- **#9 graph internals are excluded** — if Lotipa needs to re-render the animation, that's quoted separately once you know their cost.
- Fixed fee assumes copy is supplied or lightly edited, not written from scratch. If they want you to author new value-prop copy, add ~$300.

If you'd rather bill hourly to stay flexible on revision cycles: **$2,000–$2,800 at $150/hr**, same exclusions.

### Summary table

| Item | Scope | Est. hours |
|:---|:---|:---:|
| #6 Imagery reformat (homepage, /diagnostics, /interventions) | Reduce hero/image weight, shift to text-forward layouts, re-tune responsive + motion | 6–9 |
| #7 Homepage copy/hierarchy | Promote value-prop typography, reorder headline blocks, tighten copy | 3–4 |
| #8 Invisible Crisis trim | Keep stats, cut image column, shorten section | 1–2 |
| #9 /science graph (layout only) | Resize/recaption/reposition `grafico-02.mp4`; animation internals excluded | 1–2 |
| **Total** | | **12–17** |

| Quote | Terms |
|:---|:---|
| **$2,200 fixed** | Items 6–8 + layout portion of #9, up to 2 revision rounds |
| $2,000–$2,800 hourly | At $150/hr, same exclusions |
| +$300 | If authoring new value-prop copy from scratch |
| Excluded | Re-rendering the /science graph animation (back to Lotipa, quoted separately) |

<div class="footer">
Prepared for Proxima Health · May 26, 2026 · Scope assessed against production codebase. Figures are estimates pending final agreement on copy ownership and the /science graph dependency.
</div>
