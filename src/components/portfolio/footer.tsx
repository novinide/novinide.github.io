"use client";

import { useLanguage } from "@/lib/i18n/context";
import { SOCIAL_LINKS } from "./hero";
import { LogoMark } from "./header";
import { ArrowUp, Download, ExternalLink } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#publications", label: t.nav.publications },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="mt-auto border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <LogoMark className="h-9 w-9" />
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-bold">{t.meta.name}</span>
                <span className="text-[11px] text-muted-foreground">{t.footer.tagline}</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{t.hero.description}</p>
          </div>

          {/* Navigate */}
          <nav aria-label={t.footer.navigate}>
            <h3 className="text-sm font-bold">{t.footer.navigate}</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-bold">{t.footer.connect}</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="https://www.geodam.ir/files/CV-fadaei.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {t.contact.socials.cv}
                </a>
              </li>
              <li>
                <a
                  href="https://www.geodam.ir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  {t.contact.socials.website}
                </a>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.contact.socials[s.key]}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <s.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {t.meta.name}. {t.footer.rights} · {t.footer.basedOn}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
