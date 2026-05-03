import { Badge } from "@/components/ui/badge";

const SOLUTION = {
  eyebrow: "The Solution",
  h2: "You Don't Need More Advice. You Need a System in Production.",
  paragraphs: [
    "Most AI consultants deliver a roadmap document, collect their fee, and leave your team to figure out the hard part alone. That's why pilots stall — the gap between strategy and execution has no one in it. Your PoC gathers dust not because the idea was bad, but because no one with a production track record was accountable for crossing the finish line.",
    "Rajeev Jain closes that gap. With 10+ years of hands-on AI and machine learning work and 20+ enterprise systems taken all the way to production deployment, he works inside your team from diagnosis through go-live. He doesn't hand off a slide deck — he ships the system. And because he's trained 5,000+ professionals along the way, your team leaves every engagement knowing how to run, extend, and improve the system without him.",
    "Whether you need a clear AI strategy, a custom-built implementation, a team that can execute independently, or an audit of a system that isn't performing — there's a path forward that starts with a single 30-minute call.",
  ],
  proofLine:
    "20+ enterprise teams have gone from stalled pilot to production deployment in under 8 weeks.",
};

export default function SolutionSection() {
  return (
    <section className="bg-muted/30 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-4 mb-8">
            <Badge variant="outline" className="w-fit">
              {SOLUTION.eyebrow}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {SOLUTION.h2}
            </h2>
          </div>
          <div className="flex flex-col gap-5 mb-8">
            {SOLUTION.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-lg">
                {p}
              </p>
            ))}
          </div>
          <div className="border-l-4 border-primary bg-primary/5 px-4 py-3 rounded-r-md">
            <p className="text-foreground font-medium leading-relaxed">
              {SOLUTION.proofLine}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
