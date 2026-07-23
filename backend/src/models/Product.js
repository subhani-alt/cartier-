import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    tagline: { type: String },
    category: { type: String, enum: ['Watches', 'Fragrances'], required: true },
    subCategory: { type: String }, // e.g. 'Automatic', 'Skeleton', 'Eau de Parfum'
    gender: { type: String, enum: ['Unisex', 'Men', 'Women'], default: 'Unisex' },
    price: { type: Number, required: true },
    oldPrice: { type: Number },
    description: { type: String, required: true },
    story: { type: String },
    images: [{ type: String, required: true }],
    model360Frames: [{ type: String }],
    inStock: { type: Boolean, default: true },
    stockCount: { type: Number, default: 15 },
    isFeatured: { type: Boolean, default: false },
    isNewArrival: { type: Boolean, default: false },
    isBestSeller: { type: Boolean, default: false },
    rating: { type: Number, default: 4.9 },
    numReviews: { type: Number, default: 12 },
    
    // Watch Specifications
    watchSpecs: {
      movement: { type: String }, // Calibre MA-8809 Automatic Skeleton
      caseMaterial: { type: String }, // 18k Rose Gold & Titanium
      caseSize: { type: String }, // 41mm
      glass: { type: String }, // Sapphire Crystal with Anti-Reflective Coating
      waterResistance: { type: String }, // 100 Meters / 10 ATM
      powerReserve: { type: String }, // 72 Hours
      strap: { type: String }, // Hand-stitched Alligator Leather
      warranty: { type: String, default: '5 Years International' }
    },
    
    // Fragrance Notes & Characteristics
    fragranceNotes: {
      family: { type: String }, // Woody Amber, Floral Oriental, Citrus Aromatic
      topNotes: [{ type: String }],
      middleNotes: [{ type: String }],
      baseNotes: [{ type: String }],
      longevity: { type: String, default: '12+ Hours' },
      projection: { type: String, default: 'Enveloping Sillage' },
      ingredients: { type: String }
    }
  },
  { timestamps: true }
);

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
