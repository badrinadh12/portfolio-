import React from 'react';
import TitleCard from '../components/TitleCard/TitleCard';
import AboutSection from '../components/About/AboutSection';
import SkillsSection from '../components/Skills/SkillsSection';
import ProjectsUniverse from '../components/ProjectsWorld/ProjectsUniverse';
import ContactSection from '../components/Contact/ContactSection';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <TitleCard onExploreWork={scrollToProjects} onContactClick={scrollToContact} />
      <AboutSection />
      <SkillsSection />
      <ProjectsUniverse />
      <ContactSection />
      <Footer />
    </main>
  );
}
