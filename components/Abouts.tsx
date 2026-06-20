'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Award, Home, Users, CheckCircle, ArrowRight, Target, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Abouts() {
  const [activeTab, setActiveTab] = useState('mission');

  const tabs = [
    {
      id: 'mission',
      label: 'Mission',
      icon: Target,
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#04205D]">Our Mission</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to empower individuals and families to achieve their homeownership dreams by providing 
            transparent, personalized, and accessible mortgage solutions. We are committed to guiding our clients 
            through every step of the financing process with integrity, expertise, and a genuine dedication to 
            their financial well-being.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-[#04205D] mb-2">Client-Centric Approach</h4>
              <p className="text-gray-600 text-sm">Every client receives personalized attention and solutions tailored to their unique situation.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-[#04205D] mb-2">Financial Empowerment</h4>
              <p className="text-gray-600 text-sm">We educate and empower our clients to make informed decisions about their financial future.</p>
            </div>
          </div>
           <a
                  href="/mission"
                  className="w-28 flex items-center  bg-[#04205D] text-white px-4 py-2 rounded-lg font-semibold  transition-colors"
                >
                  Read more
                </a>
        </div>
      )
    },
    {
      id: 'vision',
      label: 'Vision',
      icon: Eye,
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#04205D]">Our Vision</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            To be the most trusted and innovative mortgage lending partner, recognized for transforming the 
            home financing experience through technology, transparency, and a deep commitment to community. 
            We envision a world where every individual has access to fair, clear, and achievable paths to 
            homeownership.
          </p>
          <div className="bg-[#04205D]/5 p-6 rounded-lg border border-[#04205D]/20 mt-4">
            <h4 className="font-semibold text-[#04205D] mb-2">Looking Ahead</h4>
            <p className="text-gray-700">
              We&apos;re continuously evolving to meet the changing needs of our clients and the real estate market, 
              ensuring that we remain at the forefront of the mortgage industry.
            </p>
          </div>
           <a
                  href="/vision"
                  className="w-28 flex items-center  bg-[#04205D] text-white px-4 py-2 rounded-lg font-semibold  transition-colors"
                >
                  Read more
                </a>
        </div>
      )
    },
    {
      id: 'values',
      label: 'Values',
      icon: Heart,
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#04205D]">Our Values</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            These core values guide everything we do—from our client interactions to our business decisions 
            and community involvement.
          </p>
          <div className="space-y-4 mt-4">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-8 h-8 bg-[#04205D]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-4 h-4 text-[#04205D]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#04205D]">Integrity</h4>
                <p className="text-gray-600 text-sm">We operate with honesty, transparency, and ethical practices in everything we do.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-8 h-8 bg-[#04205D]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Users className="w-4 h-4 text-[#04205D]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#04205D]">Excellence</h4>
                <p className="text-gray-600 text-sm">We strive for excellence in service, knowledge, and client outcomes.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-8 h-8 bg-[#04205D]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Home className="w-4 h-4 text-[#04205D]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#04205D]">Community</h4>
                <p className="text-gray-600 text-sm">We believe in giving back and strengthening the communities we serve.</p>
              </div>
               
            </div>
            <a
                  href="/values"
                  className="w-28 flex items-center  bg-[#04205D] text-white px-4 py-2 rounded-lg font-semibold  transition-colors"
                >
                  Read more
                </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#04205D] to-[#0a3a8a] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-xl flex-shrink-0">
              <Image
                src="/img/rb.png"
                alt="Evan Battaglia - Mortgage Loan Originator"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Content */}
            <div className="text-center lg:text-left flex-1">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                NMLS #1710678
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
                Evan Battaglia
              </h1>
              <p className="text-xl sm:text-2xl text-blue-200 mb-4">
                Mortgage Loan Originator
              </p>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto lg:mx-0">
                &quot;Helping homeowners and investors turn real estate goals into reality.&quot;
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
                <a
                  href="tel:6309890215"
                  className="flex items-center gap-2 bg-white text-[#04205D] px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (630) 989-0215
                </a>
                <a
                  href="mailto:chmairbnb@outlook.com"
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
                >
                  <Mail className="w-4 h-4" />
                  chmairbnb@outlook.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 text-[#04205D] font-semibold text-sm mb-2">
                <span className="w-8 h-0.5 bg-[#04205D]" />
                ABOUT ME
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#04205D] mb-4">
                Meet Evan
              </h2>
              <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p>
                  I&apos;m <span className="font-semibold text-[#04205D]">Evan Battaglia (NMLS #1710678)</span>, a mortgage loan originator who believes financing should be simple, transparent, and tailored to your goals.
                </p>
                <p>
                  I help homebuyers, homeowners, and real estate investors navigate the mortgage process with confidence. Whether you&apos;re purchasing a home, refinancing, or growing your investment portfolio, I work to find financing solutions that make sense for your unique situation.
                </p>
                <p>
                  When I&apos;m not helping clients, you&apos;ll find me at home in <span className="font-semibold text-[#04205D]">Bloomingdale</span> with my wife, our child, and our puppy. As a husband, father, homeowner, and member of the local community, I understand how important the right mortgage can be for your family&apos;s future.
                </p>
                <p>
                  My approach is straightforward: <span className="font-semibold text-[#04205D]">clear communication, quick responses, and a commitment</span> to making the loan process as smooth as possible from start to finish.
                </p>
              </div>
            </div>

            {/* Right Column - Stats & Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-[#04205D] mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Award className="w-5 h-5 text-[#04205D] flex-shrink-0" />
                    <span><span className="font-semibold">NMLS:</span> #1710678</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Home className="w-5 h-5 text-[#04205D] flex-shrink-0" />
                    <span><span className="font-semibold">Specialty:</span> Home Purchase, Refinance, Investment Properties</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Users className="w-5 h-5 text-[#04205D] flex-shrink-0" />
                    <span><span className="font-semibold">Clients:</span> First-time Buyers, Homeowners, Investors</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-[#04205D] flex-shrink-0" />
                    <span><span className="font-semibold">Location:</span> Bloomingdale, IL</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#04205D] rounded-xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
                <p className="text-blue-200 text-sm mb-4">
                  If you&apos;re ready to buy, refinance, or invest, I&apos;d love the opportunity to help you achieve your real estate goals.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-white text-[#04205D] hover:bg-gray-100 font-semibold">
                    Contact Me
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Tabs Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-[#04205D] font-semibold text-sm mb-2">
              <span className="w-8 h-0.5 bg-[#04205D]" />
              OUR FOUNDATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#04205D] mb-4">
              Mission, Vision &amp; Values
            </h2>
            <p className="text-gray-600 text-lg">
              The principles that guide our work and define who we are.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 border-b border-gray-200 pb-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-3 text-sm sm:text-base font-medium rounded-t-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'text-[#04205D] border-b-2 border-[#04205D] bg-[#04205D]/5'
                      : 'text-gray-500 hover:text-[#04205D] hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${
                    activeTab === tab.id ? 'text-[#04205D]' : 'text-gray-400'
                  }`} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8 lg:p-10 min-h-[300px]">
            {tabs.find(tab => tab.id === activeTab)?.content}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#04205D] text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Make Your Move?
          </h2>
          <p className="text-blue-200 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
            Whether you&apos;re buying your first home, refinancing, or adding to your investment portfolio, let&apos;s talk about your goals. The right mortgage starts with the right conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-white text-[#04205D] hover:bg-gray-100 font-semibold px-8">
                Apply Now
              </Button>
            </Link>
            <a
              href="tel:6309890215"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
            >
              <Phone className="w-4 h-4" />
              (630) 989-0215
            </a>
            <a
              href="mailto:chmairbnb@outlook.com"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
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