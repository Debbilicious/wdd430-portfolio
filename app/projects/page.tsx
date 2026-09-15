import { fetchFilteredProjects, fetchProjectsPages } from "@/lib/projects-db";
import ProjectSearch from "@/components/ProjectSearch";
import Pagination from "@/components/Pagination";

export const dynamic = 'force-dynamic';

export default async function ProjectsOverview(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const projects = await fetchFilteredProjects(query, currentPage);
  const totalPages = await fetchProjectsPages(query);

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Projects Overview</h1>
      <p className="text-lg mb-6">
        A collection of projects I&apos;ve built, organized by open source contributions and school coursework.
      </p>
      <ProjectSearch />
      {projects.length === 0 ? (
        <p className="text-lg">No projects found.</p>
      ) : (
        <ul className="space-y-2">
          {projects.map((project) => (
            <li key={project.id} className="text-lg">
              {project.title}
            </li>
          ))}
        </ul>
      )}
      <Pagination totalPages={totalPages} />
    </main>
  );
}