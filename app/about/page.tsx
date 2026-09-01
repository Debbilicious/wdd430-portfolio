import SkillCard from '@/components/SkillCard';

export default function About() {
  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Git & GitHub',
    'REST APIs',
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700">
        I&apos;m Deborah, a software developer in training from Nigeria, with a background in
        Electrical/Electronics Engineering. I got into coding because I&apos;ve always enjoyed
        figuring out how things work and finding ways to make them work better. What started
        with learning the basics of web development has grown into an interest in building
        complete applications, from the interface people interact with to the logic and data
        behind it. I&apos;m currently developing my full-stack skills through hands-on projects,
        experimenting with new technologies, and learning by actually building things.
      </p>
      <SkillCard skills={skills} />
    </main>
  );
}