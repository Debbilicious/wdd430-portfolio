'use client';

import { useActionState } from 'react';
import { updateProject, type State } from '@/app/lib/actions';
import { Project } from '@/lib/projects-db';

const initialState: State = { message: null, errors: {} };

export default function EditProjectForm({ project }: { project: Project }) {
  const updateProjectWithId = updateProject.bind(null, String(project.id));
  const [state, formAction, isPending] = useActionState(updateProjectWithId, initialState);

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="title" className="block mb-1 font-medium">Title</label>
        <input
          id="title"
          name="title"
          required
          defaultValue={project.title}
          aria-describedby="title-error"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <div id="title-error" aria-live="polite" aria-atomic="true">
          {state.errors?.title?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">{error}</p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block mb-1 font-medium">Description</label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          defaultValue={project.description}
          aria-describedby="description-error"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <div id="description-error" aria-live="polite" aria-atomic="true">
          {state.errors?.description?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">{error}</p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="technologies" className="block mb-1 font-medium">
          Technologies (comma-separated)
        </label>
        <input
          id="technologies"
          name="technologies"
          required
          defaultValue={project.technologies.join(', ')}
          aria-describedby="technologies-error"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <div id="technologies-error" aria-live="polite" aria-atomic="true">
          {state.errors?.technologies?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">{error}</p>
          ))}
        </div>
      </div>

      {state.message ? <p className="text-sm text-red-600">{state.message}</p> : null}

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? 'Updating...' : 'Update Project'}
      </button>
    </form>
  );
}