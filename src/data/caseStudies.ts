export const caseStudies = [
  {
    id: 'medilink',
    title: 'MediLink Healthcare Platform',
    description: 'Revolutionizing healthcare management through innovative MVP development',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    category: 'Healthcare',
    overview: 'MediLink sought to streamline healthcare access, enhance patient safety, and optimize resource utilization through an innovative healthcare management platform.',
    challenge: [
      'Fragmented healthcare data across multiple systems',
      'Inefficient appointment scheduling processes',
      'Lack of integration across healthcare platforms',
      'Need for rapid validation of core features',
      'Budget constraints while maintaining quality'
    ],
    solution: [
      'Developed core features: patient registration, appointment scheduling, and doctor availability',
      'Created intuitive interface for both healthcare providers and patients',
      'Integrated cloud-based systems for handling patient records',
      'Implemented secure communication tools for doctor-patient interaction',
      'Launched MVP to a limited group for testing and feedback'
    ],
    results: [
      'Successfully validated key platform features',
      'Gathered valuable user feedback for optimization',
      'Achieved significant cost savings through MVP approach',
      'Secured additional funding from investors',
      'High engagement rates from both providers and patients'
    ],
    impact: 'The collaboration with VentureX enabled MediLink to transform their innovative healthcare solution from concept to reality. Through our MVP development approach, they validated their idea, optimized their product based on real user feedback, and set a strong foundation for future growth.'
  },
  {
    id: 'edutech',
    title: 'EduTech Platform',
    description: 'A learning management system built for high school students',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
    category: 'Education',
    overview: 'An innovative learning management system designed to enhance the educational experience for high school students.',
    challenge: [
      'Fragmented learning resources',
      'Limited student engagement',
      'Need for personalized learning paths'
    ],
    solution: [
      'Centralized learning platform',
      'Interactive content delivery',
      'Progress tracking system'
    ],
    results: [
      'Increased student engagement',
      'Improved learning outcomes',
      'Positive teacher feedback'
    ],
    impact: 'Transformed the learning experience for thousands of students, making education more accessible and engaging.'
  },
  {
    id: 'eco-tracker',
    title: 'Eco Tracker',
    description: 'Mobile app for tracking personal carbon footprint',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    category: 'Environmental',
    overview: 'A mobile application helping users track and reduce their carbon footprint.',
    challenge: [
      'Complex carbon calculations',
      'User engagement',
      'Data accuracy'
    ],
    solution: [
      'Simplified tracking interface',
      'Gamification elements',
      'Real-time impact visualization'
    ],
    results: [
      'High user retention',
      'Measurable environmental impact',
      'Strong community growth'
    ],
    impact: 'Helped users reduce their carbon footprint while building environmental awareness.'
  }
] as const;