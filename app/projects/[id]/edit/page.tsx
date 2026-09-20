import { getProjectById } from '@/lib/projects-db';
import { notFound } from 'next/navigation';
import EditProjectForm from './edit-project-form';

export default async function EditProjectPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const project = await getProjectById(Number(id));

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Edit Project</h1>
      <EditProjectForm project={project} />
    </main>
  );
}