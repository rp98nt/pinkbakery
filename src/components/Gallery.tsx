"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import {
  galleryCategories,
  galleryImages,
  type GalleryCategoryId,
  type GalleryImage,
} from "@/data/gallery";
import { ArrowIcon, CloseIcon } from "./Icons";

type Filter = "all" | GalleryCategoryId;

const FILTER_EVENT = "gallery:filter";

type GalleryProps = {
  initialCount: number;
  step: number;
};

export function Gallery({ initialCount, step }: GalleryProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [count, setCount] = useState(initialCount);
  const [active, setActive] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const filtered =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);
  const visible = filtered.slice(0, count);

  const applyFilter = useCallback(
    (next: Filter) => {
      setFilter(next);
      setCount(initialCount);
    },
    [initialCount],
  );

  // Lets "See examples" links in the Services section pre-select a filter.
  useEffect(() => {
    const onFilter = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (galleryCategories.some((c) => c.id === id)) {
        applyFilter(id as GalleryCategoryId);
      }
    };
    window.addEventListener(FILTER_EVENT, onFilter);
    return () => window.removeEventListener(FILTER_EVENT, onFilter);
  }, [applyFilter]);

  const countFor = (id: Filter) =>
    id === "all"
      ? galleryImages.length
      : galleryImages.filter((img) => img.category === id).length;

  return (
    <div>
      <div
        role="group"
        aria-label="Filter cakes by occasion"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
      >
        {[{ id: "all" as const, label: "All" }, ...galleryCategories].map(
          (c) => {
            const selected = filter === c.id;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={selected}
                onClick={() => applyFilter(c.id)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                  selected
                    ? "bg-berry text-white shadow-md shadow-berry/25"
                    : "bg-white text-cocoa ring-1 ring-petal hover:bg-blush"
                }`}
              >
                {c.label}
                <span
                  className={`ml-1.5 text-xs ${selected ? "text-white/80" : "text-cocoa-soft"}`}
                >
                  {countFor(c.id)}
                </span>
              </button>
            );
          },
        )}
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        Showing {visible.length} of {filtered.length} cakes
      </p>

      <ul className="mt-10 columns-2 gap-3 sm:gap-4 lg:columns-3 xl:columns-4">
        {visible.map((img, index) => (
          <li key={img.src} className="mb-3 break-inside-avoid sm:mb-4">
            <button
              type="button"
              onClick={(e) => {
                lastTrigger.current = e.currentTarget;
                setActive(index);
              }}
              aria-label={`View larger: ${img.alt}`}
              className="group relative block w-full overflow-hidden rounded-2xl bg-petal shadow-sm ring-1 ring-petal/70"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(min-width: 1280px) 280px, (min-width: 1024px) 360px, 50vw"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </button>
          </li>
        ))}
      </ul>

      {count < filtered.length && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setCount((c) => c + step)}
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-berry/30 bg-white px-6 text-sm font-semibold text-berry hover:border-berry"
          >
            Show more cakes
            <span className="text-xs text-cocoa-soft">
              ({filtered.length - count} more)
            </span>
          </button>
        </div>
      )}

      <Lightbox
        images={visible}
        index={active}
        onClose={() => {
          setActive(null);
          lastTrigger.current?.focus();
        }}
        onChange={setActive}
      />
    </div>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onChange,
}: {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = index !== null;
  const current = index !== null ? images[index] : null;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open || index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onChange((index + 1) % images.length);
      if (e.key === "ArrowLeft")
        onChange((index - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, index, images.length, onChange]);

  return (
    <dialog
      ref={ref}
      aria-label="Cake photo viewer"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close();
      }}
      className="m-auto max-h-[94svh] w-[min(94vw,960px)] overflow-visible bg-transparent p-0"
    >
      {current && (
        <figure className="relative flex flex-col items-center gap-3">
          <div className="relative flex max-h-[80svh] w-full justify-center">
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="(min-width: 960px) 900px, 94vw"
              className="max-h-[80svh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
          </div>
          <figcaption className="max-w-xl text-center text-sm text-white/90">
            {current.alt}
          </figcaption>

          <div className="flex items-center gap-3">
            <LightboxButton
              label="Previous cake"
              onClick={() => onChange((index! - 1 + images.length) % images.length)}
            >
              <ArrowIcon className="size-5 rotate-180" />
            </LightboxButton>
            <span className="text-sm text-white/80" aria-hidden>
              {index! + 1} / {images.length}
            </span>
            <LightboxButton
              label="Next cake"
              onClick={() => onChange((index! + 1) % images.length)}
            >
              <ArrowIcon className="size-5" />
            </LightboxButton>
          </div>

          <button
            type="button"
            aria-label="Close photo viewer"
            onClick={() => ref.current?.close()}
            className="absolute -top-3 right-0 inline-flex size-11 items-center justify-center rounded-full bg-white text-berry shadow-lg sm:-right-3"
          >
            <CloseIcon className="size-5" />
          </button>
        </figure>
      )}
    </dialog>
  );
}

function LightboxButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex size-11 items-center justify-center rounded-full bg-white/95 text-berry shadow-md hover:bg-white"
    >
      {children}
    </button>
  );
}

/**
 * Link that jumps to the gallery and pre-selects a category filter.
 * Used by the Services cards.
 */
export function GalleryFilterLink({
  category,
  children,
  className,
}: {
  category: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href="/#gallery"
      className={className}
      onClick={() =>
        window.dispatchEvent(new CustomEvent(FILTER_EVENT, { detail: category }))
      }
    >
      {children}
    </Link>
  );
}
