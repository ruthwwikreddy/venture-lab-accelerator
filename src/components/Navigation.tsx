import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">VentureX</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">How It Works</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
            <Button>Contact Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">How It Works</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
              <Button className="w-full">Contact Us</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;