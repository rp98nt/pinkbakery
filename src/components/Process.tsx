import { site } from "@/data/site";
import { primaryCta } from "@/lib/links";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  const { process } = site;
  const cta = primaryCta();

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="bg-cream py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="process-title"
            eyebrow={process.eyebrow}
            title={process.title}
            intro={process.intro}
          />
        </Reveal>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {process.steps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 90} className="h-full">
                <div className="relative h-full rounded-3xl bg-white p-6 shadow-sm ring-1 ring-petal/70">
                  <span
                    aria-hidden
                    className="flex size-11 items-center justify-center rounded-full bg-berry font-display text-xl font-semibold text-white"
                  >
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-cocoa">
                    <span className="sr-only">Step {index + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa-soft">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-12 flex justify-center">
          <CtaButton cta={cta} />
        </Reveal>
      </div>
    </section>
  );
}
