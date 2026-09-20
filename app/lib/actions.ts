'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createProject(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const technologies = formData.get('technologies') as string;

  const techArray = technologies.split(',').map((t) => t.trim());

  await sql`
    INSERT INTO projects (title, description, type, technologies)
    VALUES (${title}, ${description}, 'school', ${techArray})
  `;

  revalidatePath('/projects');
  redirect('/projects');
}

export async function updateProject(id: string, formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const technologies = formData.get('technologies') as string;

  const techArray = technologies.split(',').map((t) => t.trim());

  await sql`
    UPDATE projects
    SET title = ${title}, description = ${description}, technologies = ${techArray}
    WHERE id = ${id}
  `;

  revalidatePath('/projects');
  redirect('/projects');
}

export async function deleteProject(id: string) {
  await sql`DELETE FROM projects WHERE id = ${id}`;
  revalidatePath('/projects');
}