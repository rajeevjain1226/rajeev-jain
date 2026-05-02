# System Documentation — Rajeev Jain Website

## Overview

A personal website and Gen AI educational platform for Rajeev Jain — AI Agent Expert & Educator.
Built as a single-page application (SPA) with React, served as a static site via Vite.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| UI Framework | React | 18.x |
| Language | TypeScript | 5.x |
| Build Tool | Vite | 5.x |
| Styling | Tailwind CSS | 3.x |
| Component Library | shadcn/ui (Radix UI) | Latest |
| Routing | React Router DOM | 6.x |
| Data Fetching | TanStack React Query | 5.x |
| Charts | Recharts | 2.x |
| Forms | React Hook Form + Zod | 7.x / 3.x |
| Package Manager | npm / bun | — |
| Testing | Vitest + Testing Library | 3.x / 16.x |
| E2E Testing | Playwright | 1.x |
| Linting | ESLint + typescript-eslint | 9.x |

---

## Project Structure

```
rajeev-jain/
├── public/                  # Static assets served as-is
├── src/
│   ├── assets/              # Images, fonts, static media
│   │   └── rajeev-jain.jpeg
│   ├── components/
│   │   ├── ui/              # shadcn/ui primitive components
│   │   ├── Footer.tsx       # Global footer
│   │   ├── Layout.tsx       # Page wrapper (Navbar + main + Footer)
│   │   ├── Navbar.tsx       # Sticky top navigation with mobile menu
│   │   └── NavLink.tsx      # Active-aware nav link
│   ├── hooks/               # Custom React hooks
│   ├── lib/
│   │   └── utils.ts         # cn() class merge utility
│   ├── pages/
│   │   ├── Index.tsx        # Home page — hero, highlights, stats, CTA
│   │   ├── GenAICourse.tsx  # Gen AI course — history, usage, adoption, pros/cons
│   │   ├── Resources.tsx    # Filterable resource library
│   │   ├── Contact.tsx      # Contact form + social links
│   │   └── NotFound.tsx     # 404 fallback
│   ├── test/                # Unit test files
│   ├── App.tsx              # Root component with router and providers
│   ├── main.tsx             # React DOM entry point
│   └── index.css            # Tailwind base + CSS variables (design tokens)
├── CLAUDE.md                # Claude Code project guidance
├── agent.md                 # AI Agent architecture reference
├── system.md                # This file — system documentation
├── vite.config.ts           # Vite config with path aliases
├── tailwind.config.ts       # Tailwind theme extensions
├── tsconfig.json            # TypeScript base config
├── tsconfig.app.json        # App-specific TypeScript config
├── playwright.config.ts     # Playwright E2E config
└── vitest.config.ts         # Vitest unit test config
```

---

## Architecture

### Routing

React Router v6 is used for client-side routing. All routes are defined in `src/App.tsx`.

| Route | Page Component | Description |
|---|---|---|
| `/` | `Index.tsx` | Home / landing page |
| `/genai-course` | `GenAICourse.tsx` | Gen AI course content |
| `/resources` | `Resources.tsx` | Filterable resource library |
| `/contact` | `Contact.tsx` | Contact form |
| `*` | `NotFound.tsx` | 404 page |

### State Management

- **Local state**: `useState` for UI interactions (filters, form fields, mobile menu)
- **Server state**: TanStack React Query for any async data fetching
- **No global store**: The app is content-driven with no complex shared state

### Component Model

```
App (Providers + Router)
└── Layout (Navbar + main + Footer)
    └── Page Components
        └── shadcn/ui primitives (Card, Badge, Button, etc.)
```

### Styling System

Tailwind CSS with CSS custom properties for theming. Design tokens live in `src/index.css` as HSL variables:

```css
--background, --foreground
--primary, --primary-foreground
--muted, --muted-foreground
--accent, --accent-foreground
--border, --card, --destructive
```

Dark mode is supported via `next-themes` and the `dark:` Tailwind variant.

---

## Key Pages

### Home (`/`)
- Hero with photo, CTA buttons
- Highlights cards (Blog, Resources, Education)
- "What Are AI Agents?" concept grid
- Stats row (10+ Years, 50+ Articles, 5K+ Trained, 20+ Projects)
- Primary CTA banner

### Gen AI Course (`/genai-course`)
- Alternating timeline (10 milestones, 1950s → 2025+)
- Usage area cards with real product examples
- Global AI adoption bar chart (Recharts) + investment table
- Advantages / Disadvantages side-by-side cards

### Resources (`/resources`)
- Category filter tabs + live search input
- 12 resource cards (Articles, Tutorials, Guides, Case Studies, Tools)
- Empty state when no results match

### Contact (`/contact`)
- Contact form with validation (React Hook Form + Zod)
- Sidebar with bio card, contact info, social links

---

## Development

```bash
# Install dependencies
npm install

# Start dev server (localhost:5173)
npm run dev

# Type check
npx tsc --noEmit

# Lint
npm run lint

# Run unit tests
npm run test

# Run E2E tests
npx playwright test

# Production build
npm run build
```

### Path Aliases

`@/` maps to `src/` — configured in both `vite.config.ts` and `tsconfig.app.json`.

```typescript
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";
```

---

## Testing Strategy

| Type | Tool | Location |
|---|---|---|
| Unit / Component | Vitest + Testing Library | `src/test/` |
| End-to-End | Playwright | `playwright-fixture.ts` / `playwright.config.ts` |
| Type Safety | TypeScript strict mode | Enforced at compile time |
| Lint | ESLint + react-hooks plugin | CI enforced |

---

## Deployment

The project builds to a static `dist/` folder suitable for any static host (Vercel, Netlify, GitHub Pages, AWS S3+CloudFront).

```bash
npm run build     # outputs to dist/
npm run preview   # previews the production build locally
```

For SPA routing on static hosts, configure all routes to serve `index.html` (e.g., `vercel.json` rewrites or `_redirects` for Netlify).

---

## Environment & Configuration

No environment variables are required for the base application. If API integrations are added:

```env
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=UA-XXXXXXXXX
```

Prefix all Vite env vars with `VITE_` to expose them to the browser bundle.

---

## Performance Considerations

- **Code splitting**: React Router v6 supports lazy loading with `React.lazy()` for large pages
- **Image optimization**: Use WebP format for photos; consider `loading="lazy"` on below-fold images
- **Bundle size**: Recharts is the heaviest dependency (~500KB); lazy-load chart pages if needed
- **Font loading**: Use `font-display: swap` for any custom fonts
