export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  images?: string[];
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  projects: Project[];
}

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'; // Optional, not used in display
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export interface ToastOptions {
  success: string;
  error: string;
  loading: string;
}
