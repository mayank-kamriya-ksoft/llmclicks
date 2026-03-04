import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BetaCTA = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        className="rounded-3xl bg-foreground text-background p-12 md:p-20 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        {/* Decorative blob inside */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-lime/20 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-5">
            Sign up for free beta access
          </h2>
          <p className="text-background/60 text-lg mb-8">
            Be among the first to see how AI talks about your brand. No credit card required.
          </p>
          <Button size="lg" className="rounded-full bg-background text-foreground hover:bg-background/90 px-8" asChild>
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
