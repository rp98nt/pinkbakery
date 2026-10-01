# Pink Bakery

Single-page marketing site for a solo cake baker, built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS 4**. Deployed on Vercel.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## Where to edit things

Almost everything is edited in **two data files** — components only render them.

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | Business name, tagline, contact details, nav, all section copy, services, process steps, About page text |
| `src/data/gallery.ts` | Gallery photos (file, size, category, alt text) and filter categories |

### Contact details (`site.contact` in `site.ts`)

Leave a field as `""` and it is hidden everywhere. Every "contact" button picks the first available channel (starting with `contact.primary`) and falls back to the `#contact` section, so no button is ever a dead link.

| Field | Format | Used for |
| --- | --- | --- |
| `whatsapp` | digits with country code, e.g. `919876543210` | `wa.me` links with a pre-filled message |
| `phone` | display text, e.g. `+91 98765 43210` | `tel:` link |
| `email` | `name@example.com` | `mailto:` link |
| `instagram` | handle without `@` | profile + DM links |
| `facebook` | full page URL | footer / contact |
| `hours` | free text | contact + footer |
| `location.city` / `location.region` | text | footer, contact, SEO |
| `ownerName` | text | footer + About page |

Also set `NEXT_PUBLIC_SITE_URL` in Vercel if you use a custom domain (otherwise the Vercel production URL is used for the sitemap and social previews).

## Section map

Home page (`src/app/page.tsx`) — anchors match the header nav:

| Anchor | Component | Data |
| --- | --- | --- |
| `#home` | `components/Hero.tsx` | `site.hero`, `featuredImages` |
| `#about` | `components/About.tsx` | `site.about` |
| `#services` | `components/Services.tsx` | `site.services` |
| `#gallery` | `components/GallerySection.tsx` + `Gallery.tsx` | `galleryImages`, `galleryCategories` |
| `#process` | `components/Process.tsx` | `site.process` |
| `#contact` | `components/Contact.tsx` | `site.contact`, `site.contactSection` |

Other pages: `/about` (`src/app/about/page.tsx`), plus `robots.txt`, `sitemap.xml` and the favicon (`src/app/icon.svg`).

Shared: `Header.tsx` (sticky header + mobile menu), `Footer.tsx`, `CtaButton.tsx`, `lib/links.ts` (WhatsApp / phone / email link builders).

## Photos

Cake photos live in `public/images/gallery/cake-NN.jpg` (optimised to ~1400px, JPEG).

To add a cake:

1. Put the JPG in `public/images/gallery/` (about 1400px on the long edge).
2. Add one line to `galleryImages` in `src/data/gallery.ts` with its pixel size, category and a short alt text (cake type + occasion, no customer names).

To change the hero collage or About photos, edit `featuredImages` at the bottom of `gallery.ts`.

**Baker's portrait (still needed):** the hero and About page currently use cake photos. When the portrait arrives, save it as `public/images/about/portrait.jpg` and point `featuredImages.aboutMain` (or the image in `src/app/about/page.tsx`) at it. A logo can go in `public/logo.svg`; the favicon is `src/app/icon.svg`.

The original WhatsApp photos are kept locally in `media/` and are git-ignored.

## Content still needed from the baker

- Business owner's name (optional) and **city / service area**
- **WhatsApp number**, phone, email, Instagram handle (and Facebook if used)
- Availability / hours and delivery or pickup rules
- Portrait photo for the About page
- Her real story, and any true credentials (e.g. FSSAI) — add to `about.page.credentials`
- Real customer testimonials (the section is intentionally omitted until there are real ones)
- Confirm the ordering steps and lead time in `site.process` match how she works

## Notes

- Nothing on the site is invented: no fake stats, testimonials or credentials. Stats and credentials render only if filled in.
- No inquiry form (there is no backend) — enquiries go through WhatsApp / phone / email links.
- Animations respect `prefers-reduced-motion`.
