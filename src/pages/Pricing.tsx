import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    desc: "Perfect for getting started with AI visibility",
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
    desc: "For large organizations with custom needs",
    features: ["Everything in Professional", "Custom integrations", "Dedicated account manager", "White-label reports", "SLA guarantee", "On-boarding & training"],
    cta: "Contact Sales",
    highlight: false,
  },
];

const Pricing = () => (
  <Layout>
    <section className="section-padding pt-24 md:pt-32">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Simple, Transparent <span className="gradient-text">Pricing</span></h1>
          <p className="text-lg text-muted-foreground">Start free. Scale as you grow.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`glass-card rounded-xl p-8 flex flex-col ${tier.highlight ? "border-primary/50 glow-blue" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-display text-xl font-bold mb-1">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{tier.desc}</p>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold">{tier.price}</span>
                {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant={tier.highlight ? "default" : "outline"} className="w-full" asChild>
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
