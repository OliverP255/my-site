import Section from '@/components/Section';
import Hero from '@/components/Hero';
import Now from '@/components/Now';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Section id="hero" className="min-h-screen">
        <Hero />
      </Section>

      <Section id="now">
        <Now />
      </Section>

      <Section id="projects">
        <Projects />
      </Section>

      <Section id="experience">
        <Experience />
      </Section>

      <Section id="contact">
        <Contact />
      </Section>
    </>
  );
}
