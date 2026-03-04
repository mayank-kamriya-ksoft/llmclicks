import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  { slug: "ai-visibility-101", title: "AI Visibility 101: Why Your Brand Needs It", excerpt: "Learn the fundamentals of AI visibility and why it's becoming essential for modern digital marketing strategies.", date: "Feb 15, 2025", category: "Guide", color: "bg-violet/10 text-violet" },
  { slug: "chatgpt-vs-google", title: "ChatGPT vs Google: The New Search Battlefield", excerpt: "How AI-powered search is reshaping the landscape and what it means for your SEO strategy.", date: "Feb 10, 2025", category: "Analysis", color: "bg-coral/10 text-coral" },
  { slug: "optimizing-for-llms", title: "How to Optimize Your Content for LLMs", excerpt: "Practical tips and strategies to make your content more discoverable by large language models.", date: "Feb 5, 2025", category: "Tutorial", color: "bg-sky/10 text-sky" },
  { slug: "ai-seo-trends-2025", title: "Top AI SEO Trends for 2025", excerpt: "The most important trends shaping the intersection of AI and search engine optimization this year.", date: "Jan 28, 2025", category: "Trends", color: "bg-mint/10 text-mint" },
  { slug: "measuring-ai-traffic", title: "Measuring AI-Driven Traffic: A Complete Guide", excerpt: "How to track and measure the traffic coming from AI model recommendations and citations.", date: "Jan 20, 2025", category: "Guide", color: "bg-peach/10 text-peach" },
  { slug: "brand-mentions-in-ai", title: "Understanding Brand Mentions in AI Responses", excerpt: "Deep dive into how AI models decide which brands to mention and how to influence those decisions.", date: "Jan 15, 2025", category: "Research", color: "bg-violet/10 text-violet" },
];

const Blog = () => (
  <Layout>
    <section className="section-padding pt-28 md:pt-36">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="highlight-pill mb-4 mx-auto w-fit">Blog</div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-4">
            Insights & <span className="gradient-text">Updates</span>
          </h1>
          <p className="text-lg text-muted-foreground">Latest on AI visibility and SEO.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              className="bold-card group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="h-44 rounded-2xl bg-secondary/50 flex items-center justify-center mb-5">
                <span className={`text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1 ${post.color}`}>{post.category}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
              <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more <ArrowRight className="h-3 w-3" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
