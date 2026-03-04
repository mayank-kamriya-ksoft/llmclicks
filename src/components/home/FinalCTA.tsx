import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => (
  <section className="section-padding relative overflow-hidden">
    {/* Animated background blobs */}
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none bg-accent/8"
      animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
    <div className="container mx-auto text-center max-w-2xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-5">
          Ready to see how AI views your brand?
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Join hundreds of marketers already optimizing their AI visibility. Start free today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button size="lg" className="rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 px-8 shadow-lg shadow-accent/20 group" asChild>
            <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">
              Start for free <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-xl px-8 border-border hover:border-accent/20 hover:bg-accent/5" asChild>
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
