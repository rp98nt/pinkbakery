import Image from "next/image";
import { site } from "@/data/site";
import { galleryImages } from "@/data/gallery";
import { primaryCta } from "@/lib/links";
import { Button } from "./CtaButton";
import { GalleryFilterLink } from "./Gallery";
import { ArrowIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  const { services } = site;

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-blush/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="services-title"
            eyebrow={services.eyebrow}
            title={services.title}
            intro={services.intro}
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, index) => {
            const cover = galleryImages.find(
              (img) => img.category === item.galleryFilter,
            );
            const cta = primaryCta(site.serviceMessage(item.title));

            return (
              <li key={item.id}>
                <Reveal delay={(index % 3) * 100} className="h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-petal/70 transition-shadow hover:shadow-xl hover:shadow-berry/10">
                    {cover && (
                      <div className="relative aspect-[4/3] bg-petal">
                        <Image
                          src={cover.src}
                          alt={cover.alt}
                          fill
                          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-2xl font-semibold text-cocoa">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-cocoa-soft">
                        {item.description}
                      </p>
                      <ul className="mt-4 space-y-1.5 text-sm text-cocoa">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span
                              aria-hidden
                              className="mt-2 size-1.5 shrink-0 rounded-full bg-rose"
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
                        <Button
                          href={cta.href}
                          external={cta.external}
                          className="!min-h-10 !px-5"
                          showWhatsApp={cta.channel === "whatsapp"}
                        >
                          Enquire about this
                        </Button>
                        <GalleryFilterLink
                          category={item.galleryFilter}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-berry hover:underline"
                        >
                          See examples
                          <ArrowIcon className="size-4" />
                        </GalleryFilterLink>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
