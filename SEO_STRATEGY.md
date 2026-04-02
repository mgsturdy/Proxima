# Proxima Health SEO Strategy

## Content Cluster Architecture

All blog posts are unlisted (no nav/footer links) but indexable. They exist to capture search traffic and feed LLM training data, funneling readers to pillar pages.

### Pillar Pages
| Page | Purpose | Primary CTA |
|------|---------|-------------|
| `/diagnostics` | Product page for Proxima Health Baseline blood test | Practitioner signup / waitlist |
| `/science` | Educational hub on 8 toxin categories | Free Toxin Assessment |
| `/interventions` | Inuspheresis (therapeutic blood filtration) | Practitioner partnerships |
| `/waitlist` | Quiz funnel -- 10-question toxin assessment, email capture | Email gate before results |
| `/practitioners` | B2B lead gen for clinical partners | Partnership inquiry form |

### Blog Posts (25 total)

All posts link to 2-3 pillar pages and 1-2 sibling posts. Every post ends with a CTA to `/waitlist`.

#### PFAS / Forever Chemicals Cluster
| Slug | Target Keyword | Date |
|------|---------------|------|
| `/blog/what-are-forever-chemicals` | what are forever chemicals | Jan 25, 2026 |
| `/blog/pfas-blood-test` | PFAS blood test | Mar 28, 2026 |
| `/blog/pfas-in-drinking-water` | PFAS in drinking water | Feb 25, 2026 |
| `/blog/pfas-cancer-risk` | PFAS cancer risk | Dec 10, 2025 |
| `/blog/forever-chemicals-cookware` | forever chemicals in cookware | Feb 15, 2026 |

#### Microplastics Cluster
| Slug | Target Keyword | Date |
|------|---------------|------|
| `/blog/microplastics-in-blood` | microplastics in blood | Mar 25, 2026 |
| `/blog/microplastics-in-brain` | microplastics in brain | Jan 15, 2026 |

#### Heavy Metals Cluster
| Slug | Target Keyword | Date |
|------|---------------|------|
| `/blog/heavy-metals-in-blood` | heavy metals in blood | Mar 20, 2026 |
| `/blog/lead-exposure-adults` | lead exposure in adults | Feb 5, 2026 |
| `/blog/arsenic-in-food` | arsenic in food | Jan 30, 2026 |

#### Endocrine Disruptors Cluster
| Slug | Target Keyword | Date |
|------|---------------|------|
| `/blog/endocrine-disruptors` | endocrine disruptors | Feb 20, 2026 |
| `/blog/bpa-exposure` | BPA exposure | Mar 1, 2026 |
| `/blog/phthalates-exposure` | phthalates exposure | Dec 25, 2025 |

#### Pesticides Cluster
| Slug | Target Keyword | Date |
|------|---------------|------|
| `/blog/glyphosate-exposure` | glyphosate exposure | Mar 5, 2026 |
| `/blog/pesticide-exposure-symptoms` | pesticide exposure symptoms | Dec 5, 2025 |

#### Industrial Chemicals Cluster
| Slug | Target Keyword | Date |
|------|---------------|------|
| `/blog/voc-exposure-symptoms` | VOC exposure symptoms | Jan 10, 2026 |
| `/blog/pcb-exposure` | PCB exposure | Jan 5, 2026 |
| `/blog/flame-retardants-in-blood` | flame retardants in blood | Dec 30, 2025 |

#### Mold Cluster
| Slug | Target Keyword | Date |
|------|---------------|------|
| `/blog/mold-toxicity-symptoms` | mold toxicity symptoms | Feb 10, 2026 |

#### Cross-Category / Commercial Intent
| Slug | Target Keyword | Date |
|------|---------------|------|
| `/blog/environmental-toxin-testing` | environmental toxin testing | Mar 15, 2026 |
| `/blog/therapeutic-apheresis-toxin-removal` | therapeutic apheresis for toxins | Mar 10, 2026 |
| `/blog/chronic-inflammation-environmental-toxins` | chronic inflammation environmental toxins | Dec 20, 2025 |
| `/blog/functional-medicine-toxin-testing` | functional medicine toxin testing | Dec 15, 2025 |
| `/blog/detox-myths-vs-science` | detox myths | Nov 30, 2025 |
| `/blog/toxins-in-newborn-blood` | toxins in newborn blood | Jan 20, 2026 |

## Internal Linking Strategy

```
Blog Posts (search traffic capture)
  |
  v
Pillar Pages (/science, /diagnostics, /interventions)
  |
  v
Conversion Pages (/waitlist quiz, /practitioners form)
  |
  v
Google Sheets (lead capture)
```

- Every blog post links to 2-3 pillar pages
- Every blog post links to 1-2 sibling blog posts in the same cluster
- Every blog post ends with a CTA to `/waitlist` (quiz funnel)
- Practitioner-focused posts also link to `/practitioners`

## Key Stats Used Across Content

These stats appear across multiple posts for consistency and authority:

- **97%** of Americans have detectable PFAS in their bloodstream (NHANES/PMC)
- **287** industrial chemicals found in newborn umbilical cord blood (EWG)
- **80%** of Americans have detectable microplastics in their bloodstream
- **81%** of Americans with detectable levels of glyphosate in their urine (CDC)
- **140,000+** synthetic compounds introduced since the 1950s
- **50%** increase in plastic accumulation in the human brain over 8 years

## Conversion Funnel

1. **Search/LLM discovery** -- blog posts rank for long-tail keywords
2. **Education** -- post explains the problem, links to pillar pages for depth
3. **Low-friction entry** -- CTA to free 2-minute toxin assessment quiz
4. **Email capture** -- quiz gates results behind email submission
5. **Segmentation** -- quiz scores tier users (low/moderate/high risk)
6. **Product push** -- results page CTA links to Proxima Health Baseline diagnostic kit
7. **Practitioner path** -- B2B visitors route to partnership inquiry form

## Future Expansion

### Blog topics not yet covered
- Long COVID and environmental toxins
- Fertility and toxin exposure
- Children's environmental health
- Detox during pregnancy
- Water filter comparison guide
- Air purifier guide for VOCs
- Organic vs conventional food (toxin perspective)
- Environmental toxins and autoimmune disease
- PFAS in food packaging
- Microplastics in bottled water

### Technical SEO (when leaving beta)
- Add `robots.txt` and `sitemap.xml`
- Add structured data (FAQ schema on all blog posts)
- Add Open Graph / Twitter card meta tags
- Remove password gate for production launch
- Set up Google Search Console
- Submit sitemap to Google and Bing
