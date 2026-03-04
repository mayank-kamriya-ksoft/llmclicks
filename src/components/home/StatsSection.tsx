import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 95, suffix: "%", label: "Visibility Improvement" },
  { value: 10000, suffix: "+", label: "Audits Completed" },
  { value: 500, suffix: "+", label: "Active Users" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, 2000 / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-5xl md:text-6xl font-bold text-accent">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const StatsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-border">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex-1 text-center py-8 md:py-0 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-muted-foreground text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
