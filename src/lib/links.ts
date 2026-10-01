import { site, type ContactChannel } from "@/data/site";

const { contact } = site;

const digits = (value: string) => value.replace(/\D/g, "");

export function whatsappHref(message: string = contact.whatsappMessage) {
  const number = digits(contact.whatsapp);
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function phoneHref() {
  const number = contact.phone.replace(/[^\d+]/g, "");
  return number ? `tel:${number}` : null;
}

export function emailHref(message: string = contact.whatsappMessage) {
  if (!contact.email) return null;
  const subject = encodeURIComponent(`Cake enquiry – ${site.name}`);
  return `mailto:${contact.email}?subject=${subject}&body=${encodeURIComponent(message)}`;
}

export function instagramProfileHref() {
  return contact.instagram
    ? `https://instagram.com/${contact.instagram.replace(/^@/, "")}`
    : null;
}

export function instagramDmHref() {
  return contact.instagram
    ? `https://ig.me/m/${contact.instagram.replace(/^@/, "")}`
    : null;
}

export type Cta = {
  href: string;
  label: string;
  channel: ContactChannel | "section";
  /** True when the link leaves the page (opens in a new tab / app). */
  external: boolean;
};

const channelLabel: Record<ContactChannel | "section", string> = {
  whatsapp: "Order on WhatsApp",
  phone: "Call now",
  email: "Email me",
  instagram: "Message on Instagram",
  section: "Get in touch",
};

function hrefFor(channel: ContactChannel, message?: string): string | null {
  switch (channel) {
    case "whatsapp":
      return whatsappHref(message);
    case "phone":
      return phoneHref();
    case "email":
      return emailHref(message);
    case "instagram":
      return instagramDmHref();
  }
}

/**
 * The main "contact me" action. Uses the configured primary channel, falls back
 * through the other channels, and finally to the #contact section so a button
 * never leads nowhere.
 */
export function primaryCta(message?: string): Cta {
  const order: ContactChannel[] = [
    contact.primary,
    ...(["whatsapp", "phone", "email", "instagram"] as ContactChannel[]).filter(
      (c) => c !== contact.primary,
    ),
  ];

  for (const channel of order) {
    const href = hrefFor(channel, message);
    if (href) {
      return {
        href,
        label: channelLabel[channel],
        channel,
        external: href.startsWith("http"),
      };
    }
  }

  return {
    href: "/#contact",
    label: channelLabel.section,
    channel: "section",
    external: false,
  };
}

export function hasAnyContact() {
  return Boolean(
    contact.whatsapp ||
      contact.phone ||
      contact.email ||
      contact.instagram ||
      contact.facebook,
  );
}

export function locationLabel() {
  return [site.location.city, site.location.region].filter(Boolean).join(", ");
}
