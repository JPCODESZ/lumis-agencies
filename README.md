# Lumis Agencies — AI Lead Automation for Roofing & HVAC

A polished, production-ready marketing and demo website for Lumis Agencies — an AI automation agency serving roofing and HVAC businesses.

## Live Features

- **Homepage** — Full-conversion landing page with hero, stats bar, problem/solution, how it works, use cases, interactive demo preview, testimonials, integrations, pricing preview, FAQ, and final CTA
- **Services Page** — Detailed breakdown of all 8 automation services with benefits and technical specs
- **Interactive Demo** — Live AI conversation simulation with Roofing (storm damage) and HVAC (emergency repair) scenarios, CRM pipeline visualization, and follow-up sequencing
- **Pricing Page** — Three-tier pricing with feature comparison table and FAQ
- **Contact Page** — Lead capture form with validation, success state, and audit process sidebar
- **Case Study** — Detailed Webb Roofing case study with before/after metrics, timeline, and testimonial

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Vercel-ready

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

### Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the repo — Next.js is auto-detected
4. No environment variables needed for the MVP
5. Click Deploy

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout + metadata
│   ├── globals.css           # Global styles + Tailwind theme
│   ├── contact/page.tsx      # Contact/audit booking form
│   ├── demo/page.tsx         # Interactive AI workflow demo
│   ├── pricing/page.tsx      # Pricing tiers + comparison table
│   ├── services/page.tsx     # Services detail page
│   └── case-study/page.tsx   # Webb Roofing case study
├── components/
│   ├── Navbar.tsx            # Sticky nav with mobile menu
│   ├── Footer.tsx            # Site footer with links
│   ├── CTAButton.tsx         # Reusable animated CTA button
│   ├── SectionHeading.tsx    # Consistent section header component
│   └── home/
│       ├── Hero.tsx          # Hero with split layout + chat preview
│       ├── StatsBar.tsx      # Key metrics bar
│       ├── ProblemSection.tsx
│       ├── SolutionSection.tsx
│       ├── HowItWorks.tsx
│       ├── UseCases.tsx
│       ├── DemoPreview.tsx
│       ├── Testimonials.tsx  # Client testimonials with results
│       ├── Integrations.tsx  # Software integrations grid
│       ├── PricingPreview.tsx
│       ├── FAQSection.tsx
│       └── FinalCTA.tsx
└── lib/
    └── utils.ts              # clsx/cn utility
```

## Design System

| Token | Value |
|---|---|
| Background | `#0A0F1E` |
| Surface | `#111827` |
| Border | `#1E293B` |
| Primary | `#0EA5E9` (sky blue) |
| Accent | `#F59E0B` (amber) |
| Text Muted | `#94A3B8` |
| Font | Inter (Google Fonts) |

## Pages Map

| Route | Purpose |
|---|---|
| `/` | Main marketing homepage |
| `/services` | Detailed service offerings |
| `/demo` | Interactive AI workflow demo |
| `/pricing` | Pricing tiers |
| `/contact` | Audit booking form |
| `/case-study` | Webb Roofing case study |

## Business Context

**Brand:** Lumis Agencies  
**Niche:** Roofing and HVAC companies  
**Core offer:** AI lead automation — missed-call text back, lead qualification, appointment booking, CRM pipeline automation  
**Pricing:** Starter $297/mo + $497 setup · Growth $597/mo + $997 setup · Pro (custom)
