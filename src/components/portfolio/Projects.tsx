import { FolderGit2, ArrowUpRight, Github, MessageCircle, PenLine, Smile } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  accent: 'pink' | 'blue';
  icon?: 'chat' | 'pen' | 'smile';
  link?: string;
  repo?: string;
  demoLabel?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: 'AI Chatbot',
    description:
      'A conversational AI chatbot I built that handles natural language queries and delivers helpful, context-aware responses. Try the live demo on this site — bottom-right corner.',
    tags: ['AI', 'Chatbot', 'Web'],
    accent: 'pink',
    icon: 'chat',
    link: '#',
    demoLabel: 'Try live demo',
    featured: true,
  },
  {
    title: 'Content Generator',
    description:
      'An AI-powered tool that turns short prompts into polished written content — articles, captions, and marketing copy — in seconds.',
    tags: ['AI', 'NLP', 'Web'],
    accent: 'pink',
    icon: 'pen',
  },
  {
    title: 'Sentiment Analysis',
    description:
      'An NLP project that analyses text such as reviews, tweets, and feedback, and classifies the underlying sentiment as positive, negative, or neutral.',
    tags: ['NLP', 'Python', 'ML'],
    accent: 'blue',
    icon: 'smile',
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

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => {
            const isPink = p.accent === 'pink';
            const Icon =
              p.icon === 'chat' ? MessageCircle :
              p.icon === 'pen' ? PenLine :
              p.icon === 'smile' ? Smile :
              FolderGit2;
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

      </div>
    </section>
  );
}
