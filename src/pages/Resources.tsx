import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  Code2,
  ExternalLink,
  FileText,
  Lightbulb,
  Search,
  Wrench,
  Layers,
} from "lucide-react";

type Category = "All" | "Getting Started" | "Advanced" | "Use Cases" | "Tools & Frameworks";

const categories: Category[] = ["All", "Getting Started", "Advanced", "Use Cases", "Tools & Frameworks"];

const categoryIcons: Record<Category, typeof BookOpen> = {
  All: Layers,
  "Getting Started": BookOpen,
  Advanced: Lightbulb,
  "Use Cases": FileText,
  "Tools & Frameworks": Code2,
};

const resources = [
  {
    title: "Introduction to AI Agents",
    description: "A beginner-friendly overview of what AI agents are, how they work, and why they matter for the future of software.",
    category: "Getting Started" as Category,
    type: "Article",
    link: "#",
  },
  {
    title: "Building Your First Agent with LangChain",
    description: "Step-by-step tutorial on creating a simple ReAct agent using LangChain and OpenAI GPT-4.",
    category: "Getting Started" as Category,
    type: "Tutorial",
    link: "#",
  },
  {
    title: "ReAct Pattern Deep Dive",
    description: "Understanding the Reasoning + Acting pattern that powers modern AI agent architectures.",
    category: "Advanced" as Category,
    type: "Guide",
    link: "#",
  },
  {
    title: "Multi-Agent Orchestration",
    description: "How to design and orchestrate systems where multiple specialized agents collaborate on complex tasks.",
    category: "Advanced" as Category,
    type: "Article",
    link: "#",
  },
  {
    title: "AI Agents in Customer Support",
    description: "Real-world case study of deploying AI agents to handle tier-1 support, reducing response times by 80%.",
    category: "Use Cases" as Category,
    type: "Case Study",
    link: "#",
  },
  {
    title: "Autonomous Code Review Agents",
    description: "How engineering teams are using AI agents to automate code reviews and improve code quality.",
    category: "Use Cases" as Category,
    type: "Case Study",
    link: "#",
  },
  {
    title: "LangChain Framework",
    description: "The most popular framework for building LLM-powered applications and agents with composable components.",
    category: "Tools & Frameworks" as Category,
    type: "Tool",
    link: "#",
  },
  {
    title: "CrewAI — Multi-Agent Platform",
    description: "A framework for orchestrating role-playing autonomous AI agents that work together on complex tasks.",
    category: "Tools & Frameworks" as Category,
    type: "Tool",
    link: "#",
  },
  {
    title: "AutoGen by Microsoft",
    description: "An open-source framework for building multi-agent conversational systems with human-in-the-loop support.",
    category: "Tools & Frameworks" as Category,
    type: "Tool",
    link: "#",
  },
  {
    title: "Agent Memory Architectures",
    description: "Exploring different approaches to giving AI agents long-term memory using vector stores and knowledge graphs.",
    category: "Advanced" as Category,
    type: "Guide",
    link: "#",
  },
  {
    title: "AI Agents for Data Analysis",
    description: "How data teams leverage agents to automate exploratory data analysis, report generation, and anomaly detection.",
    category: "Use Cases" as Category,
    type: "Case Study",
    link: "#",
  },
  {
    title: "Prompt Engineering for Agents",
    description: "Best practices for designing system prompts that make agents more reliable, focused, and useful.",
    category: "Getting Started" as Category,
    type: "Guide",
    link: "#",
  },
];

const typeIcons: Record<string, typeof BookOpen> = {
  Article: FileText,
  Tutorial: BookOpen,
  Guide: Lightbulb,
  "Case Study": Layers,
  Tool: Wrench,
};

const Resources = () => {
  const [active, setActive] = useState<Category>("All");
  const [search, setSearch] = useState("");

  const filtered = resources.filter((r) => {
    const matchCat = active === "All" || r.category === active;
    const matchSearch =
      !search ||
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">AI Agent Resources</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Curated articles, tutorials, case studies, and tools to help you master AI agents at every level.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {/* Search & Filters */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-sm flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const Icon = categoryIcons[c];
              return (
                <Button
                  key={c}
                  variant={active === c ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActive(c)}
                  className="gap-1.5"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {c}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r, i) => {
            const TypeIcon = typeIcons[r.type] || FileText;
            return (
              <a key={i} href={r.link} target="_blank" rel="noopener noreferrer">
                <Card className="group h-full transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="gap-1 text-[10px]">
                        <TypeIcon className="h-3 w-3" />
                        {r.type}
                      </Badge>
                      <Badge variant="secondary" className="text-[10px]">{r.category}</Badge>
                    </div>
                    <CardTitle className="mt-2 text-base">{r.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{r.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="inline-flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Read more <ExternalLink className="ml-1 h-3 w-3" />
                    </span>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center text-muted-foreground">
            <Search className="mx-auto h-10 w-10 opacity-40" />
            <p className="mt-3">No resources found. Try a different search or category.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Resources;
