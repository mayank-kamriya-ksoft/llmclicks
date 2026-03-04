import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const posts = [
  { slug: "ai-visibility-101", title: "AI Visibility 101: Why Your Brand Needs It", excerpt: "Learn the fundamentals of AI visibility and why it's becoming essential for modern digital marketing strategies.", date: "Feb 15, 2025", category: "Guide" },
  { slug: "chatgpt-vs-google", title: "ChatGPT vs Google: The New Search Battlefield", excerpt: "How AI-powered search is reshaping the landscape and what it means for your SEO strategy.", date: "Feb 10, 2025", category: "Analysis" },
  { slug: "optimizing-for-llms", title: "How to Optimize Your Content for LLMs", excerpt: "Practical tips and strategies to make your content more discoverable by large language models.", date: "Feb 5, 2025", category: "Tutorial" },
  { slug: "ai-seo-trends-2025", title: "Top AI SEO Trends for 2025", excerpt: "The most important trends shaping the intersection of AI and search engine optimization this year.", date: "Jan 28, 2025", category: "Trends" },
  { slug: "measuring-ai-traffic", title: "Measuring AI-Driven Traffic: A Complete Guide", excerpt: "How to track and measure the traffic coming from AI model recommendations and citations.", date: "Jan 20, 2025", category: "Guide" },
  { slug: "brand-mentions-in-ai", title: "Understanding Brand Mentions in AI Responses", excerpt: "Deep dive into how AI models decide which brands to mention and how to influence those decisions.", date: "Jan 15, 2025", category: "Research" },
];

const Blog = () => (
  <Layout>
    <section className="section-padding pt-24 md:pt-32">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Latest from Our <span className="gradient-text">Blog</span></h1>
          <p className="text-lg text-muted-foreground">Insights, guides, and updates on AI visibility and SEO.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              className="glass-card rounded-xl overflow-hidden group hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="h-40 bg-secondary/50 flex items-center justify-center">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">{post.category}</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                <h3 className="font-display font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                <span className="text-sm text-primary flex items-center gap-1">
                  Read more <ArrowRight className="h-3 w-3" />
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
