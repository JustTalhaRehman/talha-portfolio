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
import { ScrollObserver } from '@/components/ScrollObserver';

export default function HomePage() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main className="page-wrap">
        <Hero />
        <Trust />
        <Projects />
        <Capabilities />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
