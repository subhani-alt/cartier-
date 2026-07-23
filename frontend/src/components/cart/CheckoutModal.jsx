import React, { useState } from 'react';
import { X, CreditCard, ShieldCheck, CheckCircle2, Download, Lock, Truck, Gift } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { createOrderAPI } from '../../services/api';
import jsPDF from 'jspdf';
import confetti from 'canvas-confetti';

export const CheckoutModal = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cartItems, totalPrice, subtotal, discountAmount, clearCart } = useCart();
  const { user } = useAuth();

  const [step, setStep] = useState('shipping'); // 'shipping' | 'payment' | 'success'
  const [formData, setFormData] = useState({
    name: user?.name || 'Lord Aurelius',
    email: user?.email || 'collector@aurelia.luxury',
    street: '740 Park Avenue',
    city: 'New York',
    state: 'NY',
    zipCode: '10021',
    country: 'United States',
    giftMessage: 'With warmest regards and timeless elegance.'
  });

  const [cardData, setCardData] = useState({
    number: '4242 •••• •••• 4242',
    exp: '08 / 28',
    cvc: '888'
  });

  const [createdOrder, setCreatedOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const orderPayload = {
      customerName: formData.name,
      guestEmail: formData.email,
      items: cartItems.map(i => ({
        name: i.product.name,
        price: i.product.price,
        quantity: i.quantity,
        image: i.product.images[0],
        engravingText: i.engravingText
      })),
      shippingAddress: {
        street: formData.street,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country
      },
      subtotal,
      totalPrice,
      giftMessage: formData.giftMessage
    };

    const res = await createOrderAPI(orderPayload);
    setCreatedOrder(res);
    setLoading(false);
    setStep('success');
    clearCart();

    // Trigger Luxury Confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7A5C45', '#B89C7D', '#E7DED4']
      });
    } catch (err) {}
  };

  const downloadPDFInvoice = () => {
    if (!createdOrder) return;
    const doc = new jsPDF();

    doc.setFont("times", "bold");
    doc.setFontSize(22);
    doc.setTextColor(45, 42, 40);
    doc.text("MAISON AURÉLIA", 20, 25);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(122, 92, 69);
    doc.text("Geneva • Paris • New York", 20, 31);
    doc.text("OFFICIAL LUXURY INVOICE", 140, 25);
    doc.text(`Invoice No: ${createdOrder.orderNumber}`, 140, 31);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 140, 37);

    doc.setDrawColor(231, 222, 212);
    doc.line(20, 45, 190, 45);

    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.setTextColor(31, 31, 31);
    doc.text("Customer Acquisition Records", 20, 55);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Name: ${formData.name}`, 20, 63);
    doc.text(`Address: ${formData.street}, ${formData.city}, ${formData.state} ${formData.zipCode}`, 20, 70);

    doc.line(20, 80, 190, 80);

    doc.setFont("times", "bold");
    doc.text("Item Description", 20, 90);
    doc.text("Qty", 130, 90);
    doc.text("Total", 165, 90);

    let y = 100;
    createdOrder.items.forEach((item) => {
      doc.setFont("helvetica", "normal");
      doc.text(item.name.substring(0, 40), 20, y);
      doc.text(`${item.quantity}`, 130, y);
      doc.text(`$${(item.price * item.quantity).toLocaleString()}`, 165, y);
      y += 10;
    });

    doc.line(20, y + 5, 190, y + 5);

    doc.setFont("times", "bold");
    doc.setFontSize(14);
    doc.text(`Total Paid: $${createdOrder.totalPrice.toLocaleString()}`, 130, y + 20);

    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(100);
    doc.text("Thank you for acquiring from Maison Aurélia. Includes 8-Year International Warranty.", 20, y + 40);

    doc.save(`Maison_Aurelia_Invoice_${createdOrder.orderNumber}.pdf`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-dark/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-ivory rounded-luxury max-w-2xl w-full p-6 sm:p-10 border border-secondary shadow-2xl relative my-8">
        
        <button
          onClick={() => setIsCheckoutOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full bg-secondary/50 text-dark hover:bg-accent hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Progress */}
        <div className="text-center space-y-2 mb-8">
          <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-1">
            <Lock className="w-3.5 h-3.5" /> 256-Bit Encrypted Luxury Checkout
          </span>
          <h3 className="font-serif-luxury text-3xl text-dark">
            {step === 'success' ? 'Acquisition Confirmed' : 'Acquisition Vault Checkout'}
          </h3>

          {step !== 'success' && (
            <div className="flex justify-center items-center gap-4 pt-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
              <span className={step === 'shipping' ? 'text-accent font-bold border-b-2 border-accent' : ''}>1. Address</span>
              <span>&rarr;</span>
              <span className={step === 'payment' ? 'text-accent font-bold border-b-2 border-accent' : ''}>2. Payment</span>
            </div>
          )}
        </div>

        {/* STEP 1: SHIPPING */}
        {step === 'shipping' && (
          <form onSubmit={() => setStep('payment')} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-semibold text-dark uppercase tracking-wider block mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-surface border border-secondary rounded-xl py-3 px-4 text-sm text-dark focus:border-highlight"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-dark uppercase tracking-wider block mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-surface border border-secondary rounded-xl py-3 px-4 text-sm text-dark focus:border-highlight"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-dark uppercase tracking-wider block mb-1">Street Address</label>
              <input
                type="text"
                name="street"
                required
                value={formData.street}
                onChange={handleInputChange}
                className="w-full bg-surface border border-secondary rounded-xl py-3 px-4 text-sm text-dark focus:border-highlight"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-[11px] font-semibold text-dark uppercase tracking-wider block mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full bg-surface border border-secondary rounded-xl py-3 px-4 text-sm text-dark focus:border-highlight"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-dark uppercase tracking-wider block mb-1">State / Prov</label>
                <input
                  type="text"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full bg-surface border border-secondary rounded-xl py-3 px-4 text-sm text-dark focus:border-highlight"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-dark uppercase tracking-wider block mb-1">Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  required
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full bg-surface border border-secondary rounded-xl py-3 px-4 text-sm text-dark focus:border-highlight"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-dark uppercase tracking-wider block mb-1">Gift Card Personal Message</label>
              <textarea
                name="giftMessage"
                rows={2}
                value={formData.giftMessage}
                onChange={handleInputChange}
                className="w-full bg-surface border border-secondary rounded-xl p-3 text-xs text-dark focus:border-highlight"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 bg-highlight hover:bg-accent text-dark hover:text-white font-medium text-xs uppercase tracking-[0.2em] rounded-full transition-all shadow-luxury"
              >
                Proceed to Payment &rarr;
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: PAYMENT */}
        {step === 'payment' && (
          <form onSubmit={handlePaymentSubmit} className="space-y-6">
            <div className="bg-primary p-6 rounded-luxury border border-secondary space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-dark flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-accent" /> Stripe Payment Gateway
                </span>
                <span className="text-[10px] text-success font-bold uppercase tracking-wider">Secured</span>
              </div>

              <div>
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Card Number</label>
                <input
                  type="text"
                  required
                  value={cardData.number}
                  onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                  className="w-full bg-ivory border border-secondary rounded-xl py-3 px-4 text-sm font-mono text-dark"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Expiry Date</label>
                  <input
                    type="text"
                    required
                    value={cardData.exp}
                    onChange={(e) => setCardData({ ...cardData, exp: e.target.value })}
                    className="w-full bg-ivory border border-secondary rounded-xl py-3 px-4 text-sm font-mono text-dark"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">CVC Code</label>
                  <input
                    type="text"
                    required
                    value={cardData.cvc}
                    onChange={(e) => setCardData({ ...cardData, cvc: e.target.value })}
                    className="w-full bg-ivory border border-secondary rounded-xl py-3 px-4 text-sm font-mono text-dark"
                  />
                </div>
              </div>
            </div>

            <div className="bg-surface p-4 rounded-xl border border-secondary text-xs space-y-1">
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <span className="font-serif-luxury text-base font-bold text-dark">${totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[11px] text-text-muted">
                <span>Shipping:</span>
                <span className="text-accent font-semibold uppercase">Complimentary Express Courier</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setStep('shipping')}
                className="w-1/3 py-4 bg-secondary text-dark text-xs uppercase tracking-wider font-semibold rounded-full"
              >
                &larr; Back
              </button>

              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-4 bg-highlight hover:bg-accent text-dark hover:text-white font-medium text-xs uppercase tracking-[0.2em] rounded-full transition-all shadow-luxury"
              >
                {loading ? 'Processing Acquisition...' : `Confirm & Pay $${totalPrice.toLocaleString()}`}
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: SUCCESS */}
        {step === 'success' && createdOrder && (
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="font-serif-luxury text-3xl text-dark">Acquisition Registered</h4>
              <p className="text-xs text-text-muted">
                Order Reference: <span className="font-bold text-dark">{createdOrder.orderNumber}</span>
              </p>
              <p className="text-xs text-accent">
                Tracking Number: <span className="font-mono">{createdOrder.trackingNumber}</span>
              </p>
            </div>

            <div className="bg-primary p-6 rounded-luxury border border-secondary text-left space-y-3 text-xs">
              <div className="flex justify-between font-semibold border-b border-secondary/40 pb-2">
                <span>Item</span>
                <span>Subtotal</span>
              </div>
              {createdOrder.items.map((it, idx) => (
                <div key={idx} className="flex justify-between text-text-muted">
                  <span>{it.name} (x{it.quantity})</span>
                  <span className="font-serif-luxury text-dark font-medium">${(it.price * it.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={downloadPDFInvoice}
                className="flex-1 py-4 bg-dark text-primary text-xs uppercase tracking-wider font-semibold rounded-full flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-highlight" /> Download Official PDF Invoice
              </button>

              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="flex-1 py-4 bg-highlight hover:bg-accent text-dark hover:text-white text-xs uppercase tracking-wider font-semibold rounded-full"
              >
                Return to Maison
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
