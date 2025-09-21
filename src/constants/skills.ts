import {
  SiPython,
  SiMysql,
  SiMongodb,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGooglecloud,
  SiFigma,
  SiTypescript,
  SiGithub
} from 'react-icons/si';
import { Brain } from 'lucide-react';
import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    category: "Programming & Backend",
    items: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript }
    ]
  },
  {
    category: "Frontend & Frameworks",
    items: [
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ]
  },
  {
    category: "Database & Cloud",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Google Cloud Platform", icon: SiGooglecloud }
    ]
  },
  {
    category: "Tools & Design",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
      { name: "AI Tools", icon: Brain }
    ]
  }
];
