import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="section-padding pt-28 md:pt-36 relative overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] accent-mesh opacity-30 pointer-events-none" />
      <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-accent/30 animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-40 right-20 w-2 h-2 rounded-full bg-accent/20 animate-float pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14 text-center">
          <div className="tag-pill mb-4 mx-auto"><MessageSquare className="h-3 w-3" /> CONTACT</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Let's talk</h1>
          <p className="text-lg text-muted-foreground">Have questions? We'd love to hear from you.</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          <motion.form className="md:col-span-3 rounded-2xl border border-border bg-card p-7 space-y-5 shimmer-card gradient-border" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="text-sm font-medium mb-1.5 block">First Name</label><Input placeholder="John" className="rounded-xl" /></div>
              <div><label className="text-sm font-medium mb-1.5 block">Last Name</label><Input placeholder="Doe" className="rounded-xl" /></div>
            </div>
            <div><label className="text-sm font-medium mb-1.5 block">Email</label><Input type="email" placeholder="john@example.com" className="rounded-xl" /></div>
            <div><label className="text-sm font-medium mb-1.5 block">Message</label><Textarea placeholder="Tell us about your needs..." className="rounded-xl min-h-[120px]" /></div>
            <Button className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90 glow-hover">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </motion.form>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="md:col-span-2 space-y-4">
            {[
              { icon: Mail, title: "Email Us", text: "support@llmclicks.ai" },
              { icon: MapPin, title: "Location", text: "Remote-first, serving clients worldwide." },
            ].map((item, i) => (
              <motion.div key={item.title} className="rounded-2xl border border-border bg-card p-6 flex items-start gap-4 shimmer-card" whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm mb-0.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
