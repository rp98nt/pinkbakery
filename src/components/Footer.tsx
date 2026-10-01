import Link from "next/link";
import { site } from "@/data/site";
import {
  emailHref,
  instagramProfileHref,
  locationLabel,
  phoneHref,
  whatsappHref,
} from "@/lib/links";
import {
  CakeLogo,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./Icons";

export function Footer() {
  const { contact } = site;
  const year = new Date().getFullYear();
  const area = locationLabel();

  const socials = [
    { label: "WhatsApp", href: whatsappHref(), icon: WhatsAppIcon, external: true },
    { label: "Instagram", href: instagramProfileHref(), icon: InstagramIcon, external: true },
    { label: "Facebook", href: contact.facebook || null, icon: FacebookIcon, external: true },
    { label: "Email", href: emailHref(), icon: MailIcon, external: false },
    { label: "Call", href: phoneHref(), icon: PhoneIcon, external: false },
  ].filter((s) => s.href);

  return (
    <footer className="bg-cocoa text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-display text-2xl font-semibold text-white"
          >
            <CakeLogo className="size-7 text-rose" />
            {site.name}
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">{site.tagline}</p>
          {socials.length > 0 && (
            <ul className="mt-5 flex gap-3">
              {socials.map(({ label, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href!}
                    aria-label={label}
                    className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-rose"
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {contact.phone && <li>{contact.phone}</li>}
            {contact.email && <li className="break-words">{contact.email}</li>}
            {contact.hours && <li>{contact.hours}</li>}
            {area && <li>{area}</li>}
            <li>{site.location.serviceNote}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-5 text-xs text-white/60 sm:flex-row sm:justify-between sm:px-8">
          <p>
            © {year} {site.name}
            {site.ownerName ? ` · ${site.ownerName}` : ""}
            {area ? ` · ${area}` : ""}. All rights reserved.
          </p>
          {contact.legalNote && <p>{contact.legalNote}</p>}
        </div>
      </div>
    </footer>
  );
}
