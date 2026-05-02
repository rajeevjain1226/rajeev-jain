# CLAUDE.md — Claude Code Project Guide

This file gives Claude Code all the context needed to work effectively in this repository.

---

## Project Summary

**Rajeev Jain's personal website** — a React + TypeScript SPA focused on AI Agents education.
Key pages: Home, Gen AI Course, Resources, Contact.

**Stack**: React 18, TypeScript 5, Vite 5, Tailwind CSS 3, shadcn/ui, React Router 6, Recharts, Vitest, Playwright.

---

## Essential Commands

```bash
npm run dev          # Dev server at localhost:5173
npx tsc --noEmit     # Type check (no build output)
npm run lint         # ESLint
npm run test         # Vitest unit tests (single run)
npm run test:watch   # Vitest in watch mode
npm run build        # Production build → dist/
npm run preview      # Preview production build locally
npx playwright test  # E2E tests
```

**Always run `npx tsc --noEmit` after making changes** to verify TypeScript is clean before committing.

---

## Codebase Conventions

### Imports & Path Aliases

Always use the `@/` alias for imports from `src/`:

```typescript
// Correct
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Wrong
import Layout from "../../components/Layout";
```

### Component Style

- **Functional components only** — no class components
- **Named exports** for everything except page-level default exports
- Pages use `default export` and live in `src/pages/`
- Shared components live in `src/components/`
- shadcn/ui primitives live in `src/components/ui/` — **do not edit these directly**

### Styling

Use Tailwind utility classes exclusively. Never write raw CSS except for design token overrides in `src/index.css`.

Use the `cn()` utility from `@/lib/utils` to merge conditional classes:

```typescript
import { cn } from "@/lib/utils";
<div className={cn("base-class", condition && "conditional-class")} />
```

Prefer Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) over JavaScript media queries.

### TypeScript

- Strict mode is enabled — avoid `any`
- Prefer `interface` for object shapes, `type` for unions and aliases
- All props must be typed; use `React.ReactNode` for children
- No `// @ts-ignore` or `// @ts-expect-error` unless absolutely necessary with a comment explaining why

### State Management

- Use `useState` for local UI state
- Use TanStack React Query for async/server state
- No global state library — keep state close to where it's used
- Lift state up only when two siblings need to share it

---

## Adding a New Page

1. Create `src/pages/MyPage.tsx`
2. Add route in `src/App.tsx`:
   ```typescript
   import MyPage from "./pages/MyPage";
   // ...
   <Route path="/my-page" element={<MyPage />} />
   ```
3. Add nav link in `src/components/Navbar.tsx`:
   ```typescript
   const navLinks = [
     // ...
     { label: "My Page", path: "/my-page" },
   ];
   ```
4. Wrap page content in `<Layout>` from `@/components/Layout`

---

## Adding a New shadcn/ui Component

shadcn/ui components are added via CLI, not manual file creation:

```bash
npx shadcn-ui@latest add <component-name>
# Example: npx shadcn-ui@latest add dialog
```

This places the component in `src/components/ui/`. Do not create UI primitive files manually.

---

## File Structure Reference

```
src/
├── assets/          # Static images and media
├── components/
│   ├── ui/          # shadcn/ui primitives (do not edit)
│   ├── Footer.tsx
│   ├── Layout.tsx   # Wraps every page
│   ├── Navbar.tsx   # Navigation (update navLinks array to add pages)
│   └── NavLink.tsx
├── hooks/           # Custom hooks
├── lib/
│   └── utils.ts     # cn() utility
├── pages/           # One file per route
├── test/            # Vitest test files
├── App.tsx          # Router + providers
├── main.tsx         # Entry point
└── index.css        # Design tokens (CSS vars)
```

---

## Design Tokens (CSS Variables)

Defined in `src/index.css`. Reference via Tailwind:

| Token | Tailwind Class |
|---|---|
| `--primary` | `bg-primary`, `text-primary` |
| `--muted` | `bg-muted`, `text-muted-foreground` |
| `--accent` | `bg-accent`, `text-accent-foreground` |
| `--border` | `border`, `border-border` |
| `--card` | `bg-card`, `text-card-foreground` |

---

## Testing Guidelines

- Test files live in `src/test/` with `.test.tsx` or `.test.ts` extension
- Use `@testing-library/react` for component tests — test behavior, not implementation
- Mock external dependencies (API calls, routing) in tests
- E2E tests are in `playwright-fixture.ts` using the Playwright fixture pattern

---

## Common Pitfalls

- **Don't install node_modules manually** — use `npm install <package>` and commit `package-lock.json`
- **Don't edit `src/components/ui/`** files — they're managed by shadcn/ui CLI
- **Don't use inline styles** — use Tailwind or CSS variables
- **Don't forget responsive classes** — always check mobile layout with `sm:`/`md:` prefixes
- **Recharts requires `ResponsiveContainer`** to make charts fluid — always wrap charts in it
- **React Router `<Link>`** is used for internal navigation, not `<a href>` tags

---

## Git Workflow

- Development branch: `claude/genai-course-project-plan-YbLTI`
- Main branch: `main`
- Always push to the development branch; do not push directly to `main`
- Commit messages should be descriptive and explain the "why"
- Run type check and lint before committing

---

## Architecture Decisions

| Decision | Rationale |
|---|---|
| Vite over CRA | Faster HMR, native ESM, smaller config |
| shadcn/ui over full UI lib | Copy-paste model gives full control; no version lock-in |
| React Router over Next.js | Static SPA is sufficient; no SSR needed |
| TanStack Query | Best-in-class async state; consistent caching/loading patterns |
| Recharts | Composable, React-native chart library; good TypeScript support |
| Zod | Runtime schema validation that shares types with TypeScript |
