import Image from "next/image";
import { site } from "@/data/site";
import { featuredImages } from "@/data/gallery";
import { Button } from "./CtaButton";
import { ChatIcon, HeartIcon, PaletteIcon, SparkleIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const valueIcons = {
  heart: HeartIcon,
  palette: PaletteIcon,
  sparkle: SparkleIcon,
  chat: ChatIcon,
};

export function ValuesGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {site.about.values.map((v) => {
        const Icon = valueIcons[v.icon];
        return (
          <li
            key={v.title}
            className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-petal/70"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blush text-berry">
              <Icon className="size-5" />
            </span>
            <div>
              <h3 className="font-semibold text-cocoa">{v.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-cocoa-soft">
                {v.text}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function AboutTeaser() {
  const { about } = site;
  const { aboutMain, aboutSecondary } = featuredImages;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-cream py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-petal shadow-xl shadow-berry/15 ring-4 ring-white">
              <Image
                src={aboutMain.src}
                alt={aboutMain.alt}
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-3 w-[40%] overflow-hidden rounded-3xl bg-petal shadow-xl shadow-berry/20 ring-4 ring-white sm:-right-8">
              <div className="relative aspect-[3/4]">
                <Image
                  src={aboutSecondary.src}
                  alt={aboutSecondary.alt}
                  fill
                  sizes="(min-width: 1024px) 200px, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            id="about-title"
            align="left"
            eyebrow={about.eyebrow}
            title={about.title}
          />
          <div className="mt-5 space-y-4 text-base leading-relaxed text-cocoa-soft sm:text-lg">
            {about.teaser.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8">
            <ValuesGrid />
          </div>

          <div className="mt-8">
            <Button href="/about" variant="secondary" showArrow>
              Read the full story
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
