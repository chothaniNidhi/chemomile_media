export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
  metrics: string;
  deliverables: string[];
  gradient: string;
  featuredVisual: {
    color: string;
    shape: string;
    label: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  location: string;
  category: 'Brand Identity' | 'Web & 3D' | 'Social & Growth' | 'Performance';
  tagline: string;
  description: string;
  image: string;
  accentColor: string;
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  deliverables: string[];
  year: string;
  link?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  projectType: string;
  highlightMetric: string;
  rating: number;
}

export interface ProcessStepItem {
  number: string;
  title: string;
  phase: string;
  description: string;
  deliverables: string[];
  duration: string;
  icon: string;
}

export interface AdvantageItem {
  title: string;
  subtitle: string;
  description: string;
  statNumber: string;
  statLabel: string;
  icon: string;
  bullets: string[];
}
