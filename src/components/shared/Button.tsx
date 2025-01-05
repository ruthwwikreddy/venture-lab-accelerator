import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function Button({ variant = 'primary', children, className = '', onClick }: ButtonProps) {
  const baseStyles = "relative px-8 py-3 rounded-full font-medium transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#6D5DFB] focus:ring-offset-2 focus:ring-offset-black";
  
  const variants = {
    primary: `
      bg-gradient-to-r from-[#6D5DFB] to-[#FF6EC7] text-white
      hover:shadow-[0_0_30px_rgba(109,93,251,0.3)]
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#FF6EC7] before:to-[#6D5DFB]
      before:rounded-full before:opacity-0 before:transition-opacity before:duration-500
      hover:before:opacity-100 before:-z-10
    `,
    secondary: `
      text-white border-2 border-transparent bg-white/10 backdrop-blur-lg
      hover:bg-white/20
      before:absolute before:inset-0 before:rounded-full before:-z-10
      before:bg-gradient-to-r before:from-[#6D5DFB] before:to-[#FF6EC7]
      before:opacity-0 before:transition-opacity before:duration-500
      hover:before:opacity-10
    `
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}