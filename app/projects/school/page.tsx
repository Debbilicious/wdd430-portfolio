import { getProjects } from "@/lib/projects-db";

export default function SchoolProjects() {
  const projects = getProjects("school");

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">School Projects</h2>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.id} className="text-lg">{project.title}</li>
        ))}
      </ul>
    </main>
  );
}