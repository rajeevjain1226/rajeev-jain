import { Badge } from "@/components/ui/badge";

interface Step {
  number: string;
  title: string;
  body: string;
}

const HOW_IT_WORKS = {
  eyebrow: "How It Works",
  h2: "Three Steps From First Call to Production System",
  subheadline:
    "Getting started doesn't require a perfect data strategy, a full team, or a signed contract — it requires one honest conversation.",
  steps: [
    {
      number: "01",
      title: "Discovery & Diagnosis",
      body: "In a focused 30-minute call, Rajeev asks the questions most consultants skip — about your data, your team's real capacity, what's actually blocking you, and what a win looks like to your board. You leave with a clear picture of what's workable right now, at no cost and no obligation.",
    },
    {
      number: "02",
      title: "Design & Build",
      body: "Rajeev scopes the engagement to fit your timeline and budget, then works directly inside your team to design and build the system — using whatever stack is right for you, not whatever he has a partnership incentive to sell. Every decision is explained, documented, and transferable.",
    },
    {
      number: "03",
      title: "Deploy & Optimize",
      body: "The engagement doesn't end at a handover document — it ends when the system is live, tested, and your team knows how to run it. After go-live, a structured review confirms the system is performing against the metrics you defined in step one.",
    },
  ] satisfies Step[],
};

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-muted/30 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <Badge variant="outline">{HOW_IT_WORKS.eyebrow}</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
            {HOW_IT_WORKS.h2}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            {HOW_IT_WORKS.subheadline}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_IT_WORKS.steps.map(({ number, title, body }) => (
            <div key={number} className="flex flex-col gap-4">
              <span className="text-5xl font-bold text-primary/20 leading-none">
                {number}
              </span>
              <h3 className="text-xl font-semibold text-foreground">{title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
