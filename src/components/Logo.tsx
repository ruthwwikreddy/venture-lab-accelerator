import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center space-x-3 group">
      <div className="relative w-12 h-12 transform group-hover:scale-110 transition-transform duration-500">
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6D5DFB] to-[#FF6EC7] rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500" />
        
        <svg
          viewBox="0 0 1000 1000"
          className="relative w-full h-full transform transition-transform duration-500"
        >
          {/* First part of the X */}
          <path
            d="M300 200 L700 200 L500 600"
            fill="#003B7A"
            className="drop-shadow-lg transform origin-center transition-transform duration-500 group-hover:scale-105"
          />
          {/* Second part of the X */}
          <path
            d="M500 600 L700 200 L900 600"
            fill="#FFA500"
            className="drop-shadow-lg transform origin-center transition-transform duration-500 group-hover:scale-105"
          />
        </svg>
      </div>
      <span className="text-white font-bold text-xl tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6D5DFB] group-hover:to-[#FF6EC7] transition-all duration-500">
        VentureX
      </span>
    </div>
  );
}