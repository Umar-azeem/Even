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
  ArrowRight,
  Building2,
  FileCheck,
  Clock,
  Star,
  ThumbsUp,
  MessageCircle,
  Calendar,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Values } from "@/components/sections/Values";
import Empty from "@/components/sections/empty";

export default function page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-b from-[#04205D]/60 to-[#0a3a8a]/60 text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/img/house.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04205D]/60 to-[#0a3a8a]/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            Our Values
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Your Home Journey Starts Here
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Built on integrity, advocacy, and results — I'm committed to making
            your mortgage experience transparent, personal, and stress-free.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact">
              <Button className="bg-white text-[#04205D] hover:bg-gray-100 font-semibold px-8">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a
              href="tel:6309890215"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2.5 rounded-lg font-semibold border border-white/30 hover:bg-white/30 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (630) 989-0215
            </a>
          </div>
        </div>
      </section>

      {/* Meet Evan Section with Image */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                  I'm{" "}
                  <span className="font-semibold">
                    Evan Battaglia (NMLS #1710678)
                  </span>
                  , a mortgage loan originator who believes financing should be
                  simple, transparent, and tailored to your goals.
                </p>
                <p>
                  I help homebuyers, homeowners, and real estate investors
                  navigate the mortgage process with confidence. Whether you're
                  purchasing a home, refinancing, or growing your investment
                  portfolio, I work to find financing solutions that make sense
                  for your unique situation.
                </p>
                <p>
                  When I'm not helping clients, you'll find me at home in{" "}
                  <span className="font-semibold">Bloomingdale</span> with my
                  wife, our child, and our puppy. As a husband, father,
                  homeowner, and member of the local community, I understand how
                  important the right mortgage can be for your family's future.
                </p>
                <p>
                  My approach is straightforward:{" "}
                  <span className="font-semibold">
                    clear communication, quick responses, and a commitment
                  </span>{" "}
                  to making the loan process as smooth as possible from start to
                  finish.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="mailto:chmairbnb@outlook.com"
                  className="inline-flex items-center gap-2 bg-[#04205D] text-white px-4 py-2 rounded-lg hover:bg-[#04205D]/90 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  chmairbnb@outlook.com
                </a>
                <a
                  href="tel:6309890215"
                  className="inline-flex items-center gap-2 border border-[#04205D] text-[#04205D] px-4 py-2 rounded-lg hover:bg-[#04205D] hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (630) 989-0215
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full aspect-[4/3] max-w-md rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/img/hh.png"
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
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <Values />
        <Empty />
      </section>
      {/* Core Values Section with Images */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-[#04205D] font-semibold text-sm mb-2">
              <span className="w-8 h-0.5 bg-[#04205D]" />
              CORE VALUES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#04205D] mb-4">
              The Pillars of My Work
            </h2>
            <p className="text-gray-600 text-lg">
              A commitment to three core values that guide every client
              interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Value 1 - Integrity */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/img/h2.png"
                  alt="Integrity"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04205D]/60 to-transparent" />
              </div>
              <div className="w-12 h-12 bg-[#04205D]/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#04205D]" />
              </div>
              <h3 className="text-xl font-bold text-[#04205D] mb-2">
                Integrity
              </h3>
              <p className="text-gray-600">
                Honest, ethical guidance you can trust. I believe in doing
                what's right for you, not what's easy for me.
              </p>
            </div>

            {/* Value 2 - Advocacy */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/img/h1.png"
                  alt="Advocacy"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04205D]/60 to-transparent" />
              </div>
              <div className="w-12 h-12 bg-[#04205D]/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[#04205D]" />
              </div>
              <h3 className="text-xl font-bold text-[#04205D] mb-2">
                Advocacy
              </h3>
              <p className="text-gray-600">
                Your goals are my priority. I fight for your best interests and
                advocate for you throughout the process.
              </p>
            </div>

            {/* Value 3 - Results */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/img/h3.png"
                  alt="Results"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04205D]/60 to-transparent" />
              </div>
              <div className="w-12 h-12 bg-[#04205D]/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#04205D]" />
              </div>
              <h3 className="text-xl font-bold text-[#04205D] mb-2">Results</h3>
              <p className="text-gray-600">
                Delivering tangible outcomes that help you achieve your
                homeownership and investment goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Banner Section */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/img/values-banner.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#04205D]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              Why Work With Me
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              The Evan Difference
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <MessageCircle className="w-4 h-4 text-blue-300" />
                  <span className="font-semibold">Clear Communication</span>
                </div>
                <p className="text-sm text-blue-200">
                  No ghosting, no confusing updates. You'll know where your loan
                  stands every step.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-blue-300" />
                  <span className="font-semibold">Fast Response Times</span>
                </div>
                <p className="text-sm text-blue-200">
                  Questions get answered the same day because timing matters in
                  real estate.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <FileCheck className="w-4 h-4 text-blue-300" />
                  <span className="font-semibold">Tailored Strategy</span>
                </div>
                <p className="text-sm text-blue-200">
                  Your loan is built around your goals, budget, and future
                  plans.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-blue-300" />
                  <span className="font-semibold">Local Expertise</span>
                </div>
                <p className="text-sm text-blue-200">
                  As a Bloomingdale resident, I understand our market and what
                  local buyers face.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Stats Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#04205D]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-[#04205D]" />
              </div>
              <div className="text-3xl font-bold text-[#04205D]">
                NMLS #1710678
              </div>
              <p className="text-gray-500 text-sm">Licensed Professional</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#04205D]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Home className="w-6 h-6 text-[#04205D]" />
              </div>
              <div className="text-3xl font-bold text-[#04205D]">100+</div>
              <p className="text-gray-500 text-sm">Happy Homeowners</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#04205D]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-[#04205D]" />
              </div>
              <div className="text-3xl font-bold text-[#04205D]">4.9★</div>
              <p className="text-gray-500 text-sm">Client Satisfaction</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#04205D]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-[#04205D]" />
              </div>
              <div className="text-3xl font-bold text-[#04205D]">15+</div>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section with Image Background */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/img/quote-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#04205D]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="text-6xl text-blue-300/30 mb-4">"</div>
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light italic mb-6">
            Helping homeowners and investors turn real estate goals into
            reality.
          </blockquote>
          <div className="flex items-center justify-center gap-2 text-blue-200">
            <span className="w-12 h-0.5 bg-blue-300/30" />
            <span>Evan Battaglia</span>
            <span className="w-12 h-0.5 bg-blue-300/30" />
          </div>
          <p className="text-blue-300 mt-2">
            Mortgage Loan Originator | NMLS #1710678
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#04205D] mb-4">
            Ready to Make Your Move?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            If you're ready to buy, refinance, or invest, I'd love the
            opportunity to help you achieve your real estate goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-[#04205D] text-white hover:bg-[#04205D]/90 font-semibold px-8">
                Apply Now
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
        </div>
      </section>
    </main>
  );
}
