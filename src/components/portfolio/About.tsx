import { Sparkles } from 'lucide-react';

const stack = [
  { label: 'Languages', value: 'Python, Java, JS' },
  { label: 'Frameworks', value: 'React, Node.js, Vue.js' },
  { label: 'Tools', value: 'GitLab, GitHub, Postman' },
  { label: 'Databases', value: 'MySQL, Derby' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles size={18} className="text-primary-deep" />
          <span className="font-semibold text-sm uppercase tracking-widest text-primary-deep">About me</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-5xl font-bold text-foreground mb-6 leading-tight">
              Crafting digital solutions with{' '}
              <span className="text-primary-deep italic">purpose</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Motivated and detail-oriented ICT Application Development student with a solid
              foundation in IT fundamentals. Skilled in software and web development, with a
              keen interest in applying digital solutions to real-world challenges.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Passionate about building innovative, data-driven, and automated solutions.
              Seeking workplace experience and career opportunities to grow within the IT field.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stack.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-5 border border-border bg-primary-softer transition-colors hover:border-primary"
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-1 text-primary-deep">{item.label}</p>
                <p className="text-foreground font-medium text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
