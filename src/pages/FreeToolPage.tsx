import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap } from "lucide-react";
import { useParams } from "react-router-dom";

const toolData: Record<string, { title: string; desc: string; features: string[] }> = {
  "ai-readiness-analyzer": {
    title: "AI Readiness Analyzer",
    desc: "Analyze how ready your website is for AI-powered search. Get a readiness score and actionable recommendations.",
    features: ["Content structure analysis", "Schema markup evaluation", "AI-friendly formatting check", "Readiness score with benchmarks"],
  },
  "ai-domain-profiler": {
    title: "AI Domain Profiler",
    desc: "Get a complete profile of how AI models perceive your domain.",
    features: ["Domain authority in AI context", "Content coverage analysis", "Topic authority mapping", "Competitive positioning"],
  },
  "ai-visibility-checker": {
    title: "AI Visibility Checker",
    desc: "Quickly check your brand's visibility across major AI platforms.",
    features: ["Instant visibility check", "Multi-platform coverage", "Brand mention tracking", "Quick recommendations"],
  },
};

const FreeToolPage = () => {
  const { slug } = useParams();
  const tool = toolData[slug || ""] || toolData["ai-readiness-analyzer"];

  return (
    <Layout>
      <section className="section-padding pt-28 md:pt-36 relative overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] accent-blob opacity-40 pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
            <div className="tag-pill mb-4"><Zap className="h-3 w-3" /> FREE TOOL</div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-5">{tool.title}</h1>
            <p className="text-lg text-muted-foreground max-w-lg">{tool.desc}</p>
          </motion.div>

          <motion.div className="rounded-2xl border border-border bg-card p-7" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="space-y-3 mb-7">
              {tool.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                  <Check className="h-4 w-4 text-lime shrink-0" />
                  <p className="text-sm font-medium">{f}</p>
                </div>
              ))}
            </div>
            <Button size="lg" className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90" asChild>
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
