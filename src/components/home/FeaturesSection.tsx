import { motion } from "framer-motion";
import { Eye, BarChart3, TrendingUp, FileText } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "AI Visibility Audit",
    desc: "Get a comprehensive audit of how your brand appears across major AI platforms. Understand your AI footprint with detailed scoring and actionable recommendations.",
    color: "bg-violet/10 text-violet",
    accent: "bg-violet/5",
  },
  {
    icon: BarChart3,
    title: "AI Visibility Tracker",
    desc: "Track your brand's visibility across AI models over time. Monitor trends, compare with competitors, and measure the impact of your optimization efforts.",
    color: "bg-coral/10 text-coral",
    accent: "bg-coral/5",
  },
  {
    icon: TrendingUp,
    title: "Industry Benchmarks",
    desc: "Compare your AI visibility against industry standards. Understand where you stand relative to competitors and identify opportunities for improvement.",
    color: "bg-sky/10 text-sky",
    accent: "bg-sky/5",
  },
  {
    icon: FileText,
    title: "On-Page Analysis",
    desc: "Analyze your content for AI-friendliness. Get specific recommendations on structure, semantics, and format to maximize LLM comprehension.",
    color: "bg-mint/10 text-mint",
    accent: "bg-mint/5",
  },
];

const FeaturesSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        className="mx-auto max-w-2xl text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="highlight-pill mb-4 mx-auto w-fit">Features</div>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-5">
          Everything for <span className="gradient-text">AI-Era SEO</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Powerful tools to understand and optimize your brand's presence in AI-generated responses.
        </p>
      </motion.div>

      <div className="space-y-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className={`rounded-3xl ${f.accent} p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1">
              <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${f.color}`}>
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{f.desc}</p>
            </div>
            <div className="flex-1 w-full">
              <div className="rounded-2xl bg-card border border-border aspect-[4/3] flex items-center justify-center shadow-sm">
                <f.icon className="h-20 w-20 text-border" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
