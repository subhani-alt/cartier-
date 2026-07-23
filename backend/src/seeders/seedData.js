import { Product } from '../models/Product.js';
import { User } from '../models/User.js';
import { Coupon } from '../models/Coupon.js';
import { connectDB } from '../config/db.js';
import dotenv from 'dotenv';

dotenv.config();

export const seedProducts = [
  // WATCHES
  {
    name: "L'Or Impérial Skeleton Tourbillon",
    slug: "lor-imperial-skeleton-tourbillon",
    tagline: "Hand-crafted openwork movement encased in 18k champagne gold.",
    category: "Watches",
    subCategory: "Skeleton",
    gender: "Unisex",
    price: 34500,
    oldPrice: 38000,
    description: "The peak of fine Swiss haute horlogerie. The L'Or Impérial Skeleton Tourbillon features a fully hand-engraved skeletonized movement floating effortlessly beneath dual anti-reflective sapphire crystals. Fitted with an alligator leather strap handcrafted in Geneva.",
    story: "Conceived over 1,400 hours of master artisan bench work in our Le Locle workshop. Every bridge is hand-bevelled to a mirror polish.",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&q=80&w=1000"
    ],
    model360Frames: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000"
    ],
    inStock: true,
    stockCount: 5,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
    rating: 5.0,
    numReviews: 18,
    watchSpecs: {
      movement: "Calibre MA-9912 Hand-Wound Flying Tourbillon",
      caseMaterial: "18k Champagne Rose Gold",
      caseSize: "41mm x 9.8mm",
      glass: "Domed Double Anti-Reflective Sapphire Crystal",
      waterResistance: "50M / 5 ATM",
      powerReserve: "72 Hours",
      strap: "Hand-stitched Chestnut Alligator Leather with Folding Clasp",
      warranty: "8 Years Maison Aurélia International Warranty"
    }
  },
  {
    name: "Aurélia Chronographe Classicist",
    slug: "aurelia-chronographe-classicist",
    tagline: "Timeless column-wheel chronograph with grand feu enamel dial.",
    category: "Watches",
    subCategory: "Chronograph",
    gender: "Men",
    price: 24800,
    oldPrice: 26500,
    description: "An homage to classical horological proportions. Featuring a pure porcelain grand feu enamel dial with blued steel hands and precision dual counters.",
    story: "Fired three times in a kiln at 800°C to achieve a lustrous, non-fading ivory white tone that lasts for generations.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=1000"
    ],
    model360Frames: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000"
    ],
    inStock: true,
    stockCount: 8,
    isFeatured: true,
    isBestSeller: true,
    rating: 4.9,
    numReviews: 24,
    watchSpecs: {
      movement: "Calibre MA-770 Column-Wheel Automatic Chronograph",
      caseMaterial: "Grade 5 Titanium & Brushed Gold Accent",
      caseSize: "40mm",
      glass: "Box Sapphire Crystal",
      waterResistance: "100M / 10 ATM",
      powerReserve: "60 Hours",
      strap: "Cognac Calfskin Leather",
      warranty: "5 Years International"
    }
  },
  {
    name: "Souverain Moonphase Automatic",
    slug: "souverain-moonphase-automatic",
    tagline: "A delicate lapis lazuli lunar disc floating on silver guilloché.",
    category: "Watches",
    subCategory: "Dress",
    gender: "Unisex",
    price: 18900,
    oldPrice: null,
    description: "Capturing the cosmic harmony of time. The Souverain displays moon phases with astronomical precision, requiring adjustment only once every 122 years.",
    story: "Each moonphase disk is individually carved from natural high-grade Afghan lapis lazuli and inlayed with 22k gold stars.",
    images: [
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1000"
    ],
    inStock: true,
    stockCount: 12,
    isFeatured: true,
    isNewArrival: true,
    rating: 4.95,
    numReviews: 14,
    watchSpecs: {
      movement: "Calibre MA-440 Moonphase Mechanical",
      caseMaterial: "Solid Platinum 950",
      caseSize: "39mm x 8.5mm Ultra-Thin",
      glass: "Anti-reflective Sapphire",
      waterResistance: "30M / 3 ATM",
      powerReserve: "50 Hours",
      strap: "Midnight Blue Satin Leather",
      warranty: "5 Years International"
    }
  },
  {
    name: "Vanguard Titanium Diver 300M",
    slug: "vanguard-titanium-diver-300m",
    tagline: "Uncompromising aquatic strength meets luxury refinement.",
    category: "Watches",
    subCategory: "Sports",
    gender: "Men",
    price: 14200,
    oldPrice: 15500,
    description: "Built for deep ocean exploration without sacrificing editorial elegance. Features a ceramic rotating bezel with liquidgold graduations.",
    story: "Tested to rigorous depths off the coast of Marseille, combining deep-sea endurance with high-society ergonomics.",
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000"
    ],
    inStock: true,
    stockCount: 10,
    isFeatured: false,
    isBestSeller: true,
    rating: 4.85,
    numReviews: 31,
    watchSpecs: {
      movement: "Calibre MA-880 High-Frequency Automatic",
      caseMaterial: "Satin-Brushed Titanium",
      caseSize: "42mm",
      glass: "Sapphire with Helium Escape Valve",
      waterResistance: "300M / 30 ATM",
      powerReserve: "65 Hours",
      strap: "Titanium Bracelet & Vulcanized Rubber Strap",
      warranty: "5 Years International"
    }
  },
  {
    name: "Pavillon Diamond Dial Ultra-Slim",
    slug: "pavillon-diamond-dial-ultra-slim",
    tagline: "Sublime minimalism framed by brilliant-cut diamond hour markers.",
    category: "Watches",
    subCategory: "Dress",
    gender: "Women",
    price: 21500,
    oldPrice: 23000,
    description: "Designed for evening galas and intimate celebrations. An ultra-thin profile of 6.2mm with mother-of-pearl dial and Top Wesselton VVS diamonds.",
    story: "Crafted in our Geneva studio, capturing light at every subtle movement of the wrist.",
    images: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000"
    ],
    inStock: true,
    stockCount: 6,
    isFeatured: true,
    isNewArrival: true,
    rating: 4.98,
    numReviews: 9,
    watchSpecs: {
      movement: "Calibre MA-102 Ultra-Thin Quartz precision",
      caseMaterial: "18k Warm Rose Gold",
      caseSize: "34mm x 6.2mm",
      glass: "Scratch-resistant Sapphire",
      waterResistance: "30M",
      powerReserve: "4-Year Battery Life",
      strap: "Cream Nappa Leather",
      warranty: "5 Years International"
    }
  },
  {
    name: "L'Éclipse Perpetual Calendar",
    slug: "leclipse-perpetual-calendar",
    tagline: "Calculates leap years and months until the year 2100 automatically.",
    category: "Watches",
    subCategory: "Limited Edition",
    gender: "Unisex",
    price: 48000,
    oldPrice: 52000,
    description: "A crowning achievement in mechanical intelligence. The L'Éclipse automatically accounts for month lengths and leap years without manual intervention.",
    story: "Limited to 50 numbered pieces worldwide. Case back engraved with individual artisan signature.",
    images: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000"
    ],
    inStock: true,
    stockCount: 3,
    isFeatured: true,
    isBestSeller: true,
    rating: 5.0,
    numReviews: 7,
    watchSpecs: {
      movement: "Calibre MA-9900 Micro-Rotor Perpetual Calendar",
      caseMaterial: "18k Honey Gold",
      caseSize: "40.5mm",
      glass: "Curved Sapphire",
      waterResistance: "50M",
      powerReserve: "68 Hours",
      strap: "Hand-finished Dark Espresso Alligator",
      warranty: "10 Years VIP Concierge Warranty"
    }
  },

  // FRAGRANCES
  {
    name: "Oud Royal & Santal Imperial",
    slug: "oud-royal-santal-imperial",
    tagline: "Extrait de Parfum featuring aged Cambodian Oud & Mysore Sandalwood.",
    category: "Fragrances",
    subCategory: "Eau De Parfum",
    gender: "Unisex",
    price: 420,
    oldPrice: 460,
    description: "An opulent journey through sun-warmed amber palaces and sacred forests. Opening with smoky cardamom and rare saffron before settling into velvet natural oud and creamy Australian sandalwood.",
    story: "Formulated by Master Perfumer Élodie Laurent using 25-year aged sustainable wild agarwood oil.",
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=1000"
    ],
    inStock: true,
    stockCount: 25,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
    rating: 4.96,
    numReviews: 42,
    fragranceNotes: {
      family: "Woody Oriental",
      topNotes: ["Rare Kashmiri Saffron", "Green Cardamom Pods", "Sun-dried Bergamot"],
      middleNotes: ["May Rose Absolute", "Smoky Papyrus", "Cedarwood Atlas"],
      baseNotes: ["Aged Cambodian Oud", "Mysore Sandalwood", "Golden Amber Accord", "Tonka Bean"],
      longevity: "16+ Hours Extreme Longevity",
      projection: "Enveloping Regal Sillage",
      ingredients: "Alcohol Denat., Parfum (Fragrance), Santalum Album Oil, Aquilaria Agallocha Wood Oil, Limonene, Linalool."
    }
  },
  {
    name: "Fleur de Soie & Iris Blanc",
    slug: "fleur-de-soie-iris-blanc",
    tagline: "Powdery Florentine Iris Butter woven with White Silk Accord.",
    category: "Fragrances",
    subCategory: "Eau De Parfum",
    gender: "Women",
    price: 360,
    oldPrice: null,
    description: "Ethereal, delicate, and infinitely sophisticated. Centered around rare Iris Pallida butter harvested after six years of aging in Florence, blended with white musk and sparkling Italian pear.",
    story: "Takes 7 metric tons of iris roots to yield just 1 kilogram of pure iris butter used in this bottle.",
    images: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000"
    ],
    inStock: true,
    stockCount: 20,
    isFeatured: true,
    isBestSeller: true,
    rating: 4.92,
    numReviews: 38,
    fragranceNotes: {
      family: "Powdery Floral",
      topNotes: ["Sparkling Italian Pear", "Pink Pepper", "Neroli Petals"],
      middleNotes: ["Florentine Iris Pallida Butter", "White Silk Accord", "Grasse Jasmine"],
      baseNotes: ["White Cashmere Musk", "Ambrette Seed", "Cedarwood"],
      longevity: "12 Hours",
      projection: "Subtle Elegant Aura",
      ingredients: "Alcohol Denat., Parfum, Iris Pallida Root Extract, Benzyl Salicylate."
    }
  },
  {
    name: "Cuir Noir & Ambre Solstice",
    slug: "cuir-noir-ambre-solstice",
    tagline: "Supple Tuscan Leather laced with Cognac & Vanilla Bourbon.",
    category: "Fragrances",
    subCategory: "Eau De Parfum",
    gender: "Men",
    price: 390,
    oldPrice: 420,
    description: "Dark, magnetic, and commanding. Evoking an evening in a private library with leather-bound books, aged cognac crystal glasses, and warm fireplace embers.",
    story: "Distilled using century-old maceration tanks in Grasse, France.",
    images: [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000"
    ],
    inStock: true,
    stockCount: 18,
    isFeatured: false,
    isBestSeller: true,
    rating: 4.89,
    numReviews: 29,
    fragranceNotes: {
      family: "Leather Warm Spicy",
      topNotes: ["Aged Cognac Accord", "Bitter Orange", "Clary Sage"],
      middleNotes: ["Tuscan Suede Leather", "Cacao Pod", "Nutmeg"],
      baseNotes: ["Madagascar Vanilla Bourbon", "Benzoin Tears", "Tobacco Leaf"],
      longevity: "14 Hours",
      projection: "Strong Magnetic Sillage",
      ingredients: "Alcohol Denat., Fragrance, Coumarin, Eugenol, Isoeugenol."
    }
  },
  {
    name: "Cité d'Azur & Bergamote Sublime",
    slug: "cite-dazur-bergamote-sublime",
    tagline: "Sun-drenched Calabrian Citrus & Sea Minerals.",
    category: "Fragrances",
    subCategory: "Eau De Toilette",
    gender: "Unisex",
    price: 290,
    oldPrice: 320,
    description: "The feeling of a summer morning overlooking the French Riviera. Bright crisp bergamot meets salty sea breeze, green fig leaves, and clean white cedar.",
    story: "Hand-picked bergamot from small family orchards along the Calabrian coast.",
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=1000"
    ],
    inStock: true,
    stockCount: 30,
    isFeatured: true,
    isNewArrival: true,
    rating: 4.88,
    numReviews: 19,
    fragranceNotes: {
      family: "Citrus Aromatic Marine",
      topNotes: ["Reggio Calabria Bergamot", "Mandarin Zest", "Crushed Mint"],
      middleNotes: ["Mediterranean Sea Salt", "Green Fig Leaves", "Neroli"],
      baseNotes: ["Driftwood Cedar", "Light Ambergris", "Clean Vetiver"],
      longevity: "10 Hours",
      projection: "Fresh Radiance",
      ingredients: "Alcohol Denat., Citrus Aurantium Bergamia Peel Oil, Parfum."
    }
  },
  {
    name: "Nuit de Rose & Patchouli Velvet",
    slug: "nuit-de-rose-patchouli-velvet",
    tagline: "Damask Rose intoxicated with Midnight Patchouli & Dark Plum.",
    category: "Fragrances",
    subCategory: "Gift Sets",
    gender: "Women",
    price: 450,
    oldPrice: 490,
    description: "An intoxicating night-blooming elixir. Crimson Damask roses picked at dawn, steeped in dark plum liqueur and velvety Indonesian patchouli.",
    story: "Presented in our Maison Aurélia signature ivory velvet gift vault with a complimentary travel atomizer.",
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=1000"
    ],
    inStock: true,
    stockCount: 15,
    isFeatured: true,
    isBestSeller: true,
    rating: 4.97,
    numReviews: 26,
    fragranceNotes: {
      family: "Chypre Floral",
      topNotes: ["Black Currant", "Dark Plum Liqueur", "Pink Pepper"],
      middleNotes: ["Damask Rose Absolute", "Centifolia Rose", "Geranium"],
      baseNotes: ["Indonesian Patchouli Heart", "Labdanum", "Smoky Oakmoss"],
      longevity: "14+ Hours",
      projection: "Captivating Sillage",
      ingredients: "Alcohol Denat., Rose Damascena Flower Oil, Patchouli Oil."
    }
  },
  {
    name: "Vétiver de Java & Épices D'Or",
    slug: "vetiver-de-java-epices-dor",
    tagline: "Earthy Smoky Vetiver infused with Golden Cinnamon & Frankincense.",
    category: "Fragrances",
    subCategory: "Eau De Parfum",
    gender: "Men",
    price: 340,
    oldPrice: null,
    description: "Sophisticated earthiness refined for the modern gentleman. Deep roots of Javanese vetiver brightened by Ceylon cinnamon bark and warm frankincense resin.",
    story: "Uses double-distilled vetiver roots to remove sharp bitterness, keeping only the smooth woody warmth.",
    images: [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000"
    ],
    inStock: true,
    stockCount: 22,
    isFeatured: false,
    isNewArrival: true,
    rating: 4.87,
    numReviews: 15,
    fragranceNotes: {
      family: "Woody Spicy",
      topNotes: ["Grapefruit Zest", "Ceylon Cinnamon", "Pink Peppercorn"],
      middleNotes: ["Omani Frankincense", "Nutmeg", "Cedar Leaf"],
      baseNotes: ["Double-distilled Java Vetiver", "Guaiac Wood", "Tree Moss"],
      longevity: "12 Hours",
      projection: "Refined Distinction",
      ingredients: "Alcohol Denat., Parfum, Vetiveria Zizanoides Root Oil, Linalool."
    }
  }
];

export const seedDB = async () => {
  await connectDB();
  try {
    await Product.deleteMany({});
    await Coupon.deleteMany({});
    
    await Product.insertMany(seedProducts);
    await Coupon.create({
      code: 'AURELIA10',
      discountPercentage: 10,
      maxDiscount: 500,
      expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      isActive: true
    });
    
    console.log(`[Seed] Seeded ${seedProducts.length} luxury products and discount coupons successfully.`);
  } catch (err) {
    console.error(`[Seed Error] ${err.message}`);
  }
};
