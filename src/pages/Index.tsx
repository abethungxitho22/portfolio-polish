import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Projects from '@/components/portfolio/Projects';
import Experience from '@/components/portfolio/Experience';
import Skills from '@/components/portfolio/Skills';
import Education from '@/components/portfolio/Education';
import Contact from '@/components/portfolio/Contact';
import ScrollDownButton from '@/components/portfolio/ScrollDownButton';

const Index = () => {
  return (
    <main className="antialiased">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <ScrollDownButton />
    </main>
  );
};

export default Index;
