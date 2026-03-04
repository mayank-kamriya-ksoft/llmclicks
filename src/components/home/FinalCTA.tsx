import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => (
  <section className="section-padding">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-6 max-w-3xl mx-auto leading-tight">
          Ready to See How AI{" "}
          <span className="gradient-text">Views Your Brand?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Join hundreds of marketers already optimizing their AI visibility. Start free today.
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
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
