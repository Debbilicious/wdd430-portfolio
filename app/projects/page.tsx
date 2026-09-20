import Link from "next/link";
import { fetchFilteredProjects, fetchProjectsPages } from "@/lib/projects-db";
import ProjectSearch from "@/components/ProjectSearch";
import Pagination from "@/components/Pagination";
import { deleteProject } from "@/app/lib/actions";

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
        <ul className="space-y-4">
          {projects.map((project) => (
            <li key={project.id} className="border border-gray-200 rounded p-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{project.title}</span>
                <div className="flex gap-3">
                  <Link
                    href={`/projects/${project.id}/edit`}
                    className="text-blue-700 hover:underline"
                  >
                    Edit
                  </Link>
                  <form action={deleteProject.bind(null, String(project.id))}>
                    <button type="submit" className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Pagination totalPages={totalPages} />
      <Link
        href="/projects/create"
        className="inline-block mt-6 bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
      >
        Add New Project
      </Link>
    </main>
  );
}