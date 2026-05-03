import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import rajeevPhoto from "@/assets/rajeev-jain.jpeg";

const HERO = {
  eyebrow: "AI Strategy & Implementation",
  h1: "From Stalled Pilot to Production AI in 6 Weeks",
  subheadline:
    "You've run the proof of concept. Now you need something you can show the board — a working system, in production, delivering measurable results. Rajeev Jain helps mid-market tech leaders ship production-ready AI without another wasted quarter.",
  primaryCta: "Book My Free Strategy Call",
  trustSignal:
    "20+ enterprise AI systems in production across manufacturing, logistics, financial services, and healthcare",
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <Badge variant="outline" className="w-fit text-sm font-medium">
              {HERO.eyebrow}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-foreground">
              {HERO.h1}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {HERO.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="font-semibold">
                <Link to="/contact">{HERO.primaryCta}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground border-l-2 border-primary/40 pl-3">
              {HERO.trustSignal}
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <img
                src={rajeevPhoto}
                alt="Rajeev Jain"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
