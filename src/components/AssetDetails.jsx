import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { assetData } from '../data/assetData';

const AssetDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = assetData[id];

  console.log(data.image)

  if (!data) return <div className="pt-32 text-center">Asset not found.</div>;

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <Link to="/marketplace" className="inline-flex items-center text-slate-500 hover:text-slate-900 mb-6 font-bold text-sm">
          ← Back to Marketplace
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT COLUMN */}
          <div className="flex-1 space-y-8">
            {/* Media Card */}
            <div className="bg-white rounded-[2.5rem] p-4 shadow-sm border border-slate-200">
              <div className="aspect-video bg-slate-900 rounded-[2rem] overflow-hidden relative">
                <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-[#22C55E] text-white text-[10px] font-bold px-3 py-1 rounded-full">✓ Verified</span>
                  <span className="bg-[#3B82F6] text-white text-[10px] font-bold px-3 py-1 rounded-full">Premium</span>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">About This Avatar</h2>
              <h1 className="text-3xl font-bold text-slate-900 mb-4 font-mochi">{data.name}</h1>
              <p className="text-slate-600 leading-relaxed mb-8">{data.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8 text-sm">
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Perfect For:</h3>
                  <ul className="space-y-2 text-slate-500">
                    {data.perfectFor.map(item => <li key={item}>✓ {item}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Capabilities:</h3>
                  <ul className="space-y-2 text-slate-500">
                    {data.capabilities.map(item => <li key={item}>• {item}</li>)}
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Specs */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Technical Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {Object.entries(data.specs).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">{key.replace(/([A-Z])/g, ' $1')}</p>
                    <p className="text-slate-900 font-bold">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Reviews & Ratings</h2>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                  <span className="font-bold text-slate-900 text-lg">5.0</span>
                </div>
              </div>
              <div className="space-y-6">
                {data.reviews.map(review => (
                  <div key={review.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="font-bold text-slate-900 mb-1">{review.company}</p>
                    <p className="text-xs text-slate-500 mb-3">{review.role}</p>
                    <p className="text-slate-600 italic text-sm">"{review.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Sidebar) */}
          <div className="w-full lg:w-[380px] space-y-6">
            {/* Creator Card */}
            <div className="bg-white rounded-[2rem] p-6 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-200 rounded-full" />
                <div>
                  <p className="font-bold text-slate-900">{data.creator} ✓</p>
                  <p className="text-xs text-orange-500 font-bold">⭐ {data.trustScore} Trust Score</p>
                </div>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-[2rem] p-8">
              <h3 className="text-[10px] font-black text-[#166534] uppercase tracking-widest mb-6">Performance Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm"><span className="text-slate-600">Response Time</span><span className="font-bold text-slate-900">{data.performance.responseTime}</span></div>
                <div className="flex justify-between text-sm"><span className="text-slate-600">Renewal Rate</span><span className="font-bold text-[#22C55E]">{data.performance.renewalRate}</span></div>
                <div className="flex justify-between text-sm"><span className="text-slate-600">Total Impressions</span><span className="font-bold text-slate-900">{data.performance.totalImpressions}</span></div>
              </div>
            </div>

            {/* Licensing CTA */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl">
              <div className="mb-6">
                <p className="text-slate-400 text-xs font-bold uppercase mb-1">Starting at</p>
                <p className="text-4xl font-black text-slate-900">$250<span className="text-sm font-normal text-slate-400">/mo</span></p>
              </div>
            <button 
  onClick={() => navigate('/checkout/license', { state: { creator: data } })} // Pass the data here!
  className="w-full bg-[#6366F1] text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:scale-[1.02] transition-all"
>
  License This Avatar
</button>
              <button className="w-full mt-3 text-slate-500 font-bold py-3 text-sm">Request Custom Quote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetDetails;