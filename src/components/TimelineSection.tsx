"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";
import AnimatedSection from "./AnimatedSection";

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      {direction === "left" ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      )}
    </svg>
  );
}

export default function TimelineSection() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(timelineRef, { once: true, margin: "-100px" });

  const [userInteracted, setUserInteracted] = useState(false);

  const milestones = t.timeline.milestones;
  const active = milestones[activeIndex];
  const progress = (activeIndex / (milestones.length - 1)) * 100;

  const handleUserSelect = useCallback((i: number) => {
    setUserInteracted(true);
    setActiveIndex(i);
  }, []);

  const goPrev = () => handleUserSelect(Math.max(0, activeIndex - 1));
  const goNext = () => handleUserSelect(Math.min(milestones.length - 1, activeIndex + 1));

  // Auto-advance: 3 steps (0→1→2) then stop. Stops immediately on user interaction.
  useEffect(() => {
    if (!inView || userInteracted) return;

    const timer = setTimeout(() => {
      setActiveIndex((prev) => {
        if (prev >= 2) {
          setUserInteracted(true);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [inView, activeIndex, userInteracted]);

  return (
    <section id="timeline" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background texture */}
      <div className="absolute inset-0">
        <img
          src="/images/bg-frame-2.webp"
          alt=""
          className="w-full h-full object-cover opacity-[0.18]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <AnimatedSection>
            <span className="text-xs font-bold tracking-[0.2em] text-primary-700 uppercase">
              {t.timeline.badge}
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
              {t.timeline.headline}{" "}
              <span className="text-primary-700">{t.timeline.headlineHighlight}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-4 text-neutral-500 text-base leading-relaxed max-w-2xl mx-auto">
              {t.timeline.description}
            </p>
          </AnimatedSection>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline bar */}
          <div className="relative mb-10">
            {/* Background line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-neutral-200 -translate-y-1/2" />

            {/* Progress fill */}
            <motion.div
              className="absolute top-1/2 left-0 h-0.5 bg-primary-700 -translate-y-1/2 origin-left"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: progress / 100 } : { scaleX: 0 }}
              transition={{ duration: 0.6, ease }}
              style={{ width: "100%" }}
            />

            {/* Year pill buttons */}
            <div className="relative flex justify-between">
              {milestones.map((m, i) => {
                const isActive = i === activeIndex;
                const isPast = i <= activeIndex;

                return (
                  <motion.button
                    key={m.year}
                    onClick={() => handleUserSelect(i)}
                    className="relative cursor-pointer bg-transparent border-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  >
                    <motion.div
                      className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold border-2 transition-shadow duration-300"
                      animate={{
                        backgroundColor: isActive ? "#B91C1C" : isPast ? "#fef2f2" : "#ffffff",
                        borderColor: isActive ? "#B91C1C" : isPast ? "#B91C1C" : "#d4d4d4",
                        color: isActive ? "#ffffff" : isPast ? "#B91C1C" : "#a3a3a3",
                        scale: isActive ? 1.1 : 1,
                      }}
                      whileHover={{ scale: isActive ? 1.1 : 1.05 }}
                      transition={{ duration: 0.3 }}
                      style={{ boxShadow: isActive ? "0 4px 14px rgba(185, 28, 28, 0.25)" : "none" }}
                    >
                      {m.year}
                    </motion.div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Content panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease }}
              className="relative bg-neutral-50 rounded-xl p-8 sm:p-10 border border-neutral-100"
            >
              {/* Connecting indicator */}
              <div
                className="absolute -top-2 w-4 h-4 bg-neutral-50 border-l border-t border-neutral-100 rotate-45 transition-all duration-500"
                style={{
                  left: `${progress}%`,
                  transform: `translateX(-50%) rotate(45deg)`,
                }}
              />

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
                {/* Year display */}
                <div className="shrink-0">
                  <motion.span
                    className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary-700/10 leading-none"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {active.year}
                  </motion.span>
                </div>

                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <motion.h3
                    className="text-lg sm:text-xl font-bold text-neutral-900"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  >
                    {active.title}
                  </motion.h3>

                  <motion.div
                    className="mt-2 h-0.5 w-12 bg-primary-700 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    style={{ originX: 0 }}
                  />

                  <motion.p
                    className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                  >
                    {active.description}
                  </motion.p>
                </div>
              </div>

              {/* Prev/Next arrows */}
              <div className="flex items-center justify-end gap-2 mt-6 pt-4 border-t border-neutral-100">
                <button
                  onClick={goPrev}
                  disabled={activeIndex === 0}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral-200 text-neutral-500 hover:border-primary-700 hover:text-primary-700 hover:bg-primary-50 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-neutral-200 disabled:hover:text-neutral-500 disabled:hover:bg-transparent"
                >
                  <ArrowIcon direction="left" />
                </button>
                <span className="text-xs text-neutral-400 font-medium mx-2">
                  {activeIndex + 1} / {milestones.length}
                </span>
                <button
                  onClick={goNext}
                  disabled={activeIndex === milestones.length - 1}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral-200 text-neutral-500 hover:border-primary-700 hover:text-primary-700 hover:bg-primary-50 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-neutral-200 disabled:hover:text-neutral-500 disabled:hover:bg-transparent"
                >
                  <ArrowIcon direction="right" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
