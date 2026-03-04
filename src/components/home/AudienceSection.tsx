import { motion } from "framer-motion";
import { Building2, Users, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const audiences = [
  { icon: Building2, title: "Agencies", desc: "Deliver AI visibility reports to clients. Stand out with cutting-edge services.", to: "/about", accent: "bg-accent/10 text-accent" },
  { icon: Users, title: "In-House Teams", desc: "Monitor your brand's AI presence. Integrate into existing workflows.", to: "/about", accent: "bg-coral/10 text-coral" },
  { icon: Briefcase, title: "Consultants", desc: "Add AI visibility audits to your toolkit. Data-driven recommendations.", to: "/about", accent: "bg-teal/10 text-teal" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

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

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {audiences.map((a) => (
          <motion.div key={a.title} variants={cardVariants} style={{ perspective: 800 }}>
            <Link
              to={a.to}
              className="block rounded-2xl border border-border bg-card p-7 hover:shadow-xl hover:border-accent/20 transition-all duration-300 group h-full shimmer-card glow-hover"
            >
              <motion.div
                className={`mb-5 h-12 w-12 rounded-xl ${a.accent} flex items-center justify-center`}
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a.icon className="h-6 w-6" />
              </motion.div>
              <h3 className="font-display font-bold text-xl mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{a.desc}</p>
              <span className="text-sm font-medium flex items-center gap-1.5 text-accent group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AudienceSection;
