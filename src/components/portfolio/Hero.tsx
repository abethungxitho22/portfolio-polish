import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import heroPhoto from '../../image/IMG_6961.JPG';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero px-4 py-24 md:py-20"
    >
      {/* ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl bg-primary/30" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl bg-secondary/25" />
      </div>

      {/* hero card — Sanya Harper inspired */}
      <div className="relative z-10 w-full max-w-5xl mx-auto animate-fade-up">
        <div className="bg-primary rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-10 md:p-14 shadow-rose">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-10 items-center">
            {/* left: text */}
            <div>
              <nav className="flex items-center gap-6 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-foreground/70 font-semibold mb-8"> 
              </nav>

              <h1 className="font-display font-bold text-foreground leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-3">
                Abethu
                <br />
                <span className="italic">Ngxitho</span>
              </h1>

              <p className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-foreground/80 font-semibold mb-6">
                Software Developer
              </p>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-[1.5px] border-foreground/40 text-foreground text-xs font-semibold uppercase tracking-wider hover:bg-foreground hover:text-primary transition-all"
              >

              </a>
            </div>

            {/* right: photo card placeholder */}
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-primary-soft via-primary-softer to-secondary-soft border border-background/40 shadow-lg">
                <img
                  src={heroPhoto}
                  alt="Abethu Ngxitho portrait"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-secondary/30" />
              </div>

              {/* status pill */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-background rounded-2xl px-4 py-2.5 shadow-rose flex items-center gap-2 border border-border">
                <span className="w-2 h-2 rounded-full bg-primary-deep animate-pulse" />
                <span className="text-xs font-semibold text-foreground">Open to work</span>
              </div>
            </div>
          </div>
        </div>

        {/* socials below card */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <a href="mailto:abethungxitho82@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary-deep transition-colors">
            <Mail size={18} />
          </a>
          <a href="tel:+27717460314" aria-label="Phone" className="text-muted-foreground hover:text-primary-deep transition-colors">
            <Phone size={18} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary-deep transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary-deep transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      {/* gentle scroll cue (the global floating one handles section-jumping) */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-primary-deep opacity-70"
        aria-label="Scroll to about"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
