import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

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

const resourceLinks = [
  { label: "Comparison", to: "/comparison" },
  { label: "AI Readiness Analyzer", to: "/tools/ai-readiness-analyzer" },
  { label: "AI Domain Profiler", to: "/tools/ai-domain-profiler" },
  { label: "AI Visibility Checker", to: "/tools/ai-visibility-checker" },
];

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-20">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="h-9 w-9 rounded-xl gradient-bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">L</span>
            </div>
            <span className="font-display text-xl font-bold">
              LLMClicks<span className="opacity-60">.ai</span>
            </span>
          </div>
          <p className="text-sm opacity-60 leading-relaxed max-w-sm mb-6">
            The AI visibility platform that helps you understand how large language models perceive and recommend your brand.
          </p>
          <a
            href="https://app.llmclicks.ai/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get Started Free <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider opacity-40">Company</h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm opacity-60 hover:opacity-100 transition-opacity">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider opacity-40">Features</h4>
          <ul className="space-y-3">
            {featureLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm opacity-60 hover:opacity-100 transition-opacity">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider opacity-40">Resources</h4>
          <ul className="space-y-3">
            {resourceLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm opacity-60 hover:opacity-100 transition-opacity">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-40">&copy; {new Date().getFullYear()} LLMClicks.ai. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm opacity-40">
          <span className="hover:opacity-100 transition-opacity cursor-pointer">Privacy</span>
          <span className="hover:opacity-100 transition-opacity cursor-pointer">Terms</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
