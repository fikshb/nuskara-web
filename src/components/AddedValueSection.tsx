"use client";

import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "./AnimatedSection";
import MiningEcosystemGraphic from "./MiningEcosystemGraphic";
import { useTranslation } from "@/i18n/LanguageContext";

const icons = [
  <svg key="shield" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  <svg key="chart" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
  </svg>,
  <svg key="globe" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>,
];

export default function AddedValueSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0">
        <img
          src="/images/bg-frame-2.webp"
          alt=""
          className="w-full h-full object-cover opacity-[0.18]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left - Text Content */}
          <div>
            <AnimatedSection>
              <span className="text-xs font-bold tracking-[0.2em] text-primary-700 uppercase">
                {t.addedValue.badge}
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
                {t.addedValue.headlineTop}
                <br />
                <span className="text-primary-700">{t.addedValue.headlineHighlight}</span>
                <br />
                {t.addedValue.headlineBottom}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 text-neutral-500 text-base lg:text-lg leading-relaxed max-w-lg">
                {t.addedValue.description}
              </p>
            </AnimatedSection>

            {/* Value Cards */}
            <StaggerContainer className="mt-10 space-y-4" staggerDelay={0.15}>
              {t.addedValue.values.map((v, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-700/10 flex items-center justify-center text-primary-700 group-hover:bg-primary-700 group-hover:text-white transition-all duration-300">
                      {icons[i]}
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 text-sm">
                        {v.title}
                      </h3>
                      <p className="text-neutral-500 text-sm mt-1">{v.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right - Ecosystem Graphic */}
          <MiningEcosystemGraphic />
        </div>
      </div>
    </section>
  );
}
