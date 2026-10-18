import type { Metadata, Viewport } from "next";
import { Inter, Vazirmatn, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-latin",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazir",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.geodam.ir"),
  title: {
    default: "Mansour Fadaei — Civil & Geotechnical Engineer",
    template: "%s | Mansour Fadaei",
  },
  description:
    "Portfolio of Mansour Fadaei — civil & geotechnical engineer specializing in dam engineering, embankment dams (CMD), construction materials testing, geotechnical instrumentation, IoT & AI, and engineering R&D. Tehran, Iran. Available in English, Arabic and Farsi.",
  keywords: [
    "Mansour Fadaei",
    "geotechnical engineer",
    "civil engineer",
    "dam engineering",
    "geodam",
    "سد",
    "ژئوتکنیک",
    "منصور فدایی",
    "هندسة السدود",
    "construction materials testing",
    "geotechnical instrumentation",
  ],
  authors: [{ name: "Mansour Fadaei" }],
  creator: "Mansour Fadaei",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Mansour Fadaei — Civil & Geotechnical Engineer",
    description:
      "Dam engineering, construction materials testing, geotechnical instrumentation & engineering R&D.",
    url: "https://www.geodam.ir",
    siteName: "Mansour Fadaei — Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mansour Fadaei — Civil & Geotechnical Engineer",
    description:
      "Dam engineering, materials testing, instrumentation & engineering R&D.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f4" },
    { media: "(prefers-color-scheme: dark)", color: "#221f1a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${vazirmatn.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
