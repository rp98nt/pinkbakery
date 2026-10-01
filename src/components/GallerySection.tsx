import { site } from "@/data/site";
import { Gallery } from "./Gallery";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function GallerySection() {
  const { gallery } = site;

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="bg-gradient-to-b from-cream to-blush/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="gallery-title"
            eyebrow={gallery.eyebrow}
            title={gallery.title}
            intro={gallery.intro}
          />
        </Reveal>
        <div className="mt-12">
          <Gallery initialCount={gallery.initialCount} step={gallery.step} />
        </div>
      </div>
    </section>
  );
}
