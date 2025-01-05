import React from 'react';
import { Code, Users, CreditCard } from 'lucide-react';

export function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black pt-20">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Center Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6D5DFB] rounded-full opacity-10 blur-[100px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-32 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Affordable MVPs for Teens<br />with Big Dreams
        </h1>
        
        <p className="text-[#CCCCCC] text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Transforming big problems into impactful solutions for teens with incredible potential
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="bg-gradient-to-r from-[#6D5DFB] to-[#FF6EC7] text-white px-8 py-3 rounded-full hover:shadow-[0_0_30px_rgba(109,93,251,0.5)] transition-all duration-300">
            Get Your MVP Now
          </button>
          <button className="px-8 py-3 rounded-full text-white border-2 border-transparent bg-gradient-to-r from-[#6D5DFB] to-[#FF6EC7] hover:text-white [background-clip:padding-box] relative after:absolute after:inset-0 after:p-[2px] after:rounded-full after:bg-gradient-to-r after:from-[#6D5DFB] after:to-[#FF6EC7] after:-z-10 after:[mask-composite:exclude] hover:after:opacity-0 transition-all duration-300">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Code, title: 'Custom MVPs', desc: 'Tailored solutions for your unique vision' },
            { icon: Users, title: 'Teen Focused Solutions', desc: 'Built by teens, for teens' },
            { icon: CreditCard, title: 'Affordable Pricing', desc: 'Budget-friendly development' }
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-black/40 backdrop-blur-lg rounded-xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300 border border-white/10">
              <div className="w-12 h-12 mb-4 mx-auto bg-gradient-to-r from-[#6D5DFB] to-[#FF6EC7] rounded-lg flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-[#CCCCCC] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}