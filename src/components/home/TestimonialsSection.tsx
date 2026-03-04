import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const testimonials = [
  { name: "Sarah Chen", role: "SEO Director, TechFlow Agency", quote: "LLMClicks showed us exactly what AI was seeing — and what we were missing. Within weeks, we went from invisible to cited right alongside the biggest players." },
  { name: "Marcus Rivera", role: "Head of Marketing, DataPulse", quote: "We saw a 40% increase in AI-driven traffic within 3 months. Essential tool for modern SEO." },
  { name: "Elena Kowalski", role: "Digital Strategy Consultant", quote: "The AI Visibility Audit opened our eyes to how LLMs perceive our brand. Game-changing for our strategy." },
  { name: "James Park", role: "CMO, GrowthMetrics", quote: "Finally, a tool that bridges the gap between traditional SEO and AI search. Incredible product." },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto">
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="tag-pill mb-4">TESTIMONIALS</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold max-w-md">What our users say</h2>
      </motion.div>

      <div className="max-w-3xl mx-auto px-12">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name}>
                <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
                  <p className="text-lg md:text-xl leading-relaxed mb-8">
                    "{t.quote.split("**").length > 1 ? (
                      <>
                        {t.quote.split("**")[0]}
                        <strong>{t.quote.split("**")[1]}</strong>
                        {t.quote.split("**")[2] || ""}
                      </>
                    ) : t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-muted-foreground">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-card border-border" />
          <CarouselNext className="bg-card border-border" />
        </Carousel>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
