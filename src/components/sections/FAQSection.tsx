import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = {
  eyebrow: "Common Questions",
  h2: "The Questions You're Probably Already Asking",
  items: [
    {
      question:
        "We've hired consultants before and got a roadmap document and nothing else. Why is this different?",
      answer:
        "Because Rajeev's engagements don't end at a document — they end when a system is live in production. The 20+ enterprise deployments are the evidence. If you want, ask for references: you'll get contact details for production systems and the teams running them, not a deck of past project names. The Training & Enablement component also means your team can maintain and extend the system after the engagement ends, which is the structural fix to the 'nothing ever sticks' problem.",
    },
    {
      question: "Our data is a mess. Are we even ready for AI?",
      answer:
        "Messy data is the norm, not an exception — more than 50% of abandoned AI pilots cite data quality issues as the cause. An AI Audit & Readiness Assessment is specifically designed to start here: it surfaces what's workable now versus what needs fixing first, so you're not spending months on prerequisites before any real work begins. The initial strategy call will give you a clear picture of your actual starting point, at no cost.",
    },
    {
      question: "I don't have budget approved for this yet. Is it worth talking?",
      answer:
        "Yes — because the free strategy call is specifically useful for building your internal budget case. It produces a scoped view of what an engagement would deliver, in language your CFO and board can act on. 'AI consulting' is a hard line item to defend; 'a system that reduces route planning time by 20% in 6 weeks at X cost' is not. If you need to build the internal case before committing, that's exactly what the first call is for.",
    },
    {
      question: "How long does a typical engagement take?",
      answer:
        "It depends on scope. An AI Strategy & Roadmap engagement typically runs 3–4 weeks. A full implementation — from design through production deployment — averages 6–8 weeks. An AI Audit is usually complete within 2–3 weeks. Team Training programs run 1–4 weeks depending on depth. All timelines are set at the scoping stage, with clear milestones, so there are no surprises.",
    },
    {
      question: "What size companies do you typically work with?",
      answer:
        "Mid-market companies in the $10M–$500M revenue range, typically 50–500 employees, in operations-heavy industries: manufacturing, logistics, financial services, and healthcare. These are organizations that have the scale to benefit from production AI systems but don't have a large internal AI team to execute independently. Smaller companies can often benefit from a strategy or training engagement before a full implementation.",
    },
    {
      question: "What's the first step?",
      answer:
        "Book a free 30-minute strategy call. Rajeev will ask about your current situation — what you've already tried, what's blocking you, what a win looks like for your board — and give you an honest assessment of what's realistic and in what timeframe. There's no sales script and no obligation. If the fit isn't right, he'll tell you that too.",
    },
  ] satisfies FAQItem[],
};

export default function FAQSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <Badge variant="outline" className="text-sm font-medium">
            {FAQ.eyebrow}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {FAQ.h2}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {FAQ.items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
