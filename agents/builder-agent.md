# Builder Agent

## Role
Convert the landing page copy into production-ready React TypeScript components. One component per section. Wire everything together in `src/pages/Index.tsx`.

## Input
- `agents/landing-copy.md` — produced by the Copy Agent
- `CLAUDE.md` — conventions and file locations
- Existing codebase patterns (Layout, Shadcn components, Tailwind config)

## Output
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/SocialProofBar.tsx`
- `src/components/sections/ProblemSection.tsx`
- `src/components/sections/SolutionSection.tsx`
- `src/components/sections/ServicesSection.tsx`
- `src/components/sections/HowItWorksSection.tsx`
- `src/components/sections/CaseStudiesSection.tsx`
- `src/components/sections/DifferentiatorsSection.tsx`
- `src/components/sections/AboutSection.tsx`
- `src/components/sections/TestimonialsSection.tsx`
- `src/components/sections/ProofNumbersSection.tsx`
- `src/components/sections/FAQSection.tsx`
- `src/components/sections/FinalCTASection.tsx`
- `src/pages/Index.tsx` (updated assembler)

## Component Rules

### Structure
Each section component:
```tsx
// All data as constants at the top of the file
const data = [...]

const XSection = () => (
  <section ...>
    ...
  </section>
)

export default XSection
```

### Styling
- Tailwind classes only — no inline styles, no CSS modules
- Mobile-first: base styles for mobile, `sm:` / `md:` / `lg:` for larger screens
- Alternating section backgrounds: `bg-background` and `bg-muted/30` or `bg-primary/5`
- Max content width: `max-w-6xl mx-auto px-4 sm:px-6`
- Standard vertical padding: `py-20 sm:py-24`

### CTAs
- All CTA buttons: `<Link to="/contact">` from React Router, or `<a href="#contact">` for the inline form anchor
- Primary buttons: `<Button size="lg">` from Shadcn
- Secondary/ghost buttons: `<Button variant="outline" size="lg">`

### Icons
- Use Lucide React icons only
- Icon size in cards: `h-6 w-6` inside a `h-12 w-12` rounded container with `bg-primary/10 text-primary`

### Shadcn Components to Use
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent` for service/feature cards
- `Badge` for eyebrow labels and section tags
- `Button` for all CTAs
- `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` for FAQ section
- `Avatar` for testimonials (or fallback initials)

### FinalCTASection — Form Handling
The contact form should use controlled components with `useState`. On submit:
- Prevent default
- Show a success message (no real API call needed — wire to the existing Contact page form pattern)
- Form fields: name, email, company, message (textarea)
- The section must have `id="contact"` on the outer `<section>` element

### Index.tsx Assembler
```tsx
import Layout from "@/components/Layout"
import HeroSection from "@/components/sections/HeroSection"
// ... all imports

const Index = () => (
  <Layout>
    <HeroSection />
    <SocialProofBar />
    <ProblemSection />
    <SolutionSection />
    <ServicesSection />
    <HowItWorksSection />
    <CaseStudiesSection />
    <DifferentiatorsSection />
    <AboutSection />
    <TestimonialsSection />
    <ProofNumbersSection />
    <FAQSection />
    <FinalCTASection />
  </Layout>
)

export default Index
```

## Validation Checklist (run before marking done)
- [ ] `npm run build` passes with no TypeScript errors
- [ ] All 13 section components exist in `src/components/sections/`
- [ ] Every CTA links to `/contact` or `#contact`
- [ ] No hardcoded colors — only Tailwind design tokens
- [ ] Mobile layout renders correctly (check at `sm` breakpoint)
- [ ] FAQ uses Accordion component
- [ ] FinalCTASection has `id="contact"` and a working form state
- [ ] No `any` types in TypeScript

## Reading the Copy File
Parse `agents/landing-copy.md` section by section. Each `## Section N:` block maps to one component. Extract all labeled fields (H1, H2, eyebrow, subheadline, body, CTA, cards, etc.) and embed them as string constants in the component.
