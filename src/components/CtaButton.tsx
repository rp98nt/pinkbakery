import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon, WhatsAppIcon } from "./Icons";
import type { Cta } from "@/lib/links";

type Variant = "primary" | "secondary" | "light";

const styles: Record<Variant, string> = {
  primary:
    "bg-berry text-white shadow-lg shadow-berry/25 hover:bg-berry-dark",
  secondary:
    "border border-berry/30 bg-white/70 text-berry hover:border-berry hover:bg-white",
  light: "bg-white text-berry hover:bg-blush",
};

type Props = {
  href: string;
  external?: boolean;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  showWhatsApp?: boolean;
  showArrow?: boolean;
  onClick?: () => void;
};

export function Button({
  href,
  external = false,
  variant = "primary",
  className = "",
  children,
  showWhatsApp = false,
  showArrow = false,
  onClick,
}: Props) {
  const cls = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${styles[variant]} ${className}`;
  const content = (
    <>
      {showWhatsApp && <WhatsAppIcon className="size-5" />}
      {children}
      {showArrow && <ArrowIcon className="size-4" />}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  // tel:, mailto: and in-page / internal links
  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} onClick={onClick}>
      {content}
    </Link>
  );
}

/** Convenience wrapper for the main contact action. */
export function CtaButton({
  cta,
  variant,
  className,
  onClick,
  label,
}: {
  cta: Cta;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  label?: string;
}) {
  return (
    <Button
      href={cta.href}
      external={cta.external}
      variant={variant}
      className={className}
      showWhatsApp={cta.channel === "whatsapp"}
      onClick={onClick}
    >
      {label ?? cta.label}
    </Button>
  );
}
