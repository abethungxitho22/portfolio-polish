import { FolderGit2, ArrowUpRight, Github, MessageCircle } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  accent: 'pink' | 'blue';
  link?: string;
  repo?: string;
  demoLabel?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: 'AI Chatbot',
    description:
      'A conversational AI chatbot I built that handles natural language queries and delivers helpful, context-aware responses. Try the live demo to chat with it yourself.',
    tags: ['AI', 'Chatbot', 'Web'],
    accent: 'pink',
    link: '#', // TODO: replace with your hosted chatbot URL
    demoLabel: 'Try live demo',
    featured: true,
  },
  {
    title: 'API Integrations Dashboard',
    description:
      'Internal tool built during my Plum Systems internship to monitor and resolve API related issues across services. Streamlined developer workflows with a clean React UI.',
    tags: ['React', 'Node.js', 'REST APIs', 'GitLab'],
    accent: 'blue',
  },
  {
    title: 'Student Records System',
    description:
      'Java-based desktop application for managing student academic records, with full CRUD, role-based access, and reporting backed by a Derby database.',
    tags: ['Java', 'Derby DB', 'JavaFX'],
    accent: 'pink',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A responsive, modern portfolio (this site!) built with React, TypeScript and Tailwind CSS. Designed mobile-first with a soft, editorial aesthetic.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    accent: 'blue',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-blue">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <FolderGit2 size={18} className="text-secondary-deep" />
          <span className="font-semibold text-sm uppercase tracking-widest text-secondary-deep">Projects</span>
        </div>
        <h2 className="font-display text-5xl font-bold text-foreground mb-4 leading-tight">
          A few things I've{' '}
          <span className="text-secondary-deep italic">built</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          A selection of recent work — from internship deliverables to personal explorations.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => {
            const isPink = p.accent === 'pink';
            const Icon = p.featured ? MessageCircle : FolderGit2;
            return (
              <article
                key={p.title}
                className={`group relative rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                  p.featured
                    ? 'bg-primary-softer border-primary shadow-rose md:col-span-2'
                    : 'bg-background border-border hover:shadow-rose'
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 bg-primary-deep text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-soft">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                    Featured · Live demo
                  </span>
                )}

                <div className="flex items-start justify-between gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isPink ? 'bg-primary-soft' : 'bg-secondary-soft'
                    }`}
                  >
                    <Icon
                      size={20}
                      className={isPink ? 'text-primary-deep' : 'text-secondary-deep'}
                    />
                  </div>
                  {!p.featured && (
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground"
                          aria-label="Repository"
                        >
                          <Github size={14} />
                        </a>
                      )}
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground"
                          aria-label="Live site"
                        >
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {p.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-xs font-medium px-3 py-1 rounded-full border ${
                        isPink
                          ? 'bg-primary-softer border-border text-primary-deep'
                          : 'bg-secondary-softer border-secondary-border text-secondary-deep'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.featured && p.link && (
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-deep text-primary-foreground text-sm font-semibold shadow-rose hover:opacity-90 hover:-translate-y-0.5 transition-all"
                    >
                      <MessageCircle size={16} />
                      {p.demoLabel ?? 'Try live demo'}
                      <ArrowUpRight size={14} />
                    </a>
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-foreground text-sm font-semibold hover:border-primary-deep transition-all"
                      >
                        <Github size={16} />
                        View code
                      </a>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground mt-6 text-center md:text-left">
          Tip for Abethu: open <code className="px-1.5 py-0.5 rounded bg-background border border-border text-foreground/80">src/components/portfolio/Projects.tsx</code> and replace the chatbot{' '}
          <code className="px-1.5 py-0.5 rounded bg-background border border-border text-foreground/80">link</code> with your real demo URL.
        </p>
      </div>
    </section>
  );
}
