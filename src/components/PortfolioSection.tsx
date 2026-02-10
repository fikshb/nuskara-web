"use client";

import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { useTranslation } from "@/i18n/LanguageContext";

const projectImages = [
  "/images/portfolio-1.webp",
  "/images/portfolio-2.webp",
  "/images/portfolio-3.webp",
];

const projectYears = ["2024", "2024", "2023"];

export default function PortfolioSection() {
  const { t } = useTranslation();

  return (
    <section
      id="portfolio"
      className="relative py-24 lg:py-32 bg-neutral-950 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0">
        <img
          src="/images/bg-frame-3.webp"
          alt=""
          className="w-full h-full object-cover opacity-[0.06]"
        />
      </div>

      {/* Geometric accents */}
      <div className="absolute top-0 right-0 w-80 h-80 border border-[#B91C1C]/20 rotate-45 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-56 h-56 border border-[#B91C1C]/15 rotate-45 -translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <AnimatedSection>
              <span className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase">
                {t.portfolio.badge}
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                {t.portfolio.headline}{" "}
                <span className="text-primary-500">{t.portfolio.headlineHighlight}</span>
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2}>
            <a
              href="#portfolio"
              className="text-sm font-semibold text-white/50 hover:text-primary-500 transition-colors"
            >
              {t.portfolio.viewAll}
            </a>
          </AnimatedSection>
        </div>

        {/* Project Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.15}
        >
          {t.portfolio.projects.map((project, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative rounded-xl overflow-hidden bg-neutral-900 border border-white/5 hover:border-primary-700/30 transition-colors duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={projectImages[i]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-700/90 text-white text-[10px] font-bold tracking-wider uppercase rounded">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs text-white/30 font-medium mb-2">
                    {projectYears[i]}
                  </div>
                  <h3 className="text-white font-bold text-base leading-snug group-hover:text-primary-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="mt-4 text-xs font-semibold text-white/40 group-hover:text-primary-500 transition-colors">
                    {t.portfolio.readMore}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
