"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

export default function BODSection() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => setActiveIndex(null), []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleClose]);

  const member = activeIndex !== null ? t.bod.members[activeIndex] : null;

  return (
    <section id="board" className="relative overflow-hidden bg-[#232324]">
      {/* Header - compact */}
      <div className="max-w-7xl mx-auto px-6 pt-20 lg:pt-24 pb-8 text-center">
        <AnimatedSection>
          <span className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase">
            {t.bod.badge}
          </span>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
            {t.bod.headline}{" "}
            <span className="text-primary-500">{t.bod.headlineHighlight}</span>
          </h2>
        </AnimatedSection>
      </div>

      {/* Group Photo - constrained height */}
      <AnimatedSection delay={0.15}>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="/images/bod-together.webp"
              alt="Board of Directors"
              className="w-full h-auto"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Name Plates - tight below photo */}
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-20 lg:pb-24">
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3"
          staggerDelay={0.1}
        >
          {t.bod.members.map((m, i) => (
            <StaggerItem key={m.name}>
              <motion.button
                onClick={() => setActiveIndex(i)}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="w-full text-left p-4 rounded-lg bg-white/[0.03] border border-white/[0.06] cursor-pointer transition-all duration-300 hover:bg-white/[0.07] hover:border-primary-500/40 hover:shadow-lg hover:shadow-primary-700/10 group flex items-center gap-4 md:block"
              >
                {/* Portrait circle */}
                <div className="w-12 h-12 md:w-10 md:h-10 shrink-0 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary-500/50 transition-colors duration-300 md:mb-3">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div>
                  {/* Name */}
                  <div className="text-sm md:text-[13px] font-bold text-white group-hover:text-primary-400 transition-colors duration-200">
                    {m.name}
                  </div>

                  {/* Title */}
                  <div className="mt-0.5 md:mt-1 text-[11px] md:text-[10px] font-medium tracking-wide uppercase text-white/40 leading-relaxed">
                    {m.title}
                  </div>
                </div>
              </motion.button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {member && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              onClick={handleClose}
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
              className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 sm:w-full sm:max-w-3xl sm:max-h-[85vh] bg-neutral-900 border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col"
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all duration-200"
                aria-label={t.bod.closeLabel}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal content - split layout */}
              <div className="flex flex-col sm:flex-row h-full">
                {/* Portrait - left half */}
                <div className="shrink-0 sm:w-[45%] h-56 sm:h-auto">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Text content - right half, scrollable */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                  {/* Name & title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {member.name}
                  </h3>
                  <div className="mt-1 text-xs font-semibold tracking-wider uppercase text-primary-500">
                    {member.title}
                  </div>

                  {/* Divider */}
                  <div className="mt-4 mb-4 h-px bg-white/10" />

                  {/* Bio paragraphs */}
                  <div className="space-y-3">
                    {member.bio.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-sm text-white/60 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="mt-6 p-5 bg-white/[0.04] border-l-2 border-primary-700 rounded-r-lg">
                    <svg className="w-6 h-6 text-primary-500/60 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>
                    <p className="text-base sm:text-lg italic text-white/80 leading-relaxed">
                      {member.quote}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
