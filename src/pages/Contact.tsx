import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="section-padding pt-28 md:pt-36">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="highlight-pill mb-4 mx-auto w-fit">Contact</div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-4">
            Let's <span className="gradient-text">Talk</span>
          </h1>
          <p className="text-lg text-muted-foreground">Have questions? We'd love to hear from you.</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.form
            className="bold-card md:col-span-3 space-y-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">First Name</label>
                <Input placeholder="John" className="rounded-xl bg-secondary/50 border-border" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Last Name</label>
                <Input placeholder="Doe" className="rounded-xl bg-secondary/50 border-border" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input type="email" placeholder="john@example.com" className="rounded-xl bg-secondary/50 border-border" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <Textarea placeholder="Tell us about your needs..." className="rounded-xl bg-secondary/50 border-border min-h-[140px]" />
            </div>
            <Button className="w-full rounded-full gradient-bg-primary border-0 py-6 text-base">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-2 space-y-5">
            <div className="bold-card flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-violet/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-violet" />
              </div>
              <div>
                <h3 className="font-display font-bold mb-1">Email Us</h3>
                <p className="text-sm text-muted-foreground">support@llmclicks.ai</p>
              </div>
            </div>
            <div className="bold-card flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-coral/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-coral" />
              </div>
              <div>
                <h3 className="font-display font-bold mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">Remote-first, serving clients worldwide.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
