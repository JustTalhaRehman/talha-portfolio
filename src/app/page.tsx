import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Trust } from '@/components/Trust';
import { Experience } from '@/components/Experience';
import { Achievements } from '@/components/Achievements';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { Stack } from '@/components/Stack';
import { Credentials } from '@/components/Credentials';
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
        <Experience />
        <Achievements />
        <Services />
        <Projects />
        <Stack />
        <Credentials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
