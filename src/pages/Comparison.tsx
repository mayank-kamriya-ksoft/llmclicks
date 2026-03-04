import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Check, X, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "AI Visibility Audit", "Prompt Tracking", "Citation Analysis", "On-Page Optimization",
  "Multi-LLM Support", "Competitor Analysis", "Historical Tracking", "API Access",
  "White-label Reports", "Dedicated Support",
];

const tools = [
  { name: "LLMClicks", values: [true, true, true, true, true, true, true, true, true, true] },
  { name: "Traditional SEO Tools", values: [false, false, false, true, false, true, true, true, false, true] },
  { name: "Manual Tracking", values: ["partial", "partial", false, false, "partial", false, false, false, false, false] },
];

const CellIcon = ({ val }: { val: boolean | string }) => {
  if (val === true) return <div className="h-6 w-6 rounded-full bg-accent/15 flex items-center justify-center mx-auto"><Check className="h-3.5 w-3.5 text-accent" /></div>;
  if (val === "partial") return <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center mx-auto"><Minus className="h-3.5 w-3.5 text-muted-foreground" /></div>;
  return <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center mx-auto"><X className="h-3.5 w-3.5 text-destructive/60" /></div>;
};

const row = { hidden: { opacity: 0, x: -10 }, visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.04 } }) };

const Comparison = () => (
  <Layout>
    <section className="section-padding pt-28 md:pt-36 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] accent-mesh opacity-30 pointer-events-none" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14 text-center">
          <div className="tag-pill mb-4 mx-auto">COMPARISON</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">See how we stack up</h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">No other tool does what LLMClicks does.</p>
        </motion.div>

        <motion.div className="rounded-2xl border border-border bg-card overflow-x-auto shimmer-card gradient-border" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-5 font-display font-semibold">Feature</th>
                {tools.map((t) => (
                  <th key={t.name} className={`py-4 px-5 font-display font-semibold text-center ${t.name === "LLMClicks" ? "text-accent" : "text-muted-foreground"}`}>{t.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, fi) => (
                <motion.tr key={feature} className="border-b border-border/50 last:border-0 hover:bg-secondary/40 transition-colors" custom={fi} variants={row} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <td className="py-3.5 px-5 text-muted-foreground">{feature}</td>
                  {tools.map((t) => (
                    <td key={t.name} className="py-3.5 px-5"><CellIcon val={t.values[fi]} /></td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div className="mt-10 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 glow-hover" asChild>
            <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Comparison;
