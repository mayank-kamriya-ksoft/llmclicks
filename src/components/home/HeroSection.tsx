import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden section-padding pt-24 md:pt-32">
    {/* Background glow */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
    </div>

    <div className="container mx-auto relative z-10">
      <motion.div
        className="mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Badge className="mb-6 gap-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
          <Sparkles className="h-3 w-3" /> New — AI Visibility Platform Now in Beta
        </Badge>

        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl mb-6">
          Transform Your AI Visibility With{" "}
          <span className="gradient-text">Smarter SEO Insights</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl mb-10">
          Understand how AI models perceive your brand. Track, analyze, and optimize your presence across ChatGPT, Gemini, Perplexity, and other LLMs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-base px-8 glow-blue" asChild>
            <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">
              Signup for Free <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 border-border" asChild>
            <a href="https://calendly.com/llmclicks" target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Trust badges */}
      <motion.div
        className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {["Trusted by SEO Agencies", "Marketing Teams", "Consultants"].map((label) => (
          <div key={label} className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            {label}
          </div>
        ))}
      </motion.div>

      {/* Dashboard mockup */}
      <motion.div
        className="mx-auto mt-16 max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="glass-card rounded-2xl p-2 glow-blue">
          <div className="rounded-xl bg-secondary/50 aspect-video flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <p className="font-display text-lg font-semibold">AI Visibility Dashboard</p>
              <p className="text-sm">Interactive analytics preview</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
