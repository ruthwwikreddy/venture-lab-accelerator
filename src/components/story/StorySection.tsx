import React from 'react';
import { StoryCard } from './StoryCard';
import { Lightbulb, Target, Rocket } from 'lucide-react';

export function StorySection() {
  return (
    <div className="space-y-12">
      <StoryCard
        icon={Lightbulb}
        title="The Problem"
        content="Young entrepreneurs and innovators had brilliant ideas but lacked resources to bring them to life. Many great ideas remained untested, never reaching their true potential due to high costs and uncertainty about product viability."
      />
      
      <StoryCard
        icon={Target}
        title="The Spark"
        content="What if we could create a space where people could bring their ideas to life without worrying about high costs and long timelines? This spark led to VentureX—a platform focused on building MVPs to help startups test ideas quickly and efficiently."
      />
      
      <StoryCard
        icon={Rocket}
        title="The Solution"
        content="VentureX was born to provide creative solutions for innovators of all ages. We focus on delivering MVPs that showcase the core of any idea, allowing users to test, iterate, and improve while saving time and money."
      />
    </div>
  );
}