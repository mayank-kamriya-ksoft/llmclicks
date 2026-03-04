import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

const posts = [
  { slug: "ai-visibility-101", title: "AI Visibility 101: Why Your Brand Needs It", excerpt: "Learn the fundamentals of AI visibility and why it's becoming essential.", date: "Feb 15, 2025", tag: "Guide" },
  { slug: "chatgpt-vs-google", title: "ChatGPT vs Google: The New Search Battlefield", excerpt: "How AI-powered search is reshaping the landscape.", date: "Feb 10, 2025", tag: "Analysis" },
  { slug: "optimizing-for-llms", title: "How to Optimize Your Content for LLMs", excerpt: "Practical tips to make your content more discoverable.", date: "Feb 5, 2025", tag: "Tutorial" },
  { slug: "ai-seo-trends-2025", title: "Top AI SEO Trends for 2025", excerpt: "The most important trends at the intersection of AI and SEO.", date: "Jan 28, 2025", tag: "Trends" },
  { slug: "measuring-ai-traffic", title: "Measuring AI-Driven Traffic: A Complete Guide", excerpt: "How to track traffic from AI model recommendations.", date: "Jan 20, 2025", tag: "Guide" },
  { slug: "brand-mentions-in-ai", title: "Understanding Brand Mentions in AI Responses", excerpt: "How AI models decide which brands to mention.", date: "Jan 15, 2025", tag: "Research" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.5 } }),
};

const Blog = () => (
  <Layout>
    <section className="section-padding pt-28 md:pt-36 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] accent-mesh opacity-30 pointer-events-none" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14 text-center">
          <div className="tag-pill mb-4 mx-auto"><BookOpen className="h-3 w-3" /> BLOG</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Insights & updates</h1>
          <p className="text-lg text-muted-foreground">Latest on AI visibility and SEO.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.article key={post.slug} className="rounded-2xl border border-border bg-card overflow-hidden group cursor-pointer shimmer-card glow-hover" custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="h-40 bg-secondary/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 accent-mesh opacity-20" />
                <span className="tag-pill relative z-10">{post.tag}</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                <h3 className="font-display font-bold mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                <span className="text-sm font-medium text-accent flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
