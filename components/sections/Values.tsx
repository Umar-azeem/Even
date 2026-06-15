'use client';

const PILLARS = [
  {
    title: "Deep Expertise & Local Understanding",
    desc: "With a career built on navigating the complexities of the mortgage industry, I bring a wealth of market experience to every transaction. My deep understanding of the local real estate landscape allows me to provide tailored financing options that truly fit your life and long-term financial goals.",
  },
  {
    title: "Personalized Choice & Aggressive Options",
    desc: "As a Loan Originator, I am in the best position to deliver optimal choices, competitive rates, and highly personalized service. I ensure that clear communication is the bridge to a successful closing.",
  },
  {
    title: "A Calm, Steady Resource",
    desc: "In a fast-moving market, I pride myself on being a calm, steady resource when it matters most. I work tirelessly with everyone—from first-time buyers to seasoned investors—to make the mortgage process feel manageable and transparent.",
  },
];

export function Values() {
  return (
    <section 
      id="values" 
      className="relative px-3 py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-blue-900 to-blue-950 text-white animate-in fade-in slide-in-from-bottom duration-700"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/img/bg.png')" }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            We consider our clients to be our most valuable asset.
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8">
            The pillars of my work represent a commitment to three core values: Integrity, Advocacy, and Results.
          </p>
          <button className="bg-white text-blue-900 px-6 sm:px-8 py-2 sm:py-3 rounded font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
            More Reviews
          </button>
        </div>
        
        {/* Removed "absolute" from here - this was the problem! */}
        <div className="md:absolute grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-blue-800 p-6 sm:p-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-balance">
                {pillar.title}
              </h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}