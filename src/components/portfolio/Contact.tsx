import { Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <Mail size={18} className="text-primary-deep" />
          <span className="font-semibold text-sm uppercase tracking-widest text-primary-deep">Contact</span>
        </div>
        <h2 className="font-display text-5xl font-bold text-foreground mb-4">
          Let's <span className="italic text-primary-deep">connect</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Whether you have an opportunity, a question, or just want to say hi — my inbox is always open.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <a
              href="mailto:abethungxitho82@gmail.com"
              className="flex items-center gap-4 rounded-2xl p-5 border border-border bg-primary-softer hover:border-primary transition-all group"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary-deep">
                <Mail size={18} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">Email</p>
                <p className="text-foreground font-semibold text-sm transition-colors group-hover:text-primary-deep">
                  abethungxitho82@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+27717460314"
              className="flex items-center gap-4 rounded-2xl p-5 border border-border bg-primary-softer hover:border-primary transition-all group"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary-deep">
                <Phone size={18} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">Phone</p>
                <p className="text-foreground font-semibold text-sm transition-colors group-hover:text-primary-deep">
                  +2771 746 0314
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl p-5 border border-border bg-primary-softer">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-secondary">
                <MapPin size={18} className="text-secondary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">Location</p>
                <p className="text-foreground font-semibold text-sm">
                  Cape Town
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 border border-secondary-soft bg-gradient-warm flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Reference</h3>
              <p className="text-muted-foreground text-sm mb-6">Professional reference available upon request.</p>
            </div>
            <div className="bg-background rounded-2xl p-5 border border-secondary-soft">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">Available on request</p>
              <p className="text-foreground font-semibold text-sm">Contact for details</p>
            </div>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-border text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5">
          Built with <Heart size={12} className="text-primary-deep fill-primary-deep" /> by Abethu Ngxitho · {new Date().getFullYear()}
        </footer>
      </div>
    </section>
  );
}
