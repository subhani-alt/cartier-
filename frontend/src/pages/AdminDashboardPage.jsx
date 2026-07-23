import React, { useState } from 'react';
import { DollarSign, ShoppingBag, Package, Users, Plus, Edit, Trash2, CheckCircle2, TrendingUp, Sparkles, Sliders } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';

export const AdminDashboardPage = ({ products, onAddProduct }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'products' | 'orders' | 'coupons'
  const [productList, setProductList] = useState(products);

  const [orderList, setOrderList] = useState([
    { id: 'MA-2026-8801', customer: 'Lord Aurelius', items: '1x Skeleton Tourbillon', total: 34500, status: 'In Assembly', date: '2026-07-20' },
    { id: 'MA-2026-8802', customer: 'Lady Genevieve', items: '2x Oud Royal & Santal', total: 840, status: 'Delivered', date: '2026-07-18' },
    { id: 'MA-2026-8803', customer: 'Sir Harrison Vance', items: '1x Souverain Moonphase', total: 18900, status: 'Dispatched', date: '2026-07-15' }
  ]);

  const [coupons, setCoupons] = useState([
    { code: 'AURELIA10', discount: '10%', usage: '48 Uses', status: 'Active' },
    { code: 'ROYALVIP', discount: '15%', usage: '12 Uses', status: 'Active' }
  ]);

  const revenueData = [
    { month: 'Jan', revenue: 42000 },
    { month: 'Feb', revenue: 58000 },
    { month: 'Mar', revenue: 64000 },
    { month: 'Apr', revenue: 51000 },
    { month: 'May', revenue: 79000 },
    { month: 'Jun', revenue: 84920 }
  ];

  const pieData = [
    { name: 'Watches', value: 65, color: '#7A5C45' },
    { name: 'Fragrances', value: 35, color: '#B89C7D' }
  ];

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrderList(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  return (
    <div className="bg-ivory py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-dark text-primary p-8 rounded-luxury shadow-luxury">
          <div className="space-y-1">
            <span className="text-highlight text-[10px] uppercase font-bold tracking-[0.3em] block">
              Maison Control Center
            </span>
            <h1 className="font-serif-luxury text-3xl sm:text-4xl text-primary">Admin Management Portal</h1>
            <p className="text-xs text-secondary/70">Manage horlogerie inventory, luxury orders, coupons, and analytics.</p>
          </div>

          <button
            onClick={() => alert('New product creation form modal ready.')}
            className="px-6 py-3 bg-highlight hover:bg-accent text-dark hover:text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-luxury flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add Luxury Creation
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-secondary/40 space-x-6 text-xs uppercase tracking-wider font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 ${activeTab === 'overview' ? 'border-b-2 border-accent text-accent font-bold' : 'text-text-muted'}`}
          >
            Sales Analytics
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`pb-3 ${activeTab === 'products' ? 'border-b-2 border-accent text-accent font-bold' : 'text-text-muted'}`}
          >
            Product Catalog ({productList.length})
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`pb-3 ${activeTab === 'orders' ? 'border-b-2 border-accent text-accent font-bold' : 'text-text-muted'}`}
          >
            Order Fulfillment Pipeline ({orderList.length})
          </button>
          <button
            onClick={() => setActiveTab('coupons')}
            className={`pb-3 ${activeTab === 'coupons' ? 'border-b-2 border-accent text-accent font-bold' : 'text-text-muted'}`}
          >
            Promo Codes & VIP Coupons
          </button>
        </div>

        {/* TAB 1: OVERVIEW & ANALYTICS */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            
            {/* KPI Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-primary p-6 rounded-luxury border border-secondary space-y-2">
                <div className="flex justify-between items-center text-text-muted text-xs">
                  <span>Gross Revenue</span>
                  <DollarSign className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-serif-luxury text-3xl font-bold text-dark">$348,920</h3>
                <span className="text-[10px] text-success font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +18.4% vs last quarter
                </span>
              </div>

              <div className="bg-primary p-6 rounded-luxury border border-secondary space-y-2">
                <div className="flex justify-between items-center text-text-muted text-xs">
                  <span>Completed Orders</span>
                  <ShoppingBag className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-serif-luxury text-3xl font-bold text-dark">142</h3>
                <span className="text-[10px] text-accent font-semibold">Average Value: $2,457</span>
              </div>

              <div className="bg-primary p-6 rounded-luxury border border-secondary space-y-2">
                <div className="flex justify-between items-center text-text-muted text-xs">
                  <span>Active Catalog Items</span>
                  <Package className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-serif-luxury text-3xl font-bold text-dark">{productList.length}</h3>
                <span className="text-[10px] text-text-muted">12 Watches • 12 Fragrances</span>
              </div>

              <div className="bg-primary p-6 rounded-luxury border border-secondary space-y-2">
                <div className="flex justify-between items-center text-text-muted text-xs">
                  <span>VIP Collectors</span>
                  <Users className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-serif-luxury text-3xl font-bold text-dark">88</h3>
                <span className="text-[10px] text-success font-semibold">100% Verified Buyer Rate</span>
              </div>
            </div>

            {/* Recharts Chart Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Revenue Area Chart */}
              <div className="lg:col-span-8 bg-primary p-6 rounded-luxury border border-secondary space-y-4">
                <h3 className="font-serif-luxury text-xl text-dark">Monthly Revenue Trend ($)</h3>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#7A5C45" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#7A5C45" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" stroke="#66605C" fontSize={12} />
                      <YAxis stroke="#66605C" fontSize={12} />
                      <Tooltip />
                      <Area type="monotone" dataKey="revenue" stroke="#7A5C45" fillOpacity={1} fill="url(#colorRev)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Category Pie Share */}
              <div className="lg:col-span-4 bg-primary p-6 rounded-luxury border border-secondary space-y-4">
                <h3 className="font-serif-luxury text-xl text-dark">Revenue Share</h3>
                <div className="h-64 w-full flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={5} dataKey="value">
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: PRODUCTS */}
        {activeTab === 'products' && (
          <div className="bg-primary rounded-luxury border border-secondary overflow-hidden">
            <div className="p-6 border-b border-secondary/40 flex justify-between items-center">
              <h3 className="font-serif-luxury text-xl text-dark font-medium">Catalog Inventory</h3>
              <span className="text-xs text-text-muted">{productList.length} Items Total</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-secondary/40 text-accent uppercase tracking-wider font-bold">
                  <tr>
                    <th className="p-4">Item</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Stock</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-secondary/40">
                  {productList.map((p) => (
                    <tr key={p.slug} className="hover:bg-ivory/50 transition-colors">
                      <td className="p-4 flex items-center gap-3">
                        <img src={p.images[0]} alt={p.name} className="w-10 h-10 object-cover rounded-lg" />
                        <span className="font-serif-luxury text-sm font-semibold text-dark">{p.name}</span>
                      </td>
                      <td className="p-4 text-text-muted">{p.category} • {p.subCategory}</td>
                      <td className="p-4 font-serif-luxury font-bold text-dark">${p.price.toLocaleString()}</td>
                      <td className="p-4">
                        <span className="bg-secondary/60 text-accent font-bold px-2.5 py-1 rounded-full text-[10px]">
                          {p.stockCount || 15} Available
                        </span>
                      </td>
                      <td className="p-4 flex gap-2">
                        <button className="p-2 text-text-muted hover:text-accent"><Edit className="w-4 h-4" /></button>
                        <button className="p-2 text-text-muted hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: ORDERS */}
        {activeTab === 'orders' && (
          <div className="bg-primary rounded-luxury border border-secondary overflow-hidden">
            <div className="p-6 border-b border-secondary/40">
              <h3 className="font-serif-luxury text-xl text-dark font-medium">Order Fulfillment Pipeline</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-secondary/40 text-accent uppercase tracking-wider font-bold">
                  <tr>
                    <th className="p-4">Order Ref</th>
                    <th className="p-4">Customer</th>
                    <th className="p-4">Item Acquired</th>
                    <th className="p-4">Total</th>
                    <th className="p-4">Fulfillment Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-secondary/40">
                  {orderList.map((ord) => (
                    <tr key={ord.id} className="hover:bg-ivory/50 transition-colors">
                      <td className="p-4 font-mono font-bold text-dark">{ord.id}</td>
                      <td className="p-4 font-medium text-dark">{ord.customer}</td>
                      <td className="p-4 text-text-muted">{ord.items}</td>
                      <td className="p-4 font-serif-luxury font-bold text-dark">${ord.total.toLocaleString()}</td>
                      <td className="p-4">
                        <select
                          value={ord.status}
                          onChange={(e) => handleUpdateOrderStatus(ord.id, e.target.value)}
                          className="bg-ivory border border-secondary rounded-full py-1 px-3 text-xs font-semibold text-dark"
                        >
                          <option value="Processing">Processing</option>
                          <option value="In Assembly">In Assembly</option>
                          <option value="Dispatched">Dispatched</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
