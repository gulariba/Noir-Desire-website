// app/utils/collections.ts or wherever you store utility data

export interface Collection {
  title: string;
  slug: string;
  image: string;
  description?: string;
}

export const collections: Collection[] = [
  {
    title: "Leather",
    slug: "leather",
    image: "/collections/leather.jpg",
    description: "Explore premium leather corsets, harnesses, and statement pieces crafted for bold expression.",
  },
  {
    title: "Bondage",
    slug: "bondage",
    image: "/collections/bondage.jpg",
    description: "Indulge your wildest fantasies with cuffs, restraints, and bondage essentials.",
  },
  {
    title: "Whips & Floggers",
    slug: "whips-floggers",
    image: "/collections/whips.jpg",
    description: "Master the art of impact play with our curated collection of whips and floggers.",
  },
  {
    title: "Blindfolds & Gags",
    slug: "blindfolds-gags",
    image: "/collections/blindfolds.jpg",
    description: "Surrender control with seductive blindfolds and provocative gags.",
  },
  {
    title: "BDSM Kits",
    slug: "bdsm",
    image: "/collections/bdsm.jpg",
    description: "All-in-one kits designed for thrilling adventures—from beginner to advanced.",
  },
  {
    title: "Sensory Play",
    slug: "sensory",
    image: "/collections/sensory.jpg",
    description: "Stimulate your senses with feathers, candles, and temperature play essentials.",
  },
];
