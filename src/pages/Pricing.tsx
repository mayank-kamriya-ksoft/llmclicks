import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    desc: "Perfect for getting started",
    features: ["1 brand audit per month", "Basic visibility score", "Top 3 AI model tracking", "Email reports", "Community support"],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/mo",
    desc: "For teams serious about AI visibility",
    features: ["Unlimited brand audits", "Advanced visibility analytics", "All AI model tracking", "Prompt tracking & monitoring", "Citation analysis", "Priority support", "API access"],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large organizations",
    features: ["Everything in Professional", "Custom integrations", "Dedicated account manager", "White-label reports", "SLA guarantee", "On-boarding & training"],
    cta: "Contact Sales",
    highlight: false,
  },
];

const Pricing = () => (
  <Layout>
    <section className="section-padding pt-28 md:pt-36 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] accent-blob opacity-40 pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
          <div className="tag-pill mb-4">PRICING</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 max-w-md">Simple, transparent pricing</h1>
          <p className="text-lg text-muted-foreground">Start free. Scale as you grow.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`rounded-2xl p-7 flex flex-col ${tier.highlight ? "bg-foreground text-background" : "bg-card border border-border"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-display text-lg font-bold mb-1">{tier.name}</h3>
              <p className={`text-sm mb-5 ${tier.highlight ? "opacity-60" : "text-muted-foreground"}`}>{tier.desc}</p>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold">{tier.price}</span>
                {tier.period && <span className={tier.highlight ? "opacity-50" : "text-muted-foreground"}>{tier.period}</span>}
              </div>
              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${tier.highlight ? "text-lime" : "text-lime"}`} />
                    <span className={tier.highlight ? "opacity-80" : "text-muted-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-full ${tier.highlight ? "bg-background text-foreground hover:bg-background/90" : "bg-foreground text-background hover:bg-foreground/90"}`}
                asChild
              >
                <a href="https://app.llmclicks.ai/signup" target="_blank" rel="noopener noreferrer">
                  {tier.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Pricing;
