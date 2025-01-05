import { Code, Lightbulb, Rocket, Users } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "MVP Development",
    description: "Transform your ideas into functional prototypes quickly and efficiently.",
  },
  {
    icon: Code,
    title: "Product Design",
    description: "Create intuitive and visually appealing products that users love.",
  },
  {
    icon: Users,
    title: "Startup Consulting",
    description: "Get expert guidance on business strategy and product validation.",
  },
  {
    icon: Rocket,
    title: "Innovation Labs",
    description: "Access cutting-edge technology and resources to accelerate growth.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions to help you validate and launch your ideas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all group"
            >
              <service.icon
                size={40}
                className="text-primary mb-4 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;