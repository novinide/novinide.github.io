"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/i18n/context";
import { Header } from "./header";
import { Hero } from "./hero";
import { About } from "./about";
import { Services } from "./services";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { Publications } from "./publications";
import { Education } from "./education";
import { Contact } from "./contact";
import { Footer } from "./footer";

export function Portfolio() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
      <LanguageProvider>
        <div className="flex min-h-screen flex-col">
          <a
            href="#about"
            className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <Header />
          <main className="flex-1">
            <Hero />
            <About />
            <Services />
            <Experience />
            <Projects />
            <Publications />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
