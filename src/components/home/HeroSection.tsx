import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [url, setUrl] = useState("");

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-12 px-4">
      {/* Accent blob - top right */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] accent-blob opacity-70 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-[3.2rem] md:text-[4.5rem] leading-[1.05] font-bold tracking-tight mb-5">
            Unlock the new way to{" "}
            <span className="font-extrabold">reach customers</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
            See how AI assistants like ChatGPT, Perplexity, and Claude talk about your brand, and what you can do about it.
          </p>

          {/* URL input */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4 max-w-lg">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your website URL"
              className="flex-1 rounded-full border border-border bg-card px-5 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-6 py-3 whitespace-nowrap" asChild>
              <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">
                Get your free report
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-lime" /> No credit card required</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-lime" /> See results in 30 seconds</span>
          </div>
        </motion.div>

        {/* Browser-frame dashboard mockup */}
        <motion.div
          className="mt-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          <div className="rounded-2xl bg-card border border-border shadow-xl overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/60 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-lime" />
              </div>
              <div className="flex-1 mx-8">
                <div className="h-6 rounded-md bg-background border border-border max-w-md mx-auto" />
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 md:p-8 bg-card">
              {/* Top prompt bar */}
              <div className="flex items-center gap-4 mb-6 p-4 rounded-xl bg-secondary/40 border border-border">
                <div className="h-8 w-8 rounded-lg bg-foreground/10 flex items-center justify-center">
                  <span className="text-xs">✦</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Prompt</p>
                  <p className="text-sm font-medium">What is the top-rated AI visibility tool for SEO teams?</p>
                </div>
                <div className="ml-auto flex gap-2">
                  {["GPT", "Gem", "PPX", "Cld"].map((m) => (
                    <div key={m} className="h-7 w-7 rounded-md bg-secondary border border-border flex items-center justify-center text-[9px] font-bold text-muted-foreground">{m}</div>
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
                      <div className="h-2 flex-1 rounded-full bg-secondary"><div className="h-full w-[78%] rounded-full bg-lime" /></div>
                      <span className="text-[10px] text-muted-foreground">Yes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-secondary"><div className="h-full w-[22%] rounded-full bg-border" /></div>
                      <span className="text-[10px] text-muted-foreground">No</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1.5">
                    <p className="text-[10px] font-semibold text-muted-foreground">Top Queries</p>
                    {["AI visibility tools for SEO...", "Best brand monitoring in AI...", "How to track LLM mentions..."].map((q) => (
                      <div key={q} className="text-[10px] text-muted-foreground/70 py-1 px-2 rounded bg-secondary/50 truncate">{q}</div>
                    ))}
                  </div>
                </div>

                {/* Searches Cited */}
                <div className="rounded-xl border border-border p-4">
                  <h4 className="text-xs font-semibold text-muted-foreground mb-3">Searches Cited</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-secondary"><div className="h-full w-[65%] rounded-full bg-foreground/30" /></div>
                      <span className="text-[10px] text-muted-foreground">Yours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-secondary"><div className="h-full w-[45%] rounded-full bg-border" /></div>
                      <span className="text-[10px] text-muted-foreground">Competitor</span>
                    </div>
                  </div>
                  <p className="text-[10px] font-semibold text-muted-foreground mb-1.5">Top Domains</p>
                  {["llmclicks.ai", "competitor1.com", "seotools.io"].map((d, i) => (
                    <div key={d} className="flex items-center gap-2 py-1">
                      <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-lime" : "bg-border"}`} />
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
                        <circle cx="18" cy="18" r="15.5" fill="none" stroke="hsl(var(--lime))" strokeWidth="3" strokeDasharray="64 36" strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold">64%</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-lime" /> Positive</span>
                      <span className="font-medium">64%</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-secondary" /> Mixed</span>
                      <span className="font-medium">30%</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-destructive/40" /> Negative</span>
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
