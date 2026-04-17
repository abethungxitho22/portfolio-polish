import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Plum Systems',
    role: 'Software Development Intern',
    period: '2025',
    highlights: [
      'Worked in developers team handling and resolving API related issues to ensure system integrations.',
      'Built and supported web applications using JavaScript and frameworks such as React and Node.js.',
      'Supported software delivery processes through testing.',
      'Collaborated with developers to improve system performance and automation workflows using GitLab.',
      'Applied Agile practices to deliver iterative solutions.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-warm">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <Briefcase size={18} className="text-primary-deep" />
          <span className="font-semibold text-sm uppercase tracking-widest text-primary-deep">Experience</span>
        </div>
        <h2 className="font-display text-5xl font-bold text-foreground mb-12">Where I've worked</h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-background rounded-3xl p-8 border border-border shadow-soft hover:shadow-rose hover:border-primary transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{exp.role}</h3>
                  <p className="font-semibold mt-0.5 text-primary-deep">{exp.company}</p>
                </div>
                <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full self-start sm:self-center bg-primary-soft text-primary-deep">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-secondary" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
