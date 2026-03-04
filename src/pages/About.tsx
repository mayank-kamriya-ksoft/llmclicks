import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users } from "lucide-react";

const About = () => (
  <Layout>
    <section className="section-padding pt-24 md:pt-32">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">About <span className="gradient-text">LLMClicks</span></h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to help businesses understand and optimize their visibility in the age of AI-powered search.
          </p>
        </motion.div>

        <div className="space-y-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-xl p-8">
            <h2 className="font-display text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              LLMClicks was born from a simple observation: as AI models like ChatGPT, Gemini, and Perplexity became the go-to sources for information, traditional SEO metrics no longer told the full story. We built the first platform dedicated to tracking, analyzing, and optimizing how AI models perceive and reference brands.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Mission", desc: "Empower every business to understand and improve their AI visibility with data-driven insights." },
              { icon: Lightbulb, title: "Vision", desc: "A world where brands have complete transparency into how AI systems represent them." },
              { icon: Users, title: "Team", desc: "A passionate team of SEO experts, AI researchers, and product engineers building the future of search." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="glass-card rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
