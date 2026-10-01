/**
 * Gallery metadata. One entry per photo in `public/images/gallery/`.
 *
 * To add a cake:
 *  1. Drop the photo in `public/images/gallery/` (JPG, ~1400px on the long edge).
 *  2. Add a line below with its real pixel size, a category and a short alt text.
 *
 * Alt text describes the cake and occasion (no customer names).
 */

export type GalleryCategoryId =
  | "kids"
  | "weddings"
  | "fruit"
  | "themed"
  | "floral"
  | "doll"
  | "festive";

export type GalleryCategory = {
  id: GalleryCategoryId;
  label: string;
};

export const galleryCategories: GalleryCategory[] = [
  { id: "kids", label: "Kids' Birthdays" },
  { id: "weddings", label: "Weddings & Anniversaries" },
  { id: "floral", label: "Floral & Classic" },
  { id: "fruit", label: "Fresh Fruit" },
  { id: "themed", label: "Themed & Hobby" },
  { id: "doll", label: "Doll & Fashion" },
  { id: "festive", label: "Festive & Special" },
];

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
  category: GalleryCategoryId;
  alt: string;
};

function cake(
  n: number,
  width: number,
  height: number,
  category: GalleryCategoryId,
  alt: string,
): GalleryImage {
  return {
    src: `/images/gallery/cake-${String(n).padStart(2, "0")}.jpg`,
    width,
    height,
    category,
    alt,
  };
}

export const galleryImages: GalleryImage[] = [
  cake(28, 1050, 1400, "weddings", "Two-tier pink engagement cake with quilted pearls, buttercream roses and gold rings"),
  cake(35, 1050, 1400, "kids", "Three-tier pink, purple and blue birthday cake with fresh flowers, gold butterflies and an Elsa topper"),
  cake(13, 1267, 1350, "floral", "Birthday cake with gold stripes, buttercream roses and pearls"),
  cake(2, 1050, 1400, "kids", "Two-tier rainbow birthday cake with a fondant unicorn face and gold topper"),
  cake(17, 879, 1400, "weddings", "Three-tier pink and white celebration cake with piped quilting and sugar flowers"),
  cake(14, 1400, 1345, "fruit", "White cake topped with a waffle cone spilling fresh kiwi, mango and strawberries"),
  cake(52, 1172, 1400, "doll", "Tall birthday cake with a lady figure in a ruffled purple frosting gown and gold butterflies"),
  cake(6, 1120, 1400, "kids", "Two-tier farm-themed birthday cake with a fondant house, pond, ducks and cows"),
  cake(44, 944, 1400, "floral", "Birthday cake with chocolate drips, buttercream rosettes, gold butterflies and a light-up topper"),
  cake(33, 1050, 1400, "doll", "Doll cake with a yellow ruffled frosting gown and red feathered wings"),
  cake(41, 1399, 1366, "themed", "White birthday cake decorated with a fondant stethoscope, syringe, pills and heartbeat line for a doctor"),
  cake(56, 572, 1400, "weddings", "Four-tier celebration cake on pillars with couple silhouettes and floral decoration"),
  cake(32, 1115, 1400, "kids", "Two-tier purple first-birthday cake with clouds, rainbow, stars and unicorn topper"),
  cake(15, 1370, 1400, "fruit", "Glazed fruit cake topped with orange slices, kiwi, apple and grapes"),
  cake(3, 1110, 1400, "floral", "Two-tier purple-to-pink ombre ruffle cake with pearls and a gold topper"),
  cake(53, 1400, 1329, "weddings", "Anniversary cake with a couple silhouette and a gown of pink and red frosting flowers"),
  cake(45, 899, 1400, "kids", "Two-tier jungle safari cake with fondant lion, giraffe, monkey and zebra"),
  cake(26, 1400, 1200, "themed", "Pink birthday cake with fondant lipstick, eyeshadow palette, brush and compact"),
  cake(37, 1155, 1400, "doll", "Golden-orange glazed doll cake with a ruffled gown and a tiny autumn tree"),
  cake(5, 995, 1400, "weddings", "Three-tier white and lilac celebration cake with fresh gerbera daisies and lilies"),
  cake(16, 1400, 1267, "fruit", "White cake with neat rows of mango, grapes and kiwi and a chocolate birthday plaque"),
  cake(31, 1283, 1400, "kids", "Sky-blue unicorn birthday cake with a gold horn and rainbow arch"),
  cake(36, 1050, 1400, "festive", "Birthday cake presented in a gift box with fairy lights, baby's breath and roses"),
  cake(10, 1400, 1058, "themed", "Traditional saree-themed cake with fondant jewellery and folded drapes"),
  cake(50, 1050, 1400, "weddings", "Wedding cake with miniature folded sarees, gold rings and traditional jewellery in fondant"),
  cake(23, 1340, 1189, "fruit", "Chocolate-drizzled Father's Day cake topped with mango, kiwi, apple and grapes"),
  cake(1, 1400, 1322, "themed", "Doctor-themed birthday cake with a fondant coat, tie and stethoscope"),
  cake(7, 1340, 1400, "kids", "Princess birthday cake with edible character cutouts and a pink fondant crown"),
  cake(18, 1295, 1400, "fruit", "Heart-shaped cake, half fresh fruit and half dark chocolate"),
  cake(4, 1400, 1288, "themed", "Engineer-themed cake with a fondant hard hat, ruler, pencil and compass"),
  cake(12, 1305, 1400, "kids", "Dora the Explorer birthday cake piped in buttercream stars"),
  cake(38, 1058, 1400, "weddings", "Tall rainbow-striped anniversary cake with a kissing couple silhouette in a heart"),
  cake(24, 1400, 1100, "floral", "White birthday cake with a border of white and pink buttercream roses"),
  cake(20, 1239, 1400, "fruit", "Orange-glazed cake topped with fresh fruit, chocolate shards and pearls"),
  cake(57, 757, 1400, "kids", "Two-tier blue first-birthday cake with clouds, teddy bears and hot air balloons"),
  cake(21, 1356, 1400, "themed", "Barrel-shaped cake with fondant grapes and a small bottle on top"),
  cake(48, 1400, 1217, "festive", "Gender reveal cake with a sleeping baby topper and tiny blue and pink shoes"),
  cake(30, 1400, 1070, "floral", "Light blue buttercream cake with clusters of pink roses"),
  cake(39, 1050, 1400, "doll", "Doll cake with a skirt of bright yellow buttercream rosettes"),
  cake(43, 1205, 1400, "kids", "Blue tenth-birthday cake with fondant badminton racket, shuttlecock and football"),
  cake(51, 1080, 1400, "themed", "White cake with a fondant bicycle, flower basket and lamp post ringed with fairy lights"),
  cake(9, 1321, 1400, "floral", "Chocolate cake ringed with KitKat bars and topped with chocolates and Ferrero Rocher"),
  cake(11, 1244, 1400, "weddings", "White anniversary cake with red hearts and a proposal silhouette"),
  cake(22, 1303, 1400, "kids", "Farm and pond cake with piped grass, ducks, cows and chickens"),
  cake(46, 961, 1280, "fruit", "White birthday cake topped with kiwi, mango, grapes and a cherry"),
  cake(25, 1400, 1368, "fruit", "Square whipped-cream cake with a grid of fresh fruit toppings"),
  cake(54, 1270, 1400, "floral", "White cake topped with a glowing translucent orange flower"),
  cake(58, 1400, 1302, "floral", "Pink and white birthday cake crowned with glowing golden light spheres"),
  cake(55, 1163, 1400, "floral", "Classic birthday cake with cocoa-dusted top, pink frosting dollops and candles"),
  cake(19, 1385, 1385, "themed", "Novelty cake shaped like a beer mug with overflowing frosting foam"),
  cake(40, 1050, 1400, "themed", "White fondant cake with a red polka-dot tie and shirt collar"),
  cake(42, 1159, 1363, "themed", "Music-themed cake with hand-drawn notes and a golden fondant flute"),
  cake(59, 1328, 1067, "themed", "Round cake with ridged frosting, cherries and a yoga pose silhouette"),
  cake(8, 1397, 1065, "themed", "Wooden barrel anniversary cake topped with a miniature bottle and fondant grapes"),
  cake(47, 1318, 1400, "festive", "Two-tier New Year cake with snowmen, berries and a gold topper"),
  cake(49, 1351, 1400, "festive", "New Year cake with edible snowmen, piped evergreen trees and a gold plaque"),
  cake(34, 1400, 1283, "festive", "Light blue New Year cake with a gold plaque and frosting flowers"),
  cake(27, 1350, 1296, "festive", "Snowy landscape cake with a frosting river, evergreen trees and a little cabin"),
  cake(29, 638, 660, "festive", "Children's Day garden cake with a pond, swing set and candles"),
];

/** Small selection used in the hero collage and elsewhere. */
export const featuredImages = {
  heroMain: galleryImages.find((i) => i.src.endsWith("cake-28.jpg"))!,
  heroTop: galleryImages.find((i) => i.src.endsWith("cake-13.jpg"))!,
  heroBottom: galleryImages.find((i) => i.src.endsWith("cake-44.jpg"))!,
  aboutMain: galleryImages.find((i) => i.src.endsWith("cake-05.jpg"))!,
  aboutSecondary: galleryImages.find((i) => i.src.endsWith("cake-52.jpg"))!,
  aboutTertiary: galleryImages.find((i) => i.src.endsWith("cake-35.jpg"))!,
};
