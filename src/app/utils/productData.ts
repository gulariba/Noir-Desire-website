export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  collection: string;
  category: string;
}

export const productData: Product[] = [
  {
    id: 1,
    name: "Obsidian Leather Corset",
    price: "$140",
    description: "Structured leather corset with steel boning and adjustable back lacing.",
    image: "/assets/pic1.jpg",
    collection: "Leather",
    category: "Corsets",
  },
  {
    id: 2,
    name: "Crimson Bondage Set",
    price: "$120",
    description: "Complete black-themed set for BDSM play including cuffs, blindfold, and gag.",
    image: "/assets/pic2.jpg",
    collection: "Bondage",
    category: "Kits",
  },
  {
    id: 3,
    name: "Midnight Lace Bodysuit",
    price: "$95",
    description: "Black lace bodysuit with seductive sheer panels and elegant design.",
    image: "/assets/pic3.jpg",
    collection: "Lace",
    category: "Bodysuits",
  },
  {
    id: 4,
    name: "Sensory Feather Teaser",
    price: "$35",
    description: "Delicate feather teaser designed for playful sensory exploration.",
    image: "/assets/pic4.jpg",
    collection: "Sensory",
    category: "Toys",
  },
  {
    id: 5,
    name: "Velvet Blindfold",
    price: "$25",
    description: "Soft velvet blindfold for sensory deprivation and enhanced anticipation.",
    image: "/assets/pic5.jpg",
    collection: "Bondage",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Black Leather Handcuffs",
    price: "$40",
    description: "Durable black leather cuffs with adjustable buckles for secure restraint play.",
    image: "/assets/pic6.jpg",
    collection: "Bondage",
    category: "Restraints",
  },
  {
    id: 7,
    name: "Red Silk Bondage Rope",
    price: "$25",
    description: "Soft yet strong silk rope designed for comfort and security in rope play.",
    image: "/assets/pic7.jpg",
    collection: "Bondage",
    category: "Ropes",
  },
  {
    id: 8,
    name: "Ball Gag with Leather Strap",
    price: "$28",
    description: "Comfortable silicone ball gag with adjustable leather strap.",
    image: "/assets/ballgag.jpg",
    collection: "Bondage",
    category: "Gags",
  },
  {
    id: 9,
    name: "Leather Paddle",
    price: "$35",
    description: "Firm leather paddle designed for impact play with a satisfying sound.",
    image: "/assets/pic9.jpg",
    collection: "Impact Play",
    category: "Paddles",
  },
  {
    id: 10,
    name: "Leather Collar with O-ring",
    price: "$50",
    description: "Polished leather collar with O-ring for aesthetic and functional bondage.",
    image: "/assets/pic10.jpg",
    collection: "Bondage",
    category: "Collars",
  },
  // New additions for stronger buying appeal
{
    id: 11,
    name: "Stainless Steel Choker with Chain Leash",
    price: "$85",
    description: "Elegant stainless steel collar with detachable chain leash for stylish dominance play.",
    image: "/assets/pic11.jpg",
    collection: "Bondage",
    category: "Collars",
},

  {
    id: 12,
    name: "Premium Suede Flogger",
    price: "$45",
    description: "Soft suede tails with a sturdy grip handle for precise and sensual impact play.",
    image: "/assets/pic12.jpg",
    collection: "Impact Play",
    category: "Floggers",
  },
 {
    id: 13,
    name: "Silicone Flogger Whip",
    price: "$32",
    description: "Soft yet stingy silicone flogger designed for versatile impact play, perfect for teasing and punishment.",
    image: "/assets/pic13.jpg",
    collection: "Impact Play",
    category: "Whips",
},

  {
    id: 14,
    name: "Bondage Kit",
    price: "$60",
    description: "Special Bondage full bdsm tools for more pleasure for more sexual play.",
    image: "/assets/pic14.jpg",
    collection: "Bondage",
    category: "Kits",
  },
  
  {
    id: 15,
    name: "Mouse Ears Mask with gagball",
    price: "$55",
    description: "Premium Mouse ear mask with rubbber gagball premium product ever.",
    image: "/assets/pic15.jpg",
    collection: "Bondage",
    category: "Advanced Toys",
  },

    {
    id: 16,
    name: "Latex lingerie ",
    price: "$55",
    description: "Premium Latex lingerie our new  premium addition .",
    image: "/assets/pic16.jpg",
    collection: "Bondage",
    category: "Advanced Toys",
  },
  
   {
    id: 17,
    name: "Latex coreset with steel handcuffs",
    price: "$55",
    description: "corset with steel handcuffs give more extreme look of your partner .",
    image: "/assets/pic17.jpg",
    collection: "Bondage",
    category: "Advanced Toys",
  },

  
   {
    id: 18,
    name: "Red hotest lingerie with chains",
    price: "$55",
    description: "Most hotest and luxuary lingerie wearing before romance to give more pleasure to your men .",
    image: "/assets/pic18.jpg",
    collection: "Bondage",
    category: "Advanced Toys",
  },
  
  
   {
    id: 19,
    name: "Fishnet Stockings",
    price: "$55",
    description: "Highly recommended fishnet stockings legs look more spicy and hot .",
    image: "/assets/pic18.jpg",
    collection: "Bondage",
    category: "Advanced Toys",
  },

   {
    id: 20,
    name: "Bunny costume",
    price: "$55",
    description: "A mostly trending costume also wear in custume parties and clubs.",
    image: "/assets/pic18.jpg",
    collection: "Bondage",
    category: "Advanced Toys",
  },
];
