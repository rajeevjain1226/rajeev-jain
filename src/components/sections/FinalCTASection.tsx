import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface FormState {
  full_name: string;
  work_email: string;
  company_name: string;
  ai_challenge: string;
}

const FINAL_CTA = {
  eyebrow: "Let's Talk",
  h2: "One Call Could End Your AI Pilot Purgatory",
  subheadline:
    "No commitment — just a 30-minute conversation about your AI roadmap and what it would actually take to get something live.",
  submitLabel: "Book My Free Strategy Call",
  privacyNote: "Your information stays private — no spam, no third-party sharing, ever.",
};

const EMPTY_FORM: FormState = {
  full_name: "",
  work_email: "",
  company_name: "",
  ai_challenge: "",
};

export default function FinalCTASection() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const { toast } = useToast();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast({
      title: "Call booked!",
      description: "Rajeev will be in touch within 24 hours.",
    });
    setForm(EMPTY_FORM);
  }

  return (
    <section id="contact" className="bg-muted/30 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col items-center text-center gap-4">
            <Badge variant="outline" className="text-sm font-medium">
              {FINAL_CTA.eyebrow}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {FINAL_CTA.h2}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {FINAL_CTA.subheadline}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="full_name">Full Name</Label>
              <Input
                id="full_name"
                name="full_name"
                type="text"
                value={form.full_name}
                onChange={handleChange}
                placeholder="Jane Smith"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="work_email">Work Email</Label>
              <Input
                id="work_email"
                name="work_email"
                type="email"
                value={form.work_email}
                onChange={handleChange}
                placeholder="jane@company.com"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="company_name">Company Name</Label>
              <Input
                id="company_name"
                name="company_name"
                type="text"
                value={form.company_name}
                onChange={handleChange}
                placeholder="Acme Corp"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ai_challenge">Your AI Challenge</Label>
              <Textarea
                id="ai_challenge"
                name="ai_challenge"
                value={form.ai_challenge}
                onChange={handleChange}
                placeholder="Briefly describe where you are with AI today and what's blocking you..."
                rows={4}
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full font-semibold">
              {FINAL_CTA.submitLabel}
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              {FINAL_CTA.privacyNote}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
