import { Code2 } from 'lucide-react';

const skillGroups = [
  { category: 'Programming Languages', skills: ['Python', 'Java', 'JavaScript'] },
  { category: 'Web Development', skills: ['React', 'Node.js', 'Vue.js', 'HTML', 'CSS', 'PHP'] },
  { category: 'Backend & APIs', skills: ['RESTful API Design', 'API Integration', 'Node.js'] },
  { category: 'Tools & Platforms', skills: ['GitLab', 'GitHub', 'Postman'] },
  { category: 'Databases', skills: ['MySQL', 'Derby DB'] },
  { category: 'Soft Skills', skills: ['Team Collaboration', 'Communication', 'Problem Solving', 'Agile / Scrum'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <Code2 size={18} className="text-secondary-deep" />
          <span className="font-semibold text-sm uppercase tracking-widest text-secondary-deep">Skills</span>
        </div>
        <h2 className="font-display text-5xl font-bold text-foreground mb-12">What I bring to the table</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-3xl border border-secondary-soft p-6 bg-background hover:border-secondary hover:shadow-blue transition-all duration-300"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-secondary-deep">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-foreground/80 text-xs font-medium px-3 py-1.5 rounded-full border border-secondary-border bg-secondary-softer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
