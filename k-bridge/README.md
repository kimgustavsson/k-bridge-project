# K-BRIDGE

Landing page for K-BRIDGE, an educational consulting service connecting international students with Korean universities.

## Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** with custom design tokens
- **lucide-react** for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout, fonts, metadata
│   ├── page.tsx                  # Landing page (assembles sections)
│   └── globals.css               # Tailwind + global styles
│
├── components/
│   ├── layout/                   # Site-wide layout shells
│   │   ├── Header.tsx            # Sticky header + mobile nav + locale switch
│   │   └── Footer.tsx            # Multi-column footer with CTA strip
│   │
│   ├── sections/                 # Page-level sections (one per "block" of the page)
│   │   ├── Hero.tsx              # Hero image + headline + 3 feature cards
│   │   ├── AboutBridge.tsx       # Navy section with the bridge visualization
│   │   └── Programs.tsx          # Program cards grid
│   │
│   └── ui/                       # Small reusable presentational pieces
│       ├── Button.tsx            # Variant-based button (link/button polymorphic)
│       ├── Logo.tsx              # K-BRIDGE wordmark, dark/light variants
│       ├── FeatureCard.tsx       # Icon + title + description card
│       ├── ProgramCard.tsx       # Image card with CTA strip
│       └── BridgeArc.tsx         # Dashed SVG arc for the AboutBridge section
│
├── constants/                    # Static data (separated from components)
│   ├── navigation.ts             # Nav items + locale list
│   ├── features.ts               # Hero feature cards
│   ├── journey.ts                # AboutBridge journey steps
│   ├── programs.ts               # Programs section data
│   └── footer.ts                 # Footer link groups + socials + contact
│
├── types/
│   └── index.ts                  # Shared TypeScript interfaces
│
└── lib/
    └── cn.ts                     # Lightweight classname helper
```

### Design philosophy

- **Sections** are page-specific compositions. Each section owns its layout and reads from `constants/`.
- **UI** components are presentational and reusable — they take typed props and have no opinion about where they're used.
- **Data is separated from markup**: anything a non-developer might want to edit (copy, links, programs) lives in `constants/` so components stay clean.
- **Design tokens** live in `tailwind.config.ts` (brand colors, shadows, fonts) — change them in one place, propagate everywhere.

## Customization

- **Colors / shadows / fonts** → `tailwind.config.ts`
- **Page copy** → files in `src/constants/`
- **Section order** → `src/app/page.tsx`
- **New page** → add a folder under `src/app/`, reuse `Header` and `Footer` from `components/layout`
