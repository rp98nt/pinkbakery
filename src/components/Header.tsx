"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CakeLogo, CloseIcon, MenuIcon } from "./Icons";
import { CtaButton } from "./CtaButton";
import type { Cta } from "@/lib/links";

type HeaderProps = {
  name: string;
  nav: { label: string; href: string }[];
  cta: Cta;
};

export function Header({ name, nav, cta }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled || open
          ? "border-petal/60 bg-cream/95 backdrop-blur"
          : "border-transparent bg-cream/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl font-semibold text-berry"
          aria-label={`${name} — home`}
          onClick={close}
        >
          <CakeLogo className="size-7" />
          <span>{name}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-cocoa-soft transition-colors hover:text-berry"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <CtaButton cta={cta} className="!min-h-10 !px-5" />
          </div>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-berry hover:bg-blush lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-petal/60 bg-cream lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col px-5 pb-5 pt-2 sm:px-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="rounded-lg px-2 py-3 text-base font-medium text-cocoa hover:bg-blush"
            >
              {item.label}
            </Link>
          ))}
          <CtaButton cta={cta} className="mt-3 w-full" onClick={close} />
        </nav>
      </div>
    </header>
  );
}
