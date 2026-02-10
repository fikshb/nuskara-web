"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import IndonesiaMap from "./IndonesiaMap";
import { useTranslation } from "@/i18n/LanguageContext";

export default function LocationsSection() {
  const { t } = useTranslation();

  return (
    <section id="locations" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-neutral-50">
        <img
          src="/images/locations-bg.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header - centered above map */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="text-xs font-bold tracking-[0.2em] text-primary-700 uppercase">
              {t.locations.badge}
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
              {t.locations.headline}{" "}
              <span className="text-primary-700">{t.locations.headlineHighlight}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-4 text-neutral-500 text-base leading-relaxed max-w-2xl mx-auto">
              {t.locations.description}
            </p>
          </AnimatedSection>
        </div>

        {/* Interactive Map */}
        <AnimatedSection>
          <div className="p-6 lg:p-10">
            <IndonesiaMap />
          </div>
        </AnimatedSection>

        {/* Bottom row: location tags + CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Location tags */}
          <div className="flex flex-wrap gap-2">
            {t.locations.names.map((loc, i) => (
              <motion.span
                key={loc}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="px-3 py-1.5 bg-white border border-neutral-200 text-neutral-600 text-xs font-medium rounded-full hover:border-primary-700 hover:text-primary-700 transition-colors cursor-default"
              >
                {loc}
              </motion.span>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <a
              href="#portfolio"
              className="inline-flex items-center px-8 py-3.5 bg-primary-700 text-white font-semibold text-sm tracking-wide rounded hover:bg-primary-600 transition-all duration-300 hover:shadow-xl hover:shadow-primary-700/30 flex-shrink-0"
            >
              {t.locations.cta}
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
