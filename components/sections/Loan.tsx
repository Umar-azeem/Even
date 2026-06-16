'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Home, 
  RefreshCw, 
  Building2, 
  FileCheck, 
  Calculator, 
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Clock,
  Shield,
  Percent,
  DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const loanTypes = [
  {
    id: 1,
    title: "Conventional Loans",
    description: "Traditional mortgage options with competitive rates for qualified buyers.",
    icon: Home,
    features: ["Fixed & adjustable rates", "Low down payment options", "Jumbo loans available"],
    image: "/img/grp.jpg"
  },
  {
    id: 2,
    title: "FHA Loans",
    description: "Government-backed loans designed for first-time homebuyers with lower credit requirements.",
    icon: Shield,
    features: ["Low down payment (3.5%)", "Flexible credit requirements", "Competitive rates"],
    image: "/img/house.jpg"
  },
  {
    id: 3,
    title: "VA Loans",
    description: "Exclusive benefits for veterans, active-duty service members, and eligible spouses.",
    icon: Percent,
    features: ["0% down payment", "No PMI required", "Competitive rates"],
    image: "/img/lep.jpg"
  },
  {
    id: 4,
    title: "Refinance",
    description: "Lower your rate, shorten your term, or tap into your home's equity.",
    icon: RefreshCw,
    features: ["Rate reduction", "Cash-out refinance", "Streamline options"],
    image: "/img/romin.jpg"
  },
  {
    id: 5,
    title: "Investment Properties",
    description: "Financing for 1-4 unit rentals and portfolio growth.",
    icon: Building2,
    features: ["1-4 unit properties", "Portfolio growth", "Investor-friendly terms"],
    image: "/img/rominn.jpg"
  },
  {
    id: 6,
    title: "Jumbo Loans",
    description: "Financing for high-value properties that exceed conventional loan limits.",
    icon: DollarSign,
    features: ["High loan amounts", "Competitive pricing", "Flexible terms"],
    image: "/img/co.jpg"
  }
];

const whyChoose = [
  {
    title: "Clear Communication",
    description: "No ghosting, no confusing updates. You'll know where your loan stands every step.",
    icon: CheckCircle
  },
  {
    title: "Fast Response Times",
    description: "Questions get answered the same day because timing matters in real estate.",
    icon: Clock
  },
  {
    title: "Tailored Strategy",
    description: "Your loan is built around your goals, budget, and future plans.",
    icon: FileCheck
  },
  {
    title: "Local Expertise",
    description: "As a Bloomingdale resident, I understand our market and what local buyers face.",
    icon: Home
  }
];

const steps = [
  {
    number: "01",
    title: "Pre-Approval",
    description: "Get pre-approved to know exactly how much home you can afford."
  },
  {
    number: "02",
    title: "Loan Selection",
    description: "Choose from a variety of loan options tailored to your needs."
  },
  {
    number: "03",
    title: "Application",
    description: "Complete your application with guidance every step of the way."
  },
  {
    number: "04",
    title: "Closing",
    description: "Smooth closing with zero surprises and clear communication."
  }
];

export default function Loan() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
     <section className="relative   text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
    style={{ backgroundImage: "url('/img/romin.jpg')" }}
  />
  
  {/* Background Overlay Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#04205D]/40 to-[#0a3a8a]/40" />
  
  {/* Decorative Blobs */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
  </div>
  
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4">
      <Home className="w-4 h-4" />
      Mortgage Solutions
    </div>
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
      Find Your Perfect Loan
    </h1>
    <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
      From first-time homebuyers to seasoned investors, I offer a wide range of mortgage solutions tailored to your unique needs.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <Link href="/contact">
        <Button className="bg-white text-[#04205D] hover:bg-gray-100 font-semibold px-8">
          Get Pre-Approved
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
      <Link href="/calculator">
        <Button className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30 font-semibold px-8">
          <Calculator className="w-4 h-4 mr-2" />
          Calculate Payments
        </Button>
      </Link>
    </div>
  </div>
</section>
      {/* Loan Types Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-[#04205D] font-semibold text-sm mb-2">
              <span className="w-8 h-0.5 bg-[#04205D]" />
              LOAN PROGRAMS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#04205D] mb-4">
              Mortgage Options for Every Situation
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our comprehensive range of loan programs designed to meet your specific needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanTypes.map((loan) => (
              <div 
                key={loan.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-48 w-full bg-gray-200">
                  {/* Placeholder image - replace with actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#04205D]/80 to-[#0a3a8a]/80 flex items-center justify-center">
                    
                    <Image
                                    src={loan.image}
                                    alt="Evan Battaglia - Mortgage Loan Originator"
                                    fill
                                    className="object-cover"
                                    priority
                                  /><loan.icon className="w-16 h-16 text-white/70" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-white font-bold text-lg">{loan.title} </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{loan.description}</p>
                  <ul className="space-y-2 mb-4">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#04205D] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full border-[#04205D] text-[#04205D] hover:bg-[#04205D] hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-[#04205D] font-semibold text-sm mb-2">
              <span className="w-8 h-0.5 bg-[#04205D]" />
              WHY CHOOSE ME
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#04205D] mb-4">
              The Evan Difference
            </h2>
            <p className="text-gray-600 text-lg">
              Here's what sets me apart as your mortgage loan originator.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-12 h-12 bg-[#04205D]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[#04205D]" />
                </div>
                <h3 className="text-lg font-bold text-[#04205D] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#04205D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-blue-200 font-semibold text-sm mb-2">
              <span className="w-8 h-0.5 bg-blue-200" />
              HOW IT WORKS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-blue-200 text-lg">
              Getting a mortgage doesn't have to be complicated. Here's how I make it easy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center h-full">
                  <div className="text-5xl font-bold text-white/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-blue-200 text-sm">{step.description}</p>
                </div>
                {step.number !== "04" && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-blue-300/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#04205D] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're buying your first home, refinancing, or investing in property, I'm here to help you find the right loan.
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