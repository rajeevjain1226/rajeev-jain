import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import rajeevPhoto from "@/assets/rajeev-jain.jpeg";

const ABOUT = {
  eyebrow: "About Rajeev",
  h2: "I've Been Shipping AI Systems for 10 Years. I Know What Gets Things Stuck.",
  paragraphs: [
    "I started in AI and machine learning when most enterprise software teams were still debating whether machine learning was a real discipline or an academic hobby. Over a decade, I've worked inside companies across manufacturing, logistics, financial services, and healthcare — not as an outside advisor writing recommendations, but as the person accountable for the system actually working in production.",
    "At some point I started teaching — first informally, then through structured training programs — because I kept seeing the same pattern: companies could hire a consultant to build something, but no one inside the organization understood it well enough to keep it running. I've now trained 5,000+ engineers, data scientists, and product leaders. That teaching work changed how I approach implementations. Every system I build now includes a deliberate knowledge transfer plan, because a system your team can't maintain is not really finished.",
    "I work with a small number of clients at a time — four per quarter — because hands-on work can't be delegated without losing the thing that makes it work. If you're a mid-market technology leader trying to get something real into production, I'd like to spend 30 minutes understanding your situation.",
  ],
  credentials: [
    "10+ years of hands-on AI and machine learning in production environments",
    "20+ enterprise AI systems deployed — across manufacturing, logistics, fintech, and healthcare",
    "5,000+ engineers and product professionals trained in practical AI skills",
  ],
};

export default function AboutSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative w-full max-w-sm mx-auto md:mx-0">
              <img
                src={rajeevPhoto}
                alt="Rajeev Jain"
                className="w-full rounded-2xl shadow-xl object-cover aspect-[4/5]"
              />
            </div>
            <ul className="flex flex-col gap-3">
              {ABOUT.credentials.map((cred) => (
                <li key={cred} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{cred}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <Badge variant="outline" className="w-fit text-sm font-medium">
              {ABOUT.eyebrow}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {ABOUT.h2}
            </h2>
            <div className="flex flex-col gap-4">
              {ABOUT.paragraphs.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
