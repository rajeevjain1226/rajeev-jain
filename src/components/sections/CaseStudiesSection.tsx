import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CaseStudy {
  clientType: string;
  problem: string;
  result: string;
  quote: string;
}

const CASE_STUDIES = {
  eyebrow: "Results",
  h2: "Real Systems, Deployed. Real Numbers, Earned.",
  cards: [
    {
      clientType: "Mid-Market Logistics Operator",
      problem:
        "Their AI routing pilot had been running for eight months with no path to production — the team disagreed on architecture and leadership had lost confidence.",
      result:
        "Production deployment in 6 weeks. 23% reduction in route planning time. System fully maintained by internal team within 90 days.",
      quote:
        "We'd been spinning for months. Rajeev came in and shipped it. That's the whole story.",
    },
    {
      clientType: "Series B HealthTech",
      problem:
        "The company had bought an AI platform from a large vendor, but nine months in, the model accuracy wasn't meeting clinical thresholds and no one knew why.",
      result:
        "Independent audit identified two root-cause data issues. Model accuracy improved by 31% within 4 weeks. Vendor contract renegotiated based on audit findings.",
      quote:
        "He found in two weeks what our vendor spent six months telling us wasn't a problem.",
    },
    {
      clientType: "Regional Financial Services Firm",
      problem:
        "Senior leadership wanted an AI strategy but couldn't get internal alignment on priorities — every department had a different ask and the VP of Tech had no way to rank them.",
      result:
        "Board-ready AI roadmap delivered in 3 weeks. First system from the roadmap in production 7 weeks after kickoff. CFO approved full-year AI budget within one quarter.",
      quote:
        "The roadmap gave us language the CFO could act on. The deployment gave us proof to stand behind.",
    },
  ] satisfies CaseStudy[],
  cta: "Get Your Free AI Readiness Assessment",
};

export default function CaseStudiesSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <Badge variant="outline">{CASE_STUDIES.eyebrow}</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
            {CASE_STUDIES.h2}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {CASE_STUDIES.cards.map(({ clientType, problem, result, quote }) => (
            <Card key={clientType} className="border border-border flex flex-col">
              <CardContent className="pt-6 flex flex-col gap-4 flex-1">
                <Badge variant="secondary" className="w-fit text-xs">
                  {clientType}
                </Badge>
                <p className="text-muted-foreground text-sm leading-relaxed">{problem}</p>
                <div className="bg-primary/10 rounded-md px-3 py-3">
                  <p className="text-sm font-medium text-foreground leading-relaxed">
                    {result}
                  </p>
                </div>
                <p className="text-sm italic text-muted-foreground mt-auto">
                  &ldquo;{quote}&rdquo;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild size="lg">
            <Link to="/contact">{CASE_STUDIES.cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
