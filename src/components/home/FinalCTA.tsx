import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => (
  <section className="section-padding">
    <div className="container mx-auto text-center max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-5">
          Ready to see how AI views your brand?
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Join hundreds of marketers already optimizing their AI visibility. Start free today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8" asChild>
            <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">
              Start for free <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
            <a href="https://calendly.com/llmclicks" target="_blank" rel="noopener noreferrer">
              Book a demo
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
