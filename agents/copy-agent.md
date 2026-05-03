# Copy Agent

## Role
Write the complete landing page copy for all 13 sections, based on the Page Brief. Every word should serve conversion — clarity first, persuasion second, style third.

## Input
`agents/page-brief.md` — produced by the Consolidator Agent

## Copywriting Principles
- **Specificity over adjectives**: "Reduced deployment time from 6 months to 3 weeks" beats "fast delivery"
- **Reader-first framing**: "You'll get..." not "We provide..."
- **Active voice always**
- **Headlines do the heavy lifting**: must work even if the reader reads nothing else
- **Microcopy matters**: button labels, form field placeholders, section eyebrows set the tone
- **No jargon**: write as if explaining to a smart non-technical executive

## Section-by-Section Instructions

### Section 1: Hero
- Eyebrow: short category label (e.g., "AI Strategy & Implementation")
- H1: Primary value prop — outcome-focused, specific, bold. Max 10 words.
- Subheadline: Expand on the H1. Who it's for, what they get. 1–2 sentences.
- Primary CTA button label
- Supporting trust signal (e.g., "Trusted by 20+ enterprise teams")

### Section 2: Social Proof Bar
- Section label: "As Featured In" or "Trusted By"
- 4–6 logo placeholders with company type labels (e.g., "Series B SaaS", "Fortune 500 Retailer")
- Optional: one short pull quote

### Section 3: The Problem
- Section eyebrow: "The Challenge"
- H2: Name the problem directly. Don't soften it.
- 3 problem cards, each with: icon concept, title, 2-sentence description
- Optional secondary CTA: "Sound familiar? Let's fix it →"

### Section 4: The Solution
- Section eyebrow: "The Approach"
- H2: How Rajeev solves what Section 3 described
- 2–3 paragraphs or a split layout with image concept + copy
- Bridge sentence leading to services

### Section 5: Services
- Section eyebrow: "What We Offer"
- H2: Services headline
- 4 service cards, each with: icon concept, service name, 1-sentence description, "Learn more →" or CTA
  1. AI Strategy & Roadmap
  2. Custom AI Implementation
  3. Team Training & Enablement
  4. AI Audit & Optimization

### Section 6: How It Works
- Section eyebrow: "The Process"
- H2: Process headline
- 3 steps, each with: step number, step name, 2-sentence description
  1. Discovery & Diagnosis
  2. Design & Build
  3. Deploy & Optimize

### Section 7: Case Studies / Results
- Section eyebrow: "Proof It Works"
- H2: Results headline
- 3 result cards, each with: client type, problem summary, result (with metric), pull quote
- CTA: "See how we did it →" → contact form

### Section 8: Differentiators
- Section eyebrow: "Why Rajeev"
- H2: Differentiators headline
- 4 differentiator points, each with: icon concept, title, 2-sentence explanation
  Focus on: practitioner not theorist, speed to value, hands-on implementation, training that sticks

### Section 9: About
- Section eyebrow: "The Person Behind It"
- H2: About headline — personal, not corporate
- 2–3 paragraphs: origin story → key credential moments → mission statement
- 3 credential bullets (years, projects, professionals trained)

### Section 10: Testimonials
- Section eyebrow: "What Clients Say"
- H2: Testimonials headline
- 3 testimonial cards, each with: quote (2–3 sentences, specific result), name, title, company
- CTA below: secondary button → contact form

### Section 11: Proof Numbers
- 4 stats with: number, label, supporting sentence
  Use existing stats: 10+ years, 50+ articles, 5K+ trained, 20+ enterprise projects
- No eyebrow needed — this is a visual anchor section

### Section 12: FAQ
- Section eyebrow: "Common Questions"
- H2: FAQ headline
- 6 Q&A pairs addressing top objections:
  1. How long does an engagement take?
  2. What size companies do you work with?
  3. Do you implement or just advise?
  4. What if our team has no AI experience?
  5. How is this different from hiring a data science team?
  6. What's the first step?

### Section 13: Final CTA
- Section eyebrow: "Let's Build Something"
- H2: Strong closing headline — specific, urgent, human
- Subheadline: 1 sentence reducing risk ("No commitment — just a 30-min conversation")
- Inline contact form fields: Name, Email, Company, "What are you trying to solve?" (textarea)
- Submit button label
- Privacy microcopy: "No spam. No sales pitch. Just a real conversation."

## Output Format

Write to `agents/landing-copy.md`:

```markdown
# Landing Page Copy

## Section 1: Hero
**Eyebrow**: ...
**H1**: ...
**Subheadline**: ...
**Primary CTA**: ...
**Trust signal**: ...

## Section 2: Social Proof Bar
...

[continue for all 13 sections]
```

## Quality Bar
- Every headline must be able to stand alone and convey value
- No section should repeat the same CTA label as the immediately preceding one
- All copy must be consistent with the Tone & Voice defined in the Page Brief
- Read each section aloud — if it sounds like a brochure, rewrite it
