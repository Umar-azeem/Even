"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Award, 
  Home, 
  Users, 
  Shield, 
  Target, 
  Heart, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Mission() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#04205D] to-[#0a3a8a] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: "url('/img/grp.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04205D]/50 to-[#0a3a8a]/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            Our Mission
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Empowering Your Homeownership Journey
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Expanding the scope of opportunity for every client through professional expertise, 
            ethical lending practices, and a commitment to long-term relationships.
          </p>
        </div>
      </section>

      {/* Mission Content */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-100">
              <div className="inline-flex items-center gap-2 text-[#04205D] font-semibold text-sm mb-2">
                <span className="w-8 h-0.5 bg-[#04205D]" />
                ABOUT ME
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#04205D] mb-4">
                Meet Evan
              </h2>
              <div className="space-y-4 text-[#04205D] text-base sm:text-lg leading-relaxed">
                <p>
                  I'm <span className="font-semibold">Evan Battaglia (NMLS #1710678)</span>, a mortgage loan originator who believes financing should be simple, transparent, and tailored to your goals.
                </p>
                <p>
                  I help homebuyers, homeowners, and real estate investors navigate the mortgage process with confidence. Whether you're purchasing a home, refinancing, or growing your investment portfolio, I work to find financing solutions that make sense for your unique situation.
                </p>
                <p>
                  When I'm not helping clients, you'll find me at home in <span className="font-semibold">Bloomingdale</span> with my wife, our child, and our puppy. As a husband, father, homeowner, and member of the local community, I understand how important the right mortgage can be for your family's future.
                </p>
                <p>
                  My approach is straightforward: <span className="font-semibold">clear communication, quick responses, and a commitment</span> to making the loan process as smooth as possible from start to finish.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full aspect-square max-w-md rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/img/eve.png"
                  alt="Evan Battaglia - Mortgage Loan Originator"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-[#04205D] font-semibold text-sm mb-2">
              <span className="w-8 h-0.5 bg-[#04205D]" />
              MY COMMITMENT
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#04205D] mb-4">
              What I Stand For
            </h2>
            <p className="text-gray-600 text-lg">
              Every client deserves a lender who is as invested in their homeownership goals as they are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#04205D]/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#04205D]" />
              </div>
              <h3 className="text-xl font-bold text-[#04205D] mb-2">Transparency</h3>
              <p className="text-gray-600">
                No hidden fees, no confusing jargon. I believe in clear, honest communication from start to finish.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#04205D]/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[#04205D]" />
              </div>
              <h3 className="text-xl font-bold text-[#04205D] mb-2">Client-First</h3>
              <p className="text-gray-600">
                Your goals are my priority. I take the time to understand your unique situation and find the best solution.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#04205D]/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-[#04205D]" />
              </div>
              <h3 className="text-xl font-bold text-[#04205D] mb-2">Expertise</h3>
              <p className="text-gray-600">
                With years of experience and deep market knowledge, I provide guidance you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-xl">
              <div className="w-12 h-12 bg-[#04205D]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-[#04205D]" />
              </div>
              <div className="text-2xl font-bold text-[#04205D]">NMLS #1710678</div>
              <p className="text-gray-500 text-sm">Licensed Professional</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-xl">
              <div className="w-12 h-12 bg-[#04205D]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Home className="w-6 h-6 text-[#04205D]" />
              </div>
              <div className="text-2xl font-bold text-[#04205D]">100+</div>
              <p className="text-gray-500 text-sm">Happy Homeowners</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-xl">
              <div className="w-12 h-12 bg-[#04205D]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-[#04205D]" />
              </div>
              <div className="text-2xl font-bold text-[#04205D]">4.9★</div>
              <p className="text-gray-500 text-sm">Client Satisfaction</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-xl">
              <div className="w-12 h-12 bg-[#04205D]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-[#04205D]" />
              </div>
              <div className="text-2xl font-bold text-[#04205D]">15+</div>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 sm:py-20 bg-[#04205D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl text-blue-300/30 mb-4">"</div>
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light italic mb-6">
            Helping homeowners and investors turn real estate goals into reality.
          </blockquote>
          <div className="flex items-center justify-center gap-2 text-blue-200">
            <span className="w-12 h-0.5 bg-blue-300/30" />
            <span>Evan Battaglia</span>
            <span className="w-12 h-0.5 bg-blue-300/30" />
          </div>
          <p className="text-blue-300 mt-2">Mortgage Loan Originator | NMLS #1710678</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#04205D] mb-4">
            Ready to Make Your Move?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            If you're ready to buy, refinance, or invest, I'd love the opportunity to help you achieve your real estate goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-[#04205D] text-white hover:bg-[#04205D]/90 font-semibold px-8">
                Contact Me
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a
              href="tel:6309890215"
              className="inline-flex items-center gap-2 bg-white text-[#04205D] px-6 py-2.5 rounded-lg font-semibold border border-[#04205D] hover:bg-gray-50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (630) 989-0215
            </a>
            <a
              href="mailto:chmairbnb@outlook.com"
              className="inline-flex items-center gap-2 bg-white text-[#04205D] px-6 py-2.5 rounded-lg font-semibold border border-[#04205D] hover:bg-gray-50 transition-colors"
            >
              <Mail className="w-4 h-4" />
              chmairbnb@outlook.com
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Bloomingdale, IL</span>
          </div>
        </div>
      </section>
    </main>
  );
}