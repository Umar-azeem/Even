"use client";

import Image from "next/image";

export function Missions() {
  return (
    <section
      id="mission"
      className="py-12 sm:py-16 lg:py-24 bg-white animate-in fade-in slide-in-from-bottom duration-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#04205D]  mb-8 text-balance">
              Empowering Your Homeownership Journey
            </h2>
            <div className="space-y-6 text-[#04205D] text-base sm:text-lg leading-relaxed">
              <p>
                At my practice, my mission is to expand the scope of opportunity
                for every client through professional expertise, ethical lending
                practices, and a commitment to long-term relationships. Whether
                you are buying your first home or expanding a commercial
                portfolio, I am here to ensure you have the right financing to
                reach your goals.
              </p>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                  Expert Guidance for Every Borrower
                </h3>
                <p>
                  With years of dedicated service in the mortgage industry, I
                  understand that every financial situation is unique. I founded
                  my practice on the belief that borrowers deserve transparency,
                  clarity, and a partner who listens.
                </p>
                <p className="mt-3">
                  From first-time buyers needing down payment assistance to
                  seasoned investors seeking private money or commercial loans,
                  I bridge the gap between complex banking and your personal
                  success. My goal is simple: to make your mortgage process
                  manageable, transparent, and stress-free.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative rounded-md w-full aspect-square animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              <Image
                src="/img/hh.png"
                alt="Logo"
                fill
                className="object-contain rounded-md"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
