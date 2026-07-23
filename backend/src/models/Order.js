import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    orderNumber: { type: String, required: true, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    guestEmail: { type: String },
    customerName: { type: String, required: true },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        name: String,
        price: Number,
        quantity: Number,
        image: String,
        engravingText: String, // Custom gift engraving text
        packagingType: { type: String, default: 'Maison Aurélia Royal Ivory Box' }
      }
    ],
    shippingAddress: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipCode: { type: String, required: true },
      country: { type: String, required: true }
    },
    paymentMethod: { type: String, default: 'Stripe Credit Card' },
    paymentResult: {
      id: String,
      status: String,
      email_address: String
    },
    subtotal: { type: Number, required: true },
    discountAmount: { type: Number, default: 0 },
    taxAmount: { type: Number, default: 0 },
    shippingFee: { type: Number, default: 0 },
    totalPrice: { type: Number, required: true },
    isPaid: { type: Boolean, default: true },
    paidAt: { type: Date, default: Date.now },
    orderStatus: {
      type: String,
      enum: ['Processing', 'In Assembly', 'Dispatched', 'In Transit', 'Delivered'],
      default: 'Processing'
    },
    trackingNumber: { type: String },
    giftMessage: { type: String }
  },
  { timestamps: true }
);

export const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
