# Agent Documentation — Generative AI & AI Agents Reference

This document covers the AI Agent concepts taught and referenced throughout this platform,
including architecture patterns, tooling, and the Gen AI landscape.

---

## What Is a Generative AI Agent?

A **Generative AI Agent** is an autonomous software system powered by a Large Language Model (LLM)
that can perceive its environment, reason about goals, plan multi-step actions, use tools, and
produce outputs — going far beyond a simple question-answer chatbot.

```
Perception → Reasoning → Planning → Action → Observation → (repeat)
```

### Key Properties

| Property | Description |
|---|---|
| **Autonomy** | Operates without step-by-step human instruction |
| **Tool Use** | Calls APIs, searches the web, writes/runs code, queries databases |
| **Memory** | Maintains context across sessions (short-term) and facts (long-term) |
| **Planning** | Breaks goals into sub-tasks and sequences them |
| **Adaptability** | Adjusts behavior based on feedback and observations |

---

## Core Agent Architectures

### 1. ReAct (Reasoning + Acting)

The most common agentic pattern. The LLM interleaves reasoning traces with tool calls.

```
Thought: I need to find the weather in Mumbai.
Action: search("current weather Mumbai")
Observation: "Mumbai: 32°C, partly cloudy"
Thought: I have the answer.
Final Answer: It is 32°C and partly cloudy in Mumbai.
```

**Best for**: Single-agent tasks with external tool use.

---

### 2. Plan-and-Execute

The agent first generates a complete plan, then executes each step sequentially.
A separate "executor" LLM handles individual steps.

```
Planner LLM → [Step 1, Step 2, Step 3, ...]
                    ↓
              Executor LLM → Tool calls per step
```

**Best for**: Long-horizon tasks where upfront planning reduces errors.

---

### 3. Multi-Agent Systems

Multiple specialized agents collaborate, each owning a domain of responsibility.

```
Orchestrator Agent
├── Research Agent      (web search, RAG)
├── Code Agent          (write, run, debug code)
├── Analysis Agent      (data processing, charts)
└── Report Agent        (summarize, format output)
```

**Frameworks**: LangGraph, CrewAI, AutoGen, Agency Swarm

**Best for**: Complex workflows requiring parallel specialization.

---

### 4. Reflexion

An agent evaluates its own output and iteratively self-corrects.

```
Draft Answer → Self-Critique → Revised Answer → Self-Critique → Final Answer
```

**Best for**: Tasks requiring high accuracy (code generation, factual writing).

---

### 5. RAG (Retrieval-Augmented Generation)

Agents augmented with a vector knowledge base to answer questions grounded in custom data.

```
User Query
    ↓
Vector Search (embeddings) → Relevant Chunks
    ↓
LLM Prompt = System + Chunks + User Query
    ↓
Grounded Response
```

**Tools**: Pinecone, Weaviate, ChromaDB, pgvector, LlamaIndex

---

## Agent Memory Types

| Memory Type | Storage | Lifetime | Use Case |
|---|---|---|---|
| **In-context** | LLM context window | Current session | Conversation history |
| **External short-term** | Redis / SQLite | Session | Recent tool outputs, scratchpad |
| **External long-term** | Vector DB / SQL | Persistent | User facts, learned preferences |
| **Episodic** | Structured logs | Persistent | Past task summaries, examples |

---

## Tool Use

Agents interact with the world by calling **tools** — functions with typed schemas the LLM can invoke.

### Tool Anatomy

```typescript
{
  name: "search_web",
  description: "Search the internet for current information",
  parameters: {
    type: "object",
    properties: {
      query: { type: "string", description: "Search query" }
    },
    required: ["query"]
  }
}
```

### Common Tool Categories

| Category | Examples |
|---|---|
| **Search** | Tavily, SerpAPI, Brave Search |
| **Code execution** | Python REPL, E2B sandbox, Jupyter |
| **File I/O** | Read/write local files, S3, Google Drive |
| **APIs** | REST endpoints, GraphQL, databases |
| **Browser** | Playwright, Puppeteer for web automation |
| **Communication** | Email, Slack, calendar |

---

## Frameworks & Tools

### LLM Orchestration

| Framework | Best For | Language |
|---|---|---|
| **LangChain** | General agents, RAG, tool use | Python / JS |
| **LangGraph** | Stateful multi-agent graphs | Python |
| **LlamaIndex** | RAG-heavy applications | Python / JS |
| **Haystack** | NLP pipelines, enterprise search | Python |

### Multi-Agent

| Framework | Model | Key Feature |
|---|---|---|
| **CrewAI** | Role-based agents | Human-readable crew definitions |
| **AutoGen** | Microsoft | Conversational multi-agent |
| **Agency Swarm** | OpenAI Assistants | Persistent memory + tools |
| **Autogen Studio** | Microsoft | Visual agent builder |

### Model Providers

| Provider | Models | Strengths |
|---|---|---|
| **Anthropic** | Claude 4 (Opus, Sonnet, Haiku) | Reasoning, safety, long context |
| **OpenAI** | GPT-4o, o3, o4-mini | Tool use, vision, wide ecosystem |
| **Google** | Gemini 2.0 Flash, Ultra | Multimodal, speed |
| **Meta** | Llama 3.x | Open source, self-hosted |
| **Mistral** | Mistral Large, Codestral | Efficient, European data sovereignty |

---

## Generative AI History (Quick Reference)

| Year | Milestone |
|---|---|
| 1950 | Turing Test proposed |
| 1966 | ELIZA — first chatbot |
| 1986 | Backpropagation popularized |
| 2012 | AlexNet — deep learning breakthrough |
| 2017 | Transformer architecture ("Attention Is All You Need") |
| 2018 | BERT (Google) — bidirectional language model |
| 2020 | GPT-3 — 175B parameter foundation model |
| 2022 | ChatGPT, Stable Diffusion — public Gen AI explosion |
| 2023 | GPT-4, Claude 2, Llama 2 — multimodal era |
| 2024 | Reasoning models (o1), AI Agents go mainstream |
| 2025 | Claude 4, GPT-4.1, sovereign AI, agentic pipelines at scale |

---

## Global AI Adoption (2024–2025)

| Rank | Country | Key Driver |
|---|---|---|
| 1 | 🇺🇸 USA | OpenAI, Google DeepMind, Anthropic, Meta AI; $67B VC investment |
| 2 | 🇨🇳 China | State-backed AI strategy; top patent filer; Baidu, Alibaba, Huawei |
| 3 | 🇬🇧 UK | DeepMind, AI Safety Institute; £1B+ public investment |
| 4 | 🇮🇳 India | IndiaAI Mission ($1.25B); fastest-growing AI talent pool |
| 5 | 🇩🇪 Germany | Industry 4.0, EU AI Act compliance leadership |
| 6 | 🇨🇦 Canada | Birthplace of deep learning (Hinton, Bengio); Vector Institute |
| 7 | 🇫🇷 France | Mistral AI; €500M+ national AI program |
| 8 | 🇯🇵 Japan | Robotics + AI integration; Sony, Toyota, NTT |

---

## Advantages of Generative AI

| Advantage | Impact |
|---|---|
| **Productivity** | Automates repetitive tasks; 10x content creation speed |
| **Democratization** | Expert-level assistance accessible to everyone |
| **Acceleration** | Faster drug discovery, code generation, prototyping |
| **Personalization** | Tailored education, healthcare, and consumer experiences |
| **Language access** | Real-time translation; breaks global communication barriers |
| **Cost reduction** | Automates support, moderation, data entry, BI at scale |

---

## Disadvantages & Risks of Generative AI

| Risk | Description |
|---|---|
| **Hallucinations** | LLMs confidently generate false information |
| **Misinformation / Deepfakes** | Easy creation of convincing fake media |
| **Job displacement** | Automation threatens content, support, and data roles |
| **Bias** | Training data biases amplified in model outputs |
| **Energy consumption** | Large models require massive compute and cooling resources |
| **Privacy** | Data leakage through prompts; training on personal data |
| **Security** | Prompt injection, jailbreaks, adversarial attacks |
| **IP & copyright** | Unclear ownership of AI-generated content |

---

## Building a Reliable Agent — Best Practices

### Prompt Design
- Give the agent a clear **role**, **goal**, and **constraints** in the system prompt
- Define output format explicitly (JSON schema, markdown structure, etc.)
- Include examples (few-shot) for complex or nuanced tasks

### Tool Design
- Keep tools **focused and atomic** — one tool does one thing
- Write precise `description` fields — the LLM reads them to decide when to call
- Validate tool inputs with schemas; return structured errors on failure

### Reliability
- Implement **retry logic** with exponential backoff for tool failures
- Add **evaluation loops** (Reflexion pattern) for high-stakes outputs
- Set **max iteration limits** to prevent infinite loops
- Log all tool calls and observations for debugging

### Safety
- Apply **input/output guardrails** (e.g., Guardrails AI, NeMo Guardrails)
- Keep **humans in the loop** for irreversible actions (send email, delete data)
- Scope tool permissions to minimum necessary access
- Monitor and alert on anomalous agent behavior in production

---

## Agent Evaluation Metrics

| Metric | Description |
|---|---|
| **Task completion rate** | % of tasks fully and correctly completed |
| **Tool call accuracy** | Correct tool selected and parameterized |
| **Hallucination rate** | Frequency of factually incorrect outputs |
| **Latency** | End-to-end time to complete a task |
| **Token efficiency** | Tokens consumed per successful task |
| **Human escalation rate** | % of tasks that required human intervention |

---

## Glossary

| Term | Definition |
|---|---|
| **LLM** | Large Language Model — transformer trained on text at scale |
| **Foundation Model** | A large pre-trained model fine-tuned for specific tasks |
| **Prompt** | Input text that guides the LLM's response |
| **System Prompt** | Persistent instructions that define agent role and behavior |
| **Context Window** | Maximum tokens the LLM can process in one call |
| **RAG** | Retrieval-Augmented Generation — grounding LLMs with external knowledge |
| **Embedding** | Dense vector representation of text for semantic search |
| **Fine-tuning** | Training a pre-trained model further on domain-specific data |
| **RLHF** | Reinforcement Learning from Human Feedback — alignment technique |
| **Tool Call** | Structured LLM output that triggers execution of an external function |
| **Orchestrator** | Agent or system that coordinates other agents |
| **Guardrails** | Safety checks applied to LLM inputs/outputs |
| **Agentic Loop** | The perceive → reason → act → observe cycle an agent runs |
