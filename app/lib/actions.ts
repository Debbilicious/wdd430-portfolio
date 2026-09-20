'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createProject(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const technologies = formData.get('technologies') as string;

  const techArray = technologies.split(',').map((t) => t.trim());

  try {
    await sql`
      INSERT INTO projects (title, description, type, technologies)
      VALUES (${title}, ${description}, 'school', ${techArray})
    `;
  } catch (error) {
    console.error('Error creating project:', error);
    throw new Error('Failed to create project. Please try again later.');
  }

  revalidatePath('/projects');
  redirect('/projects');
}

export async function updateProject(id: string, formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const technologies = formData.get('technologies') as string;

  const techArray = technologies.split(',').map((t) => t.trim());

  try {
    await sql`
      UPDATE projects
      SET title = ${title}, description = ${description}, technologies = ${techArray}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error('Error updating project:', error);
    throw new Error('Failed to update project. Please try again later.');
  }

  revalidatePath('/projects');
  redirect('/projects');
}

export async function deleteProject(id: string) {
  try {
    await sql`DELETE FROM projects WHERE id = ${id}`;
    revalidatePath('/projects');
  } catch (error) {
    console.error('Error deleting project:', error);
    throw new Error('Failed to delete project. Please try again later.');
  }
}