import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Trust } from '@/components/Trust';
import { Projects } from '@/components/Projects';
import { Capabilities } from '@/components/Capabilities';
import { Stack } from '@/components/Stack';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { RequestCvModal } from '@/components/RequestCvModal';
import { ScrollObserver } from '@/components/ScrollObserver';

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ScrollObserver />
      <Navbar />
      <main id="main-content" className="page-wrap" tabIndex={-1}>
        <Hero />
        <Trust />
        <Projects />
        <Capabilities />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
      <RequestCvModal />
    </>
  );
}
