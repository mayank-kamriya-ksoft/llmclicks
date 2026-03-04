import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Heart } from "lucide-react";

const About = () => (
  <Layout>
    <section className="section-padding pt-28 md:pt-36">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <div className="highlight-pill mb-4 mx-auto w-fit">About Us</div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-6">
            We're Building the Future of{" "}
            <span className="gradient-text">AI Visibility</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Helping businesses understand and thrive in the age of AI-powered search.
          </p>
        </motion.div>

        <motion.div
          className="bold-card mb-12 p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-3">
            <Heart className="h-6 w-6 text-coral" /> Our Story
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            LLMClicks was born from a simple observation: as AI models like ChatGPT, Gemini, and Perplexity became the go-to sources for information, traditional SEO metrics no longer told the full story. We built the first platform dedicated to tracking, analyzing, and optimizing how AI models perceive and reference brands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Mission", desc: "Empower every business to understand and improve their AI visibility with data-driven insights.", color: "bg-violet/10 text-violet" },
            { icon: Lightbulb, title: "Vision", desc: "A world where brands have complete transparency into how AI systems represent them.", color: "bg-coral/10 text-coral" },
            { icon: Users, title: "Team", desc: "A passionate team of SEO experts, AI researchers, and product engineers building the future of search.", color: "bg-sky/10 text-sky" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="bold-card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`mx-auto mb-5 h-14 w-14 rounded-2xl ${item.color} flex items-center justify-center`}>
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
