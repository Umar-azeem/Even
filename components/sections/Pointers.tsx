'use client';
import Image from 'next/image';

const POINTERS = [
  {
    id: 1,
    title: "Get Pre-Approved",
    description: "Get pre-approved today and know exactly how much home you can afford.",
    image: "/img/house.jpg",
  },
  {
    id: 2,
    title: " Meet Evan Mortgage Advisor",
    description: " believe getting a mortgage shouldn't feel overwhelmin",
    image: "/img/hh.png",
  },
  {
    id: 3,
    title: " Home Purchase Made Simple",
    description: "I'll guide you from pre-approval to closing with zero surprises",
    image: "/img/romin.jpg",
  },
  {
    id: 4,
    title: "Refinance for a Better Future",
    description: "Lower your rate, shorten your term, or tap into equity",
    image: "/img/rominn.jpg",
  },
  {
    id: 5,
    title: "Investment Property Financing",
    description: "Financing for 1-4 unit rentals and portfolio growth. I understand investor timelines ",
    image: "/img/grp.jpg",
  },
];

export function Pointers() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#04205D] mb-12 sm:mb-16 text-center">
          Evan&apos;s Pointers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {POINTERS.map((pointer, idx) => (
            <div
              key={pointer.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <Image
                  src={pointer.image}
                  alt={pointer.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-base font-bold">{pointer.title}</h3>
                <p className="text-xs mt-1">{pointer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}