/**
 * Central content file for the whole site.
 * Edit the copy, links and contact details here — components only render this data.
 *
 * Anything left as an empty string ("") is simply hidden on the site, and every
 * "contact" button falls back to the next available channel (or the Contact
 * section) so nothing ever links to a dead end.
 */

export type ContactChannel = "whatsapp" | "phone" | "email" | "instagram";

export const site = {
  /** Display name used in the header, footer and page titles. */
  name: "Pink Bakery",
  /** Baker's own name (optional). Shown in the footer / About page when set. */
  ownerName: "", // TODO: e.g. "Priya"
  tagline: "Handcrafted custom cakes for every celebration",
  description:
    "Pink Bakery makes custom birthday, wedding, anniversary and themed cakes — designed around your story and baked fresh to order.",
  lang: "en",

  /** Production URL (used for canonical links, sitemap and social previews). */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),

  location: {
    city: "", // TODO: e.g. "Pune"
    region: "", // TODO: e.g. "Maharashtra, India"
    serviceNote:
      "Pickup and delivery options are confirmed when you enquire.",
  },

  contact: {
    /** Which channel the main buttons should use first. */
    primary: "whatsapp" as ContactChannel,
    /** Digits only with country code for WhatsApp, e.g. "919876543210". */
    whatsapp: "917077700378",
    /** Pre-filled WhatsApp text for the generic button. */
    whatsappMessage: "Hi! I'd like to enquire about a custom cake.",
    /** Phone number shown on the site, e.g. "+91 98765 43210". */
    phone: "+91 70777 00378",
    email: "", // TODO
    /** Instagram handle without the @, e.g. "pinkbakery". */
    instagram: "", // TODO
    /** Full Facebook page URL (optional). */
    facebook: "",
    /** Free text, e.g. "Orders by appointment · Mon–Sat, 10am–7pm". */
    hours: "", // TODO
    /** Only show if true, e.g. "FSSAI licensed". */
    legalNote: "",
  },

  nav: [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Gallery", href: "/#gallery" },
    { label: "How it works", href: "/#process" },
    { label: "Contact", href: "/#contact" },
  ],

  hero: {
    eyebrow: "Custom cakes, baked to order",
    headline: "Cakes as unique as your celebration",
    subcopy:
      "From fairytale tiers to your child's favourite character, every cake is designed with you and baked fresh — so the moment feels as special as the memory.",
    features: [
      { icon: "palette", label: "Custom designs" },
      { icon: "fruit", label: "Fresh fruit cakes" },
      { icon: "star", label: "Kids' & themed cakes" },
      { icon: "tiers", label: "Wedding tiers" },
    ] as { icon: "palette" | "fruit" | "star" | "tiers"; label: string }[],
  },

  about: {
    eyebrow: "Meet your baker",
    title: "Every cake starts with your story",
    teaser: [
      "Pink Bakery is a one-woman kitchen where each cake is designed and made by hand — never mass-produced.",
      "You share the occasion, the person and the mood. From there I shape the flavours, colours and details into a cake that is unmistakably theirs.",
      "From piped buttercream roses to modelled fondant characters and fresh fruit toppings, my focus is always on care, detail and a cake that tastes as good as it looks.",
    ],
    values: [
      {
        icon: "heart",
        title: "Made with care",
        text: "Baked in small batches, to order.",
      },
      {
        icon: "palette",
        title: "Designed for you",
        text: "Your theme, your colours, your names.",
      },
      {
        icon: "sparkle",
        title: "Detail in every piece",
        text: "Hand-piped, hand-modelled, hand-finished.",
      },
      {
        icon: "chat",
        title: "Clear communication",
        text: "You know what to expect at every step.",
      },
    ] as {
      icon: "heart" | "palette" | "sparkle" | "chat";
      title: string;
      text: string;
    }[],
    page: {
      title: "About Pink Bakery",
      description:
        "The story behind Pink Bakery — a home for custom, handcrafted celebration cakes.",
      intro:
        "Pink Bakery is built on a simple idea: a celebration cake should feel personal. Not picked from a catalogue — made for the person, the moment and the people who will gather around it.",
      story: [
        "Every order begins with a conversation. Who is the cake for? What do they love? Is there a colour, a character, a hobby or a memory we can bring to life? Those answers become a design, a flavour plan and finally a cake.",
        "The cakes on this site are real work, made for real celebrations — kids' birthdays with unicorns and farm animals, elegant tiered cakes for engagements and anniversaries, fresh fruit cakes for family gatherings, and playful themed cakes that celebrate a person's profession or passion.",
        "Whether you bring a reference photo or just a feeling, my goal is the same: a cake that makes people smile when it arrives at the table, and tastes even better than it looks.",
      ],
      // Add true statements only, e.g. "Home kitchen — FSSAI registered".
      credentials: [] as string[],
      stats: [] as { value: string; label: string }[],
    },
  },

  services: {
    eyebrow: "What I bake",
    title: "Cakes for every kind of celebration",
    intro:
      "Tell me the occasion and I'll shape the design around it. Here's a look at what I make most.",
    items: [
      {
        id: "kids",
        title: "Kids' birthday cakes",
        description:
          "Unicorns, princesses, farm animals, safari friends and favourite cartoon characters.",
        bullets: [
          "Modelled fondant characters",
          "First-birthday tiers",
          "Names and ages personalised",
        ],
        galleryFilter: "kids",
      },
      {
        id: "weddings",
        title: "Wedding & anniversary cakes",
        description:
          "Elegant tiered cakes and romantic designs for engagements, weddings and milestone years.",
        bullets: [
          "Multi-tier cakes",
          "Sugar flowers & buttercream roses",
          "Couple silhouettes & custom toppers",
        ],
        galleryFilter: "weddings",
      },
      {
        id: "fruit",
        title: "Fresh fruit cakes",
        description:
          "Light, colourful cakes topped with seasonal fruit — a favourite for family birthdays.",
        bullets: [
          "Seasonal fruit toppings",
          "Chocolate drizzle & glaze finishes",
          "Heart and square shapes",
        ],
        galleryFilter: "fruit",
      },
      {
        id: "themed",
        title: "Themed & hobby cakes",
        description:
          "Cakes that celebrate who someone is — their job, passion, hobby or sense of humour.",
        bullets: [
          "Profession & hobby themes",
          "Novelty shapes",
          "Fondant details made to order",
        ],
        galleryFilter: "themed",
      },
      {
        id: "doll",
        title: "Doll & fashion cakes",
        description:
          "Show-stopping cakes where the gown is the cake, in ruffles and rosettes of piped frosting.",
        bullets: [
          "Ruffled frosting gowns",
          "Your colours and theme",
          "Gold butterflies & lights",
        ],
        galleryFilter: "doll",
      },
      {
        id: "festive",
        title: "Festive & special occasions",
        description:
          "New Year, gender reveals, children's day and gift-box cakes for the moments in between.",
        bullets: [
          "Seasonal scenes",
          "Gender reveal cakes",
          "Gift-box presentation",
        ],
        galleryFilter: "festive",
      },
    ] as {
      id: string;
      title: string;
      description: string;
      bullets: string[];
      galleryFilter: string;
    }[],
  },

  gallery: {
    eyebrow: "Portfolio",
    title: "A few of my favourite bakes",
    intro:
      "Real cakes made for real celebrations. Filter by occasion, or send a reference photo and I'll create something new.",
    initialCount: 12,
    step: 12,
  },

  process: {
    eyebrow: "How ordering works",
    title: "From first message to the final slice",
    intro:
      "Custom cakes take time to design and bake, so reach out as early as you can for your date.",
    steps: [
      {
        title: "Enquire",
        text: "Message with the occasion, date, number of guests and any reference photos.",
      },
      {
        title: "Design & flavours",
        text: "I'll suggest the look, flavour and size, and you get a clear price before anything is booked.",
      },
      {
        title: "Confirm your order",
        text: "Your date is reserved once the order is confirmed.",
      },
      {
        title: "Baked fresh",
        text: "Your cake is baked and decorated by hand, in time for your celebration.",
      },
      {
        title: "Pickup or delivery",
        text: "Collect your cake, or ask about delivery for your area.",
      },
    ],
  },

  contactSection: {
    eyebrow: "Let's talk cake",
    title: "Tell me about your celebration",
    intro:
      "Share the occasion, the date and a reference photo if you have one. I'll get back to you with ideas and a quote.",
    emptyNote:
      "Contact details are being added — please check back shortly.",
  },

  /** Where the inquiry button sends people for each service (pre-filled text). */
  serviceMessage: (service: string) =>
    `Hi! I'd like to enquire about: ${service}.`,
};

export type Site = typeof site;
