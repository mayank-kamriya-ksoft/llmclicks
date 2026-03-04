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
  if (val === true) return <Check className="h-5 w-5 text-mint mx-auto" />;
  if (val === "partial") return <Minus className="h-5 w-5 text-peach mx-auto" />;
  return <X className="h-5 w-5 text-muted-foreground/30 mx-auto" />;
};

const Comparison = () => (
  <Layout>
    <section className="section-padding pt-28 md:pt-36">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="highlight-pill mb-4 mx-auto w-fit">Comparison</div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-4">
            See How We <span className="gradient-text">Stack Up</span>
          </h1>
          <p className="text-lg text-muted-foreground">No other tool does what LLMClicks does.</p>
        </motion.div>

        <div className="bold-card overflow-x-auto p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-5 px-6 font-display font-bold">Feature</th>
                {tools.map((t) => (
                  <th key={t.name} className={`py-5 px-6 font-display font-bold text-center ${t.name === "LLMClicks" ? "gradient-text" : "text-muted-foreground"}`}>
                    {t.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, fi) => (
                <tr key={feature} className="border-b border-border/50 last:border-0">
                  <td className="py-4 px-6 text-muted-foreground font-medium">{feature}</td>
                  {tools.map((t) => (
                    <td key={t.name} className="py-4 px-6"><CellIcon val={t.values[fi]} /></td>
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
