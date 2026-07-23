import { Product } from '../models/Product.js';
import { Order } from '../models/Order.js';

export const getAdminStats = async (req, res) => {
  try {
    res.json({
      totalRevenue: 348920,
      totalOrders: 142,
      activeProducts: 24,
      totalCustomers: 88,
      salesOverview: [
        { month: 'Jan', revenue: 42000, watches: 12, fragrances: 48 },
        { month: 'Feb', revenue: 58000, watches: 18, fragrances: 62 },
        { month: 'Mar', revenue: 64000, watches: 21, fragrances: 85 },
        { month: 'Apr', revenue: 51000, watches: 15, fragrances: 70 },
        { month: 'May', revenue: 79000, watches: 24, fragrances: 110 },
        { month: 'Jun', revenue: 84920, watches: 28, fragrances: 135 }
      ],
      topCategories: [
        { name: 'Skeleton Watches', percent: 38 },
        { name: 'Haute Parfums', percent: 32 },
        { name: 'Chronographs', percent: 18 },
        { name: 'Limited Editions', percent: 12 }
      ]
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
