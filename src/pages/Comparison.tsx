import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

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
  if (val === true) return <Check className="h-4 w-4 text-lime mx-auto" />;
  if (val === "partial") return <Minus className="h-4 w-4 text-muted-foreground mx-auto" />;
  return <X className="h-4 w-4 text-border mx-auto" />;
};

const Comparison = () => (
  <Layout>
    <section className="section-padding pt-28 md:pt-36">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
          <div className="tag-pill mb-4">COMPARISON</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 max-w-md">See how we stack up</h1>
          <p className="text-lg text-muted-foreground">No other tool does what LLMClicks does.</p>
        </motion.div>

        <div className="rounded-2xl border border-border bg-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-5 font-display font-semibold">Feature</th>
                {tools.map((t) => (
                  <th key={t.name} className={`py-4 px-5 font-display font-semibold text-center ${t.name === "LLMClicks" ? "" : "text-muted-foreground"}`}>{t.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, fi) => (
                <tr key={feature} className="border-b border-border/50 last:border-0">
                  <td className="py-3.5 px-5 text-muted-foreground">{feature}</td>
                  {tools.map((t) => (
                    <td key={t.name} className="py-3.5 px-5"><CellIcon val={t.values[fi]} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default Comparison;
