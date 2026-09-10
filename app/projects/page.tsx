import { getProjects } from "@/lib/projects-db";

export default function ProjectsOverview() {
  const projects = getProjects();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Projects Overview</h1>
      <p className="text-lg mb-6">
        A collection of projects I&apos;ve built, organized by open source contributions and school coursework.
      </p>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.id} className="text-lg">
            {project.title}
          </li>
        ))}
      </ul>
    </main>
  );
}