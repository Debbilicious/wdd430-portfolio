
import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'FlickBite',
    description: 'A web app that pairs a movie genre with a matching cuisine and recipe suggestion, pulling live data from the TMDB and TheMealDB APIs.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Fetch API'],
    link: 'https://debbilicious.github.io/final-project/'
  },
  {
    title: 'Peace Delight Restaurant Website',
    description: 'A multi-page restaurant site with a mobile nav toggle, a light/dark theme switcher, a star-rating feedback form, and a keyboard-navigable image gallery.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'localStorage'],
    link: 'https://debbilicious.github.io/peace-delight-app/'
  },
  {
    title: 'Fashion Boutique Product Catalog',
    description: 'An e-commerce style catalog that loads product data from JSON and supports filtering by category, sorting, search, and a product detail modal.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'JSON', 'Fetch API'],
    link: 'https://debbilicious.github.io/wdd231/finalproject/index.html'
  },
  {
    title: 'Temple Filter & Wind Chill Calculator',
    description: 'A course project featuring a dynamically filterable temple list and a wind chill calculator that applies a real math formula based on user input.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://debbilicious.github.io/wdd131/place.html'
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg">
          I&apos;m a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}