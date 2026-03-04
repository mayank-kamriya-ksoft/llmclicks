import { motion } from "framer-motion";
import { Eye, BarChart3, TrendingUp, FileText } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "AI Visibility Audit",
    desc: "Get a comprehensive audit of how your brand appears across major AI platforms. Understand your AI footprint with detailed scoring and actionable recommendations.",
  },
  {
    icon: BarChart3,
    title: "AI Visibility Tracker",
    desc: "Track your brand's visibility across AI models over time. Monitor trends, compare with competitors, and measure the impact of your optimization efforts.",
  },
  {
    icon: TrendingUp,
    title: "Industry Benchmarks",
    desc: "Compare your AI visibility against industry standards. Understand where you stand relative to competitors and identify opportunities for improvement.",
  },
  {
    icon: FileText,
    title: "On-Page Analysis",
    desc: "Analyze your content for AI-friendliness. Get specific recommendations on structure, semantics, and format to maximize LLM comprehension.",
  },
];

const FeaturesSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        className="mx-auto max-w-2xl text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Powerful Features for <span className="gradient-text">AI-Era SEO</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Everything you need to understand and optimize your brand's presence in AI-generated responses.
        </p>
      </motion.div>

      <div className="space-y-12">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
            <div className="flex-1 w-full">
              <div className="glass-card rounded-xl aspect-video flex items-center justify-center">
                <f.icon className="h-16 w-16 text-primary/30" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
