import axios from 'axios';

const API_BASE = '/api';

export const fallbackProducts = [
  // WATCHES
  {
    _id: "prod_1",
    name: "L'Or Impérial Skeleton Tourbillon",
    slug: "lor-imperial-skeleton-tourbillon",
    tagline: "Hand-crafted openwork movement encased in 18k champagne gold.",
    category: "Watches",
    subCategory: "Skeleton",
    gender: "Unisex",
    price: 34500,
    oldPrice: 38000,
    description: "The peak of fine Swiss haute horlogerie. The L'Or Impérial Skeleton Tourbillon features a fully hand-engraved skeletonized movement floating effortlessly beneath dual anti-reflective sapphire crystals. Fitted with an alligator leather strap handcrafted in Geneva.",
    story: "Conceived over 1,400 hours of master artisan bench work in our Le Locle workshop.",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&q=80&w=1000"
    ],
    model360Frames: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&q=80&w=1000"
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
      strap: "Hand-stitched Chestnut Alligator Leather",
      warranty: "8 Years Maison Aurélia Warranty"
    }
  },
  {
    _id: "prod_2",
    name: "Aurélia Chronographe Classicist",
    slug: "aurelia-chronographe-classicist",
    tagline: "Timeless column-wheel chronograph with grand feu enamel dial.",
    category: "Watches",
    subCategory: "Chronograph",
    gender: "Men",
    price: 24800,
    oldPrice: 26500,
    description: "An homage to classical horological proportions. Featuring a pure porcelain grand feu enamel dial with blued steel hands and precision dual counters.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000"
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
    _id: "prod_3",
    name: "Souverain Moonphase Automatic",
    slug: "souverain-moonphase-automatic",
    tagline: "A delicate lapis lazuli lunar disc floating on silver guilloché.",
    category: "Watches",
    subCategory: "Dress",
    gender: "Unisex",
    price: 18900,
    description: "Capturing the cosmic harmony of time. The Souverain displays moon phases with astronomical precision.",
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
    _id: "prod_4",
    name: "Vanguard Titanium Diver 300M",
    slug: "vanguard-titanium-diver-300m",
    tagline: "Uncompromising aquatic strength meets luxury refinement.",
    category: "Watches",
    subCategory: "Sports",
    gender: "Men",
    price: 14200,
    oldPrice: 15500,
    description: "Built for deep ocean exploration without sacrificing editorial elegance.",
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
      strap: "Titanium Bracelet",
      warranty: "5 Years International"
    }
  },

  // FRAGRANCES
  {
    _id: "prod_5",
    name: "Oud Royal & Santal Imperial",
    slug: "oud-royal-santal-imperial",
    tagline: "Extrait de Parfum featuring aged Cambodian Oud & Mysore Sandalwood.",
    category: "Fragrances",
    subCategory: "Eau De Parfum",
    gender: "Unisex",
    price: 420,
    oldPrice: 460,
    description: "An opulent journey through sun-warmed amber palaces and sacred forests.",
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=1000"
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
      topNotes: ["Rare Kashmiri Saffron", "Green Cardamom Pods", "Bergamot"],
      middleNotes: ["May Rose Absolute", "Smoky Papyrus", "Cedarwood Atlas"],
      baseNotes: ["Aged Cambodian Oud", "Mysore Sandalwood", "Golden Amber Accord"],
      longevity: "16+ Hours Extreme Longevity",
      projection: "Enveloping Regal Sillage"
    }
  },
  {
    _id: "prod_6",
    name: "Fleur de Soie & Iris Blanc",
    slug: "fleur-de-soie-iris-blanc",
    tagline: "Powdery Florentine Iris Butter woven with White Silk Accord.",
    category: "Fragrances",
    subCategory: "Eau De Parfum",
    gender: "Women",
    price: 360,
    description: "Ethereal, delicate, and infinitely sophisticated. Centered around rare Iris Pallida butter.",
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
      topNotes: ["Sparkling Italian Pear", "Pink Pepper", "Neroli"],
      middleNotes: ["Florentine Iris Pallida Butter", "White Silk Accord"],
      baseNotes: ["White Cashmere Musk", "Ambrette Seed", "Cedarwood"],
      longevity: "12 Hours",
      projection: "Subtle Elegant Aura"
    }
  },
  {
    _id: "prod_7",
    name: "Cuir Noir & Ambre Solstice",
    slug: "cuir-noir-ambre-solstice",
    tagline: "Supple Tuscan Leather laced with Cognac & Vanilla Bourbon.",
    category: "Fragrances",
    subCategory: "Eau De Parfum",
    gender: "Men",
    price: 390,
    oldPrice: 420,
    description: "Dark, magnetic, and commanding. Evoking an evening in a private library.",
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
      topNotes: ["Aged Cognac Accord", "Bitter Orange"],
      middleNotes: ["Tuscan Suede Leather", "Cacao Pod"],
      baseNotes: ["Madagascar Vanilla Bourbon", "Benzoin Tears"],
      longevity: "14 Hours",
      projection: "Strong Magnetic Sillage"
    }
  },
  {
    _id: "prod_8",
    name: "Cité d'Azur & Bergamote Sublime",
    slug: "cite-dazur-bergamote-sublime",
    tagline: "Sun-drenched Calabrian Citrus & Sea Minerals.",
    category: "Fragrances",
    subCategory: "Eau De Toilette",
    gender: "Unisex",
    price: 290,
    description: "The feeling of a summer morning overlooking the French Riviera.",
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
      topNotes: ["Calabria Bergamot", "Mandarin Zest"],
      middleNotes: ["Mediterranean Sea Salt", "Green Fig Leaves"],
      baseNotes: ["Driftwood Cedar", "Light Ambergris"],
      longevity: "10 Hours",
      projection: "Fresh Radiance"
    }
  }
];

export const fetchProductsAPI = async (filters = {}) => {
  try {
    const res = await axios.get(`${API_BASE}/products`, { params: filters, timeout: 3000 });
    if (res.data && res.data.products && res.data.products.length > 0) {
      return res.data;
    }
    return filterLocalProducts(filters);
  } catch (err) {
    return filterLocalProducts(filters);
  }
};

const filterLocalProducts = (filters) => {
  let products = fallbackProducts;
  if (filters.category) {
    products = products.filter(p => p.category.toLowerCase() === filters.category.toLowerCase());
  }
  if (filters.search) {
    const q = filters.search.toLowerCase();
    products = products.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }
  if (filters.minPrice) {
    products = products.filter(p => p.price >= Number(filters.minPrice));
  }
  if (filters.maxPrice) {
    products = products.filter(p => p.price <= Number(filters.maxPrice));
  }
  return { count: products.length, products };
};

export const fetchProductBySlugAPI = async (slug) => {
  try {
    const res = await axios.get(`${API_BASE}/products/${slug}`, { timeout: 3000 });
    if (res.data) return res.data;
    return fallbackProducts.find(p => p.slug === slug) || fallbackProducts[0];
  } catch (err) {
    return fallbackProducts.find(p => p.slug === slug) || fallbackProducts[0];
  }
};

export const consultAiStylistAPI = async (userPrompt) => {
  try {
    const res = await axios.post(`${API_BASE}/ai/consult`, { userPrompt }, { timeout: 3000 });
    if (res.data) return res.data;
  } catch (err) {}

  const p = fallbackProducts[0];
  const f = fallbackProducts[4];
  return {
    advice: `Our Master Concierge recommends pairing the ${p.name} with the ${f.name} for an unmatchable evening aura.`,
    recommendations: [p, f]
  };
};

export const bookAppointmentAPI = async (data) => {
  try {
    const res = await axios.post(`${API_BASE}/appointments`, data, { timeout: 3000 });
    return res.data;
  } catch (err) {
    return { message: 'Appointment confirmed with Maison Concierge.', appointment: data };
  }
};

export const createOrderAPI = async (orderData) => {
  try {
    const res = await axios.post(`${API_BASE}/orders`, orderData, { timeout: 3000 });
    return res.data;
  } catch (err) {
    return {
      orderNumber: `MA-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: orderData.customerName || 'Valued Collector',
      totalPrice: orderData.totalPrice,
      items: orderData.items,
      isPaid: true,
      orderStatus: 'In Assembly',
      trackingNumber: `MA-EXPRESS-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toISOString()
    };
  }
};
