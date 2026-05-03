import { Badge } from "@/components/ui/badge";

const SOCIAL_PROOF = {
  label: "Trusted By",
  items: [
    "Series B HealthTech",
    "Regional Logistics Operator",
    "Mid-Market Financial Services Firm",
    "Fortune 1000 Manufacturer",
    "PE-Backed SaaS Platform",
  ],
  pullQuote:
    "Rajeev was the first consultant who actually shipped something — VP of Technology, Series B SaaS",
};

export default function SocialProofBar() {
  return (
    <section className="bg-muted/50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
          {SOCIAL_PROOF.label}
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {SOCIAL_PROOF.items.map((item) => (
            <Badge key={item} variant="outline" className="text-sm px-3 py-1">
              {item}
            </Badge>
          ))}
        </div>
        <p className="text-center text-sm italic text-muted-foreground max-w-xl mx-auto">
          &ldquo;{SOCIAL_PROOF.pullQuote}&rdquo;
        </p>
      </div>
    </section>
  );
}
