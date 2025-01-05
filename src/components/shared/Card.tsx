import React from 'react';
import { LucideIcon } from 'lucide-react';

type CardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <div className="group relative bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_30px_rgba(109,93,251,0.15)] overflow-hidden">
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#6D5DFB] to-[#FF6EC7] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      
      {/* Animated background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#6D5DFB] to-[#FF6EC7] rounded-xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 animate-pulse" />

      <div className="relative">
        {/* Icon container with hover effect */}
        <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-r from-[#6D5DFB] to-[#FF6EC7] p-[1px] group-hover:scale-110 transition-transform duration-500">
          <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
            <Icon className="w-6 h-6 text-white transform group-hover:rotate-12 transition-transform duration-500" />
          </div>
        </div>

        {/* Content with hover animations */}
        <h3 className="text-white font-semibold text-xl mb-3 transform group-hover:translate-x-1 transition-transform duration-500">
          {title}
        </h3>
        <p className="text-[#CCCCCC] text-sm leading-relaxed transform group-hover:translate-x-1 transition-transform duration-500 delay-75">
          {description}
        </p>
      </div>
    </div>
  );
}