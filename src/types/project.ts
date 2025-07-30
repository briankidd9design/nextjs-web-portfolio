export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  category: "frontend" | "fullstack" | "ux" | "enterprise";
  featured: boolean;
  year: number;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}

export interface ProjectCardProps {
  project: Project;
  isSelected: boolean;
  onClick: (project: Project) => void;
}

export interface ProjectPreviewProps {
  project: Project;
}

export interface TechStackProps {
  technologies: string[];
  limit?: number;
}
