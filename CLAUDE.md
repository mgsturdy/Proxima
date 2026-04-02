# CLAUDE.md

## Project
Proxima -- Proxima Health marketing site and patient intake platform (environmental toxin detection)

## Stack
- Next.js 15.5.11, React 18, TypeScript
- Tailwind CSS 3.4.1, Framer Motion
- Lucide React, Class Variance Authority

## Conventions
- Push directly to main for small changes; PRs for larger work
- Branch naming: feature/<description> or fix/<description>
- Write tests for new features
- Password-gated preview site (password in SITE_PASSWORD env var)

## Development
- `npm run dev` -- Dev server
- `npm run build` -- Production build
- `npm start` -- Start production server
- `npm run lint` -- ESLint

## Deployment
- Hosted on Vercel, staging at beta.proxima.health
