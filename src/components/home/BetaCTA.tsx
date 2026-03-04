import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BetaCTA = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        className="glass-card glow-blue rounded-2xl p-10 md:p-16 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Sign Up for <span className="gradient-text">Free Beta Access</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Be among the first to experience the future of AI-powered SEO analytics. No credit card required.
        </p>
        <Button size="lg" className="text-base px-8" asChild>
          <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">
            Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default BetaCTA;
