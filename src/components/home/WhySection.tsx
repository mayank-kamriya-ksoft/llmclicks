import { motion } from "framer-motion";
import { Search, MessageSquare, Quote, FileSearch } from "lucide-react";

const cards = [
  { icon: Search, title: "AI Visibility Audit", desc: "Discover how AI models reference and rank your brand against competitors.", color: "bg-violet/10 text-violet" },
  { icon: MessageSquare, title: "Prompt Tracking", desc: "Monitor which prompts surface your brand and track changes over time.", color: "bg-coral/10 text-coral" },
  { icon: Quote, title: "Citation Analyzer", desc: "See when and how LLMs cite your content in their responses.", color: "bg-sky/10 text-sky" },
  { icon: FileSearch, title: "On-Page Audit", desc: "Optimize your content structure for maximum AI discoverability.", color: "bg-mint/10 text-mint" },
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
        <div className="highlight-pill mb-4 mx-auto w-fit">Why It Matters</div>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-5">
          AI Search is <span className="gradient-text">Changing Everything</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Your brand's presence in AI responses is becoming as important as traditional search rankings. Stay ahead.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            className="bold-card flex items-start gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className={`shrink-0 h-14 w-14 rounded-2xl ${card.color} flex items-center justify-center`}>
              <card.icon className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
