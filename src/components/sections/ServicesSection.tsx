import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Wrench, GraduationCap, ClipboardCheck, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
}

const SERVICES = {
  eyebrow: "What We Do",
  h2: "Four Ways to Move From Pilot to Production",
  subheadline:
    "Every engagement is scoped to your current stage — whether you're starting from scratch, stuck mid-build, or trying to fix something already live.",
  cards: [
    {
      icon: MapPin,
      title: "AI Strategy & Roadmap",
      description:
        "You'll walk away with a specific, sequenced plan for which AI systems to build first, in what order, and how to make the business case to your board and finance team.",
      cta: "Learn About Strategy Engagements",
    },
    {
      icon: Wrench,
      title: "Custom AI Implementation",
      description:
        "Rajeev's team designs and builds your AI system alongside your engineers — hands on keyboard, not on the sideline — and doesn't hand off until it's live in production.",
      cta: "See How Implementations Work",
    },
    {
      icon: GraduationCap,
      title: "Team Training & Enablement",
      description:
        "Your engineers and product leads get the practical AI skills they need to build, evaluate, and maintain AI systems without outside help — not a theory course, a working capability.",
      cta: "Explore Training Programs",
    },
    {
      icon: ClipboardCheck,
      title: "AI Audit & Optimization",
      description:
        "If you have an AI system that's underperforming, unreliable, or too expensive to run, an independent audit surfaces exactly what's wrong and what to fix first.",
      cta: "Request an AI Audit",
    },
  ] satisfies ServiceCard[],
};

export default function ServicesSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <Badge variant="outline">{SERVICES.eyebrow}</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
            {SERVICES.h2}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            {SERVICES.subheadline}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.cards.map(({ icon: Icon, title, description, cta }) => (
            <Card key={title} className="border border-border">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  {cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
