import React from 'react';
import { PageContainer } from '../components/shared/PageContainer';
import { StorySection } from '../components/story/StorySection';
import { ImpactSection } from '../components/story/ImpactSection';

export function Story() {
  return (
    <PageContainer>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h1>
        <p className="text-[#CCCCCC] text-lg max-w-3xl mx-auto">
          From a simple observation to a platform that empowers innovation—discover how VentureX came to be and where we're headed.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <StorySection />
        <ImpactSection />
      </div>
    </PageContainer>
  );
}