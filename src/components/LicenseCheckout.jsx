import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LicenseCheckout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const creator = location.state?.creator;

  // State Management
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Price Calculations
  const licenseFee = billingCycle === 'monthly' ? 500.00 : 4800.00;
  const platformFee = licenseFee * 0.05;
  const transactionFee = 2.50;
  const tax = 52.75;
  const totalDue = licenseFee + platformFee + transactionFee + tax;

  if (!creator) {
    return (
      <div className="min-h-screen bg-[#0B0E14] flex flex-col items-center justify-center text-white">
        <p className="text-xl mb-4 font-mochi">No creator selected for licensing.</p>
        <button onClick={() => navigate('/marketplace')} className="text-purple-400 hover:underline">
          Back to Marketplace
        </button>
      </div>
    );
  }

  // Dummy Payment Flow
  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-20 px-8 font-relyne">
      
      {/* 1. PAYMENT PROCESSING OVERLAY */}
      {isProcessing && (
        <div className="fixed inset-0 z-[100] bg-white/90 backdrop-blur-md flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-slate-100 border-t-blue-600 rounded-full animate-spin mb-6"></div>
          <p className="text-xl font-bold text-slate-900 animate-pulse font-mochi">Securing your license...</p>
          <p className="text-sm text-slate-400">Processing via encrypted gateway</p>
        </div>
      )}

      {/* 2. SUCCESS RECEIPT DIALOG */}
      {showSuccess && (
        <div className="fixed inset-0 z-[110] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-[2.5rem] w-full max-w-md p-10 shadow-2xl animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✓</div>
            <h2 className="text-2xl font-black text-center text-slate-900 mb-2 font-mochi">Payment Successful!</h2>
            <p className="text-center text-slate-500 text-sm mb-8">Your license for {creator.name} is now active.</p>
            
            <div className="bg-slate-50 rounded-3xl p-6 mb-8 border border-dashed border-slate-200">
              <div className="flex justify-between text-[10px] uppercase font-black tracking-widest mb-4">
                <span className="text-slate-400">Transaction ID</span>
                <span className="text-slate-900">#LKN-9928471</span>
              </div>
              <div className="flex justify-between text-[10px] uppercase font-black tracking-widest mb-4">
                <span className="text-slate-400">Date</span>
                <span className="text-slate-900">Jan 18, 2026</span>
              </div>
              <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                <span className="text-sm font-bold text-slate-900">Total Paid</span>
                <span className="text-xl font-black text-blue-600">${totalDue.toFixed(2)}</span>
              </div>
            </div>

            <button onClick={() => navigate('/dashboard/business')} className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
              Go to My Assets
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Progress Stepper */}
        <div className="flex justify-center items-center gap-6 mb-16">
          <div className="flex items-center gap-3 text-green-600 font-bold text-[10px] uppercase tracking-widest">
            <span className="w-8 h-8 rounded-full bg-green-100 border border-green-200 flex items-center justify-center">✓</span> Select Avatar
          </div>
          <div className="w-16 h-px bg-slate-200"></div>
          <div className="flex items-center gap-3 text-green-600 font-bold text-[10px] uppercase tracking-widest">
            <span className="w-8 h-8 rounded-full bg-green-100 border border-green-200 flex items-center justify-center">✓</span> Choose License
          </div>
          <div className="w-16 h-px bg-slate-200"></div>
          <div className="flex items-center gap-3 text-blue-600 font-bold text-[10px] uppercase tracking-widest">
            <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-200">3</span> Payment
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* LEFT: FORM SECTIONS */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Billing Cycle */}
            <div className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-8 font-mochi">Select Billing Cycle</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div onClick={() => setBillingCycle('monthly')} className={`p-8 rounded-3xl border-2 transition-all cursor-pointer ${billingCycle === 'monthly' ? 'border-blue-600 bg-blue-50/20' : 'border-slate-50 bg-slate-50/50'}`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-900">Monthly</span>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${billingCycle === 'monthly' ? 'border-blue-600' : 'border-slate-300'}`}>
                      {billingCycle === 'monthly' && <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>}
                    </div>
                  </div>
                  <p className="text-3xl font-black text-slate-900">$500<span className="text-sm font-medium text-slate-400">/mo</span></p>
                </div>
                <div onClick={() => setBillingCycle('annual')} className={`p-8 rounded-3xl border-2 transition-all cursor-pointer relative ${billingCycle === 'annual' ? 'border-blue-600 bg-blue-50/20' : 'border-slate-50 bg-slate-50/50'}`}>
                  <span className="absolute -top-3 right-6 bg-green-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Save 20%</span>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-900">Annual</span>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${billingCycle === 'annual' ? 'border-blue-600' : 'border-slate-300'}`}>
                      {billingCycle === 'annual' && <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>}
                    </div>
                  </div>
                  <p className="text-3xl font-black text-slate-900">$4,800<span className="text-sm font-medium text-slate-400">/yr</span></p>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm space-y-8">
              <h2 className="text-xl font-bold text-slate-900 mb-2 font-mochi">Payment Method</h2>
              <div className="space-y-4">
                <input type="text" placeholder="Card Number (1234 5678 9012 3456)" className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="MM / YY" className="p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700" />
                  <input type="text" placeholder="CVV" className="p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700" />
                </div>
                <input type="text" placeholder="Cardholder Name" className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700" />
              </div>
            </div>

            {/* Billing Info */}
            <div className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-8 font-mochi">Billing Information</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input type="text" placeholder="First Name" className="p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700" />
                <input type="text" placeholder="Last Name" className="p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700" />
              </div>
              <div className="space-y-6">
                <input type="email" placeholder="Email Address" className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700" />
                <input type="text" placeholder="Company Name (Optional)" className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700" />
                <input type="text" placeholder="Address" className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700" />
                <div className="grid grid-cols-3 gap-6">
                  <input type="text" placeholder="City" className="p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700" />
                  <input type="text" placeholder="State" className="p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700" />
                  <input type="text" placeholder="ZIP Code" className="p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700" />
                </div>
              </div>
            </div>

            {/* Terms & Agreement */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 flex gap-4 items-start">
              <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} className="mt-1.5 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
              <p className="text-[13px] leading-relaxed text-slate-500 font-medium">
                I agree to the <span className="text-blue-600 underline">Terms of Service</span> and <span className="text-blue-600 underline">License Agreement</span>. I understand that this license grants usage rights as specified in the Professional tier.
              </p>
            </div>
          </div>

          {/* RIGHT: ORDER SUMMARY */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl sticky top-28">
              <h2 className="text-lg font-bold text-slate-900 mb-8 font-mochi">Order Summary</h2>
              
              <div className="flex gap-4 items-center mb-8 pb-8 border-b border-slate-50">
                <div className="w-20 h-20 bg-slate-900 rounded-3xl overflow-hidden shadow-inner">
                  <img src={creator.image} className="w-full h-full object-cover" alt="" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 leading-tight mb-1">{creator.name}</h3>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">by {creator.creator}</p>
                </div>
              </div>

              {/* License Details */}
              <div className="mb-8 space-y-3">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">License Details</p>
                <div className="flex items-center gap-3 text-[12px] text-slate-600 font-medium"><span className="text-green-500">✓</span> Up to 1M impressions/month</div>
                <div className="flex items-center gap-3 text-[12px] text-slate-600 font-medium"><span className="text-green-500">✓</span> Commercial advertising</div>
                <div className="flex items-center gap-3 text-[12px] text-slate-600 font-medium"><span className="text-green-500">✓</span> Priority support</div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex justify-between"><span className="text-slate-400">License Fee</span><span className="text-slate-900 font-black">${licenseFee.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Platform Fee (5%)</span><span className="text-slate-900 font-black">${platformFee.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Tax & Fees</span><span className="text-slate-900 font-black">$55.25</span></div>
                <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                  <span className="text-base font-bold text-slate-900">Total Today</span>
                  <span className="text-2xl font-black text-blue-600">${totalDue.toFixed(2)}</span>
                </div>
              </div>

              <button 
                disabled={!termsAccepted}
                onClick={handlePayment}
                className={`w-full py-5 rounded-[1.5rem] font-bold text-lg shadow-xl transition-all active:scale-95 ${termsAccepted ? 'bg-blue-600 text-white shadow-blue-200 hover:bg-blue-700' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
              >
                Complete Payment
              </button>
            </div>
            
            {/* Money Back */}
            <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-3xl p-8 flex gap-5 items-start">
              <span className="text-2xl">🛡️</span>
              <div>
                <p className="text-xs font-black text-[#166534] uppercase tracking-widest">30-Day Money-Back</p>
                <p className="text-[11px] text-[#15803d] mt-1 font-medium leading-relaxed">Not satisfied? Get a full refund within 30 days, no questions asked.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicenseCheckout;