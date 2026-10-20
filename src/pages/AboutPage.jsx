import React from 'react';
import AboutSection from '../components/About/AboutSection';
import Footer from '../components/Footer/Footer';

export default function AboutPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <AboutSection />
      <Footer />
    </main>
  );
}
