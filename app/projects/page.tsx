async function getAllProjects() {
  const res = await fetch('http://localhost:3000/api/projects', { cache: 'no-store' });
  const data = await res.json();
  return data.projects;
}

export default async function ProjectsOverview() {
  const projects = await getAllProjects();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Projects Overview</h1>
      <p className="text-lg mb-6">
        A collection of projects I&apos;ve built, organized by open source contributions and school coursework.
      </p>
      <ul className="space-y-2">
        {projects.map((project: { id: number; title: string }) => (
          <li key={project.id} className="text-lg">
            {project.title}
          </li>
        ))}
      </ul>
    </main>
  );
}