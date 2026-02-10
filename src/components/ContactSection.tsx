"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useTranslation } from "@/i18n/LanguageContext";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-neutral-950 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/contact-bg.webp"
          alt=""
          className="w-full h-full object-cover object-left-top opacity-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/40 via-neutral-950/80 to-neutral-950" />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 border border-primary-700/10 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 border border-primary-700/10 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <AnimatedSection>
              <span className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase">
                {t.contact.badge}
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                {t.contact.headlineTop}
                <br />
                <span className="text-primary-500">{t.contact.headlineHighlight}</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 text-white/50 text-base leading-relaxed max-w-md">
                {t.contact.description}
              </p>
            </AnimatedSection>

            {/* Contact info */}
            <AnimatedSection delay={0.3}>
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-700/20 flex items-center justify-center text-primary-500 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.contact.emailLabel}</div>
                    <div className="text-white/40 text-sm mt-0.5">info@nuskara.co.id</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-700/20 flex items-center justify-center text-primary-500 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.contact.officeLabel}</div>
                    <div className="text-white/40 text-sm mt-0.5">{t.contact.officeValue}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>

          {/* Right - Form */}
          <AnimatedSection direction="right" delay={0.2}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-neutral-900 border border-white/5 rounded-xl p-8"
            >
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full px-4 py-3 bg-neutral-800 border border-white/5 rounded-lg text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary-700 focus:ring-1 focus:ring-primary-700/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full px-4 py-3 bg-neutral-800 border border-white/5 rounded-lg text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary-700 focus:ring-1 focus:ring-primary-700/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full px-4 py-3 bg-neutral-800 border border-white/5 rounded-lg text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary-700 focus:ring-1 focus:ring-primary-700/50 transition-colors resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-primary-700 text-white font-semibold text-sm tracking-wide rounded-lg hover:bg-primary-600 transition-colors duration-300 hover:shadow-lg hover:shadow-primary-700/25"
                >
                  {t.contact.form.submit}
                </motion.button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
