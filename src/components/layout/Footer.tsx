import { Link } from "react-router-dom";

const cols = [
  {
    title: "Product",
    links: [
      { label: "AI Visibility Audit", to: "/features/ai-visibility-audit" },
      { label: "AI Visibility Tracker", to: "/features/ai-visibility-tracker" },
      { label: "On-Page Optimizer", to: "/features/on-page-optimizer" },
      { label: "AI Query Mapper", to: "/features/ai-query-mapper" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", to: "/blog" },
      { label: "Comparison", to: "/comparison" },
      { label: "AI Readiness Analyzer", to: "/tools/ai-readiness-analyzer" },
      { label: "AI Domain Profiler", to: "/tools/ai-domain-profiler" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

const Footer = () => (
  <footer className="border-t border-border">
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-lg bg-foreground flex items-center justify-center">
              <span className="text-xs font-bold text-background">L</span>
            </div>
            <span className="font-display text-lg font-bold">LLMClicks</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            See how AI assistants talk about your brand, and what you can do about it.
          </p>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="font-display font-semibold text-sm mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} LLMClicks.ai. All rights reserved.</p>
        <div className="flex gap-5 text-xs text-muted-foreground">
          <span className="hover:text-foreground cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-foreground cursor-pointer transition-colors">Terms</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
