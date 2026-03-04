import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Heart } from "lucide-react";

const About = () => (
  <Layout>
    <section className="section-padding pt-28 md:pt-36 relative overflow-hidden">
      <div className="absolute inset-0 accent-mesh pointer-events-none opacity-50" />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <div className="tag-pill mb-4">ABOUT US</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-5 max-w-lg">We're building the future of AI visibility</h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Helping businesses understand and thrive in the age of AI-powered search.
          </p>
        </motion.div>

        <motion.div className="rounded-2xl border border-border bg-card p-8 mb-10 gradient-border" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-xl font-bold mb-3 flex items-center gap-2"><Heart className="h-5 w-5 text-coral" /> Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            LLMClicks was born from a simple observation: as AI models like ChatGPT, Gemini, and Perplexity became the go-to sources for information, traditional SEO metrics no longer told the full story. We built the first platform dedicated to tracking, analyzing, and optimizing how AI models perceive and reference brands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Target, title: "Mission", desc: "Empower every business to understand and improve their AI visibility with data-driven insights.", color: "bg-accent/10 text-accent" },
            { icon: Lightbulb, title: "Vision", desc: "A world where brands have complete transparency into how AI systems represent them.", color: "bg-coral/10 text-coral" },
            { icon: Users, title: "Team", desc: "A passionate team of SEO experts, AI researchers, and product engineers.", color: "bg-teal/10 text-teal" },
          ].map((item, i) => (
            <motion.div key={item.title} className="rounded-2xl border border-border bg-card p-7 text-center hover:border-accent/20 transition-all" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className={`mx-auto mb-4 h-12 w-12 rounded-xl ${item.color} flex items-center justify-center`}>
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
