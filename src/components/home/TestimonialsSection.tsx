import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", role: "SEO Director, TechFlow Agency", quote: "LLMClicks has completely transformed how we approach AI visibility for our clients. The insights are unmatched.", avatar: "SC" },
  { name: "Marcus Rivera", role: "Head of Marketing, DataPulse", quote: "We saw a 40% increase in AI-driven traffic within 3 months of using LLMClicks. Essential tool for modern SEO.", avatar: "MR" },
  { name: "Elena Kowalski", role: "Digital Strategy Consultant", quote: "The AI Visibility Audit opened our eyes to how LLMs perceive our brand. Game-changing for our strategy.", avatar: "EK" },
  { name: "James Park", role: "CMO, GrowthMetrics", quote: "Finally, a tool that bridges the gap between traditional SEO and AI search. Incredible product.", avatar: "JP" },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="container mx-auto">
      <motion.div
        className="mx-auto max-w-2xl text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="highlight-pill mb-4 mx-auto w-fit">Testimonials</div>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-5">
          Loved by <span className="gradient-text">Marketers</span>
        </h2>
      </motion.div>

      <div className="mx-auto max-w-4xl px-12">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name}>
                <div className="bold-card text-center p-10 md:p-12">
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-peach text-peach" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8">"{t.quote}"</p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-12 w-12 rounded-full gradient-bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {t.avatar}
                    </div>
                    <div className="text-left">
                      <p className="font-display font-bold">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-border bg-card hover:bg-secondary" />
          <CarouselNext className="border-border bg-card hover:bg-secondary" />
        </Carousel>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
