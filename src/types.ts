export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  featured?: boolean;
  category?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Design' | 'Tools';
  iconName?: string;
}

export interface Lead {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  projectType: string;
  budget?: string;
  message: string;
  deviceInfo?: string;
}

export interface VideoProject {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  pinterestUrl: string;
  tags: string[];
  duration?: string;
  featuredVideoUrl?: string;
}
