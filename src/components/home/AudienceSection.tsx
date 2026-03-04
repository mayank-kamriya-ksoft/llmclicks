import { motion } from "framer-motion";
import { Building2, Users, Briefcase, ArrowRight } from "lucide-react";

const audiences = [
  { icon: Building2, title: "Agencies", desc: "Deliver AI visibility reports to clients. Stand out with cutting-edge SEO services that cover the AI search landscape.", color: "gradient-bg-primary", iconColor: "text-primary-foreground" },
  { icon: Users, title: "In-House Teams", desc: "Monitor your brand's AI presence internally. Integrate AI visibility tracking into your existing marketing workflows.", color: "bg-foreground", iconColor: "text-background" },
  { icon: Briefcase, title: "Consultants", desc: "Add AI visibility audits to your consulting toolkit. Provide data-driven recommendations backed by real AI model analysis.", color: "bg-sky", iconColor: "text-primary-foreground" },
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
        <div className="highlight-pill mb-4 mx-auto w-fit">Who It's For</div>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-5">
          Built for <span className="gradient-text">Every Team</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {audiences.map((a, i) => (
          <motion.div
            key={a.title}
            className={`rounded-3xl p-8 ${a.color} ${a.iconColor} flex flex-col justify-between min-h-[320px]`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-background/20">
                <a.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{a.title}</h3>
              <p className="text-sm leading-relaxed opacity-80">{a.desc}</p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
              Learn more <ArrowRight className="h-4 w-4" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
