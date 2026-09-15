import { getProjects } from "@/lib/projects-db";

export default async function OpenSourceProjects() {
  const projects = await getProjects("opensource");

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Open Source Projects</h2>
      {projects.length === 0 ? (
        <p className="text-lg">No open source projects yet — check back soon!</p>
      ) : (
        <ul className="space-y-2">
          {projects.map((project) => (
            <li key={project.id} className="text-lg">{project.title}</li>
          ))}
        </ul>
      )}
    </main>
  );
}