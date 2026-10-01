import type { ReactNode } from "react";
import { site } from "@/data/site";
import {
  emailHref,
  hasAnyContact,
  instagramProfileHref,
  locationLabel,
  phoneHref,
  primaryCta,
  whatsappHref,
} from "@/lib/links";
import { CtaButton } from "./CtaButton";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "./Icons";
import { Reveal } from "./Reveal";
function ContactCard({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blush text-berry">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-wider text-cocoa-soft">
          {label}
        </span>
        <span className="mt-0.5 block break-words font-medium text-cocoa">
          {value}
        </span>
      </span>
    </>
  );
  const cls =
    "flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-petal/70";

  return href ? (
    <a
      href={href}
      className={`${cls} transition-shadow hover:shadow-lg hover:shadow-berry/10`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

export function Contact() {
  const { contact } = site;
  const cta = primaryCta();
  const area = locationLabel();

  const wa = whatsappHref();
  const tel = phoneHref();
  const mail = emailHref();
  const ig = instagramProfileHref();

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-gradient-to-br from-berry to-berry-dark py-20 text-white sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-rose/30 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-petal">
            {site.contactSection.eyebrow}
          </p>
          <h2
            id="contact-title"
            className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
          >
            {site.contactSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
            {site.contactSection.intro}
          </p>
          <div className="mt-8">
            <CtaButton cta={cta} variant="light" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          {hasAnyContact() ? (
            <div className="grid gap-3 text-cocoa">
              {wa && (
                <ContactCard
                  icon={<WhatsAppIcon className="size-6" />}
                  label="WhatsApp"
                  value={contact.phone || "Message me on WhatsApp"}
                  href={wa}
                  external
                />
              )}
              {tel && (
                <ContactCard
                  icon={<PhoneIcon className="size-6" />}
                  label="Phone"
                  value={contact.phone}
                  href={tel}
                />
              )}
              {mail && (
                <ContactCard
                  icon={<MailIcon className="size-6" />}
                  label="Email"
                  value={contact.email}
                  href={mail}
                />
              )}
              {ig && (
                <ContactCard
                  icon={<InstagramIcon className="size-6" />}
                  label="Instagram"
                  value={`@${contact.instagram.replace(/^@/, "")}`}
                  href={ig}
                  external
                />
              )}
              {contact.facebook && (
                <ContactCard
                  icon={<FacebookIcon className="size-6" />}
                  label="Facebook"
                  value="Visit my Facebook page"
                  href={contact.facebook}
                  external
                />
              )}
              {contact.hours && (
                <ContactCard
                  icon={<ClockIcon className="size-6" />}
                  label="Availability"
                  value={contact.hours}
                />
              )}
              <ContactCard
                icon={<PinIcon className="size-6" />}
                label={area ? "Based in" : "Pickup & delivery"}
                value={area ? `${area} · ${site.location.serviceNote}` : site.location.serviceNote}
              />
            </div>
          ) : (
            <div className="rounded-3xl bg-white/10 p-6 text-white/90 ring-1 ring-white/20">
              <p className="text-lg font-medium">{site.contactSection.emptyNote}</p>
              <p className="mt-2 text-sm text-white/75">
                {site.location.serviceNote}
              </p>
            </div>
          )}
          {contact.legalNote && (
            <p className="mt-4 text-sm text-white/75">{contact.legalNote}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
