export enum ProjectCategory {
  BRANDING = 'Brand Identity',
  UIUX = 'UI/UX Design',
  GRAPHIC = 'Graphic Design',
  PACKAGING = 'Packaging',
  EXHIBITION = 'Exhibition Design',
  KEY_VISUAL = 'Key Visual'
}

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle?: string; // New: For "2024 Sustainability Report | ADDA Corporation"
  author?: string;   // New: For "siyu Pan"
  category: ProjectCategory;
  image: string;     // Main thumbnail
  gallery?: string[]; // New: For the image slider/carousel
  description: string;
  date: string;
  size?: 'normal' | 'wide' | 'tall';
  link?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}