"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Navbar() {
  const { locale, setLocale, t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#232324]/95 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-[#232324]"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/images/logo-white.webp"
            alt="Nuskara"
            className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-lg font-extrabold tracking-tight text-white">
            NUSKARA
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </div>

        {/* Right side: Language toggle + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Toggle */}
          <div className="flex items-center bg-white/10 rounded-md p-0.5">
            <button
              onClick={() => setLocale("en")}
              className={`px-2.5 py-1 text-xs font-semibold rounded transition-all duration-200 ${
                locale === "en"
                  ? "bg-white/20 text-white shadow-sm"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLocale("id")}
              className={`px-2.5 py-1 text-xs font-semibold rounded transition-all duration-200 ${
                locale === "id"
                  ? "bg-white/20 text-white shadow-sm"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              ID
            </button>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-2.5 bg-primary-700 text-white text-sm font-semibold rounded hover:bg-primary-600 transition-all duration-200 hover:shadow-lg hover:shadow-primary-700/25"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile: Language toggle + Hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          {/* Mobile Language Toggle */}
          <div className="flex items-center bg-white/10 rounded-md p-0.5">
            <button
              onClick={() => setLocale("en")}
              className={`px-2 py-1 text-[10px] font-semibold rounded transition-all duration-200 ${
                locale === "en"
                  ? "bg-white/20 text-white shadow-sm"
                  : "text-white/40"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLocale("id")}
              className={`px-2 py-1 text-[10px] font-semibold rounded transition-all duration-200 ${
                locale === "id"
                  ? "bg-white/20 text-white shadow-sm"
                  : "text-white/40"
              }`}
            >
              ID
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#232324] border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {t.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 bg-primary-700 text-white text-sm font-semibold rounded-lg text-center hover:bg-primary-600 transition-colors"
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
