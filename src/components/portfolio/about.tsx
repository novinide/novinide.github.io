"use client";

import { useLanguage } from "@/lib/i18n/context";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { BadgeCheck, MapPin, Languages, Briefcase } from "lucide-react";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker={t.about.kicker} title={t.about.title} />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          {/* Narrative */}
          <Reveal className="space-y-5">
            {t.about.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] leading-loose text-muted-foreground sm:text-base sm:leading-loose">
                {p}
              </p>
            ))}

            <dl className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-card/60 p-3.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {t.contact.locationLabel}
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium">{t.contact.locationValue}</dd>
                </div>
              </div>
              <div className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-card/60 p-3.5">
                <Languages className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {t.contact.languageLabel}
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium">{t.contact.languageValue}</dd>
                </div>
              </div>
              <div className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-card/60 p-3.5">
                <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {t.experience.kicker}
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium">{t.meta.tagline}</dd>
                </div>
              </div>
            </dl>
          </Reveal>

          {/* Core areas card */}
          <Reveal delay={0.12}>
            <div className="sticky top-24 rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-base font-bold">
                <BadgeCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                {t.about.coreAreasTitle}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {t.about.coreAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-lg border border-border/60 bg-secondary/60 px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
