import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [url, setUrl] = useState("");

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-12 px-4">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 accent-mesh pointer-events-none" />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Geometric decorations */}
      <div className="absolute top-20 right-[15%] w-3 h-3 rounded-full bg-accent/30 animate-float" />
      <div className="absolute top-40 right-[25%] w-2 h-2 rounded-full bg-coral/30 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-32 left-[10%] w-16 h-16 border border-accent/10 rounded-2xl rotate-12 hidden md:block" />
      <div className="absolute bottom-20 right-[10%] w-12 h-12 border border-coral/10 rounded-full hidden md:block" />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow badge */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent font-medium mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Now in Public Beta
          </motion.div>

          <h1 className="font-display text-[3rem] md:text-[4.2rem] leading-[1.08] font-bold tracking-tight mb-5">
            Your brand in the
            <span className="relative mx-2">
              <span className="relative z-10">AI conversation</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-accent/15 -skew-x-2 rounded-sm" />
            </span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
            See how ChatGPT, Perplexity, and Claude talk about your brand — then optimize to own the narrative.
          </p>

          {/* URL input */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4 max-w-lg">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your website URL"
              className="flex-1 rounded-xl border border-border bg-card px-5 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all"
            />
            <Button className="rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-3 whitespace-nowrap shadow-lg shadow-accent/20" asChild>
              <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">
                Get your free report <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-accent" /> No credit card required</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-accent" /> Results in 30 seconds</span>
          </div>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          className="mt-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          <div className="rounded-2xl bg-card border border-border shadow-2xl shadow-foreground/5 overflow-hidden gradient-border">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/40 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-coral/60" />
                <div className="w-3 h-3 rounded-full bg-accent/40" />
                <div className="w-3 h-3 rounded-full bg-teal/40" />
              </div>
              <div className="flex-1 mx-8">
                <div className="h-6 rounded-lg bg-background border border-border max-w-md mx-auto flex items-center px-3">
                  <span className="text-[10px] text-muted-foreground">app.llmclicks.ai/dashboard</span>
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 md:p-8 bg-card">
              {/* Top prompt bar */}
              <div className="flex items-center gap-4 mb-6 p-4 rounded-xl bg-accent/5 border border-accent/10">
                <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Prompt</p>
                  <p className="text-sm font-medium">What is the top-rated AI visibility tool for SEO teams?</p>
                </div>
                <div className="ml-auto flex gap-2">
                  {["GPT", "Gem", "PPX", "Cld"].map((m) => (
                    <div key={m} className="h-7 w-7 rounded-lg bg-muted border border-border flex items-center justify-center text-[9px] font-bold text-muted-foreground">{m}</div>
                  ))}
                </div>
              </div>

              {/* Dashboard grid */}
              <div className="grid grid-cols-3 gap-4">
                {/* Searches Performed */}
                <div className="rounded-xl border border-border p-4">
                  <h4 className="text-xs font-semibold text-muted-foreground mb-3">Searches Performed</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-muted"><div className="h-full w-[78%] rounded-full bg-accent" /></div>
                      <span className="text-[10px] text-muted-foreground">Yes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-muted"><div className="h-full w-[22%] rounded-full bg-border" /></div>
                      <span className="text-[10px] text-muted-foreground">No</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1.5">
                    <p className="text-[10px] font-semibold text-muted-foreground">Top Queries</p>
                    {["AI visibility tools for SEO...", "Best brand monitoring in AI...", "How to track LLM mentions..."].map((q) => (
                      <div key={q} className="text-[10px] text-muted-foreground/70 py-1 px-2 rounded bg-muted/50 truncate">{q}</div>
                    ))}
                  </div>
                </div>

                {/* Searches Cited */}
                <div className="rounded-xl border border-border p-4">
                  <h4 className="text-xs font-semibold text-muted-foreground mb-3">Searches Cited</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-muted"><div className="h-full w-[65%] rounded-full bg-foreground/30" /></div>
                      <span className="text-[10px] text-muted-foreground">Yours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-muted"><div className="h-full w-[45%] rounded-full bg-border" /></div>
                      <span className="text-[10px] text-muted-foreground">Competitor</span>
                    </div>
                  </div>
                  <p className="text-[10px] font-semibold text-muted-foreground mb-1.5">Top Domains</p>
                  {["llmclicks.ai", "competitor1.com", "seotools.io"].map((d, i) => (
                    <div key={d} className="flex items-center gap-2 py-1">
                      <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-accent" : "bg-border"}`} />
                      <span className="text-[10px] text-muted-foreground">{d}</span>
                    </div>
                  ))}
                </div>

                {/* Sentiment */}
                <div className="rounded-xl border border-border p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-semibold text-muted-foreground">Sentiment</h4>
                    <span className="text-[10px] text-muted-foreground">% of total</span>
                  </div>
                  <div className="flex items-center justify-center my-4">
                    <div className="relative w-20 h-20">
                      <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
                        <circle cx="18" cy="18" r="15.5" fill="none" stroke="hsl(var(--border))" strokeWidth="3" />
                        <circle cx="18" cy="18" r="15.5" fill="none" stroke="hsl(var(--accent))" strokeWidth="3" strokeDasharray="64 36" strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold">64%</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent" /> Positive</span>
                      <span className="font-medium">64%</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-muted" /> Mixed</span>
                      <span className="font-medium">30%</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-coral" /> Negative</span>
                      <span className="font-medium">6%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm font-medium text-muted-foreground mb-5">Trusted by over 500 companies and agencies</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {["AgencyCo", "MarketFlow", "SEO Labs", "DataBridge", "GrowthPulse", "BrandAI"].map((name) => (
              <span key={name} className="font-display font-bold text-lg text-foreground">{name}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
