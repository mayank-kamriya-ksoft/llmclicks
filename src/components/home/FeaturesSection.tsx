import { motion } from "framer-motion";
import { Eye, BarChart3, TrendingUp, FileText } from "lucide-react";
import AuditDashboardMockup from "@/components/features/AuditDashboardMockup";
import TrackerDashboardMockup from "@/components/features/TrackerDashboardMockup";
import OnPageDashboardMockup from "@/components/features/OnPageDashboardMockup";
import featureBenchmarks from "@/assets/feature-benchmarks.jpg";

const features = [
  {
    icon: Eye, tag: "MONITORING", title: "AI Visibility Audit",
    desc: "Get a comprehensive audit of how your brand appears across major AI platforms. Understand your AI footprint with detailed scoring and actionable recommendations.",
    metrics: ["Visibility Score", "Competitor Rank", "Citation Count"],
    mockup: "audit",
  },
  {
    icon: BarChart3, tag: "TRACKING", title: "AI Visibility Tracker",
    desc: "Track your brand's visibility across AI models over time. Monitor trends, compare with competitors, and measure the impact of your optimization efforts.",
    metrics: ["Trend Analysis", "Model Coverage", "Weekly Reports"],
    mockup: "tracker",
  },
  {
    icon: TrendingUp, tag: "BENCHMARKS", title: "Industry Benchmarks",
    desc: "Compare your AI visibility against industry standards. Understand where you stand relative to competitors and identify opportunities.",
    metrics: ["Industry Average", "Peer Comparison", "Growth Rate"],
    mockup: null, image: featureBenchmarks,
  },
  {
    icon: FileText, tag: "OPTIMIZATION", title: "On-Page Analysis",
    desc: "Analyze your content for AI-friendliness. Get specific recommendations on structure, semantics, and format to maximize LLM comprehension.",
    metrics: ["Content Score", "Structure Check", "Semantic Analysis"],
    mockup: "onpage",
  },
];

const FeaturesSection = () => (
  <section className="section-padding bg-card relative">
    <div className="absolute inset-0 grain-overlay pointer-events-none" />
    <div className="container mx-auto relative z-10">
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="tag-pill mb-4">HOW IT WORKS</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold max-w-lg">
          Powerful tools for the AI era
        </h2>
      </motion.div>

      <div className="space-y-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className={`flex flex-col md:flex-row items-stretch gap-6 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex-1 rounded-2xl border border-border bg-background p-8 flex flex-col justify-center glow-hover">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="h-9 w-9 rounded-xl bg-accent/10 flex items-center justify-center"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <f.icon className="h-4.5 w-4.5 text-accent" />
                </motion.div>
                <div className="tag-pill">{f.tag}</div>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{f.desc}</p>
              <div className="flex flex-wrap gap-2">
                {f.metrics.map((m, mi) => (
                  <motion.span
                    key={m}
                    className="rounded-full bg-accent/5 border border-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + mi * 0.1 }}
                  >
                    {m}
                  </motion.span>
                ))}
              </div>
            </div>
            <motion.div
              className="flex-1 rounded-2xl border border-border overflow-hidden min-h-[260px] gradient-border group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {f.mockup === "audit" ? <AuditDashboardMockup /> :
               f.mockup === "tracker" ? <TrackerDashboardMockup /> :
               f.mockup === "onpage" ? <OnPageDashboardMockup /> :
               <img
                 src={f.image}
                 alt={`${f.title} dashboard mockup`}
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 loading="lazy"
               />}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
