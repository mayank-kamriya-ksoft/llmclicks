import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const featureLinks = [
  { label: "AI Visibility Audit", to: "/features/ai-visibility-audit" },
  { label: "AI Visibility Tracker", to: "/features/ai-visibility-tracker" },
  { label: "On-Page Optimizer", to: "/features/on-page-optimizer" },
  { label: "AI Query Mapper", to: "/features/ai-query-mapper" },
  { label: "LLM Traffic Tracker", to: "/features/llm-traffic-tracker" },
  { label: "Optimization Wizard", to: "/features/optimization-wizard" },
];

const freeToolLinks = [
  { label: "AI Readiness Analyzer", to: "/tools/ai-readiness-analyzer" },
  { label: "AI Domain Profiler", to: "/tools/ai-domain-profiler" },
  { label: "AI Visibility Checker", to: "/tools/ai-visibility-checker" },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Features", to: "#", dropdown: featureLinks },
  { label: "Pricing", to: "/pricing" },
  { label: "Comparison", to: "/comparison" },
  { label: "Free Tools", to: "#", dropdown: freeToolLinks },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-foreground flex items-center justify-center">
            <span className="text-xs font-bold text-background">L</span>
          </div>
          <span className="font-display text-lg font-bold">LLMClicks</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={link.to}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm transition-colors rounded-lg",
                  location.pathname === link.to ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                )}
                onClick={(e) => link.dropdown && e.preventDefault()}
              >
                {link.label}
                {link.dropdown && <ChevronDown className="h-3 w-3" />}
              </Link>
              {link.dropdown && openDropdown === link.label && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="min-w-[220px] rounded-xl bg-card border border-border p-1.5 shadow-lg">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-sm" asChild>
            <a href="https://app.llmclicks.ai" target="_blank" rel="noopener noreferrer">Log in</a>
          </Button>
          <Button size="sm" className="rounded-full px-5 bg-foreground text-background hover:bg-foreground/90" asChild>
            <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">Start free trial</a>
          </Button>
          <Button size="sm" variant="outline" className="rounded-full px-5" asChild>
            <a href="https://calendly.com/llmclicks" target="_blank" rel="noopener noreferrer">Book a demo</a>
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-card lg:hidden">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between py-2.5 px-3 text-sm text-muted-foreground rounded-lg hover:bg-secondary"
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    >
                      {link.label}
                      <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdown === link.label && "rotate-180")} />
                    </button>
                    {openDropdown === link.label && (
                      <div className="ml-3 space-y-0.5">
                        {link.dropdown.map((item) => (
                          <Link key={item.to} to={item.to} className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={link.to} className="block py-2.5 px-3 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary" onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 space-y-2">
              <Button className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90" asChild>
                <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">Start free trial</a>
              </Button>
              <Button variant="outline" className="w-full rounded-full" asChild>
                <a href="https://calendly.com/llmclicks" target="_blank" rel="noopener noreferrer">Book a demo</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
