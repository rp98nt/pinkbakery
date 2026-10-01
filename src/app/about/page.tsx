import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/data/site";
import { featuredImages } from "@/data/gallery";
import { primaryCta } from "@/lib/links";
import { ValuesGrid } from "@/components/About";
import { Button, CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const { page } = site.about;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/about" },
  openGraph: { title: page.title, description: page.description },
};

export default function AboutPage() {
  const cta = primaryCta();
  const { aboutMain, aboutSecondary, aboutTertiary } = featuredImages;

  return (
    <>
      <section
        aria-labelledby="about-page-title"
        className="bg-gradient-to-b from-blush to-cream py-16 sm:py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              as="h1"
              id="about-page-title"
              align="left"
              eyebrow="About"
              title={page.title}
            />
            <p className="mt-5 text-lg leading-relaxed text-cocoa-soft sm:text-xl">
              {page.intro}
            </p>
            {site.ownerName && (
              <p className="mt-4 font-display text-xl text-berry">
                — {site.ownerName}
              </p>
            )}
          </div>

          {/* Swap these photos for a portrait of the baker later — see README. */}
          <div className="relative mx-auto grid w-full max-w-md grid-cols-5 gap-3">
            <div className="relative col-span-3 aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-3xl bg-petal shadow-xl shadow-berry/15 ring-4 ring-white">
              <Image
                src={aboutMain.src}
                alt={aboutMain.alt}
                fill
                preload
                sizes="(min-width: 1024px) 270px, 55vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-3 pt-10">
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-petal shadow-lg ring-4 ring-white">
                <Image
                  src={aboutSecondary.src}
                  alt={aboutSecondary.alt}
                  fill
                  sizes="(min-width: 1024px) 180px, 36vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-petal shadow-lg ring-4 ring-white">
                <Image
                  src={aboutTertiary.src}
                  alt={aboutTertiary.alt}
                  fill
                  sizes="(min-width: 1024px) 180px, 36vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="story-title" className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <h2
              id="story-title"
              className="font-display text-3xl font-semibold text-cocoa sm:text-4xl"
            >
              How the cakes come to life
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-cocoa-soft">
              {page.story.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          {page.stats.length > 0 && (
            <Reveal>
              <dl className="mt-10 grid gap-4 sm:grid-cols-3">
                {page.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-petal/70"
                  >
                    <dt className="text-sm text-cocoa-soft">{s.label}</dt>
                    <dd className="mt-1 font-display text-3xl font-semibold text-berry">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>
      </section>

      <section
        aria-labelledby="values-title"
        className="bg-blush/60 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              id="values-title"
              eyebrow="What I care about"
              title="The values behind every cake"
            />
          </Reveal>
          <Reveal className="mt-10">
            <ValuesGrid />
          </Reveal>

          {page.credentials.length > 0 && (
            <Reveal className="mt-10">
              <h3 className="font-display text-2xl font-semibold text-cocoa">
                Credentials
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-cocoa-soft">
                {page.credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </section>

      <section
        aria-labelledby="about-cta-title"
        className="bg-gradient-to-br from-berry to-berry-dark py-16 text-center text-white sm:py-20"
      >
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <h2
            id="about-cta-title"
            className="font-display text-3xl font-semibold sm:text-4xl"
          >
            Ready to plan your cake?
          </h2>
          <p className="mt-4 text-lg text-white/85">
            Tell me about the occasion and I&apos;ll help bring your idea to life.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaButton cta={cta} variant="light" />
            <Button href="/#gallery" variant="secondary" className="!border-white/40 !bg-transparent !text-white hover:!bg-white/10">
              Browse the gallery
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
