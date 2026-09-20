'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const ProjectFormSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters.'),
  description: z.string().min(20, 'Description must be at least 20 characters.'),
  technologies: z.string().min(2, 'Add at least one technology.'),
});

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    technologies?: string[];
  };
  message?: string | null;
};

export async function createProject(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = ProjectFormSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    technologies: formData.get('technologies'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to create project.',
    };
  }

  const { title, description, technologies } = validatedFields.data;
  const techArray = technologies.split(',').map((t) => t.trim());

  try {
    await sql`
      INSERT INTO projects (title, description, type, technologies)
      VALUES (${title}, ${description}, 'school', ${techArray as any})
    `;
  } catch (error) {
    console.error('Error creating project:', error);
    return { message: 'Database Error: Failed to create project.' };
  }

  revalidatePath('/projects');
  redirect('/projects');
}

export async function updateProject(
  id: string,
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = ProjectFormSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    technologies: formData.get('technologies'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to update project.',
    };
  }

  const { title, description, technologies } = validatedFields.data;
  const techArray = technologies.split(',').map((t) => t.trim());

  try {
    await sql`
      UPDATE projects
      SET title = ${title}, description = ${description}, technologies = ${techArray as any}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error('Error updating project:', error);
    return { message: 'Database Error: Failed to update project.' };
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