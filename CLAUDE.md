# CLAUDE.md — Rajeev Jain AI Consultancy

## Project Overview
AI consultancy landing page for Rajeev Jain. Goal: convert visitors into qualified leads by directing them to a contact form. All CTAs ultimately link to the contact form or the `#contact` anchor section.

## Tech Stack
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS v3 (utility-first, mobile-first)
- **Components**: Shadcn/ui (`src/components/ui/`)
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Testing**: Vitest (unit) + Playwright (e2e)

## Branch
Always develop on: `claude/ai-consultancy-landing-csl6v`

## File Locations
```
src/
  pages/
    Index.tsx                  ← Main landing page (assembles all sections)
    Contact.tsx                ← Contact form page
  components/
    sections/                  ← One file per landing page section
      HeroSection.tsx
      SocialProofBar.tsx
      ProblemSection.tsx
      SolutionSection.tsx
      ServicesSection.tsx
      HowItWorksSection.tsx
      CaseStudiesSection.tsx
      DifferentiatorsSection.tsx
      AboutSection.tsx
      TestimonialsSection.tsx
      ProofNumbersSection.tsx
      FAQSection.tsx
      FinalCTASection.tsx
    ui/                        ← Shadcn primitives (do not edit)
    Layout.tsx
    Navbar.tsx
    Footer.tsx
```

## Agent Workflow
See `system.md` for full pipeline. Agents live in `agents/`.

1. `agents/research-agent.md` — gathers raw research
2. `agents/consolidator-agent.md` — synthesizes into Page Brief
3. `agents/copy-agent.md` — writes all 13-section copy
4. `agents/builder-agent.md` — builds React components

## Conventions
- No inline styles — Tailwind classes only
- All primary CTAs: `<Link to="/contact">` or `href="#contact"`
- Section components receive no props — all data is co-located in the file as constants
- Mobile-first responsive: `sm:` `md:` `lg:` breakpoints
- No comments unless the WHY is non-obvious
- Keep Index.tsx as a thin assembler — logic lives in section files

## CTAs
- Every section either has no CTA or a CTA pointing to `/contact`
- The inline contact form lives in `FinalCTASection.tsx` with `id="contact"`
- Button labels should be action-oriented: "Book a Free Strategy Call", "Let's Talk AI", "Get Your AI Roadmap"

## Do Not
- Push to main
- Add features beyond the 13-section landing page scope
- Modify files under `src/components/ui/`
- Add external analytics or tracking without user approval
