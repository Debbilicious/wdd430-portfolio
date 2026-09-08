async function getOpenSourceProjects() {
  const res = await fetch('http://localhost:3000/api/projects?type=opensource', { cache: 'no-store' });
  const data = await res.json();
  return data.projects;
}

export default async function OpenSourceProjects() {
  const projects = await getOpenSourceProjects();

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Open Source Projects</h2>
      {projects.length === 0 ? (
        <p className="text-lg">No open source projects yet — check back soon!</p>
      ) : (
        <ul className="space-y-2">
          {projects.map((project: { id: number; title: string }) => (
            <li key={project.id} className="text-lg">{project.title}</li>
          ))}
        </ul>
      )}
    </main>
  );
}