"use client";

import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { useTranslation } from "@/i18n/LanguageContext";

// Pillar icons
const icons = [
  // 0: Research - beaker
  <svg key="research" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
  </svg>,
  // 1: UMKM - storefront
  <svg key="umkm" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
  </svg>,
  // 2: Humanitarian - hand raised/heart
  <svg key="humanitarian" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>,
  // 3: Education - academic cap
  <svg key="education" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
  </svg>,
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
                className="group relative bg-white rounded-xl border border-neutral-100 p-6 hover:shadow-xl hover:shadow-primary-700/8 transition-shadow duration-300 h-full flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary-700/5 flex items-center justify-center text-primary-700 mb-4 group-hover:bg-primary-700/10 transition-colors">
                  {icons[i]}
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
                <div className="mt-4 pt-4 border-t border-neutral-100">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400">
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
          <div className="mt-14 bg-neutral-950 rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row gap-6 lg:gap-10 items-start lg:items-center">
            <div className="flex-shrink-0">
              <span className="text-[10px] font-bold tracking-wider uppercase text-primary-700">
                {t.csr.activityLabel}
              </span>
              <div className="text-xs text-neutral-500 mt-1">{t.csr.activity.date}</div>
            </div>
            <div className="flex-1">
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
