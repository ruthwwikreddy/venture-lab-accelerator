import Navigation from "../components/Navigation";
import { Hero } from "../components/Hero";
import Services from "../components/Services";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
    </div>
  );
};

export default Index;