import { Badge } from "@/components/ui/badge";
import { Server, Flame, Scale, Code2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Differentiator {
  icon: LucideIcon;
  title: string;
  body: string;
}

const DIFFERENTIATORS = {
  eyebrow: "Why Rajeev",
  h2: "You've Seen the Slide Decks. Here's What's Different.",
  items: [
    {
      icon: Server,
      title: "Production Track Record, Not Just Credentials",
      body: "20+ enterprise AI systems have been built and deployed — not scoped, not proposed, not prototyped. When you ask for references, you get names of production systems and the teams who run them.",
    },
    {
      icon: Flame,
      title: "You Leave Capable, Not Dependent",
      body: "Rajeev has trained 5,000+ professionals — and he brings that same teaching discipline into every implementation engagement. When the project ends, your team owns the system and knows how to extend it. There is no upsell into a managed-services retainer.",
    },
    {
      icon: Scale,
      title: "No Vendor. No Bias. No Hidden Incentive.",
      body: "Rajeev has no software partnerships, reseller agreements, or referral arrangements with any AI platform vendor. His recommendation is based on what's right for your system — not what earns him a margin.",
    },
    {
      icon: Code2,
      title: "Practitioner First, Advisor Second",
      body: "Rajeev has spent 10+ years writing production AI systems, not writing about them. He works at the code and architecture level, which means he can spot problems early, make fast technical decisions, and deliver faster than a team that has to escalate everything to a senior partner.",
    },
  ] satisfies Differentiator[],
};

export default function DifferentiatorsSection() {
  return (
    <section className="bg-muted/30 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <Badge variant="outline">{DIFFERENTIATORS.eyebrow}</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
            {DIFFERENTIATORS.h2}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DIFFERENTIATORS.items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
