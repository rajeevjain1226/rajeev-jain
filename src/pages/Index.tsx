import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import rajeevPhoto from "@/assets/rajeev-jain.jpeg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Code2,
  GraduationCap,
  Lightbulb,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Latest Articles",
    description: "Deep dives into AI Agent architectures, reasoning patterns, and real-world applications.",
    tag: "Blog",
    link: "/resources",
  },
  {
    icon: Code2,
    title: "Tools & Frameworks",
    description: "Curated collection of the best tools for building, testing, and deploying AI agents.",
    tag: "Resources",
    link: "/resources",
  },
  {
    icon: GraduationCap,
    title: "Courses & Training",
    description: "Structured learning paths from fundamentals to advanced multi-agent systems.",
    tag: "Education",
    link: "/contact",
  },
];

const concepts = [
  { icon: Brain, title: "Autonomous Reasoning", desc: "Agents that think, plan, and execute multi-step tasks independently." },
  { icon: Workflow, title: "Tool Use & APIs", desc: "Connecting LLMs to real-world tools, databases, and services." },
  { icon: MessageSquare, title: "Memory & Context", desc: "Persistent memory systems that let agents learn and adapt over time." },
  { icon: Sparkles, title: "Multi-Agent Systems", desc: "Orchestrating teams of specialized agents for complex workflows." },
];

const stats = [
  { value: "10+", label: "Years in AI/ML", icon: TrendingUp },
  { value: "50+", label: "Articles Published", icon: Lightbulb },
  { value: "5K+", label: "Professionals Trained", icon: Users },
  { value: "20+", label: "Enterprise Projects", icon: Zap },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-4 text-xs font-medium">
            AI Agent Expert & Educator
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Building the Future with{" "}
            <span className="text-primary">AI Agents</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            I'm <strong className="text-foreground">Rajeev Jain</strong> — I help teams and individuals understand, build, and deploy intelligent AI agent systems that transform how work gets done.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/resources">
                Explore Resources <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Highlights */}
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="text-center text-2xl font-bold sm:text-3xl">What You'll Find Here</h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
        A hub for everything AI Agents — articles, tools, tutorials, and hands-on training.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {highlights.map((h) => (
          <Link key={h.title} to={h.link}>
            <Card className="group h-full transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <h.icon className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-2">
                  <CardTitle className="text-lg">{h.title}</CardTitle>
                  <Badge variant="outline" className="text-[10px]">{h.tag}</Badge>
                </div>
                <CardDescription>{h.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="inline-flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>

    {/* What are AI Agents */}
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">What Are AI Agents?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          AI Agents are autonomous software systems powered by large language models that can reason, plan, and take actions to accomplish goals — going far beyond simple chatbots.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {concepts.map((c) => (
            <div key={c.title} className="rounded-xl border bg-card p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <s.icon className="h-5 w-5" />
            </div>
            <div className="text-3xl font-extrabold text-foreground">{s.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">Ready to Build Intelligent Agents?</h2>
        <p className="mx-auto mt-3 max-w-xl opacity-90">
          Whether you're just getting started or scaling enterprise AI — let's connect and accelerate your journey.
        </p>
        <Button asChild size="lg" variant="secondary" className="mt-6">
          <Link to="/contact">Let's Talk <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Index;
