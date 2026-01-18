import React from 'react';
import GetStarted from './GetStarted'
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
        
      <GetStarted/>
      </section>

      {/* --- MAIN FOOTER LINKS --- */}
      <section className="bg-[#0B0E14] text-gray-400 pt-15 pb-8 px-8">
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