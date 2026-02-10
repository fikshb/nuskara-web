"use client";

import { useTranslation } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  const linkGroups = [
    { title: t.footer.companyTitle, links: t.footer.companyLinks },
    { title: t.footer.subsidiariesTitle, links: t.footer.subsidiariesLinks },
    { title: t.footer.contactTitle, links: t.footer.contactLinks },
  ];

  return (
    <footer className="bg-[#110808] border-t-2 border-primary-700">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-5">
              <img
                src="/images/logo.webp"
                alt="Nuskara"
                className="w-10 h-10 object-contain"
              />
              <span className="text-lg font-extrabold tracking-tight text-white">
                NUSKARA
              </span>
            </a>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {/* Links */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold tracking-widest text-white/60 uppercase mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/30 hover:text-primary-500 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-primary-900/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">
              {t.footer.privacyPolicy}
            </a>
            <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">
              {t.footer.termsOfService}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
