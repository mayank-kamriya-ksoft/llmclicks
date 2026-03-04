import { motion } from "framer-motion";
import { Building2, Users, Briefcase } from "lucide-react";

const audiences = [
  { icon: Building2, title: "Agencies", desc: "Deliver AI visibility reports to clients. Stand out with cutting-edge SEO services that cover the AI search landscape." },
  { icon: Users, title: "In-House Teams", desc: "Monitor your brand's AI presence internally. Integrate AI visibility tracking into your existing marketing workflows." },
  { icon: Briefcase, title: "Consultants", desc: "Add AI visibility audits to your consulting toolkit. Provide data-driven recommendations backed by real AI model analysis." },
];

const AudienceSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        className="mx-auto max-w-2xl text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Built for <span className="gradient-text">Every Team</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {audiences.map((a, i) => (
          <motion.div
            key={a.title}
            className="glass-card rounded-xl p-8 text-center hover:border-primary/30 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <a.icon className="h-7 w-7" />
            </div>
            <h3 className="font-display text-xl font-bold mb-3">{a.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
