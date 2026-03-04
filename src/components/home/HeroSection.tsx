import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Star } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28 px-4">
    {/* Decorative blobs */}
    <div className="absolute top-20 -right-20 w-[500px] h-[500px] rounded-full bg-violet/5 blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-coral/5 blur-[100px] pointer-events-none" />

    {/* Floating shapes */}
    <motion.div
      className="absolute top-32 left-[10%] w-16 h-16 rounded-2xl bg-violet/10 rotate-12 hidden lg:block"
      animate={{ y: [-10, 10, -10], rotate: [12, -5, 12] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-48 right-[15%] w-12 h-12 rounded-full bg-coral/15 hidden lg:block"
      animate={{ y: [10, -15, 10] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-32 left-[20%] w-10 h-10 rounded-xl bg-sky/10 rotate-45 hidden lg:block"
      animate={{ y: [-8, 12, -8], rotate: [45, 30, 45] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="container mx-auto relative z-10">
      <motion.div
        className="mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="highlight-pill mb-8 mx-auto w-fit">
          <Sparkles className="h-4 w-4" />
          Now in Beta — Free to Get Started
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight mb-8">
          See How AI{" "}
          <span className="gradient-text">Really Sees</span>
          <br />
          Your Brand
        </h1>

        <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
          Track, analyze, and optimize your brand's presence across ChatGPT, Gemini, Perplexity, and other AI platforms — all in one dashboard.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full gradient-bg-primary border-0 text-base px-8 py-6 shadow-lg shadow-primary/25" asChild>
            <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">
              Start for Free <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full text-base px-8 py-6" asChild>
            <a href="https://calendly.com/llmclicks" target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
          </Button>
        </div>

        {/* Social proof pills */}
        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[
            { icon: Zap, label: "500+ Active Users" },
            { icon: Star, label: "Trusted by Agencies" },
            { icon: Sparkles, label: "10K+ Audits Run" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-muted-foreground">
              <item.icon className="h-4 w-4 text-primary" />
              {item.label}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Dashboard Preview */}
      <motion.div
        className="mx-auto mt-20 max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="rounded-3xl bg-card border border-border p-3 shadow-2xl shadow-primary/10">
          <div className="rounded-2xl gradient-bg-soft aspect-video flex items-center justify-center relative overflow-hidden">
            {/* Mock dashboard grid */}
            <div className="absolute inset-6 grid grid-cols-3 grid-rows-2 gap-3 opacity-60">
              <div className="rounded-xl bg-card/80 border border-border/50 col-span-2 p-4">
                <div className="h-3 w-24 rounded-full bg-primary/20 mb-3" />
                <div className="flex gap-2">
                  {[60, 80, 45, 90, 70, 55, 85].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-md bg-primary/30 self-end" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-card/80 border border-border/50 p-4">
                <div className="h-3 w-16 rounded-full bg-coral/20 mb-3" />
                <div className="h-20 w-20 mx-auto rounded-full border-4 border-coral/30 flex items-center justify-center">
                  <span className="font-display font-bold text-lg text-foreground/60">87</span>
                </div>
              </div>
              <div className="rounded-xl bg-card/80 border border-border/50 p-4">
                <div className="h-3 w-20 rounded-full bg-sky/20 mb-3" />
                <div className="space-y-2">
                  {[70, 55, 85, 40].map((w, i) => (
                    <div key={i} className="h-2 rounded-full bg-sky/20" style={{ width: `${w}%` }} />
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-card/80 border border-border/50 col-span-2 p-4">
                <div className="h-3 w-28 rounded-full bg-mint/20 mb-3" />
                <div className="flex gap-4">
                  {[
                    { label: "ChatGPT", pct: 78 },
                    { label: "Gemini", pct: 65 },
                    { label: "Perplexity", pct: 92 },
                  ].map((item) => (
                    <div key={item.label} className="flex-1 text-center">
                      <div className="h-2 rounded-full bg-muted mb-1">
                        <div className="h-full rounded-full bg-mint/40" style={{ width: `${item.pct}%` }} />
                      </div>
                      <span className="text-[10px] text-muted-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
