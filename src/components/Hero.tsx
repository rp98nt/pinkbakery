import Image from "next/image";
import { site } from "@/data/site";
import { featuredImages } from "@/data/gallery";
import { primaryCta } from "@/lib/links";
import { Button, CtaButton } from "./CtaButton";
import { FruitIcon, PaletteIcon, StarIcon, TiersIcon } from "./Icons";

const featureIcons = {
  palette: PaletteIcon,
  fruit: FruitIcon,
  star: StarIcon,
  tiers: TiersIcon,
};

export function Hero() {
  const cta = primaryCta();
  const { hero } = site;
  const { heroMain, heroTop, heroBottom } = featuredImages;

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-to-b from-blush via-cream to-cream"
    >
      {/* soft decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-petal/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-rose/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-12 sm:px-8 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:py-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-berry">
            {hero.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-cocoa sm:text-5xl lg:text-6xl"
          >
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cocoa-soft">
            {hero.subcopy}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton cta={cta} className="sm:min-w-52" />
            <Button href="/#gallery" variant="secondary" showArrow>
              See the cakes
            </Button>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4">
            {hero.features.map((f) => {
              const Icon = featureIcons[f.icon];
              return (
                <li key={f.label} className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-berry shadow-sm ring-1 ring-petal">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-sm font-medium leading-snug text-cocoa">
                    {f.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Photo collage */}
        <div className="relative mx-auto h-[460px] w-full max-w-md sm:h-[560px] sm:max-w-lg lg:h-[600px]">
          <div className="absolute inset-y-0 right-0 w-[68%] overflow-hidden rounded-t-[999px] rounded-b-3xl bg-petal shadow-2xl shadow-berry/20 ring-4 ring-white">
            <Image
              src={heroMain.src}
              alt={heroMain.alt}
              fill
              preload
              sizes="(min-width: 1024px) 340px, 60vw"
              className="object-cover"
            />
          </div>

          <div className="absolute left-0 top-[12%] w-[38%] animate-float overflow-hidden rounded-3xl bg-petal shadow-xl shadow-berry/15 ring-4 ring-white">
            <div className="relative aspect-[3/4]">
              <Image
                src={heroTop.src}
                alt={heroTop.alt}
                fill
                sizes="(min-width: 1024px) 190px, 34vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute bottom-[4%] left-[10%] size-[30%] overflow-hidden rounded-full bg-petal shadow-xl shadow-berry/15 ring-4 ring-white">
            <Image
              src={heroBottom.src}
              alt={heroBottom.alt}
              fill
              sizes="(min-width: 1024px) 150px, 28vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
