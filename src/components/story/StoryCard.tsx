import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StoryCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
}

export function StoryCard({ icon: Icon, title, content }: StoryCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-colors duration-300">
      <div className="flex items-start space-x-6">
        <div className="w-12 h-12 bg-gradient-to-r from-[#6D5DFB] to-[#FF6EC7] rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-[#CCCCCC] leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}