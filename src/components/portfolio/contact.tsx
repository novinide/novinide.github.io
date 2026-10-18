"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { SOCIAL_LINKS } from "./hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Languages, Send, Info } from "lucide-react";

const EMAIL = "mansour64@gmail.org";

export function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`[${t.contact.formTitle}] ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-20">
      <div className="contour-pattern pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker={t.contact.kicker} title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Info column */}
          <Reveal>
            <div className="flex h-full flex-col gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-5 transition-colors hover:border-primary/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {t.contact.emailLabel}
                  </span>
                  <span className="mt-0.5 block font-mono text-sm font-semibold" dir="ltr">
                    {EMAIL}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {t.contact.locationLabel}
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold">{t.contact.locationValue}</span>
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Languages className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {t.contact.languageLabel}
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold">{t.contact.languageValue}</span>
                </span>
              </div>

              <div className="mt-auto rounded-2xl border border-border/70 bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {t.contact.socialsTitle}
                </p>
                <div className="mt-3.5 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-4">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.key}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t.contact.socials[s.key]}
                      aria-label={t.contact.socials[s.key]}
                      className="flex h-10 w-full items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                    >
                      <s.icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={0.12}>
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col gap-5 rounded-2xl border border-border/70 bg-card p-6 shadow-sm sm:p-7"
            >
              <h3 className="text-lg font-bold">{t.contact.formTitle}</h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="contact-name">{t.contact.form.name}</Label>
                  <Input id="contact-name" name="name" required placeholder={t.contact.form.name} autoComplete="name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact-email">{t.contact.form.email}</Label>
                  <Input id="contact-email" name="email" type="email" required placeholder={t.contact.form.email} autoComplete="email" dir="ltr" />
                </div>
              </div>
              <div className="grid flex-1 gap-2">
                <Label htmlFor="contact-message">{t.contact.form.message}</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={7}
                  placeholder={t.contact.form.message}
                  className="min-h-32 resize-y"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Info className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {t.contact.form.hint}
                </p>
                <Button type="submit" size="lg">
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {t.contact.form.send}
                </Button>
              </div>
              {sent ? (
                <p role="status" className="rounded-lg bg-secondary px-3.5 py-2.5 text-sm font-medium text-secondary-foreground">
                  {t.contact.form.hint}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
