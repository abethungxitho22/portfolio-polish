import { ArrowDown, Github, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl bg-primary/30" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl bg-secondary/25" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-up">
        <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase bg-primary-soft text-primary-deep">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-deep animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="font-display text-6xl md:text-8xl font-bold text-foreground mb-4 leading-[0.95]">
          Abethu{' '}
          <span className="text-primary-deep italic">Ngxitho</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground font-medium mb-6 tracking-wide">
          Intern ICT Developer &nbsp;·&nbsp; Cape Town, South Africa
        </p>

        <p className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
          Motivated software developer passionate about building innovative,
          data-driven, and automated solutions that make a real-world impact.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 bg-primary-deep text-primary-foreground shadow-rose hover:opacity-90 hover:-translate-y-0.5"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 border-[1.5px] border-secondary text-secondary-deep hover:bg-secondary-soft"
          >
            View my work
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a href="mailto:abethungxitho82@gmail.com" className="text-muted-foreground transition-colors hover:text-primary-deep">
            <Mail size={20} />
          </a>
          <a href="tel:+27717460314" className="text-muted-foreground transition-colors hover:text-primary-deep">
            <Phone size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary-deep">
            <Github size={20} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-primary-deep"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
