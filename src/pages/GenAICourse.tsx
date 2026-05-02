import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  Brain,
  Zap,
  Globe,
  CheckCircle,
  XCircle,
  Clock,
  Cpu,
  ImageIcon,
  MessageSquare,
  Music,
  Code2,
  FlaskConical,
  ShieldAlert,
  Layers,
  TrendingUp,
} from "lucide-react";

const timeline = [
  {
    year: "1950s",
    title: "Foundations of AI",
    desc: "Alan Turing proposes the Turing Test. Early symbolic AI systems and the Dartmouth Conference (1956) coin the term 'Artificial Intelligence'.",
  },
  {
    year: "1960s–70s",
    title: "Expert Systems & Early NLP",
    desc: "ELIZA (1966) — first chatbot — mimics conversation. Rule-based systems and expert systems emerge for problem-solving.",
  },
  {
    year: "1980s",
    title: "Neural Networks Revival",
    desc: "Backpropagation algorithm popularized. Neural networks gain traction but compute limits cause an 'AI Winter'.",
  },
  {
    year: "1990s",
    title: "Statistical Learning",
    desc: "Support Vector Machines and probabilistic models advance ML. IBM Deep Blue defeats chess champion Garry Kasparov (1997).",
  },
  {
    year: "2012",
    title: "Deep Learning Breakthrough",
    desc: "AlexNet wins ImageNet with 15% error drop using GPUs. Deep learning becomes the dominant paradigm for perception tasks.",
  },
  {
    year: "2017",
    title: "Transformer Architecture",
    desc: "'Attention Is All You Need' paper by Google introduces Transformers — the backbone of every modern Gen AI model.",
  },
  {
    year: "2020",
    title: "GPT-3 & Foundation Models",
    desc: "OpenAI releases GPT-3 (175B parameters), demonstrating few-shot learning. Foundation models era begins.",
  },
  {
    year: "2022",
    title: "ChatGPT & Stable Diffusion",
    desc: "ChatGPT reaches 100 million users in 2 months. Stable Diffusion & DALL·E democratize AI image generation.",
  },
  {
    year: "2023–24",
    title: "Multimodal & Agentic AI",
    desc: "GPT-4, Gemini, Claude 3 bring multimodal reasoning. AI Agents, RAG pipelines, and autonomous workflows go mainstream.",
  },
  {
    year: "2025+",
    title: "Gen AI at Scale",
    desc: "Enterprise-grade deployments, AI in every product, reasoning models (o1, o3, Claude 4), and sovereign AI initiatives worldwide.",
  },
];

const usageAreas = [
  {
    icon: MessageSquare,
    title: "Conversational AI",
    desc: "Chatbots, virtual assistants, customer support automation, and intelligent search — transforming how people interact with information.",
    examples: ["ChatGPT", "Google Gemini", "Claude"],
  },
  {
    icon: ImageIcon,
    title: "Image & Video Generation",
    desc: "Text-to-image and text-to-video models enable creative content creation at scale for design, marketing, and entertainment.",
    examples: ["DALL·E 3", "Stable Diffusion", "Sora"],
  },
  {
    icon: Code2,
    title: "Code Generation",
    desc: "AI pair programmers accelerate software development, automate testing, generate documentation, and assist in debugging.",
    examples: ["GitHub Copilot", "Cursor", "Claude Code"],
  },
  {
    icon: Music,
    title: "Audio & Music",
    desc: "AI composes original music, synthesizes realistic voices, and enables real-time language translation for global communication.",
    examples: ["Suno AI", "ElevenLabs", "Whisper"],
  },
  {
    icon: FlaskConical,
    title: "Healthcare & Science",
    desc: "Drug discovery, protein structure prediction, medical imaging analysis, and clinical decision support powered by Gen AI.",
    examples: ["AlphaFold", "Med-PaLM", "BioGPT"],
  },
  {
    icon: Layers,
    title: "Enterprise Workflows",
    desc: "Document summarization, contract analysis, report generation, and intelligent data extraction for business automation.",
    examples: ["Microsoft Copilot", "Salesforce Einstein", "Notion AI"],
  },
];

const countryData = [
  { country: "USA", score: 95, investment: "$67B", color: "#6366f1" },
  { country: "China", score: 82, investment: "$38B", color: "#8b5cf6" },
  { country: "UK", score: 71, investment: "$18B", color: "#a78bfa" },
  { country: "India", score: 65, investment: "$12B", color: "#c4b5fd" },
  { country: "Germany", score: 60, investment: "$10B", color: "#7c3aed" },
  { country: "Canada", score: 58, investment: "$9B", color: "#5b21b6" },
  { country: "France", score: 54, investment: "$8B", color: "#4c1d95" },
  { country: "Japan", score: 52, investment: "$7B", color: "#ddd6fe" },
];

const countryInsights = [
  { flag: "🇺🇸", country: "United States", detail: "Leads in model development, venture funding, and enterprise adoption. Home to OpenAI, Google DeepMind, Anthropic, and Meta AI." },
  { flag: "🇨🇳", country: "China", detail: "Strong state-backed AI investment. Leads in AI patent filings and has national AI strategy targeting global leadership by 2030." },
  { flag: "🇬🇧", country: "United Kingdom", detail: "Top European AI hub with DeepMind (London). Government AI Safety Institute and £1B+ public AI investment." },
  { flag: "🇮🇳", country: "India", detail: "Fastest-growing Gen AI talent pool. Major IT services firms integrating AI; government's IndiaAI Mission targets $1.25B investment." },
  { flag: "🇩🇪", country: "Germany", detail: "Industry 4.0 leader adopting AI in manufacturing and automotive. EU AI Act shapes responsible deployment." },
];

const advantages = [
  { icon: TrendingUp, title: "Massive Productivity Gains", desc: "Automates repetitive tasks, accelerates content creation, and lets humans focus on higher-value creative and strategic work." },
  { icon: Brain, title: "Democratizes Expertise", desc: "Gives individuals access to expert-level assistance in medicine, law, coding, and education — bridging knowledge gaps globally." },
  { icon: Zap, title: "Accelerates Innovation", desc: "Reduces time-to-market for new products, accelerates drug discovery, and enables rapid prototyping across all industries." },
  { icon: Globe, title: "Breaks Language Barriers", desc: "Real-time translation and multilingual content generation enables global communication and access to information in any language." },
  { icon: Cpu, title: "Personalized Experiences", desc: "Tailored learning, healthcare recommendations, and consumer experiences at scale — previously impossible without AI." },
  { icon: CheckCircle, title: "Cost Reduction", desc: "Reduces operational costs by automating customer service, content moderation, data entry, and business intelligence workflows." },
];

const disadvantages = [
  { icon: ShieldAlert, title: "Misinformation & Deepfakes", desc: "Gen AI makes it trivially easy to create convincing fake text, images, audio, and video — enabling fraud and political manipulation." },
  { icon: XCircle, title: "Job Displacement Risks", desc: "Automation threatens roles in content creation, customer service, data entry, and software development, requiring workforce reskilling." },
  { icon: Brain, title: "Hallucinations & Errors", desc: "LLMs can confidently generate factually incorrect information, which is dangerous in healthcare, legal, or financial contexts." },
  { icon: Globe, title: "Bias & Fairness Issues", desc: "Models trained on biased internet data can perpetuate and amplify societal biases, leading to discriminatory outcomes." },
  { icon: Cpu, title: "Massive Energy Consumption", desc: "Training large models consumes enormous amounts of electricity and water for cooling, raising serious environmental concerns." },
  { icon: ShieldAlert, title: "Privacy & Security Risks", desc: "Models trained on personal data, prompt injection attacks, and data leakage through AI systems pose significant security threats." },
];

const GenAICourse = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 text-center">
        <Badge variant="secondary" className="mb-4 text-xs font-medium">
          Gen AI Course
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Generative AI:{" "}
          <span className="text-primary">Complete Overview</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Explore the history, global adoption, real-world applications, and the critical
          advantages and risks of Generative Artificial Intelligence.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["History", "Usage", "Global Adoption", "Pros & Cons"].map((label) => (
            <Badge key={label} variant="outline" className="px-4 py-1.5 text-sm">
              {label}
            </Badge>
          ))}
        </div>
      </div>
    </section>

    {/* History Timeline */}
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mb-12 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Clock className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-bold sm:text-3xl">History of Generative AI</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          From Turing's vision to today's multimodal models — a journey spanning 70+ years.
        </p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />

        <div className="space-y-8">
          {timeline.map((item, idx) => (
            <div
              key={item.year}
              className={`relative flex gap-6 md:gap-0 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 top-5 z-10 h-3 w-3 -translate-x-1.5 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1.5" />

              {/* Card */}
              <div
                className={`ml-10 flex-1 md:ml-0 ${
                  idx % 2 === 0
                    ? "md:mr-8 md:pr-8 md:text-right"
                    : "md:ml-8 md:pl-8"
                }`}
              >
                <Card className="inline-block w-full max-w-md transition-shadow hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className={`flex items-center gap-2 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <Badge variant="secondary" className="text-xs font-bold">
                        {item.year}
                      </Badge>
                      <CardTitle className="text-base">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden flex-1 md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Usage of AI */}
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Zap className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold sm:text-3xl">Usage of Generative AI</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Gen AI is reshaping every industry — from content creation to scientific research.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {usageAreas.map((area) => (
            <Card key={area.title} className="transition-shadow hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <area.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{area.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{area.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {area.examples.map((ex) => (
                    <Badge key={ex} variant="outline" className="text-xs">
                      {ex}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Global AI Adoption */}
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mb-12 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Globe className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-bold sm:text-3xl">Which Country Uses AI Most?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Global AI adoption index comparing readiness, investment, and innovation output.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Bar Chart */}
        <Card className="p-6">
          <h3 className="mb-6 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            AI Adoption Score (0–100)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={countryData} layout="vertical" margin={{ left: 0, right: 20 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} />
              <YAxis type="category" dataKey="country" tick={{ fontSize: 13, fontWeight: 600 }} width={60} />
              <Tooltip
                formatter={(value) => [`${value} / 100`, "Adoption Score"]}
                contentStyle={{ fontSize: "13px" }}
              />
              <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                {countryData.map((entry) => (
                  <Cell key={entry.country} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Country Insights */}
        <div className="space-y-4">
          {countryInsights.map((c) => (
            <Card key={c.country} className="transition-shadow hover:shadow-md">
              <CardContent className="flex gap-4 pt-4 pb-4">
                <span className="text-3xl">{c.flag}</span>
                <div>
                  <p className="font-semibold">{c.country}</p>
                  <p className="text-sm text-muted-foreground">{c.detail}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Investment Table */}
      <div className="mt-10 overflow-x-auto rounded-xl border">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/40">
            <tr>
              <th className="px-6 py-3 text-left font-semibold">Country</th>
              <th className="px-6 py-3 text-left font-semibold">AI Investment (2024)</th>
              <th className="px-6 py-3 text-left font-semibold">Adoption Score</th>
              <th className="px-6 py-3 text-left font-semibold">Ranking</th>
            </tr>
          </thead>
          <tbody>
            {countryData.map((row, idx) => (
              <tr key={row.country} className="border-b last:border-0 hover:bg-muted/20 transition-colors">
                <td className="px-6 py-3 font-medium">{row.country}</td>
                <td className="px-6 py-3 text-muted-foreground">{row.investment}</td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${row.score}%` }}
                      />
                    </div>
                    <span className="font-semibold">{row.score}</span>
                  </div>
                </td>
                <td className="px-6 py-3">
                  <Badge variant={idx === 0 ? "default" : "outline"} className="text-xs">
                    #{idx + 1}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Advantages & Disadvantages */}
    <section className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Brain className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold sm:text-3xl">Advantages & Disadvantages</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Gen AI brings transformative potential alongside serious risks that demand careful consideration.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Advantages */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-green-700 dark:text-green-400">Advantages</h3>
            </div>
            <div className="space-y-4">
              {advantages.map((adv) => (
                <Card key={adv.title} className="border-green-100 transition-shadow hover:shadow-md dark:border-green-900/30">
                  <CardContent className="flex gap-4 pt-4 pb-4">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                      <adv.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{adv.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{adv.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Disadvantages */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                <XCircle className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400">Disadvantages</h3>
            </div>
            <div className="space-y-4">
              {disadvantages.map((dis) => (
                <Card key={dis.title} className="border-red-100 transition-shadow hover:shadow-md dark:border-red-900/30">
                  <CardContent className="flex gap-4 pt-4 pb-4">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      <dis.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{dis.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{dis.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">Ready to Master Generative AI?</h2>
        <p className="mx-auto mt-3 max-w-xl opacity-90">
          Join thousands of professionals learning to build and deploy Gen AI solutions that matter.
        </p>
      </div>
    </section>
  </Layout>
);

export default GenAICourse;
