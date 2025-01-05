import React from 'react';

interface NavigationItemProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

export function NavigationItem({ href, children, isActive }: NavigationItemProps) {
  return (
    <a
      href={href}
      className={`
        relative px-4 py-2 text-sm font-medium rounded-lg
        transition-all duration-300
        before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r
        before:from-[#6D5DFB] before:to-[#FF6EC7] before:opacity-0
        before:transition-opacity before:duration-300 hover:before:opacity-10
        ${isActive 
          ? 'text-white bg-white/10 before:opacity-20' 
          : 'text-white/70 hover:text-white'
        }
      `}
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
}