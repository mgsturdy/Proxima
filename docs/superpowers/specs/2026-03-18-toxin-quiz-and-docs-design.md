# Toxin Load Quiz Engine & Site Documentation — Design Spec

**Date:** 2026-03-18
**Status:** Approved
**Approach:** Single-file page component (Approach A)

---

## Overview

Replace the existing `/waitlist` page with a full 10-question Toxin Load Quiz. The quiz segments users by environmental exposure risk, captures email, and displays dynamic results based on score tiers. Additionally, create two documentation files: a developer README and a site overview doc.

---

## 1. Quiz Data Structure

### Questions Array

A `QUIZ_QUESTIONS` constant array of 10 objects:

```ts
{
  id: number,
  category: string,       // exposure category for dynamic result text
  question: string,
  whyWeAsk: string,
  answers: [
    { text: string, points: number }  // 0, 5, or 15
  ]
}
```

All 10 questions from the technical brief, Section A: Dietary & Environmental Exposure. Each question has 2-4 answer options scored at 0, 5, or 15 points.

### Exposure Categories

Each question maps to one of these categories (used for dynamic result text insertion):

| Question | Category |
|----------|----------|
| Q1 (fish consumption) | Heavy Metals |
| Q2 (drinking water) | PFAS |
| Q3 (food storage) | Microplastics |
| Q4 (cookware) | PFAS |
| Q5 (air quality) | Heavy Metals |
| Q6 (scented products) | VOCs |
| Q7 (food packaging) | Microplastics |
| Q8 (cleaning/dust) | Pesticides |
| Q9 (occupational) | Industrial Chemicals |
| Q10 (pesticides) | Pesticides |

`highestCategory` is derived by summing points per category across all answered questions and selecting the category with the highest total. On ties, use the first category encountered.

### Scoring

- Weighted point system using raw point totals
- 10 questions x max 15 points = 150 possible points
- Result tier thresholds use raw scores (not percentages) — intentionally conservative to flag risk early:
  - Low: 0-25 (minimal exposure indicators)
  - Moderate: 26-60 (some exposure pathways present)
  - High: 61+ (multiple significant exposure pathways)
- Track `totalScore` and `highestCategory` for dynamic result text

### Results Tiers

Three result scenarios stored in a `RESULTS` config:

| Tier | Score Range | Headline | CTA |
|------|------------|----------|-----|
| Low | 0-25 | "Your Environmental Defense is Strong." | "Reserve your kit" → `/diagnostics` |
| Moderate | 26-60 | "Moderate Exposure Detected." | "Reserve your kit" → `/diagnostics` |
| High | 61+ | "High Potential for Toxin Accumulation." | "Priority Access: Reserve your kit" → `/diagnostics` |

- Moderate and High tiers dynamically insert the highest-scoring exposure category into the body text
- Body text matches the brief exactly

### Disclaimer

Constant string displayed in small footer text on intro screen:

> "This assessment is for educational purposes only based on statistical risk factors. It is not a medical diagnosis. The 'Toxin Load Score' is an evaluation of potential environmental exposure, not a measurement of current blood levels."

---

## 2. State Machine & Flow

Five screens managed by a `step` state variable:

### Screen 1: `intro`
- Brief intro text setting context
- "Start Assessment" CTA button (`btn-gradient`)
- Disclaimer in small footer text

### Screen 2: `questions`
- One question displayed at a time (Typeform-style)
- Progress bar at top: thin gradient bar + "3 / 10" mono text
- Question text prominent
- "Why we ask" expandable/collapsible below question (toggled by link, `text-xs font-mono text-proxima-black/60`)
- Answer options as full-width buttons (min 56px height for mobile touch targets)
- On answer selection: brief highlight (500ms delay), then auto-advance to next question. During the 500ms, input is blocked (ignore additional taps) to prevent race conditions
- Back button to revisit previous questions
- Answers are revisitable — selecting a new answer on a previous question updates the score
- "Retake Assessment" button available on results screen to reset all state and return to intro

### Screen 3: `email`
- Headline: "Where should we send your Toxin Analysis?"
- Email input field (`type="email"`) + submit button
- Email is required — no skip option
- Validation: HTML5 `type="email"` validation + basic regex check. Error message: "Please enter a valid email address" shown below input in `text-proxima-red text-xs font-mono`
- Submit button disabled when input is empty (reduced opacity)
- On submit: immediately advance to calculating screen (no async wait — backend is a placeholder)
- Placeholder `onSubmit` with `// TODO: send to CRM, include score and segment`

### Screen 4: `calculating`
- Loading animation (1-2 seconds)
- Pulsing dots or gradient shimmer (CSS/framer-motion, not external assets)
- Auto-advances to results

### Screen 5: `results`
- Dynamic headline, body text, and CTA based on score tier
- Highest-scoring category inserted into body text for moderate/high tiers
- CTA links to `/diagnostics`
- `// TODO: tag high_risk segment in CRM for score 61+`

### State Variables

```ts
step: "intro" | "questions" | "email" | "calculating" | "results"
currentQuestion: number        // 0-9 index
answers: (number | null)[]     // selected answer index per question
totalScore: number
email: string
highestCategory: string        // derived from answers
```

### Transitions

All screen transitions use `AnimatePresence`:
- Questions: slide right-to-left on advance, left-to-right on back
- Other transitions: fade up
- Calculating → results: auto-advance after 2s timeout (starts on mount, matching existing loading patterns)

---

## 3. Visual Design & Mobile

### Font Usage

Use the existing theme-variable CSS classes for consistency with the rest of the site:

| Purpose | Class | Resolves To |
|---------|-------|-------------|
| Body/paragraph text | `font-sans` (inherited) | Archivo (site default) |
| Question text | `font-nb-international` | NB International (deliberate emphasis) |
| Labels, progress, "why we ask" | `font-mono` | DM Mono |
| Headline pills | `font-nb-international` | NB International |
| Stat numbers (score display) | `font-robit` | Robit |

Note: General paragraph text (descriptions, result body copy) inherits the site-wide `font-sans` (Archivo). `font-nb-international` is used only for question text and headline pills, matching how the rest of the site uses it for branded emphasis elements.

### Styling (using existing theme classes)

- **Background:** `bg-primary` (resolves to proxima-cream)
- **Text:** `text-primary`, `text-secondary` (for muted), `text-tertiary` (for subtle)
- **Borders:** `border-border-primary`
- **Headings:** Black pill style — `inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 font-nb-international` (matches existing pattern on home, science pages)
- **Answer buttons:** Full-width, `border border-border-primary`, hover/selected state `bg-proxima-black text-inverse`. Min height 56px
- **Progress bar:** Thin `proxima-gradient` bar showing completion percentage
- **Primary CTA:** `btn-gradient`
- **Corner markers:** `+` signs used sparingly for section framing
- **"Why we ask" toggle:** `text-xs font-mono text-tertiary`

### Mobile-First (80% mobile traffic)

- Single column layout throughout — no grid breakpoints needed
- Full-width answer buttons, 56px+ min height for touch targets
- Compact progress indicator (gradient bar + "3 / 10" text)
- Comfortable padding: `px-6 py-4`
- Question text: `text-xl` on mobile, scaling up with `md:text-2xl lg:text-3xl`

### Animations (framer-motion)

- Questions slide in from right, exit to left (advance direction)
- Back navigation reverses the slide direction
- Results screen fades up from below
- Calculating screen: pulsing dots or subtle gradient shimmer
- All using existing framer-motion dependency, no new packages

---

## 4. File Changes

### Modified Files

| File | Change |
|------|--------|
| `src/app/waitlist/page.tsx` | Full replacement with Toxin Load Quiz |

### New Files

| File | Purpose |
|------|---------|
| `README.md` | Developer documentation |
| `SITE_OVERVIEW.md` | Site content & structure documentation |

### No Changes Needed

- `src/components/Navbar.tsx` — No quiz link in navbar (navigation to quiz is via Footer and on-page CTAs throughout the site)
- `src/components/Footer.tsx` — Already has "Toxin Assessment" link to `/waitlist`
- `tailwind.config.ts` — All needed design tokens already exist
- `src/app/globals.css` — All needed utility classes already exist

---

## 5. Documentation

### README.md

Developer-facing documentation:
- Project overview: Next.js 15 + React 18 + Tailwind CSS
- Prerequisites (Node.js version)
- Setup: `npm install` → `npm run dev` → `npm run build`
- Project structure: `src/app/`, `src/components/`, `src/lib/`, `public/`
- Key dependencies: framer-motion, lucide-react, tailwind-merge, clsx
- Config notes: password gate (`PasswordGate.tsx`, password in code)
- Deployment notes

### SITE_OVERVIEW.md

Content & structure documentation:
- Brand overview: Proxima Health mission and positioning
- Page-by-page breakdown with purpose, key content, target audience:
  - Home, Science, Diagnostics, Interventions, Practitioners, About, Toxin Load Quiz
- Design system summary: color palette, typography, component patterns
- Navigation structure
- CTA funnel strategy (how pages drive toward diagnostics/assessment)

---

## 6. Accessibility

- Answer buttons use `role="radiogroup"` on container, `role="radio"` + `aria-checked` on each option
- Progress changes announced via `aria-live="polite"` region
- Focus managed: auto-focus first answer option on each new question
- "Why we ask" toggle uses `aria-expanded` attribute
- All interactive elements keyboard-accessible (Enter/Space to select)
- Sufficient color contrast maintained (black on cream passes WCAG AA)

---

## 7. Question Data Reference

All 10 questions with exact text, answers, and scoring from the technical brief are implemented directly in the `QUIZ_QUESTIONS` array. Categories assigned per the mapping table in Section 1. The brief is the source of truth for question copy — implement verbatim.

---

## 8. Out of Scope

- CRM/backend integration (placeholder `onSubmit` only)
- Segment tagging (TODO comment only)
- Background scientific graphics per question (brief mentions "subtle scientific background graphic" — would need assets provided)
- Analytics/tracking integration
- A/B testing of quiz variants
