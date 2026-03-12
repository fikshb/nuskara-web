"use client";

import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { useTranslation } from "@/i18n/LanguageContext";

const pillarLogos = [
  "/images/csr-riset-kolaboratif.svg",
  "/images/csr-tumbuh-bersama.svg",
  "/images/csr-ulur-tangan.svg",
  "/images/csr-bangun-generasi.svg",
];

export default function NewsSection() {
  const { t } = useTranslation();

  return (
    <section id="csr" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Top crimson accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-700/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <AnimatedSection>
            <span className="text-xs font-bold tracking-[0.2em] text-primary-700 uppercase">
              {t.csr.badge}
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
              {t.csr.headline}{" "}
              <span className="text-primary-700">{t.csr.headlineHighlight}</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-4 text-neutral-500 text-[15px] leading-relaxed max-w-2xl mx-auto">
              {t.csr.description}
            </p>
          </AnimatedSection>
        </div>

        {/* 4 Pillar Cards */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.12}
        >
          {t.csr.pillars.map((pillar, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-xl border border-neutral-100 p-6 hover:shadow-xl hover:shadow-primary-700/8 transition-shadow duration-300 h-full flex flex-col items-center text-center"
              >
                {/* Logo */}
                <div className="w-20 h-20 mb-5">
                  <img
                    src={pillarLogos[i]}
                    alt={pillar.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Category tag */}
                <span className="text-[10px] font-bold tracking-wider uppercase text-primary-700/70 mb-2">
                  {pillar.category}
                </span>

                {/* Name */}
                <h3 className="font-bold text-neutral-900 text-base leading-snug mb-3 group-hover:text-primary-700 transition-colors">
                  {pillar.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-500 leading-relaxed flex-1">
                  {pillar.description}
                </p>

                {/* Partners */}
                <div className="mt-4 pt-4 border-t border-neutral-100 w-full">
                  <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-400">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                    <span>{pillar.partners}</span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Recent Activity */}
        <AnimatedSection delay={0.5}>
          <div className="mt-14 bg-neutral-950 rounded-2xl overflow-hidden flex flex-col lg:flex-row">
            {/* Photo */}
            <div className="lg:w-80 flex-shrink-0">
              <img
                src="/images/csr-bukber-ramadan.webp"
                alt={t.csr.activity.title}
                className="w-full h-48 lg:h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <span className="text-[10px] font-bold tracking-wider uppercase text-primary-700">
                {t.csr.activityLabel}
              </span>
              <div className="text-xs text-neutral-500 mt-1 mb-3">{t.csr.activity.date}</div>
              <h4 className="font-bold text-white text-lg leading-snug mb-2">
                {t.csr.activity.title}
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {t.csr.activity.description}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
