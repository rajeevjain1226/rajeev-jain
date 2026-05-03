import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const TESTIMONIALS = {
  eyebrow: "What Clients Say",
  h2: "Don't Take Our Word for It. Take Theirs.",
  items: [
    {
      quote:
        "We had a PoC that had been sitting on a shelf for seven months. In six weeks Rajeev had it in production and our ops team using it daily. He also spent time with our engineers so they actually understood the system — which no one else had bothered to do. We haven't needed outside help since.",
      name: "Sandra Mehta",
      title: "VP of Technology",
      company: "Regional Logistics Firm",
    },
    {
      quote:
        "I was skeptical going into the strategy engagement — I'd paid for roadmaps before and they just collected dust. This one was different because Rajeev scoped everything against our actual constraints, not a hypothetical team with unlimited budget. The first item on the roadmap was in production before the document was three months old.",
      name: "David Kowalski",
      title: "Head of Digital Transformation",
      company: "Mid-Market Manufacturer",
    },
    {
      quote:
        "The AI audit was the best money we spent on AI last year, and it cost a fraction of what we'd already wasted. Rajeev identified the root cause of our model performance issues in two weeks, gave us a fix-it list we could execute ourselves, and saved us from renewing a vendor contract that wasn't delivering.",
      name: "Priya Nair",
      title: "Chief Technology Officer",
      company: "Series B HealthTech",
    },
  ] satisfies Testimonial[],
  cta: "See How We Work Together",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function TestimonialsSection() {
  return (
    <section className="bg-muted/30 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <Badge variant="outline" className="text-sm font-medium">
            {TESTIMONIALS.eyebrow}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {TESTIMONIALS.h2}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.items.map((item) => (
            <Card key={item.name} className="flex flex-col">
              <CardContent className="flex flex-col gap-4 pt-6 flex-1">
                <span className="text-5xl font-serif text-primary/30 leading-none select-none">&ldquo;</span>
                <p className="text-muted-foreground leading-relaxed flex-1">{item.quote}</p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                      {getInitials(item.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.title}, {item.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button asChild size="lg">
            <Link to="/contact">{TESTIMONIALS.cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
