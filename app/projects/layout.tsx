import Link from 'next/link';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <nav className="max-w-4xl mx-auto px-4 pt-8 flex gap-4 text-blue-700">
        <Link href="/projects" className="hover:underline">Overview</Link>
        <Link href="/projects/opensource" className="hover:underline">Open Source</Link>
        <Link href="/projects/school" className="hover:underline">School</Link>
      </nav>
      {children}
    </section>
  );
}