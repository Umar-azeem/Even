'use client';

import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Mission } from '@/components/sections/Mission';
import { Pointers } from '@/components/sections/Pointers';
import { Vision } from '@/components/sections/Vision';
import { Values } from '@/components/sections/Values';
import { Contact } from '@/components/sections/Contact';
import { Newsletter } from '@/components/sections/Newsletter';
import { Footer } from '@/components/layout/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Mission />
      <Pointers />
      <Vision />
      <Values />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  );
}
