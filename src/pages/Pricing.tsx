import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    desc: "Perfect for getting started",
    features: ["1 brand audit per month", "Basic visibility score", "Top 3 AI model tracking", "Email reports", "Community support"],
    cta: "Start Free",
    highlight: false,
    color: "bg-sky/5",
    checkColor: "text-sky",
  },
  {
    name: "Professional",
    price: "$99",
    period: "/mo",
    desc: "For teams serious about AI visibility",
    features: ["Unlimited brand audits", "Advanced visibility analytics", "All AI model tracking", "Prompt tracking & monitoring", "Citation analysis", "Priority support", "API access"],
    cta: "Start Free Trial",
    highlight: true,
    color: "gradient-bg-primary",
    checkColor: "text-primary-foreground",
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large organizations",
    features: ["Everything in Professional", "Custom integrations", "Dedicated account manager", "White-label reports", "SLA guarantee", "On-boarding & training"],
    cta: "Contact Sales",
    highlight: false,
    color: "bg-coral/5",
    checkColor: "text-coral",
  },
];

const Pricing = () => (
  <Layout>
    <section className="section-padding pt-28 md:pt-36">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="highlight-pill mb-4 mx-auto w-fit">
            <Sparkles className="h-4 w-4" /> Pricing
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-4">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h1>
          <p className="text-lg text-muted-foreground">Start free. Scale as you grow. No surprises.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`rounded-3xl p-8 flex flex-col ${tier.highlight ? `${tier.color} text-primary-foreground` : "bold-card"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-display text-xl font-bold mb-1">{tier.name}</h3>
              <p className={`text-sm mb-6 ${tier.highlight ? "opacity-80" : "text-muted-foreground"}`}>{tier.desc}</p>
              <div className="mb-8">
                <span className="font-display text-5xl font-extrabold">{tier.price}</span>
                {tier.period && <span className={tier.highlight ? "opacity-60" : "text-muted-foreground"}>{tier.period}</span>}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${tier.highlight ? "text-primary-foreground" : tier.checkColor}`} />
                    <span className={tier.highlight ? "opacity-90" : "text-muted-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.highlight ? "secondary" : "outline"}
                className={`w-full rounded-full ${tier.highlight ? "bg-background text-foreground hover:bg-background/90" : ""}`}
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
