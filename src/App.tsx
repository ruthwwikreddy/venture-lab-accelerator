import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingNav } from './components/FloatingNav';
import { Hero } from './components/Hero';
import { AboutUs } from './pages/AboutUs';
import { Story } from './pages/Story';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about-us">
          <AboutUs />
        </div>
        <div id="our-story">
          <Story />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
      <FloatingNav />
    </div>
  );
}