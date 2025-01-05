import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Empowering ideas.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {" "}
                Building the future.
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Turn your vision into reality with our MVP development and innovation services. We help startups and entrepreneurs bring their ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
            <img
              src="/placeholder.svg"
              alt="Innovation Illustration"
              className="relative w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;