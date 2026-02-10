"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";

const statsData = [
  { numericPart: 10, suffix: "+", prefix: "" },
  { numericPart: 15, suffix: " T+", prefix: "IDR " },
  { numericPart: 9, suffix: "", prefix: "" },
];

function CountUp({
  target,
  suffix,
  prefix = "",
  duration = 2,
}: {
  target: number;
  suffix: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 py-10 overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-black text-white mb-1">
                {stat.prefix ? (
                  <>
                    <span className="text-primary-500">{stat.prefix}</span>
                    <CountUp target={stat.numericPart} suffix={stat.suffix} />
                  </>
                ) : (
                  <CountUp target={stat.numericPart} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-xs font-semibold tracking-widest text-white/60 uppercase">
                {t.stats.items[i].label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
