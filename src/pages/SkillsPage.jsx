import React from 'react';
import SkillsSection from '../components/Skills/SkillsSection';
import Footer from '../components/Footer/Footer';

export default function SkillsPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <SkillsSection />
      <Footer />
    </main>
  );
}
