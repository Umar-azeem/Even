'use client';

import Link from 'next/dist/client/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative h-80 sm:h-96 lg:h-screen flex items-center justify-center text-center overflow-hidden animate-in fade-in slide-in-from-bottom duration-700">
      
      {/* Background image */}
      <Image
        src="/img/evenHero.png"
        alt=""
        fill
        className="object-cover h-screen object-center"
        priority
      />

      {/* Dark overlay — adjust opacity to control image visibility */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-3xl   top-18 md:top-24">
        <h1 className="text-lg sm:text-4xl lg:text-6xl font-light text-white mb-4 text-balance leading-tight animate-in fade-in slide-in-from-bottom duration-700 delay-100">
          The Art of Lending with Integrity
        </h1>
        <p className="text-md sm:text-2xl lg:text-3xl text-gray-200 mb-8 font-light animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          Expanding Your Financial Horizon
        </p>
        <button className="bg-white/10 backdrop-blur-sm border border-white/40 text-white  px-4 sm:px-8 py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-white/20 transition-colors duration-300 uppercase tracking-wider font-semibold animate-in fade-in slide-in-from-bottom duration-700 delay-300">
         <Link href="/contact">Get Started</Link>
        </button>
      </div>
    </section>
  );
}