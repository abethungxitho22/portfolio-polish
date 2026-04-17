import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const SECTION_IDS = ['hero', 'about', 'projects', 'experience', 'skills', 'education', 'contact'];

export default function ScrollDownButton() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = window.scrollY + window.innerHeight;
      // hide when within ~80px of the bottom
      setHidden(scrolled >= doc.scrollHeight - 80);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollToNext = () => {
    const fromTop = window.scrollY + 80; // small offset for navbar
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (top > fromTop + 10) {
        window.scrollTo({ top: top - 0, behavior: 'smooth' });
        return;
      }
    }
    // fallback: scroll to bottom
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToNext}
      aria-label="Scroll to next section"
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-primary-deep text-primary-foreground shadow-rose flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary ${
        hidden ? 'opacity-0 pointer-events-none translate-y-2' : 'opacity-100'
      }`}
    >
      <ArrowDown size={18} className="animate-bounce" />
    </button>
  );
}
