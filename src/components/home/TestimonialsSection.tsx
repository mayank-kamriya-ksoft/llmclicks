import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const testimonials = [
  { name: "Sarah Chen", role: "SEO Director, TechFlow Agency", quote: "LLMClicks has completely transformed how we approach AI visibility for our clients. The insights are unmatched." },
  { name: "Marcus Rivera", role: "Head of Marketing, DataPulse", quote: "We saw a 40% increase in AI-driven traffic within 3 months of using LLMClicks. Essential tool for modern SEO." },
  { name: "Elena Kowalski", role: "Digital Strategy Consultant", quote: "The AI Visibility Audit opened our eyes to how LLMs perceive our brand. Game-changing for our strategy." },
  { name: "James Park", role: "CMO, GrowthMetrics", quote: "Finally, a tool that bridges the gap between traditional SEO and AI search. Incredible product." },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        className="mx-auto max-w-2xl text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          What Our <span className="gradient-text">Users Say</span>
        </h2>
      </motion.div>

      <div className="mx-auto max-w-4xl px-12">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name}>
                <div className="glass-card rounded-xl p-8 md:p-10 text-center">
                  <p className="text-lg md:text-xl italic text-foreground/90 mb-6 leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-border" />
          <CarouselNext className="border-border" />
        </Carousel>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
