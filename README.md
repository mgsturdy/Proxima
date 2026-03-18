# Proxima Health

Environmental toxin diagnostics and therapeutic blood filtration. Built with Next.js 15, React 18, and Tailwind CSS.

## Prerequisites

- Node.js 18+
- npm 9+

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site is behind a password gate — enter `foryourreview` to access.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/                    # Pages (Next.js App Router)
│   ├── layout.tsx         # Root layout — Navbar, Footer, PasswordGate
│   ├── page.tsx           # Homepage
│   ├── about/             # About / team page
│   ├── diagnostics/       # Diagnostics service page
│   ├── interventions/     # INUSpheresis treatment page
│   ├── practitioners/     # Practitioner partnerships
│   ├── science/           # Science wiki with tabbed sections
│   ├── waitlist/          # Toxin Load Quiz & email capture
│   └── proposal/          # Internal web dev proposal
├── components/
│   ├── Navbar.tsx         # Fixed navbar, transparent on hero pages
│   ├── Footer.tsx         # Gradient footer with site links
│   ├── ThreeStepsSection.tsx  # Interactive 3-step overview
│   ├── PasswordGate.tsx   # Session-based password protection
│   └── LoadingScreen.tsx  # Animated loading bar on first visit
└── lib/
    └── utils.ts           # cn() utility (clsx + tailwind-merge)

public/
├── assets/                # Images, logos, hero backgrounds
└── fonts/                 # Local fonts (Robit, NB International, DM Sans)
```

## Key Dependencies

| Package | Purpose |
|---------|---------|
| `next` | React framework (App Router) |
| `framer-motion` | Animations and page transitions |
| `lucide-react` | Icon library |
| `tailwindcss` | Utility-first CSS |
| `clsx` + `tailwind-merge` | Conditional class merging |

## Deployment

Standard Next.js deployment. Compatible with Vercel, Netlify, or any Node.js hosting.

```bash
npm run build
npm start
```
