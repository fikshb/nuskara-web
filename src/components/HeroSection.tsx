"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";

const subsidiaryCodes = [
  { code: "DAN", stat: "80.000+", color: "from-primary-700 to-primary-900" },
  { code: "SSM", stat: "150+", color: "from-primary-800 to-neutral-900" },
  { code: "PT GBN", stat: null, color: "from-neutral-800 to-neutral-950" },
  { code: "PT MCA", stat: "109+", color: "from-primary-900 to-neutral-950" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.35, delayChildren: 0.7 },
  },
};

const ease = [0.12, 0.8, 0.25, 1] as [number, number, number, number];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease },
  },
};

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/75 via-neutral-950/35 to-neutral-950/5" />
      </div>

      {/* Geometric Overlay Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute -top-20 -right-20 w-96 h-96 border border-primary-700/20 rotate-45" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] border border-primary-700/10 rotate-12" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left - Main Content */}
          <motion.div
            className="lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 bg-primary-700/20 border border-primary-700/30 text-white text-xs font-semibold tracking-widest uppercase rounded-sm mb-6">
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6"
            >
              {t.hero.headline.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
              <span className="text-primary-500">{t.hero.headlineHighlight}</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-6 flex-wrap"
            >
              {t.hero.subtitle.map((item, i) => (
                <span key={i} className="contents">
                  {i > 0 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                  )}
                  <span className="text-sm font-semibold text-white/80 tracking-widest uppercase">
                    {item}
                  </span>
                </span>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-white/60 text-base lg:text-lg max-w-lg leading-relaxed mb-8"
            >
              {t.hero.description}
            </motion.p>

            <motion.a
              variants={itemVariants}
              href="#about"
              className="inline-flex items-center px-8 py-3.5 bg-primary-700 text-white font-semibold text-sm tracking-wide rounded hover:bg-primary-600 transition-all duration-300 hover:shadow-xl hover:shadow-primary-700/30"
            >
              {t.hero.cta}
            </motion.a>
          </motion.div>

          {/* Right - Subsidiary Cards */}
          <motion.div
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={cardVariants}
              className="text-xs font-bold tracking-widest text-white/50 uppercase mb-4"
            >
              {t.hero.subsidiaryLabel}
            </motion.p>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:gap-3" id="subsidiaries">
              {subsidiaryCodes.map((sub, i) => {
                const translated = t.hero.subsidiaries[i];
                return (
                  <motion.div
                    key={sub.code}
                    variants={cardVariants}
                    custom={i}
                    whileHover={{ x: -4, transition: { duration: 0.2 } }}
                    className={`relative overflow-hidden rounded-lg p-3 lg:p-4 bg-gradient-to-r ${sub.color} border border-white/10 cursor-default group`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1 lg:gap-0">
                      <div>
                        <div className="text-white font-bold text-xs lg:text-sm tracking-wide">
                          {sub.code}
                        </div>
                        <div className="text-white/60 text-[10px] lg:text-xs mt-0.5 leading-tight">
                          {translated.name}
                        </div>
                      </div>
                      <div className="lg:text-right">
                        {sub.stat ? (
                          <>
                            <div className="text-lg lg:text-2xl font-black text-white">
                              {sub.stat}
                            </div>
                            <div className="text-[9px] lg:text-[10px] text-white/40 font-medium">
                              {translated.statLabel}
                            </div>
                          </>
                        ) : (
                          <div className="text-[10px] lg:text-xs font-semibold text-white/50 tracking-wider uppercase">
                            {translated.statLabel}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
