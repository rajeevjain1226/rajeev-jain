# system.md — Multi-Agent Orchestration System

## Purpose
A 4-agent pipeline that researches, synthesizes, writes, and builds the AI consultancy landing page. Each agent has a distinct input/output contract. Agents are defined in `agents/`.

---

## Pipeline Overview

```
┌─────────────────────────────────────────────────────────┐
│                    USER GOAL                            │
│   "Build a converting AI consultancy landing page"      │
└───────────────────────────┬─────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│  [1] RESEARCH AGENT          agents/research-agent.md   │
│                                                         │
│  Input:  User goal + topic list                         │
│  Tools:  WebSearch, WebFetch                            │
│  Output: raw-research.md                                │
│                                                         │
│  Researches:                                            │
│   - Landing page conversion best practices              │
│   - AI consultancy positioning & differentiation        │
│   - B2B buyer psychology & objection patterns           │
│   - Copywriting frameworks (AIDA, PAS, StoryBrand)      │
│   - Competitor AI consultancy pages                     │
└───────────────────────────┬─────────────────────────────┘
                            │ raw-research.md
                            ▼
┌─────────────────────────────────────────────────────────┐
│  [2] CONSOLIDATOR AGENT  agents/consolidator-agent.md   │
│                                                         │
│  Input:  raw-research.md                                │
│  Tools:  Read, analysis reasoning                       │
│  Output: page-brief.md                                  │
│                                                         │
│  Produces:                                              │
│   - Ideal Customer Profile (ICP)                        │
│   - Core value proposition (1 sentence)                 │
│   - Top 3 pains / problems                              │
│   - Top 3 proof points / differentiators                │
│   - Top 3 objections + rebuttals                        │
│   - CTA strategy (what to say, where, how urgent)       │
│   - Tone & voice guidelines                             │
└───────────────────────────┬─────────────────────────────┘
                            │ page-brief.md
                            ▼
┌─────────────────────────────────────────────────────────┐
│  [3] COPY AGENT              agents/copy-agent.md       │
│                                                         │
│  Input:  page-brief.md                                  │
│  Tools:  Read, Write                                    │
│  Output: landing-copy.md                                │
│                                                         │
│  Writes copy for all 13 sections:                       │
│   - Section headline                                    │
│   - Subheadline / supporting text                       │
│   - Body content (bullets, cards, steps)                │
│   - CTA label + microcopy                               │
└───────────────────────────┬─────────────────────────────┘
                            │ landing-copy.md
                            ▼
┌─────────────────────────────────────────────────────────┐
│  [4] BUILDER AGENT          agents/builder-agent.md     │
│                                                         │
│  Input:  landing-copy.md + CLAUDE.md conventions        │
│  Tools:  Read, Write, Edit, Bash                        │
│  Output: 13 React components + updated Index.tsx        │
│                                                         │
│  Builds:                                                │
│   - src/components/sections/*.tsx (one per section)     │
│   - src/pages/Index.tsx (assembler)                     │
│   - Validates: TypeScript, Tailwind, mobile responsive  │
└─────────────────────────────────────────────────────────┘
```

---

## Intermediate Artifacts

| File | Producer | Consumer |
|------|----------|----------|
| `agents/raw-research.md` | Research Agent | Consolidator Agent |
| `agents/page-brief.md` | Consolidator Agent | Copy Agent |
| `agents/landing-copy.md` | Copy Agent | Builder Agent |

---

## Re-Running Individual Stages

If you need to re-run only one stage without re-running earlier ones:

- **Re-research**: Delete `agents/raw-research.md`, re-run Research Agent
- **Re-brief**: Edit `agents/raw-research.md`, re-run Consolidator Agent
- **Re-copy**: Edit `agents/page-brief.md`, re-run Copy Agent
- **Re-build**: Edit `agents/landing-copy.md`, re-run Builder Agent

---

## 13-Section Page Structure

| # | Section | Conversion Role |
|---|---------|----------------|
| 1 | Hero | Clarity + primary CTA |
| 2 | Social Proof Bar | Instant credibility |
| 3 | Problem | Agitate the pain |
| 4 | Solution | Position the fix |
| 5 | Services | Show what you offer |
| 6 | How It Works | Reduce friction |
| 7 | Case Studies | Prove it works |
| 8 | Differentiators | Why you vs. others |
| 9 | About | Human trust signal |
| 10 | Testimonials | Social proof |
| 11 | Proof Numbers | Authority at a glance |
| 12 | FAQ | Kill objections |
| 13 | Final CTA | Embedded form, close the deal |

---

## Agent Communication Contract

All agents read/write markdown files in the `agents/` directory. No agent modifies another agent's source file — only its designated output artifact.
