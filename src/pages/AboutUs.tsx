import React from 'react';
import { PageContainer } from '../components/shared/PageContainer';
import { Card } from '../components/shared/Card';
import { Target, Heart, Zap, Code, Lightbulb, Rocket } from 'lucide-react';

export function AboutUs() {
  return (
    <PageContainer>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About VentureX</h1>
        <p className="text-[#CCCCCC] text-lg max-w-3xl mx-auto">
          At VentureX, we believe in the power of creativity, innovation, and foundation to drive the future. We empower businesses with the tools they need to validate and scale their products effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card
          icon={Target}
          title="Our Mission"
          description="To be the foundation where creativity meets innovation, empowering businesses to bring their ideas to life."
        />
        <Card
          icon={Heart}
          title="Our Values"
          description="Creativity, innovation, collaboration, and empowerment drive everything we do."
        />
        <Card
          icon={Zap}
          title="Our Impact"
          description="Helping startups and entrepreneurs validate and scale their products effectively."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">What We Do</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <Code className="w-6 h-6 text-[#6D5DFB] mt-1" />
              <div>
                <h3 className="text-white font-semibold">MVP Development</h3>
                <p className="text-[#CCCCCC]">Design and build tailored MVPs for quick launch and testing</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Lightbulb className="w-6 h-6 text-[#6D5DFB] mt-1" />
              <div>
                <h3 className="text-white font-semibold">Innovation Labs</h3>
                <p className="text-[#CCCCCC]">Workshops, hackathons, and mentorship programs</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Rocket className="w-6 h-6 text-[#6D5DFB] mt-1" />
              <div>
                <h3 className="text-white font-semibold">Startup Consulting</h3>
                <p className="text-[#CCCCCC]">Guide entrepreneurs through product development and scaling</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">What We're Doing Now</h2>
          <ul className="space-y-4 text-[#CCCCCC]">
            <li className="flex items-start space-x-2">
              <span className="text-[#6D5DFB]">•</span>
              <span>Building connections with startups, mentors, and investors</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#6D5DFB]">•</span>
              <span>Developing innovative MVPs across various industries</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#6D5DFB]">•</span>
              <span>Fostering innovation through community engagement</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#6D5DFB]">•</span>
              <span>Driving creativity through workshops and hackathons</span>
            </li>
          </ul>
        </div>
      </div>
    </PageContainer>
  );
}