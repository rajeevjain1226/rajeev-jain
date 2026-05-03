interface StatItem {
  value: string;
  label: string;
  supporting: string;
}

const PROOF_NUMBERS: StatItem[] = [
  {
    value: "10+",
    label: "Years in Production AI",
    supporting:
      "A decade of hands-on work building systems that run in the real world, not in demo environments.",
  },
  {
    value: "20+",
    label: "Enterprise Projects Shipped",
    supporting:
      "Not scoped. Not proposed. Built, deployed, and running — across four industries.",
  },
  {
    value: "5,000+",
    label: "Professionals Trained",
    supporting:
      "Engineers, data scientists, and product leads who now build and evaluate AI without outside help.",
  },
  {
    value: "6 Weeks",
    label: "Average Time to Production",
    supporting:
      "From kickoff to a live system delivering measurable results — not from kickoff to a roadmap.",
  },
];

export default function ProofNumbersSection() {
  return (
    <section className="bg-primary text-primary-foreground py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {PROOF_NUMBERS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                {stat.value}
              </div>
              <div className="text-base font-semibold opacity-90">{stat.label}</div>
              <p className="text-sm opacity-70 leading-relaxed">{stat.supporting}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
