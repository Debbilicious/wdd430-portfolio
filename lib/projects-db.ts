export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'FlickBite',
    description: 'A web app that pairs a movie genre with a matching cuisine and recipe suggestion, pulling live data from the TMDB and TheMealDB APIs.',
    type: 'school',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Fetch API'],
    link: 'https://debbilicious.github.io/final-project/'
  },
  {
    id: 2,
    title: 'Peace Delight Restaurant Website',
    description: 'A multi-page restaurant site with a mobile nav toggle, a light/dark theme switcher, a star-rating feedback form, and a keyboard-navigable image gallery.',
    type: 'school',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'localStorage'],
    link: 'https://debbilicious.github.io/peace-delight-app/'
  },
  {
    id: 3,
    title: 'Fashion Boutique Product Catalog',
    description: 'An e-commerce style catalog that loads product data from JSON and supports filtering by category, sorting, search, and a product detail modal.',
    type: 'school',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'JSON', 'Fetch API'],
    link: 'https://debbilicious.github.io/wdd231/finalproject/index.html'
  },
  {
    id: 4,
    title: 'Temple Filter & Wind Chill Calculator',
    description: 'A course project featuring a dynamically filterable temple list and a wind chill calculator that applies a real math formula based on user input.',
    type: 'school',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://debbilicious.github.io/wdd131/place.html'
  }
];

export function getProjects(type?: string | null): Project[] {
  if (type) return projects.filter(p => p.type === type);
  return projects;
}

export function getProjectById(id: number): Project | null {
  return projects.find(p => p.id === id) ?? null;
}