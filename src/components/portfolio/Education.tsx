import { GraduationCap } from 'lucide-react';

const education = [
  {
    institution: 'Cape Peninsula University of Technology',
    qualification: 'Diploma in ICT Application Development',
    period: 'Expected 2026',
    note: 'Final Year',
  },
  {
    institution: 'Cape Peninsula University of Technology',
    qualification: 'Higher Certificate in ICT Information and Communication Technology',
    period: '2021',
    note: '',
  },
  {
    institution: 'Murray High School',
    qualification: 'National Senior Certificate',
    period: '2020',
    note: '',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gradient-blue">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap size={18} className="text-secondary-deep" />
          <span className="font-semibold text-sm uppercase tracking-widest text-secondary-deep">Education</span>
        </div>
        <h2 className="font-display text-5xl font-bold text-foreground mb-12">Academic background</h2>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px hidden sm:block bg-secondary-border" />

          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i} className="sm:pl-16 relative">
                <div className="absolute left-3.5 top-5 w-3 h-3 rounded-full border-2 border-background shadow-sm hidden sm:block bg-secondary" />
                <div className="bg-background rounded-3xl p-6 border border-secondary-soft hover:border-secondary hover:shadow-blue transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-foreground text-base">{edu.qualification}</h3>
                      <p className="text-sm font-medium mt-0.5 text-secondary-deep">{edu.institution}</p>
                      {edu.note && (
                        <span className="inline-block mt-2 text-xs border px-2.5 py-0.5 rounded-full font-medium bg-secondary-soft text-secondary-deep border-secondary-border">
                          {edu.note}
                        </span>
                      )}
                    </div>
                    <span className="text-muted-foreground text-sm font-medium whitespace-nowrap">{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
