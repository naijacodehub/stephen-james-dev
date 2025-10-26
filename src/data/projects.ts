export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  challenges: string;
  solution: string;
  results: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory management and seamless checkout experience.',
    fullDescription: 'Built a full-featured e-commerce platform with React, Redux, and Stripe integration. Features include product filtering, shopping cart, user authentication, and order tracking.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop',
    tags: ['React', 'Redux', 'Tailwind', 'Stripe', 'Node.js'],
    challenges: 'Managing complex state across multiple components and ensuring secure payment processing.',
    solution: 'Implemented Redux for centralized state management and integrated Stripe\'s secure payment API with comprehensive error handling.',
    results: 'Achieved 99.9% uptime, processed 10k+ transactions, and received 4.8/5 user rating.',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team collaboration features.',
    fullDescription: 'Developed a productivity app featuring drag-and-drop task organization, team collaboration, deadline tracking, and real-time notifications using WebSocket technology.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    challenges: 'Implementing real-time synchronization across multiple users and devices.',
    solution: 'Leveraged Firebase Realtime Database for instant updates and implemented optimistic UI updates for smooth user experience.',
    results: 'Improved team productivity by 40% and onboarded 500+ active users.',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Interactive weather application with beautiful visualizations and 7-day forecasts.',
    fullDescription: 'Created a responsive weather dashboard that displays current conditions, hourly forecasts, and weekly trends with interactive charts and location-based services.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop',
    tags: ['React', 'Chart.js', 'OpenWeather API', 'CSS'],
    challenges: 'Handling API rate limits and creating intuitive data visualizations.',
    solution: 'Implemented smart caching strategies and used Chart.js for responsive, animated weather charts.',
    results: '50k+ monthly active users and featured in Product Hunt\'s top weather apps.',
    liveUrl: 'https://example.com'
  },
  {
    id: 'portfolio-generator',
    title: 'Portfolio Generator',
    description: 'SaaS tool that helps developers create stunning portfolio websites in minutes.',
    fullDescription: 'Built a no-code portfolio builder with customizable templates, drag-and-drop editor, and one-click deployment to popular hosting platforms.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop',
    tags: ['React', 'Next.js', 'Tailwind', 'MongoDB'],
    challenges: 'Creating a flexible template system that works for various design preferences.',
    solution: 'Developed a component-based architecture with customizable themes and live preview functionality.',
    results: 'Generated 1,000+ portfolios and achieved $10k MRR within 6 months.',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker',
    description: 'Mobile-first fitness app with workout tracking, progress charts, and goal setting.',
    fullDescription: 'Designed and developed a comprehensive fitness tracking application featuring workout logs, nutrition tracking, progress photos, and personalized goal recommendations.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop',
    tags: ['React', 'PWA', 'IndexedDB', 'Tailwind'],
    challenges: 'Ensuring offline functionality and smooth performance on mobile devices.',
    solution: 'Implemented Progressive Web App features with IndexedDB for offline storage and optimized rendering for mobile.',
    results: '15k+ downloads, 4.7/5 rating, and featured in App Store.',
    liveUrl: 'https://example.com'
  },
  {
    id: 'social-dashboard',
    title: 'Social Media Dashboard',
    description: 'Unified dashboard for managing multiple social media accounts and analytics.',
    fullDescription: 'Created an analytics dashboard that aggregates data from multiple social media platforms, providing insights, scheduling capabilities, and performance metrics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'REST APIs', 'Recharts'],
    challenges: 'Integrating with multiple third-party APIs with different authentication methods.',
    solution: 'Built a unified authentication system and created adapter patterns for different API responses.',
    results: 'Saved clients 10+ hours weekly and increased engagement rates by 35%.',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  }
];
