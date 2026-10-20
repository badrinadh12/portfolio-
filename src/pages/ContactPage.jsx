import React from 'react';
import ContactSection from '../components/Contact/ContactSection';
import Footer from '../components/Footer/Footer';

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <ContactSection />
      <Footer />
    </main>
  );
}
