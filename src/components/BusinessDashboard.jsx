import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BusinessDashboard = () => {
  // Brand-specific metrics with updated light-mode styling
  const stats = [
    { label: "Active Licenses", value: "12", trend: "+2 this week", icon: "📄", trendColor: "text-green-600" },
    { label: "Asset Impressions", value: "4.8M", trend: "+15.2%", icon: "👁️", trendColor: "text-blue-600" },
    { label: "Remaining Budget", value: "$12,450", trend: "Refills in 12 days", icon: "💰", trendColor: "text-purple-600" },
    { label: "Avg. Rating", value: "4.9", trend: "24 reviews", icon: "⭐", trendColor: "text-yellow-600" }
  ];

  const activeCampaigns = [
    { id: 1, name: "Gaming Avatar Pro", creator: "Chloe Chen", revenue: "$2,450", trend: "+15%", status: "Active" },
    { id: 2, name: "Tech Guru", creator: "Alex Park", revenue: "$1,800", trend: "+8%", status: "Active" },
    { id: 3, name: "Fitness Coach", creator: "Sarah Miller", revenue: "$1,200", trend: "+22%", status: "Pending" }
  ];
const [name, setName] = useState('Guest');

  useEffect(() => {
    // Retrieve the real name stored during login
    const storedName = localStorage.getItem('username');
    if (storedName) {
      setName(storedName);
    }
  }, []);
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-28 pb-12 px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <header className="flex justify-between items-center">
          <div className="space-y-1">
<h1 className="text-4xl font-bold text-slate-900 flex items-center gap-3">
          Welcome back, {name}! 👋
        </h1>            <p className="text-slate-500 font-relyne">Here's what's happening with your licensed avatars today</p>
          </div>
          <div className="flex gap-4">
             <select className="bg-white border border-slate-200 rounded-xl px-4 py-2 font-relyne text-sm shadow-sm outline-none">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
             </select>
          </div>
        </header>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-relyne">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-xl">
                    {stat.icon}
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full bg-opacity-10 ${stat.trendColor.replace('text', 'bg')} ${stat.trendColor}`}>
                    {stat.trend}
                </span>
              </div>
              <div className="text-3xl font-bold font-moldie text-slate-800">{stat.value}</div>
              <div className="text-slate-400 text-xs uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Revenue / Usage Overview Chart Placeholder */}
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold font-mochi text-slate-800">Usage Overview</h3>
                <div className="flex bg-slate-50 p-1 rounded-xl font-relyne text-xs">
                    {['Daily', 'Weekly', 'Monthly'].map(t => (
                        <button key={t} className={`px-4 py-1.5 rounded-lg ${t === 'Weekly' ? 'bg-white shadow-sm text-purple-600 font-bold' : 'text-slate-400'}`}>{t}</button>
                    ))}
                </div>
            </div>
            {/* Visual Bar Chart Placeholder */}
            <div className="flex items-end justify-between h-64 px-4">
                {[40, 70, 45, 90, 60, 100, 80].map((h, i) => (
                    <div key={i} className="w-12 bg-gradient-to-t from-[#7C3AED] to-[#4F46E5] rounded-t-xl" style={{ height: `${h}%` }}></div>
                ))}
            </div>
            <div className="flex justify-between mt-4 text-xs font-relyne text-slate-400 px-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => <span key={day}>{day}</span>)}
            </div>
          </div>

          {/* Right Column: Top Performing & Activity */}
          <div className="space-y-8">
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold font-mochi text-slate-800">Top Avatars</h3>
                    <button className="text-blue-600 text-xs font-bold font-relyne">View All</button>
                </div>
                <div className="space-y-6 font-relyne">
                    {activeCampaigns.map(avatar => (
                        <div key={avatar.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-slate-200 rounded-xl overflow-hidden"></div>
                                <div>
                                    <div className="text-sm font-bold text-slate-800">{avatar.name}</div>
                                    <div className="text-[10px] text-slate-400">by {avatar.creator}</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-bold text-slate-800">{avatar.revenue}</div>
                                <div className="text-[10px] text-green-500 font-bold">{avatar.trend}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
                 <h3 className="text-lg font-bold font-mochi text-slate-800 mb-6">Recent Activity</h3>
                 <div className="space-y-6 font-relyne">
                    <div className="flex gap-4">
                        <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center text-sm">📄</div>
                        <div>
                            <div className="text-sm font-bold text-slate-800">New license purchased</div>
                            <div className="text-[10px] text-slate-400">Gaming Avatar Pro - 2 hours ago</div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 bg-yellow-50 rounded-lg flex items-center justify-center text-sm">⭐</div>
                        <div>
                            <div className="text-sm font-bold text-slate-800">New 5-star review</div>
                            <div className="text-[10px] text-slate-400">from TechCorp Marketing - 5 hours ago</div>
                        </div>
                    </div>
                 </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;