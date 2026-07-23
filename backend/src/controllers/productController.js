import { Product } from '../models/Product.js';
import { seedProducts } from '../seeders/seedData.js';

export const getProducts = async (req, res) => {
  try {
    const { category, subCategory, gender, search, sort, minPrice, maxPrice, inStockOnly } = req.query;
    
    let dbProducts = [];
    try {
      dbProducts = await Product.find({});
    } catch (e) {
      dbProducts = [];
    }

    let products = dbProducts.length > 0 ? dbProducts : seedProducts;

    // Filters
    if (category) {
      products = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (subCategory) {
      products = products.filter(p => p.subCategory && p.subCategory.toLowerCase() === subCategory.toLowerCase());
    }

    if (gender && gender !== 'All') {
      products = products.filter(p => p.gender === gender || p.gender === 'Unisex');
    }

    if (minPrice) {
      products = products.filter(p => p.price >= Number(minPrice));
    }

    if (maxPrice) {
      products = products.filter(p => p.price <= Number(maxPrice));
    }

    if (inStockOnly === 'true') {
      products = products.filter(p => p.inStock);
    }

    if (search) {
      const query = search.toLowerCase();
      products = products.filter(
        p => p.name.toLowerCase().includes(query) ||
             p.description.toLowerCase().includes(query) ||
             p.tagline.toLowerCase().includes(query)
      );
    }

    // Sorting
    if (sort === 'price-low') {
      products.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      products.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      products.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'newest') {
      products.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
    }

    res.json({
      count: products.length,
      products
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductBySlug = async (req, res) => {
  try {
    let product;
    try {
      product = await Product.findOne({ slug: req.params.slug });
    } catch (e) {
      product = null;
    }

    if (!product) {
      product = seedProducts.find(p => p.slug === req.params.slug);
    }

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Luxury time piece or fragrance not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
