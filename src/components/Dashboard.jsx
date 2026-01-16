import React, { useState } from 'react';
import { 
  Menu, X, Plus, ChevronDown, Download, Star, 
  Building2, LayoutDashboard, Palette, FileText, 
  DollarSign, BarChart3, Settings, MessageSquare, CheckCircle2
} from 'lucide-react';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Sidebar navigation data from Image 1
  const sidebarItems = [
    { label: 'Overview', icon: <LayoutDashboard size={20} />, active: true },
    { label: 'My Avatars', icon: <Palette size={20} />, count: 5 },
    { label: 'Active Licenses', icon: <FileText size={20} />, count: 18 },
    { label: 'Earnings', icon: <DollarSign size={20} /> },
    { label: 'Analytics', icon: <BarChart3 size={20} /> },
    { label: 'Reviews', icon: <Star size={20} />, count: 12 },
    { label: 'Settings', icon: <Settings size={20} /> },
  ];

  // Stats for the top cards from Image 6
  const stats = [
    { label: 'Total Revenue', value: '$8,450', change: '+12.5%', icon: '💰', color: 'bg-orange-50' },
    { label: 'Active Licenses', value: '18', change: '+3 this week', icon: '📄', color: 'bg-blue-50' },
    { label: 'Total Views', value: '2.4M', change: '+18.2%', icon: '👁️', color: 'bg-purple-50' },
    { label: 'Avg. Rating', value: '4.9', change: '24 reviews', icon: '⭐', color: 'bg-yellow-50' },
  ];

  // Bar chart data from Image 6
  const chartData = [
    { day: 'Mon', height: 'h-24' },
    { day: 'Tue', height: 'h-36' },
    { day: 'Wed', height: 'h-20' },
    { day: 'Thu', height: 'h-56' },
    { day: 'Fri', height: 'h-32' },
    { day: 'Sat', height: 'h-64' },
    { day: 'Sun', height: 'h-44' },
  ];

  // Pending requests from Image 3
  const pendingRequests = [
    { id: 1, name: 'TechCorp Inc.', sub: 'Gaming Avatar Pro · Enterprise License · $2,000/mo' },
    { id: 2, name: 'Creative Studios', sub: 'Tech Guru · Professional License · $500/mo' },
    { id: 3, name: 'Marketing Plus', sub: 'Fitness Coach · Professional License · $500/mo' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans">
      
      {/* --- SIDEBAR (Image 1) --- */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0
      `}>
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-10 px-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-indigo-200">✨</div>
              <span className="text-xl font-bold tracking-tight text-gray-900">Likens</span>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 text-gray-400 hover:bg-gray-100 rounded-full"><X size={20} /></button>
          </div>

          <nav className="flex-1 space-y-1">
            {sidebarItems.map((item, i) => (
              <button key={i} className={`
                w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all
                ${item.active ? 'bg-[#EEF2FF] text-[#4F46E5]' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
              `}>
                <div className="flex items-center gap-3">
                  <span className={item.active ? 'text-[#4F46E5]' : 'text-gray-400'}>{item.icon}</span>
                  <span className="font-semibold text-sm">{item.label}</span>
                </div>
                {item.count && (
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${item.active ? 'bg-[#DBEAFE] text-[#2563EB]' : 'bg-[#F1F5F9] text-[#64748B]'}`}>
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </nav>

          <div className="pt-6 border-t border-gray-100 mt-6">
            <button className="w-full py-4 bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20 hover:opacity-95 transition-all active:scale-[0.98]">
              <Plus size={20} /> Upload New Avatar
            </button>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT (Images 4, 5, 6) --- */}
      <main className="flex-1 min-w-0 h-screen overflow-y-auto">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-30 px-8 py-5 flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center gap-4 text-gray-800">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-100">
              <Menu size={22} />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, Navin! 👋</h1>
              <p className="text-gray-400 text-xs font-medium mt-0.5">Here's what's happening with your avatars today!</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-xs font-bold text-gray-600 shadow-sm hover:border-gray-300 transition-all">
            Last 7 days <ChevronDown size={14} className="text-gray-400" />
          </button>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          
          {/* Top Stat Cards (Image 6) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm transition-hover hover:shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-2xl p-3 rounded-2xl ${stat.color}`}>{stat.icon}</span>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${i === 3 ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">{stat.value}</h3>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Revenue Overview Chart (Image 2 & 6) */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-xl font-bold text-[#1E293B]">Revenue Overview</h2>
              <div className="flex bg-[#F1F5F9] p-1 rounded-xl border border-gray-100">
                <button className="px-5 py-2 text-xs font-bold text-gray-400">Daily</button>
                <button className="px-5 py-2 text-xs font-bold bg-white text-[#4F46E5] rounded-lg shadow-sm">Weekly</button>
                <button className="px-5 py-2 text-xs font-bold text-gray-400">Monthly</button>
              </div>
            </div>
            <div className="flex items-end justify-between h-64 gap-3 sm:gap-6 px-4">
              {chartData.map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                  <div className={`${bar.height} w-full max-w-[65px] bg-gradient-to-t from-[#4F46E5] to-[#9333EA] rounded-t-2xl transition-all duration-500 group-hover:opacity-80`}></div>
                  <span className="text-[11px] font-bold text-[#94A3B8]">{bar.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Avatars & Activity (Image 4) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Performing Avatars */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-gray-800">Top Performing Avatars</h2>
                <button className="text-[#4F46E5] text-xs font-bold hover:underline">View All</button>
              </div>
              <div className="space-y-7">
                {[
                  { name: 'Gaming Avatar Pro', sub: '8 active licenses', price: '$2,450', grow: '+15%', color: 'bg-indigo-600' },
                  { name: 'Tech Guru', sub: '5 active licenses', price: '$1,800', grow: '+8%', color: 'bg-purple-600' },
                  { name: 'Fitness Coach', sub: '3 active licenses', price: '$1,200', grow: '+22%', color: 'bg-rose-600' }
                ].map((avatar, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 ${avatar.color} rounded-2xl shadow-inner flex items-center justify-center text-white/20 text-[8px] font-black`}>IMG</div>
                      <div>
                        <p className="font-bold text-sm text-gray-900 group-hover:text-[#4F46E5] transition-colors">{avatar.name}</p>
                        <p className="text-gray-400 text-xs font-medium">{avatar.sub}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 text-sm">{avatar.price}</p>
                      <p className="text-green-500 text-[10px] font-bold">{avatar.grow}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
                <button className="text-[#4F46E5] text-xs font-bold hover:underline">View All</button>
              </div>
              <div className="space-y-7">
                {[
                  { icon: <Download size={18} />, label: 'New license purchased', sub: 'Gaming Avatar Pro - Professional Tier', time: '2 hours ago', bg: 'bg-green-50', text: 'text-green-500' },
                  { icon: <Star size={18} />, label: 'New 5-star review', sub: 'from TechCorp Marketing Team', time: '5 hours ago', bg: 'bg-yellow-50', text: 'text-yellow-500' },
                  { icon: <CheckCircle2 size={18} />, label: 'Payout completed', sub: '$1,200 deposited to your account', time: '1 day ago', bg: 'bg-blue-50', text: 'text-blue-500' },
                  { icon: <MessageSquare size={18} />, label: 'New message', sub: 'Question about licensing terms', time: '1 day ago', bg: 'bg-purple-50', text: 'text-purple-500' }
                ].map((activity, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`p-3 ${activity.bg} ${activity.text} rounded-2xl h-fit border border-white shadow-sm`}>{activity.icon}</div>
                    <div>
                      <p className="font-bold text-sm text-gray-900 leading-tight">{activity.label}</p>
                      <p className="text-gray-400 text-[11px] font-medium mt-0.5">{activity.sub}</p>
                      <p className="text-gray-300 text-[10px] font-bold uppercase tracking-tight mt-2">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pending License Requests (Image 3 & 4) */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-[#1E293B]">Pending License Requests</h2>
              <span className="bg-[#EFF6FF] text-[#3B82F6] px-4 py-1.5 rounded-full text-[12px] font-extrabold uppercase tracking-tight">3 pending</span>
            </div>
            <div className="space-y-4">
              {pendingRequests.map((req) => (
                <div key={req.id} className="flex flex-wrap items-center justify-between p-5 bg-[#F8FAFC] rounded-3xl border border-gray-50 transition-hover hover:bg-[#F1F5F9]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
                      <Building2 className="text-[#94A3B8]" size={22} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{req.name}</p>
                      <p className="text-[#64748B] text-xs font-medium">{req.sub}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="bg-[#4F46E5] text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-indigo-100 hover:bg-[#4338CA] transition-all">Approve</button>
                    <button className="bg-white border border-[#E2E8F0] text-[#64748B] px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-gray-50 transition-all">Decline</button>
                    <button className="text-[#3B82F6] text-xs font-bold ml-2 hover:underline transition-all">Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>
      )}
    </div>
  );
};

export default Dashboard;