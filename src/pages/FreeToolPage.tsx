import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useParams } from "react-router-dom";

const toolData: Record<string, { title: string; desc: string; features: string[] }> = {
  "ai-readiness-analyzer": {
    title: "AI Readiness Analyzer",
    desc: "Analyze how ready your website is for AI-powered search. Get a comprehensive readiness score and actionable recommendations.",
    features: ["Content structure analysis", "Schema markup evaluation", "AI-friendly formatting check", "Readiness score with benchmarks"],
  },
  "ai-domain-profiler": {
    title: "AI Domain Profiler",
    desc: "Get a complete profile of how AI models perceive your domain. Understand your domain's authority and presence in AI responses.",
    features: ["Domain authority in AI context", "Content coverage analysis", "Topic authority mapping", "Competitive positioning"],
  },
  "ai-visibility-checker": {
    title: "AI Visibility Checker",
    desc: "Quickly check your brand's visibility across major AI platforms. Get instant insights into your AI presence.",
    features: ["Instant visibility check", "Multi-platform coverage", "Brand mention tracking", "Quick recommendations"],
  },
};

const FreeToolPage = () => {
  const { slug } = useParams();
  const tool = toolData[slug || ""] || toolData["ai-readiness-analyzer"];

  return (
    <Layout>
      <section className="section-padding pt-24 md:pt-32">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">{tool.title}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{tool.desc}</p>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-4 mb-8">
              {tool.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                  <p className="text-muted-foreground">{f}</p>
                </div>
              ))}
            </div>
            <Button size="lg" className="w-full glow-blue" asChild>
              <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">
                Try {tool.title} Free <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FreeToolPage;
