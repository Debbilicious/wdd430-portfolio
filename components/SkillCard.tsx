interface SkillCardProps {
  skills: string[];
}

export default function SkillCard({ skills }: SkillCardProps) {
  return (
    <section className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}