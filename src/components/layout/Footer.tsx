import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const featureLinks = [
  { label: "AI Visibility Audit", to: "/features/ai-visibility-audit" },
  { label: "AI Visibility Tracker", to: "/features/ai-visibility-tracker" },
  { label: "On-Page Optimizer", to: "/features/on-page-optimizer" },
  { label: "AI Query Mapper", to: "/features/ai-query-mapper" },
];

const supportLinks = [
  { label: "Comparison", to: "/comparison" },
  { label: "AI Readiness Analyzer", to: "/tools/ai-readiness-analyzer" },
  { label: "AI Domain Profiler", to: "/tools/ai-domain-profiler" },
  { label: "AI Visibility Checker", to: "/tools/ai-visibility-checker" },
];

const Footer = () => (
  <footer className="border-t border-border/50 bg-background">
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">L</span>
            </div>
            <span className="font-display text-lg font-bold">LLMClicks<span className="text-primary">.ai</span></span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Transform your AI visibility with smarter SEO insights. Understand how LLMs see your brand and optimize accordingly.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Features</h4>
          <ul className="space-y-2">
            {featureLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            {supportLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-border/50 pt-8 text-center">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} LLMClicks.ai. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
