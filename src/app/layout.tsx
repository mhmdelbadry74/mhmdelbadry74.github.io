import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.summary,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: `mailto:${site.email}` }],
  keywords: [
    "Mohamed Elbadry",
    "Senior Backend Developer",
    "PHP",
    "Laravel",
    "Cairo",
    "REST API",
  ],
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.summary,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="noise-overlay" aria-hidden />
        {children}
      </body>
    </html>
  );
}
