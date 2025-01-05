import { useState } from 'react';
import { CaseStudyCard } from '../components/portfolio/CaseStudyCard';
import { CaseStudyModal } from '../components/portfolio/CaseStudyModal';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  overview: string;
  challenge: string[];
  solution: string[];
  results: string[];
  impact: string;
}

export default function Portfolio() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: "medilink",
      title: "MediLink Healthcare Platform",
      description: "Revolutionizing healthcare management through innovative MVP development",
      image: "/placeholder.svg",
      category: "Healthcare",
      overview: "MediLink aimed to create a unified healthcare management platform...",
      challenge: [
        "Fragmented healthcare data across multiple systems",
        "Inefficient appointment scheduling processes",
        "Lack of integration across healthcare platforms",
        "Need for rapid validation of core features",
        "Budget constraints while maintaining quality"
      ],
      solution: [
        "Developed a centralized data management system",
        "Implemented an intuitive scheduling interface",
        "Created API integrations for third-party services",
        "Built core features for MVP launch",
        "Optimized development process for cost-efficiency"
      ],
      results: [
        "50% reduction in scheduling time",
        "90% user satisfaction rate",
        "Successful integration with 5 major healthcare providers",
        "MVP launched within 3 months",
        "Secured additional funding based on MVP success"
      ],
      impact: "The collaboration with VentureX enabled MediLink to transform their innovative healthcare solution from concept to reality..."
    }
    // Additional case studies can be added here
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover how we've helped startups bring their ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              title={study.title}
              description={study.description}
              image={study.image}
              category={study.category}
              onClick={() => setSelectedCaseStudy(study)}
            />
          ))}
        </div>

        {selectedCaseStudy && (
          <CaseStudyModal
            isOpen={!!selectedCaseStudy}
            onClose={() => setSelectedCaseStudy(null)}
            caseStudy={selectedCaseStudy}
          />
        )}
      </div>
    </section>
  );
}
