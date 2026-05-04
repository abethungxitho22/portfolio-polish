import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

const SECTION_IDS = ['hero', 'about', 'projects', 'experience', 'skills', 'education', 'contact'];

export default function ScrollDownButton() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = window.scrollY + window.innerHeight;
      setAtBottom(scrolled >= doc.scrollHeight - 80);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleClick = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const fromTop = window.scrollY + 80;
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (top > fromTop + 10) {
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      aria-label={atBottom ? 'Scroll to top' : 'Scroll to next section'}
      className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-primary-deep text-primary-foreground shadow-rose flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary"
    >
      {atBottom ? (
        <ArrowUp size={18} className="animate-bounce" />
      ) : (
        <ArrowDown size={18} className="animate-bounce" />
      )}
    </button>
  );
}
