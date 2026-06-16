'use client';

import { Newsletter } from "./Newsletter";

export function Contact() {
  return (
    <section id="contact" className=" m-10 py-12 sm:py-16 lg:py-20 bg-white animate-in fade-in slide-in-from-bottom duration-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#04205D] mb-8 text-balance animate-in fade-in slide-in-from-bottom duration-700 delay-100">
          Contact Us
        </h2>
        <button className="bg-[#04205D] text-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-gray-800 transition-colors duration-300 uppercase tracking-wider font-semibold mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          Get Started
        </button>
         <Newsletter />
      </div>
    </section>
  );
}
