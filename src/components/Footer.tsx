import React from 'react';
import { Logo } from './Logo';
import { navItems } from '../config/navigation';

export function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Logo />
            <p className="text-white/70 text-sm">
              Empowering teen entrepreneurs with affordable tech solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/70 hover:text-white text-sm transition-colors duration-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>contact@venturex.com</li>
              <li>Discord: VentureX</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/70 text-sm">
          © {new Date().getFullYear()} VentureX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}