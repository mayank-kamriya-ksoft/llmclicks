import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

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
  <footer className="border-t border-border relative">
    <div className="absolute inset-0 grain-overlay pointer-events-none" />
    <div className="container mx-auto px-4 py-16 relative z-10">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-xs font-bold text-accent-foreground">L</span>
            </div>
            <span className="font-display text-lg font-bold">LLMClicks</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-5">
            Leveraging cutting-edge AI technologies into your workflow, driving efficiency, innovation, and growth.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/company/llmclicks-ai/" },
              { icon: Twitter, href: "https://x.com/llmclicksai" },
              { icon: Facebook, href: "https://www.facebook.com/llmclicksai" },
              { icon: Instagram, href: "https://www.instagram.com/llmclicksai/" },
              { icon: Youtube, href: "https://www.youtube.com/@llmclicksai" },
            ].map((social) => (
              <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-colors">
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="font-display font-semibold text-sm mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} LLMClicks.ai. All rights reserved.</p>
        <div className="flex gap-5 text-xs text-muted-foreground">
          <span className="hover:text-accent cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-accent cursor-pointer transition-colors">Terms</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
