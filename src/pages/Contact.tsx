import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Bot, Github, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Get in Touch</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Have a question about AI agents, interested in training, or want to collaborate? I'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Bio card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Bot className="h-10 w-10" />
                </div>
                <h3 className="mt-4 text-lg font-bold">Rajeev Jain</h3>
                <p className="text-sm text-muted-foreground">AI Agent Expert & Educator</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  With over a decade of experience in AI/ML, I specialize in designing and deploying autonomous agent systems for enterprises and startups alike.
                </p>
              </CardContent>
            </Card>

            {/* Contact info */}
            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">hello@rajeevjain.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">San Francisco, CA</span>
                </div>
              </CardContent>
            </Card>

            {/* Social */}
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-3 text-sm font-semibold">Follow & Connect</h4>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Github, href: "#", label: "GitHub" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl font-bold">Send a Message</h2>
                <p className="mt-1 text-sm text-muted-foreground">Fill out the form below and I'll respond within 24 hours.</p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      required
                      placeholder="What's this about?"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell me more..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
