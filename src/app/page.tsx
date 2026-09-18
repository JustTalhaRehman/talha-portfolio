import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Trust } from '@/components/Trust';
import { Experience } from '@/components/Experience';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { Stack } from '@/components/Stack';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="page-wrap">
        <Hero />
        <Trust />
        <Experience />
        <Services />
        <Projects />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
