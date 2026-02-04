import { PortfolioItem, ProjectCategory } from './types';

const PROJECT_URL = 'https://www.behance.net/pansiyu';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '2025-01',
    title: '永續報告書設計 2025',
    subtitle: '2024 Sustainability Report | BIN CHUAN',
    author: 'siyu Pan',
    category: ProjectCategory.GRAPHIC,
    image: 'https://i.postimg.cc/YS6N4L3C/Perfect-Binding-Brochure-Mockup-4.jpg',
    gallery: [
      'https://i.postimg.cc/YS6N4L3C/Perfect-Binding-Brochure-Mockup-4.jpg',
      'https://i.postimg.cc/nL4Ks9kH/Perfect-Binding-Brochure-Mockup-5.jpg',
      'https://i.postimg.cc/436vKH5X/A.jpg',
      'https://i.postimg.cc/jjH6WnXV/C.jpg'
    ],
    description: `設計以「塑膠重塑」為核心意象。將剛硬的永續數據，轉化為流動、充滿生命力的有機形態。`,
    date: '2025',
    size: 'wide',
    link: PROJECT_URL
  },
  {
    id: '2025-02',
    title: '永續報告書設計 2025',
    subtitle: '2024 Sustainability Report | KFS',
    category: ProjectCategory.GRAPHIC,
    image: 'https://i.postimg.cc/25qcFvR4/Perfect-Binding-Brochure-Mockup-4.jpg',
    gallery: [
      'https://i.postimg.cc/25qcFvR4/Perfect-Binding-Brochure-Mockup-4.jpg',
      'https://i.postimg.cc/brsq5bVp/Perfect-Binding-Brochure-Mockup-5.jpg'
    ],
    description: `設計核心是「科技與自然的共生」。採用了從科技藍到自然綠的漸層色調。`,
    date: '2025',
    size: 'normal',
    link: PROJECT_URL
  },
  {
    id: '2025-03',
    title: '永續報告書設計 2025',
    subtitle: '2024 Sustainability Report | ADDA',
    category: ProjectCategory.GRAPHIC,
    image: 'https://i.postimg.cc/YqgXg4jR/adda-mockup-cover-jpg.jpg',
    gallery: [
      'https://i.postimg.cc/YqgXg4jR/adda-mockup-cover-jpg.jpg',
      'https://i.postimg.cc/wjpwk6sV/main-cover-jpg.jpg'
    ],
    description: `以數位藍與電路紋理為基底，結合綠能意象傳達企業願景。`,
    date: '2025',
    size: 'normal',
    link: PROJECT_URL
  },
  {
    id: '2025-04',
    title: 'Neo-Bank Interface',
    category: ProjectCategory.UIUX,
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2000&auto=format&fit=crop',
    description: 'Redefining digital banking with a focus on dark mode aesthetics.',
    date: '2024',
    size: 'wide',
    link: PROJECT_URL
  },
  {
    id: '2025-05',
    title: 'Spatial Resonance',
    category: ProjectCategory.EXHIBITION,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2400&auto=format&fit=crop',
    description: 'Immersive light installation for a digital art gallery.',
    date: '2024',
    size: 'normal',
    link: PROJECT_URL
  },
  {
    id: '2025-06',
    title: 'Eco-Minimalist Pack',
    category: ProjectCategory.PACKAGING,
    image: 'https://images.unsplash.com/photo-1544253328-912a75870a04?q=80&w=2000&auto=format&fit=crop',
    description: 'Biodegradable packaging design for organic products.',
    date: '2024',
    size: 'normal',
    link: PROJECT_URL
  },
  {
    id: '2025-07',
    title: 'Futurism 2025',
    category: ProjectCategory.KEY_VISUAL,
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2500&auto=format&fit=crop',
    description: 'Key visual design for an upcoming tech summit.',
    date: '2025',
    size: 'wide',
    link: PROJECT_URL
  },
  {
    id: '2025-08',
    title: 'Portfolio Engine',
    category: ProjectCategory.UIUX,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1500&auto=format&fit=crop',
    description: 'Advanced portfolio management system for creators.',
    date: '2025',
    size: 'normal',
    link: PROJECT_URL
  },
  {
    id: '2025-09',
    title: 'Kinetic Waves',
    category: ProjectCategory.UIUX,
    image: 'https://images.unsplash.com/photo-1558478551-1a378f63328e?q=80&w=2000&auto=format&fit=crop',
    description: 'Motion graphic experiments exploring fluid dynamics.',
    date: '2024',
    size: 'normal',
    link: PROJECT_URL
  },
  {
    id: '2025-10',
    title: 'Monograph Series',
    category: ProjectCategory.GRAPHIC,
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1500&auto=format&fit=crop',
    description: 'A collection of printed monographs on minimalist architecture.',
    date: '2024',
    size: 'wide',
    link: PROJECT_URL
  },
  {
    id: '2025-11',
    title: 'Aura Identity',
    category: ProjectCategory.BRANDING,
    image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?q=80&w=1500&auto=format&fit=crop',
    description: 'Visual identity for a wellness brand focused on holistic health.',
    date: '2024',
    size: 'normal',
    link: PROJECT_URL
  },
  {
    id: '2025-12',
    title: 'Abstract Form',
    category: ProjectCategory.GRAPHIC,
    image: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1500&auto=format&fit=crop',
    description: 'Exploration of geometric abstraction in poster design.',
    date: '2025',
    size: 'normal',
    link: PROJECT_URL
  }
];

export const NAV_LINKS = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Connect', href: '#contact' },
];

export const CONTACT_INFO = {
  email: 'ms0383023@gmail.com',
  behance: 'behance.net/pansiyu',
  instagram: 'instagram.com/pansiyu',
  location: 'Taiwan'
};