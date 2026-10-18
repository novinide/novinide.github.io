"use client";

import { useLanguage } from "@/lib/i18n/context";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { GraduationCap, ScrollText } from "lucide-react";

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="bg-secondary/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker={t.education.kicker} title={t.education.title} />

        {/* Degrees */}
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {t.education.items.map((ed, i) => (
            <Reveal key={ed.degree} delay={i * 0.1}>
              <article className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-colors hover:border-primary/40 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <GraduationCap className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 font-mono text-xs font-bold tabular-nums text-secondary-foreground" dir="ltr">
                    {ed.period}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug">{ed.degree}</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{ed.school}</p>
                <p className="mt-4 flex items-start gap-2.5 border-t border-border/60 pt-4 text-sm leading-relaxed text-muted-foreground">
                  <ScrollText className="mt-0.5 h-4 w-4 shrink-0 text-primary/80" aria-hidden="true" />
                  <span>{ed.thesis}</span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Codes & standards */}
        <Reveal delay={0.15} className="mt-10">
          <div className="rounded-2xl border border-border/70 bg-card/70 p-6 sm:p-8">
            <h3 className="text-center text-base font-bold">{t.education.standardsTitle}</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {t.education.groups.map((group) => (
                <div key={group.label}>
                  <p className="mb-3 text-center font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-primary md:text-start">
                    {group.label}
                  </p>
                  <ul className="flex flex-wrap justify-center gap-2 md:justify-start">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border/60 bg-background/70 px-3 py-1.5 text-xs font-semibold text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
