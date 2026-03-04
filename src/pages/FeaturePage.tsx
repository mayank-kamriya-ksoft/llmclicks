import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useParams } from "react-router-dom";

import imgAudit from "@/assets/feature-ai-visibility-audit.jpg";
import imgTracker from "@/assets/feature-ai-visibility-tracker.jpg";
import imgOptimizer from "@/assets/feature-on-page-optimizer.jpg";
import imgMapper from "@/assets/feature-ai-query-mapper.jpg";
import imgTraffic from "@/assets/feature-llm-traffic-tracker.jpg";
import imgWizard from "@/assets/feature-optimization-wizard.jpg";

const featureData: Record<string, { title: string; tag: string; desc: string; details: string[]; image: string }> = {
  "ai-visibility-audit": {
    title: "AI Visibility Audit", tag: "MONITORING", image: imgAudit,
    desc: "Get a comprehensive analysis of how AI models perceive, reference, and rank your brand across the AI search ecosystem.",
    details: ["Comprehensive brand visibility scoring", "Competitor comparison and benchmarking", "Actionable recommendations for improvement", "Detailed reports with historical tracking"],
  },
  "ai-visibility-tracker": {
    title: "AI Visibility Tracker", tag: "TRACKING", image: imgTracker,
    desc: "Monitor your brand's AI visibility in real-time. Track changes, identify trends, and measure impact.",
    details: ["Real-time visibility monitoring", "Trend analysis and alerts", "Multi-model tracking (ChatGPT, Gemini, etc.)", "Custom dashboards and reporting"],
  },
  "on-page-optimizer": {
    title: "On-Page Optimizer", tag: "OPTIMIZATION", image: imgOptimizer,
    desc: "Analyze and optimize your content structure for maximum AI discoverability.",
    details: ["Query Fan-out Coverage analysis", "Content Comparison across competitors", "Content Embedding Analyzer", "AI-friendly structure recommendations"],
  },
  "ai-query-mapper": {
    title: "AI Query Mapper", tag: "DISCOVERY", image: imgMapper,
    desc: "Discover which queries and prompts trigger mentions of your brand in AI responses.",
    details: ["Prompt discovery and mapping", "Query intent analysis", "Coverage gap identification", "Strategic query targeting"],
  },
  "llm-traffic-tracker": {
    title: "LLM Traffic Tracker", tag: "ANALYTICS", image: imgTraffic,
    desc: "Track and measure traffic coming from AI model recommendations and citations.",
    details: ["AI referral traffic attribution", "Conversion tracking from AI sources", "Traffic trend analysis", "Integration with analytics platforms"],
  },
  "optimization-wizard": {
    title: "Optimization Wizard", tag: "GUIDANCE", image: imgWizard,
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
        <div className="absolute inset-0 accent-mesh pointer-events-none opacity-50" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
            <div className="tag-pill mb-4">{feature.tag}</div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-5 max-w-lg">{feature.title}</h1>
            <p className="text-lg text-muted-foreground max-w-xl">{feature.desc}</p>
          </motion.div>

          <motion.div className="rounded-2xl border border-border overflow-hidden mb-12 gradient-border glow-hover" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <img src={feature.image} alt={`${feature.title} dashboard preview`} className="w-full h-auto object-cover" loading="lazy" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 mb-14">
            {feature.details.map((d, i) => (
              <motion.div key={i} className="rounded-2xl border border-border bg-card p-6 flex items-start gap-3 shimmer-card hover:border-accent/20 transition-all" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}>
                <div className="h-6 w-6 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-accent" />
                </div>
                <p className="text-muted-foreground">{d}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8 glow-hover" asChild>
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
