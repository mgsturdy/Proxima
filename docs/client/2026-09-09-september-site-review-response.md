---
title: "Proxima Health — September Site Review Response"
subtitle: "Reply to the September 2026 monthly site review requests"
---

**Date:** September 9, 2026 | **Re:** Monthly site review requests + August report

## Status of requests

1. **Heading change (regulatory).** Interventions page heading is now "Papers on Inuspheresis". Shipped first as its own deploy and confirmed live on production before any other change.
2. **Paper link fixes (12).** All 12 URLs replaced, link text unchanged. Every changed link plus the new addition (13 total) was checked title-to-title against the destination page. All 13 match. Paper 12 (Peripheral Neuropathy) now points at Thieme rather than PubMed, so its journal tag was updated to match.
3. **New paper.** "Therapeutic apheresis: An effective strategy for a combined targeting of circulating lipoproteins, inflammatory markers, PFAS, and microplastics..." added to the Inuspheresis list, tagged Genomic Press - Brain Health. List is now 19 papers.
4. **Quote changes.** Carlos Schuster's quote moved to the Interventions page (between the intro and Practitioner Partnerships). Dr. Bornstein's quote now holds the top spot on Practitioners.
5. **August report.** Delivered: `2026-09-09-august-monthly-analytics.pdf`.

## Title-to-title verification

| # | Link text (abbreviated) | Destination | Result |
|---|---|---|---|
| 1 | Chronic post-COVID-19 syndrome and CFS: extracorporeal apheresis? | Molecular Psychiatry | Match |
| 2 | Extracorporeal apheresis therapy for Alzheimer disease | Molecular Psychiatry | Match |
| 3 | Plasma Separation Efficiency in DFPP | Therapeutic Apheresis and Dialysis (PubMed) | Match |
| 4 | Modulating Systemic Immune-Inflammatory Indices via DFPP | Hormone and Metabolic Research (PubMed) | Match |
| 5 | Post COVID and Apheresis - Where are we Standing? | Hormone and Metabolic Research (PubMed) | Match |
| 6 | DFPP for Environmental Toxin Removal: Hyperlipoproteinemia(a) | Journal of Clinical Apheresis (Wiley) | Match (via DOI) |
| 7 | Particles in the Eluate from DFPP (FE-SEM/EDX) | Compounds (MDPI) | Match |
| 8 | Selective Removal of Plasma Proteins by DFPP in Canine Blood | Veterinary Sciences (PMC) | Match |
| 9 | A multimodal approach for treating post-acute infectious syndrome | Brain Medicine 1(1) | Match |
| 10 | Therapeutic apheresis: A promising method to remove microplastics? | Brain Medicine 1(3) | Match |
| 11 | Changes in Water Properties in Human Tissue after DFPP | Molecules (MDPI) | Match |
| 12 | Metabolic and Non-Metabolic Peripheral Neuropathy: Therapeutic Apheresis? | Hormone and Metabolic Research (Thieme) | Match (via DOI) |
| 13 | Therapeutic apheresis: combined targeting of lipoproteins, PFAS, microplastics (new) | Brain Health, early online | Match |

Wiley and Thieme block automated page loads, so items 6 and 12 were confirmed through Crossref and PubMed by DOI rather than the rendered page.

## Answer to the upkeep question

The papers list is hand-entered in the page source. Proposed follow-up: extract papers (and quotes) to a single content file with an automated link check, so future audits are a one-file diff. If the goal is editing without a deploy, that is a spreadsheet or CMS source and would be scoped separately.

## Durability note

Items 9 and 13 use Genomic Press "ahead of print" URLs. Both work today (item 9 now redirects to its assigned issue). The DOI links would outlast them; swap on request.

## Reply as sent

> Hey,
>
> All done and live:
>
> 1) Heading is now "Papers on Inuspheresis" on the Interventions page. That went out first and is confirmed on production.
>
> 2) All 12 paper links updated, link text unchanged. I clicked through every one plus the new addition and checked the destination title against the link text. All 13 match. One small extra: paper 12 (Peripheral Neuropathy) now points at Thieme rather than PubMed, so I updated the little journal tag next to it to say Thieme.
>
> 3) The new Brain Health paper is added to the Inuspheresis list.
>
> 4) Carlos's quote is now on the Interventions page and Dr. Bornstein's quote has the top spot on Practitioners.
>
> August report is attached.
>
> On your question: the papers list is hand-entered in the page source today. Moving it to a single content file with an automated link check is a small follow-up, and would make future audits a one-file diff. If you'd rather edit it yourselves without a deploy, that's a spreadsheet or CMS source and I'd scope that separately. Happy to do either.
>
> One durability note: two of the Genomic Press links (the multimodal paper and the new Brain Health one) are on "ahead of print" URLs. They work, but the DOI links will outlast them once issues are assigned. Say the word and I'll swap them.

---

*Site changes: commits e8b7f2a, cdb53fa. Reports: commit 345be1c.*
