import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const BetaCTA = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        className="rounded-[2rem] gradient-bg-primary p-12 md:p-20 text-center text-primary-foreground relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-background/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-background/5 translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <Sparkles className="h-10 w-10 mx-auto mb-6 opacity-80" />
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-5">
            Join the Beta — It's Free
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto opacity-80">
            Be among the first to experience the future of AI-powered SEO analytics. No credit card required.
          </p>
          <Button size="lg" className="rounded-full bg-background text-foreground hover:bg-background/90 text-base px-8 py-6 shadow-lg" asChild>
            <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">
              Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default BetaCTA;
