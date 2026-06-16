'use client';

import { Hero } from '@/components/sections/Hero';
import { Pointers } from '@/components/sections/Pointers';
import { Vision } from '@/components/sections/Vision';
import { Values } from '@/components/sections/Values';
import { Contact } from '@/components/sections/Contact';

import Empty from '@/components/sections/empty';
import { Missions } from '@/components/sections/missions';

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Missions />
      <Pointers />
      <Vision />
      <Values />
      <Empty />
      <Contact />
     
      
    </main>
  );
}
