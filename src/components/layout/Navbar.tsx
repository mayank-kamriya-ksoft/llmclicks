import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Eye, BarChart3, FileText, Wand2, Activity, Compass, Zap, Globe, Search, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const featureLinks = [
  { label: "AI Visibility Audit", desc: "Comprehensive AI presence analysis", icon: Eye, to: "/features/ai-visibility-audit" },
  { label: "AI Visibility Tracker", desc: "Track brand mentions over time", icon: BarChart3, to: "/features/ai-visibility-tracker" },
  { label: "On-Page Optimizer", desc: "AI-friendly content optimization", icon: FileText, to: "/features/on-page-optimizer" },
  { label: "AI Query Mapper", desc: "Map queries to brand responses", icon: Compass, to: "/features/ai-query-mapper" },
  { label: "LLM Traffic Tracker", desc: "Monitor AI-driven traffic", icon: Activity, to: "/features/llm-traffic-tracker" },
  { label: "Optimization Wizard", desc: "Guided optimization workflows", icon: Wand2, to: "/features/optimization-wizard" },
];

const freeToolLinks = [
  { label: "AI Readiness Analyzer", desc: "Check your AI readiness score", icon: Zap, to: "/tools/ai-readiness-analyzer" },
  { label: "AI Domain Profiler", desc: "Profile your domain's AI presence", icon: Globe, to: "/tools/ai-domain-profiler" },
  { label: "AI Visibility Checker", desc: "Quick AI visibility check", icon: Search, to: "/tools/ai-visibility-checker" },
];

const simpleLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Comparison", to: "/comparison" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); setOpenDropdown(null); }, [location.pathname]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/90 backdrop-blur-2xl border-b border-border/60 shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-xs font-bold text-accent-foreground">L</span>
          </div>
          <span className="font-display text-lg font-bold tracking-tight">LLMClicks</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {simpleLinks.slice(0, 2).map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={cn(
                "px-3 py-2 text-sm transition-colors rounded-lg",
                location.pathname === link.to ? "text-accent font-medium" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Features Mega Menu Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("Features")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className={cn(
              "flex items-center gap-1 px-3 py-2 text-sm transition-colors rounded-lg",
              openDropdown === "Features" ? "text-accent font-medium" : "text-muted-foreground hover:text-foreground"
            )}>
              Features <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", openDropdown === "Features" && "rotate-180")} />
            </button>

            <AnimatePresence>
              {openDropdown === "Features" && (
                <motion.div
                  className="absolute -left-40 top-full pt-3"
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="w-[640px] rounded-2xl bg-card border border-border shadow-2xl shadow-foreground/5 overflow-hidden">
                    <div className="grid grid-cols-2 gap-0">
                      <div className="p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 px-3 mb-2">Platform</p>
                        {featureLinks.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-accent/5 transition-colors group/item"
                          >
                            <div className="mt-0.5 h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent/20 group-hover/item:scale-110 transition-all">
                              <item.icon className="h-4 w-4 text-accent" />
                            </div>
                            <div>
                              <p className="text-sm font-medium group-hover/item:text-accent transition-colors">{item.label}</p>
                              <p className="text-xs text-muted-foreground/70">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="p-4 bg-muted/30 border-l border-border">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 px-3 mb-2">Free Tools</p>
                        {freeToolLinks.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-accent/5 transition-colors group/item"
                          >
                            <div className="mt-0.5 h-8 w-8 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-coral/20 group-hover/item:scale-110 transition-all">
                              <item.icon className="h-4 w-4 text-coral" />
                            </div>
                            <div>
                              <p className="text-sm font-medium group-hover/item:text-coral transition-colors">{item.label}</p>
                              <p className="text-xs text-muted-foreground/70">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                        {/* CTA */}
                        <div className="mt-4 mx-3 p-4 rounded-xl bg-accent/5 border border-accent/10">
                          <p className="text-sm font-semibold mb-1">Start Free</p>
                          <p className="text-xs text-muted-foreground mb-3">Get your AI visibility audit — no signup required.</p>
                          <Button size="sm" className="w-full rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 text-xs group/cta" asChild>
                            <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">
                              Try it now <ArrowRight className="ml-1 h-3 w-3 group-hover/cta:translate-x-0.5 transition-transform" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {simpleLinks.slice(2).map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={cn(
                "px-3 py-2 text-sm transition-colors rounded-lg",
                location.pathname === link.to ? "text-accent font-medium" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-sm" asChild>
            <a href="https://app.llmclicks.ai" target="_blank" rel="noopener noreferrer">Log in</a>
          </Button>
          <Button size="sm" className="rounded-xl px-5 bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm shadow-accent/20" asChild>
            <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">Start free trial</a>
          </Button>
          <Button size="sm" variant="outline" className="rounded-xl px-5 hover:border-accent/20 hover:bg-accent/5" asChild>
            <a href="https://calendly.com/llmclicks" target="_blank" rel="noopener noreferrer">Book a demo</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="border-t border-border bg-card lg:hidden overflow-y-auto max-h-[calc(100vh-4rem)]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {simpleLinks.slice(0, 2).map((link) => (
                <Link key={link.label} to={link.to} className="block py-2.5 px-3 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent/5">
                  {link.label}
                </Link>
              ))}

              {/* Features accordion */}
              <div>
                <button
                  className="flex w-full items-center justify-between py-2.5 px-3 text-sm text-muted-foreground rounded-lg hover:bg-accent/5"
                  onClick={() => setOpenDropdown(openDropdown === "mFeatures" ? null : "mFeatures")}
                >
                  Features
                  <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdown === "mFeatures" && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {openDropdown === "mFeatures" && (
                    <motion.div
                      className="ml-3 space-y-0.5 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 px-3 pt-2 pb-1">Platform</p>
                      {featureLinks.map((item) => (
                        <Link key={item.to} to={item.to} className="flex items-center gap-2.5 py-2 px-3 text-sm text-muted-foreground hover:text-accent">
                          <item.icon className="h-4 w-4 text-accent/60" />
                          {item.label}
                        </Link>
                      ))}
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 px-3 pt-3 pb-1">Free Tools</p>
                      {freeToolLinks.map((item) => (
                        <Link key={item.to} to={item.to} className="flex items-center gap-2.5 py-2 px-3 text-sm text-muted-foreground hover:text-accent">
                          <item.icon className="h-4 w-4 text-coral/60" />
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {simpleLinks.slice(2).map((link) => (
                <Link key={link.label} to={link.to} className="block py-2.5 px-3 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent/5">
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 space-y-2">
                <Button className="w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">Start free trial</a>
                </Button>
                <Button variant="outline" className="w-full rounded-xl hover:border-accent/20" asChild>
                  <a href="https://calendly.com/llmclicks" target="_blank" rel="noopener noreferrer">Book a demo</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
