import { motion } from "framer-motion";
import { Search, MessageSquare, Quote, FileSearch } from "lucide-react";

const cards = [
  { icon: Search, title: "AI Visibility Audit", desc: "Discover how AI models reference and rank your brand against competitors." },
  { icon: MessageSquare, title: "Prompt Tracking", desc: "Monitor which prompts surface your brand and track changes over time." },
  { icon: Quote, title: "Citation Analyzer", desc: "See when and how LLMs cite your content in their responses." },
  { icon: FileSearch, title: "On-Page Audit", desc: "Optimize your content structure for maximum AI discoverability." },
];

const WhySection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        className="mx-auto max-w-2xl text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Why <span className="gradient-text">AI Visibility</span> Matters
        </h2>
        <p className="text-muted-foreground text-lg">
          As AI-powered search grows, your brand's presence in LLM responses is becoming as important as traditional SEO rankings.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            className="glass-card rounded-xl p-6 hover:border-primary/30 transition-colors group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <card.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{card.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
