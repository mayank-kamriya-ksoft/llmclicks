import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap } from "lucide-react";
import { useParams } from "react-router-dom";

const toolData: Record<string, { title: string; desc: string; features: string[]; color: string; accent: string }> = {
  "ai-readiness-analyzer": {
    title: "AI Readiness Analyzer",
    desc: "Analyze how ready your website is for AI-powered search. Get a comprehensive readiness score and actionable recommendations.",
    features: ["Content structure analysis", "Schema markup evaluation", "AI-friendly formatting check", "Readiness score with benchmarks"],
    color: "text-violet", accent: "bg-violet/5",
  },
  "ai-domain-profiler": {
    title: "AI Domain Profiler",
    desc: "Get a complete profile of how AI models perceive your domain. Understand your domain's authority and presence in AI responses.",
    features: ["Domain authority in AI context", "Content coverage analysis", "Topic authority mapping", "Competitive positioning"],
    color: "text-coral", accent: "bg-coral/5",
  },
  "ai-visibility-checker": {
    title: "AI Visibility Checker",
    desc: "Quickly check your brand's visibility across major AI platforms. Get instant insights into your AI presence.",
    features: ["Instant visibility check", "Multi-platform coverage", "Brand mention tracking", "Quick recommendations"],
    color: "text-sky", accent: "bg-sky/5",
  },
};

const FreeToolPage = () => {
  const { slug } = useParams();
  const tool = toolData[slug || ""] || toolData["ai-readiness-analyzer"];

  return (
    <Layout>
      <section className="section-padding pt-28 md:pt-36">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="highlight-pill mb-4 mx-auto w-fit">
              <Zap className="h-4 w-4" /> Free Tool
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-6">
              <span className="gradient-text">{tool.title}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">{tool.desc}</p>
          </motion.div>

          <motion.div
            className="bold-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-4 mb-8">
              {tool.features.map((f, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30">
                  <Check className={`h-5 w-5 shrink-0 ${tool.color}`} />
                  <p className="text-foreground font-medium">{f}</p>
                </div>
              ))}
            </div>
            <Button size="lg" className="w-full rounded-full gradient-bg-primary border-0 py-6 text-base shadow-lg shadow-primary/25" asChild>
              <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">
                Try {tool.title} Free <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FreeToolPage;
