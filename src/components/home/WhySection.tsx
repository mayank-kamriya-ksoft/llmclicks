import { motion } from "framer-motion";
import { Eye, MessageSquare, Quote, FileSearch } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const cards = [
  { icon: Eye, tag: "MONITORING", title: "Pull back the lid on your AI presence", desc: "Keep tabs on brand presence, performance, and position across every LLM.", link: "/features/ai-visibility-audit" },
  { icon: MessageSquare, tag: "TRACKING", title: "Track every prompt that mentions you", desc: "Monitor which prompts surface your brand and track changes over time.", link: "/features/ai-visibility-tracker" },
  { icon: Quote, tag: "ANALYSIS", title: "See who's citing your content", desc: "Understand when and how LLMs cite your content in their responses.", link: "/features/on-page-optimizer" },
  { icon: FileSearch, tag: "OPTIMIZATION", title: "Optimize for AI discoverability", desc: "Get specific recommendations on structure, semantics, and format.", link: "/features/optimization-wizard" },
];

const WhySection = () => (
  <section className="section-padding relative overflow-hidden">
    {/* Accent blob bottom left */}
    <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] accent-blob opacity-50 pointer-events-none" />

    <div className="container mx-auto relative z-10">
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="tag-pill mb-4">FEATURES</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold max-w-lg">
          Everything you need for AI visibility
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              to={card.link}
              className="block rounded-2xl bg-card border border-border p-7 hover:shadow-lg hover:border-foreground/10 transition-all group h-full"
            >
              <div className="tag-pill mb-4">{card.tag}</div>
              <h3 className="font-display font-bold text-xl mb-2 group-hover:text-foreground transition-colors">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{card.desc}</p>
              <span className="text-sm font-medium flex items-center gap-1.5 text-foreground group-hover:gap-2.5 transition-all">
                Explore <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
