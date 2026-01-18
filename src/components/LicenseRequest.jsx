import React, { useState } from 'react';

const LicenseRequest = ({ creator, onClose }) => {
  const [billingCycle, setBillingCycle] = useState('Monthly');
  const [selectedTier, setSelectedTier] = useState('Professional');

  // Pricing Logic
  const tiers = [
    {
      name: 'Basic',
      price: 250,
      limit: '100K impressions',
      features: ['Social media posts', 'Basic analytics', 'Email support', 'Standard quality']
    },
    {
      name: 'Professional',
      price: 500,
      limit: '1M impressions',
      features: ['All platforms', 'Advanced analytics', 'Priority support', '4K quality'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 2000,
      limit: 'Unlimited',
      features: ['Custom integration', 'Dedicated manager', 'White-label options', 'Full legal coverage']
    }
  ];

  const currentTier = tiers.find(t => t.name === selectedTier);
  const platformFee = currentTier.price * 0.05;
  const total = currentTier.price + platformFee;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="bg-[#0B0E14] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border border-white/10 shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* Header Section */}
        <div className="relative p-8 bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all"
          >
            ✕
          </button>
          <h2 className="text-3xl font-bold font-mochi mb-2">Request License</h2>
          <p className="font-relyne opacity-90 text-sm italic">Choose the plan that fits your campaign goals</p>
        </div>

        <div className="p-8 space-y-10">
          {/* Creator Preview Card */}
          <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-purple-500/30">
              <img src={creator.image} alt={creator.name} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white font-mochi">{creator.name} — Asset Bundle</h3>
              <div className="flex items-center gap-3 font-relyne">
                <span className="text-yellow-400 text-sm">⭐ 5.0 (24 reviews)</span>
                <span className="bg-green-500/20 text-green-400 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase border border-green-500/30">Verified Creator</span>
              </div>
            </div>
          </div>

          {/* Billing Toggle */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-gray-400 font-relyne text-sm font-semibold uppercase tracking-widest">Select Billing Cycle</span>
            <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl w-64">
              {['Monthly', 'Annual'].map(cycle => (
                <button
                  key={cycle}
                  onClick={() => setBillingCycle(cycle)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    billingCycle === cycle 
                    ? 'bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white shadow-lg' 
                    : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {cycle} {cycle === 'Annual' && <span className="text-[9px] block text-green-300">Save 20%</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Tiers Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div 
                key={tier.name}
                onClick={() => setSelectedTier(tier.name)}
                className={`relative p-6 rounded-[2rem] border-2 cursor-pointer transition-all duration-300 ${
                  selectedTier === tier.name 
                  ? 'border-[#7C3AED] bg-purple-600/10 shadow-[0_0_20px_rgba(124,58,237,0.2)]' 
                  : 'border-white/5 bg-white/5 hover:border-white/20'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4F46E5] text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-tighter">Most Popular</span>
                )}
                <h4 className="text-white font-mochi text-lg mb-2">{tier.name}</h4>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white font-moldie">${tier.price}</span>
                  <span className="text-gray-500 text-xs">/mo</span>
                </div>
                <p className="text-[#7C3AED] text-xs font-bold font-relyne mb-6">Up to {tier.limit} impressions</p>
                <ul className="space-y-3 font-relyne text-sm text-gray-400">
                  {tier.features.map(f => <li key={f} className="flex items-center gap-2"> <span className="text-green-500">✓</span> {f}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Inputs Section */}
          <div className="grid md:grid-cols-2 gap-6 font-relyne">
            <div className="space-y-2">
              <label className="text-gray-400 text-sm ml-1">Company Name</label>
              <input type="text" placeholder="Acme Corp" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-purple-500 transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-gray-400 text-sm ml-1">Business Email</label>
              <input type="email" placeholder="you@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-purple-500 transition-all" />
            </div>
          </div>

          {/* Order Summary Box */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-4 font-relyne">
            <div className="flex justify-between text-gray-400">
              <span>{selectedTier} License</span>
              <span className="text-white font-bold">${currentTier.price}.00</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Platform Fee (5%)</span>
              <span className="text-white font-bold">${platformFee.toFixed(2)}</span>
            </div>
            <div className="h-px bg-white/10 my-4"></div>
            <div className="flex justify-between text-xl font-bold">
              <span className="text-white">Total Amount</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-moldie">${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <button className="w-full bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white py-5 rounded-2xl font-bold text-lg font-relyne hover:opacity-90 transition-all shadow-xl shadow-purple-500/20">
              Submit License Request
            </button>
            <p className="text-center text-xs text-gray-500 font-relyne">
              By clicking submit, you agree to our <span className="underline cursor-pointer">License Agreement</span> and <span className="underline cursor-pointer">Terms of Service</span>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LicenseRequest;