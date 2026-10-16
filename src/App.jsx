import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Now from './components/Now';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuroraBackground from './components/AuroraBackground';
import BackToTop from './components/BackToTop';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Now />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}