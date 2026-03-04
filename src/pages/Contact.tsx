import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="section-padding pt-24 md:pt-32">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Get in <span className="gradient-text">Touch</span></h1>
          <p className="text-lg text-muted-foreground">Have questions? We'd love to hear from you.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.form
            className="glass-card rounded-xl p-8 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">First Name</label>
                <Input placeholder="John" className="bg-secondary border-border" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Last Name</label>
                <Input placeholder="Doe" className="bg-secondary border-border" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input type="email" placeholder="john@example.com" className="bg-secondary border-border" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <Textarea placeholder="Tell us about your needs..." className="bg-secondary border-border min-h-[120px]" />
            </div>
            <Button className="w-full">Send Message</Button>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-display font-semibold mb-1">Email Us</h3>
                <p className="text-sm text-muted-foreground">support@llmclicks.ai</p>
              </div>
            </div>
            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-display font-semibold mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">Remote-first company, serving clients worldwide.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
