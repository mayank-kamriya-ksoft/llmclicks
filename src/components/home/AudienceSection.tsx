import { motion } from "framer-motion";
import { Building2, Users, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const audiences = [
  { icon: Building2, title: "Agencies", desc: "Deliver AI visibility reports to clients. Stand out with cutting-edge services.", to: "/about", accent: "bg-accent/10 text-accent" },
  { icon: Users, title: "In-House Teams", desc: "Monitor your brand's AI presence. Integrate into existing workflows.", to: "/about", accent: "bg-coral/10 text-coral" },
  { icon: Briefcase, title: "Consultants", desc: "Add AI visibility audits to your toolkit. Data-driven recommendations.", to: "/about", accent: "bg-teal/10 text-teal" },
];

const AudienceSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="container mx-auto relative z-10">
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="tag-pill mb-4">WHO IT'S FOR</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold max-w-md">Built for every team</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {audiences.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to={a.to}
              className="block rounded-2xl border border-border bg-card p-7 hover:shadow-lg hover:border-accent/20 transition-all group h-full"
            >
              <div className={`mb-5 h-12 w-12 rounded-xl ${a.accent} flex items-center justify-center`}>
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{a.desc}</p>
              <span className="text-sm font-medium flex items-center gap-1.5 text-accent group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
