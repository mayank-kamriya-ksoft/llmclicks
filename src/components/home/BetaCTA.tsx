import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const BetaCTA = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        className="rounded-3xl p-12 md:p-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(220 30% 18%) 50%, hsl(var(--navy)) 100%)",
        }}
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none" style={{ background: "hsl(var(--teal) / 0.15)" }} />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full blur-[80px] pointer-events-none" style={{ background: "hsl(var(--coral) / 0.1)" }} />
        <div className="absolute top-10 right-20 w-3 h-3 rounded-full bg-accent/40 animate-float" />
        <div className="absolute bottom-16 right-32 w-2 h-2 rounded-full bg-coral/30 animate-float" style={{ animationDelay: "3s" }} />

        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent font-medium mb-6">
            <Sparkles className="h-3 w-3" /> Free Beta Access
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-5 text-primary-foreground">
            Sign up for free beta access
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-8">
            Be among the first to see how AI talks about your brand. No credit card required.
          </p>
          <Button size="lg" className="rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 px-8 shadow-lg shadow-accent/25" asChild>
            <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">
              Get started free <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default BetaCTA;
