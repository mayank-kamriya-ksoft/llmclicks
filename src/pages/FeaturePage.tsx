import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useParams } from "react-router-dom";

const featureData: Record<string, { title: string; tag: string; desc: string; details: string[] }> = {
  "ai-visibility-audit": {
    title: "AI Visibility Audit", tag: "MONITORING",
    desc: "Get a comprehensive analysis of how AI models perceive, reference, and rank your brand across the AI search ecosystem.",
    details: ["Comprehensive brand visibility scoring", "Competitor comparison and benchmarking", "Actionable recommendations for improvement", "Detailed reports with historical tracking"],
  },
  "ai-visibility-tracker": {
    title: "AI Visibility Tracker", tag: "TRACKING",
    desc: "Monitor your brand's AI visibility in real-time. Track changes, identify trends, and measure impact.",
    details: ["Real-time visibility monitoring", "Trend analysis and alerts", "Multi-model tracking (ChatGPT, Gemini, etc.)", "Custom dashboards and reporting"],
  },
  "on-page-optimizer": {
    title: "On-Page Optimizer", tag: "OPTIMIZATION",
    desc: "Analyze and optimize your content structure for maximum AI discoverability.",
    details: ["Query Fan-out Coverage analysis", "Content Comparison across competitors", "Content Embedding Analyzer", "AI-friendly structure recommendations"],
  },
  "ai-query-mapper": {
    title: "AI Query Mapper", tag: "DISCOVERY",
    desc: "Discover which queries and prompts trigger mentions of your brand in AI responses.",
    details: ["Prompt discovery and mapping", "Query intent analysis", "Coverage gap identification", "Strategic query targeting"],
  },
  "llm-traffic-tracker": {
    title: "LLM Traffic Tracker", tag: "ANALYTICS",
    desc: "Track and measure traffic coming from AI model recommendations and citations.",
    details: ["AI referral traffic attribution", "Conversion tracking from AI sources", "Traffic trend analysis", "Integration with analytics platforms"],
  },
  "optimization-wizard": {
    title: "Optimization Wizard", tag: "GUIDANCE",
    desc: "Get step-by-step guidance on optimizing your content for better AI visibility.",
    details: ["Guided optimization workflows", "Priority-based recommendations", "Progress tracking and scoring", "AI-specific best practices"],
  },
};

const FeaturePage = () => {
  const { slug } = useParams();
  const feature = featureData[slug || ""] || featureData["ai-visibility-audit"];

  return (
    <Layout>
      <section className="section-padding pt-28 md:pt-36 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] accent-blob opacity-50 pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
            <div className="tag-pill mb-4">{feature.tag}</div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-5 max-w-lg">{feature.title}</h1>
            <p className="text-lg text-muted-foreground max-w-xl">{feature.desc}</p>
          </motion.div>

          <motion.div className="rounded-2xl border border-border bg-secondary/30 aspect-video mb-12 flex items-center justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p className="text-muted-foreground font-display">Feature Preview</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 mb-14">
            {feature.details.map((d, i) => (
              <motion.div key={i} className="rounded-2xl border border-border bg-card p-6 flex items-start gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}>
                <Check className="h-5 w-5 text-lime mt-0.5 shrink-0" />
                <p className="text-muted-foreground">{d}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8" asChild>
              <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">
                Try {feature.title} Free <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FeaturePage;
