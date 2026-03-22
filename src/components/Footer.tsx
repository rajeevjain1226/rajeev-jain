import { Link } from "react-router-dom";
import { Bot, Linkedin, Twitter, Github, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-muted/40">
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <Bot className="h-5 w-5 text-primary" />
            Rajeev Jain
          </Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            AI Agent expert, educator, and thought leader helping teams and individuals harness the power of autonomous AI systems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "Resources", path: "/resources" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-foreground/80 hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Connect
          </h4>
          <div className="flex gap-3">
            {[
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Mail, href: "mailto:hello@rajeevjain.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Rajeev Jain. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
