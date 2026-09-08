async function getSchoolProjects() {
  const res = await fetch('http://localhost:3000/api/projects?type=school', { cache: 'no-store' });
  const data = await res.json();
  return data.projects;
}

export default async function SchoolProjects() {
  const projects = await getSchoolProjects();

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">School Projects</h2>
      <ul className="space-y-2">
        {projects.map((project: { id: number; title: string }) => (
          <li key={project.id} className="text-lg">{project.title}</li>
        ))}
      </ul>
    </main>
  );
}