import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, UserCheck, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProblemCard {
  icon: LucideIcon;
  title: string;
  body: string;
}

const PROBLEM = {
  eyebrow: "The Problem",
  h2: "Your AI Pilot Is Running. Your Board Is Not Impressed.",
  intro:
    "Sixty-five percent of enterprise AI initiatives never make it past proof of concept. If you've been exploring AI for twelve months and have demos but no deployed system, you're in the majority — and the gap between pilot and production is where budgets die and reputations get damaged.",
  cards: [
    {
      icon: Timer,
      title: "The Pilot That Never Ends",
      body: "You approved a proof of concept six months ago. It still isn't in production. Every week it stays in demo mode, your engineering team loses faith and your competitors move further ahead.",
    },
    {
      icon: UserCheck,
      title: "Your Credibility Is on the Line",
      body: "You championed this AI initiative internally. If it stalls again, the failure doesn't land on the vendor — it lands on you. A second failed engagement is not a technical problem; it's a career problem.",
    },
    {
      icon: Search,
      title: "You Can't Tell Good from Bad",
      body: "Without deep AI expertise in-house, you're buying capability claims instead of outcomes. You can't evaluate whether the approach is sound — which means you can't catch problems until it's too late.",
    },
  ] satisfies ProblemCard[],
  secondaryCta: "Sound Familiar? Let's Fix It",
};

export default function ProblemSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <Badge variant="outline">{PROBLEM.eyebrow}</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
            {PROBLEM.h2}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            {PROBLEM.intro}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {PROBLEM.cards.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="border border-border">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">{PROBLEM.secondaryCta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
