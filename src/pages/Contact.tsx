import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="section-padding pt-28 md:pt-36 relative overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] accent-blob opacity-40 pointer-events-none" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
          <div className="tag-pill mb-4">CONTACT</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 max-w-md">Let's talk</h1>
          <p className="text-lg text-muted-foreground">Have questions? We'd love to hear from you.</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          <motion.form className="md:col-span-3 rounded-2xl border border-border bg-card p-7 space-y-5" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="text-sm font-medium mb-1.5 block">First Name</label><Input placeholder="John" className="rounded-xl" /></div>
              <div><label className="text-sm font-medium mb-1.5 block">Last Name</label><Input placeholder="Doe" className="rounded-xl" /></div>
            </div>
            <div><label className="text-sm font-medium mb-1.5 block">Email</label><Input type="email" placeholder="john@example.com" className="rounded-xl" /></div>
            <div><label className="text-sm font-medium mb-1.5 block">Message</label><Textarea placeholder="Tell us about your needs..." className="rounded-xl min-h-[120px]" /></div>
            <Button className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-2 space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center shrink-0"><Mail className="h-5 w-5 text-muted-foreground" /></div>
              <div><h3 className="font-display font-semibold text-sm mb-0.5">Email Us</h3><p className="text-sm text-muted-foreground">support@llmclicks.ai</p></div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center shrink-0"><MapPin className="h-5 w-5 text-muted-foreground" /></div>
              <div><h3 className="font-display font-semibold text-sm mb-0.5">Location</h3><p className="text-sm text-muted-foreground">Remote-first, serving clients worldwide.</p></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
