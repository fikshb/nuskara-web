"use client";

import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { useTranslation } from "@/i18n/LanguageContext";

const newsImages = [
  "/images/portfolio-1.webp",
  "/images/portfolio-2.webp",
  "/images/portfolio-3.webp",
];

export default function NewsSection() {
  const { t } = useTranslation();

  return (
    <section id="csr" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Top crimson accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-700/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <AnimatedSection>
              <span className="text-xs font-bold tracking-[0.2em] text-primary-700 uppercase">
                {t.news.badge}
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
                {t.news.headline}{" "}
                <span className="text-primary-700">{t.news.headlineHighlight}</span>
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2}>
            <a
              href="#csr"
              className="text-sm font-semibold text-neutral-400 hover:text-primary-700 transition-colors"
            >
              {t.news.viewAll}
            </a>
          </AnimatedSection>
        </div>

        {/* News Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.15}
        >
          {t.news.articles.map((item, i) => (
            <StaggerItem key={i}>
              <motion.article
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group bg-white rounded-xl border border-neutral-100 overflow-hidden hover:shadow-xl hover:shadow-primary-700/10 transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={newsImages[i]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-700 text-white text-[10px] font-bold tracking-wider uppercase rounded">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs text-neutral-400 font-medium mb-3">
                    {item.date}
                  </div>
                  <h3 className="font-bold text-neutral-900 text-base leading-snug mb-3 group-hover:text-primary-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
