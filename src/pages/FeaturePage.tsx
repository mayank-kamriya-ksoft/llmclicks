import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useParams } from "react-router-dom";

const featureData: Record<string, { title: string; desc: string; details: string[]; color: string; accent: string }> = {
  "ai-visibility-audit": {
    title: "AI Visibility Audit",
    desc: "Get a comprehensive analysis of how AI models perceive, reference, and rank your brand across the AI search ecosystem.",
    details: ["Comprehensive brand visibility scoring across major AI platforms", "Competitor comparison and benchmarking", "Actionable recommendations for improvement", "Detailed reports with historical tracking"],
    color: "text-violet", accent: "bg-violet/5",
  },
  "ai-visibility-tracker": {
    title: "AI Visibility Tracker",
    desc: "Monitor your brand's AI visibility in real-time. Track changes, identify trends, and measure the impact of your optimization efforts.",
    details: ["Real-time visibility monitoring", "Trend analysis and alerts", "Multi-model tracking (ChatGPT, Gemini, Perplexity, etc.)", "Custom dashboards and reporting"],
    color: "text-coral", accent: "bg-coral/5",
  },
  "on-page-optimizer": {
    title: "On-Page Optimizer",
    desc: "Analyze and optimize your content structure for maximum AI discoverability with our advanced on-page analysis tools.",
    details: ["Query Fan-out Coverage analysis", "Content Comparison across competitors", "Content Embedding Analyzer", "AI-friendly structure recommendations"],
    color: "text-sky", accent: "bg-sky/5",
  },
  "ai-query-mapper": {
    title: "AI Query Mapper",
    desc: "Discover which queries and prompts trigger mentions of your brand in AI responses and how to expand your coverage.",
    details: ["Prompt discovery and mapping", "Query intent analysis", "Coverage gap identification", "Strategic query targeting recommendations"],
    color: "text-mint", accent: "bg-mint/5",
  },
  "llm-traffic-tracker": {
    title: "LLM Traffic Tracker",
    desc: "Track and measure traffic coming from AI model recommendations and citations to understand your AI-driven growth.",
    details: ["AI referral traffic attribution", "Conversion tracking from AI sources", "Traffic trend analysis", "Integration with analytics platforms"],
    color: "text-peach", accent: "bg-peach/5",
  },
  "optimization-wizard": {
    title: "Optimization Wizard",
    desc: "Get step-by-step guidance on optimizing your content and online presence for better AI visibility.",
    details: ["Guided optimization workflows", "Priority-based recommendations", "Progress tracking and scoring", "AI-specific best practices library"],
    color: "text-violet", accent: "bg-violet/5",
  },
};

const FeaturePage = () => {
  const { slug } = useParams();
  const feature = featureData[slug || ""] || featureData["ai-visibility-audit"];

  return (
    <Layout>
      <section className="section-padding pt-28 md:pt-36">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="highlight-pill mb-4 mx-auto w-fit">Feature</div>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-6">
              <span className="gradient-text">{feature.title}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{feature.desc}</p>
          </motion.div>

          <motion.div
            className={`rounded-3xl ${feature.accent} aspect-video mb-12 flex items-center justify-center border border-border`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-muted-foreground font-display text-lg">Feature Preview</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {feature.details.map((d, i) => (
              <motion.div
                key={i}
                className="bold-card flex items-start gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0`}>
                  <Check className={`h-4 w-4 ${feature.color}`} />
                </div>
                <p className="text-muted-foreground">{d}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="rounded-full gradient-bg-primary border-0 px-8 py-6 text-base shadow-lg shadow-primary/25" asChild>
              <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">
                Try {feature.title} Free <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FeaturePage;
