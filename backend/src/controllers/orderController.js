import { Order } from '../models/Order.js';

let inMemoryOrders = [
  {
    _id: 'ord_9901',
    orderNumber: 'MA-2026-8801',
    customerName: 'Lord Aurelius',
    items: [
      { name: "L'Or Impérial Skeleton Tourbillon", price: 34500, quantity: 1, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000" }
    ],
    shippingAddress: { street: '740 Park Avenue', city: 'New York', state: 'NY', zipCode: '10021', country: 'USA' },
    subtotal: 34500,
    totalPrice: 34500,
    isPaid: true,
    paidAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    orderStatus: 'In Assembly',
    trackingNumber: 'MA-FEDEX-99201',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
  },
  {
    _id: 'ord_9902',
    orderNumber: 'MA-2026-8802',
    customerName: 'Lady Genevieve',
    items: [
      { name: "Oud Royal & Santal Imperial", price: 420, quantity: 2, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000" }
    ],
    shippingAddress: { street: '15 Place Vendôme', city: 'Paris', state: 'Île-de-France', zipCode: '75001', country: 'France' },
    subtotal: 840,
    totalPrice: 840,
    isPaid: true,
    paidAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    orderStatus: 'Delivered',
    trackingNumber: 'MA-DHL-77102',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
  }
];

export const createOrder = async (req, res) => {
  try {
    const { items, shippingAddress, customerName, totalPrice, giftMessage, couponCode, subtotal } = req.body;
    
    const orderNumber = `MA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newOrderData = {
      _id: `ord_${Date.now()}`,
      orderNumber,
      customerName: customerName || 'Valued Collector',
      items,
      shippingAddress,
      subtotal: subtotal || totalPrice,
      totalPrice,
      giftMessage,
      isPaid: true,
      paidAt: new Date(),
      orderStatus: 'Processing',
      trackingNumber: `MA-EXPRESS-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date()
    };

    try {
      const order = await Order.create(newOrderData);
      inMemoryOrders.unshift(order);
      return res.status(201).json(order);
    } catch (dbErr) {
      inMemoryOrders.unshift(newOrderData);
      return res.status(201).json(newOrderData);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    let orders = [];
    try {
      orders = await Order.find({ user: req.user._id });
    } catch (e) {
      orders = [];
    }

    if (orders.length === 0) {
      orders = inMemoryOrders;
    }

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    let dbOrders = [];
    try {
      dbOrders = await Order.find({}).sort({ createdAt: -1 });
    } catch (e) {
      dbOrders = [];
    }

    const orders = dbOrders.length > 0 ? dbOrders : inMemoryOrders;
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { orderStatus } = req.body;
    let order;
    try {
      order = await Order.findByIdAndUpdate(req.params.id, { orderStatus }, { new: true });
    } catch (e) {}

    if (!order) {
      const memOrder = inMemoryOrders.find(o => o._id === req.params.id || o.orderNumber === req.params.id);
      if (memOrder) {
        memOrder.orderStatus = orderStatus;
        order = memOrder;
      }
    }

    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
