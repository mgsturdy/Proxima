# Proxima Health — Site Overview

## Brand

Proxima Health provides diagnostic precision to identify environmental toxins in blood and proven interventions (INUSpheresis) to remove them. The brand positions itself at the intersection of clinical science and modern health optimization.

**Tagline:** Better blood. Better life.

## Pages

### Home (`/`)
Full-screen hero with "Better blood. Better life." headline. Stats section (97% PFAS, 287 chemicals in cord blood, etc.), "The Invisible Crisis" editorial section, Three Steps overview (Test → Understand → Remove), and toxin exposure CTA.

### The Science (`/science`)
Tabbed wiki covering core topics: Microplastics, PFAS, Heavy Metals, and Environmental Toxins. Each tab has structured sections with clinical data, key statistics, and source citations.

### Diagnostics (`/diagnostics`)
Details on the Environmental Toxin Panel — what it tests for, how it works, what patients receive. Primary conversion page for the diagnostic product.

### Interventions (`/interventions`)
Explains INUSpheresis therapeutic blood filtration. Covers how the procedure works, what it removes, and clinical context.

### Practitioners (`/practitioners`)
Partnership page for healthcare practitioners. Covers the referral model, integration with existing practices, and the practitioner onboarding process.

### About (`/about`)
Founding story, team bios (Alex Ford, Matthew Sturdy), mission statement. Focuses on why Proxima exists and the personal motivation behind it.

### Toxin Load Quiz (`/waitlist`)
Interactive 10-question assessment that estimates environmental toxin exposure. Captures email before revealing results. Scores users into Low (0-25), Moderate (26-60), or High (61+) risk tiers with dynamic content based on their highest exposure category. Primary lead generation and email capture tool.

## Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `proxima-black` | #0A0A0A | Primary text, inverse backgrounds |
| `proxima-cream` | #FFFBEE | Primary background |
| `proxima-red` | #FE091B | Accents, CTAs |
| `proxima-orange` | #FF9D00 | Gradient midpoint |
| `proxima-maroon` | #BA000E | Gradient start, footer |

### Typography
| Font | Class | Usage |
|------|-------|-------|
| Archivo | `font-sans` | Body text (site default) |
| DM Mono | `font-mono` | Labels, navigation, technical text |
| NB International | `font-nb-international` | Branded headlines, pill labels |
| Robit | `font-robit` | Large stat numbers |
| Darker Grotesque | `font-display` | Page headings (h1-h6) |

### Component Patterns
- **Black pill headlines:** `inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 font-nb-international` — stacked per line
- **+ corner markers:** Decorative positioning elements framing sections
- **Gradient bar:** `proxima-gradient` — maroon → red → orange → cream
- **Section container:** `section-container` (max-w-7xl) or `section-narrow` (max-w-4xl)
- **Buttons:** `btn-gradient` (primary CTA), `btn-outline` (secondary), `btn-primary` (solid black)

## Navigation

**Navbar:** The Science, Diagnostics, Interventions, Practitioners, About

**Footer:** Same as navbar plus "Toxin Assessment" link to `/waitlist`

## CTA Funnel

Most pages drive users toward two actions:
1. **Free Toxin Assessment** → `/waitlist` (quiz for email capture)
2. **Reserve your kit** → `/diagnostics` (product page)

The quiz results page links to `/diagnostics`, completing the funnel: awareness → quiz → email capture → diagnostics conversion.
