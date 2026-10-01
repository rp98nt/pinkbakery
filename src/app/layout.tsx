import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import { primaryCta } from "@/lib/links";

const heading = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/images/gallery/cake-28.jpg",
        width: 1050,
        height: 1400,
        alt: "Two-tier pink engagement cake with buttercream roses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/images/gallery/cake-28.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#a32a5a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const cta = primaryCta();

  return (
    <html lang={site.lang} className={`${heading.variable} ${body.variable}`}>
      <body className="flex min-h-svh flex-col">
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-berry px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header name={site.name} nav={site.nav} cta={cta} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
