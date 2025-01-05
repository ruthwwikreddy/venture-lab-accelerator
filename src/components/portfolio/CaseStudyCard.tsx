import React from 'react';
import { Button } from '../shared/Button';

interface CaseStudyCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  onClick: () => void;
}

export function CaseStudyCard({ title, description, image, category, onClick }: CaseStudyCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-[#6D5DFB] text-white text-sm px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-white font-semibold text-xl mb-2">{title}</h3>
        <p className="text-[#CCCCCC] text-sm mb-4">{description}</p>
        <Button variant="secondary" className="w-full" onClick={onClick}>
          View Case Study
        </Button>
      </div>
    </div>
  );
}