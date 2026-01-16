import React from 'react';

const Footer = () => {
  const footerLinks = {
    Product: ['Marketplace', 'Pricing', 'Features', 'API'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Licenses', 'Security']
  };

  return (
    <footer>
      {/* --- CTA BANNER SECTION --- */}
      <section className="relative py-24 px-8 overflow-hidden bg-gradient-to-br from-purple-800 to-blue-600">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] opacity-30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-5xl md:text-7xl font-light text-white font-mochi leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 font-relyne max-w-2xl mx-auto leading-relaxed">
            Join 500+ brands and creators using Likens to power their AI avatar content
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 font-relyne">
            <button className="bg-white text-brandPurple px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl">
              Browse Marketplace
            </button>
            <button className="bg-transparent border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md">
              Become a Creator
            </button>
          </div>
        </div>
      </section>

      {/* --- MAIN FOOTER LINKS --- */}
      <section className="bg-[#0B0E14] text-gray-400 py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-yellow-400 text-xl">✨</span>
              </div>
              <span className="text-2xl logo font-semibold text-white font-mochi">Likens</span>
            </div>
            <p className="max-w-xs leading-relaxed font-relyne">
              The first marketplace for licensing AI avatars from verified creators. Legal, transparent, and creator-friendly.
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex gap-3">
              {['T', 'L', 'I', 'Y'].map((icon) => (
                <div key={icon} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-xs font-bold text-gray-500">{icon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h4 className="text-white font-normal font-mochi">{title}</h4>
              <ul className="space-y-4 font-relyne">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 font-relyne text-sm">
          <p>© 2026 Likens. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-pink-500">❤️</span> for creators and brands
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;