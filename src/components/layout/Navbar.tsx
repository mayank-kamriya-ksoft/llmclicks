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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">L</span>
          </div>
          <span className="font-display text-lg font-bold text-foreground">LLMClicks<span className="text-primary">.ai</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
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
                  "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                )}
                onClick={(e) => link.dropdown && e.preventDefault()}
              >
                {link.label}
                {link.dropdown && <ChevronDown className="h-3 w-3" />}
              </Link>
              {link.dropdown && openDropdown === link.label && (
                <div className="absolute left-0 top-full pt-1">
                  <div className="glass-card min-w-[220px] rounded-lg p-2 shadow-xl">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
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

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild>
            <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">Sign Up Free</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-background lg:hidden">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between py-2 text-sm font-medium text-muted-foreground"
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    >
                      {link.label}
                      <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdown === link.label && "rotate-180")} />
                    </button>
                    {openDropdown === link.label && (
                      <div className="ml-4 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="block py-1.5 text-sm text-muted-foreground hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.to}
                    className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Button className="w-full mt-4" asChild>
              <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">Sign Up Free</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
