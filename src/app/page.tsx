import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { AboutTeaser } from "@/components/About";
import { Services } from "@/components/Services";
import { GallerySection } from "@/components/GallerySection";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { site } from "@/data/site";
import { instagramProfileHref, locationLabel } from "@/lib/links";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — Custom Cakes for Every Celebration` },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  // Structured data only includes facts that have actually been provided.
  const sameAs = [instagramProfileHref(), site.contact.facebook].filter(Boolean);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/images/gallery/cake-28.jpg`,
    ...(site.contact.phone && { telephone: site.contact.phone }),
    ...(site.contact.email && { email: site.contact.email }),
    ...(locationLabel() && { areaServed: locationLabel() }),
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Static, trusted data from src/data/site.ts
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <AboutTeaser />
      <Services />
      <GallerySection />
      <Process />
      <Contact />
    </>
  );
}
