"use client";

import { useLanguage } from "@/lib/i18n/context";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { Building2, Sparkles } from "lucide-react";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker={t.experience.kicker} title={t.experience.title} subtitle={t.experience.subtitle} />

        {/* Timeline */}
        <ol className="relative space-y-8 before:absolute before:inset-y-2 before:start-[19px] before:w-px before:bg-gradient-to-b before:from-primary/60 before:via-border before:to-transparent sm:before:start-[23px]">
          {t.experience.items.map((job, i) => (
            <li key={job.company} className="relative ps-12 sm:ps-16">
              {/* Node */}
              <span
                className="absolute start-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary sm:h-12 sm:w-12"
                aria-hidden="true"
              >
                <Building2 className="h-5 w-5" />
              </span>

              <Reveal delay={i * 0.05}>
                <article className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-colors hover:border-primary/40 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                    <div>
                      <h3 className="text-lg font-bold tracking-tight" dir="ltr">
                        {job.company}
                      </h3>
                      <p className="mt-0.5 text-sm font-semibold text-primary">{job.role}</p>
                    </div>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                      {job.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{job.description}</p>
                  <ul className="mt-4 space-y-2 border-t border-border/60 pt-4">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm leading-relaxed">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" aria-hidden="true" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Other engagements */}
        <Reveal delay={0.1} className="mt-12">
          <div className="rounded-2xl border border-border/70 bg-card/70 p-6 sm:p-8">
            <h3 className="flex items-center gap-2.5 text-lg font-bold">
              <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
              {t.experience.otherTitle}
            </h3>
            <ul className="mt-5 grid gap-x-8 gap-y-3.5 md:grid-cols-2">
              {t.experience.other.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-[7px] h-2 w-2 shrink-0 rotate-45 bg-primary/50" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
