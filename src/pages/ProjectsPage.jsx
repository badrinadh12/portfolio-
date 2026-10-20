import React from 'react';
import ProjectsUniverse from '../components/ProjectsWorld/ProjectsUniverse';
import Footer from '../components/Footer/Footer';

export default function ProjectsPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <ProjectsUniverse />
      <Footer />
    </main>
  );
}
