'use client';

import { useState } from 'react';
import { Mail, Phone, User, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    // ── SEND EMAIL via mailto ──
    const emailSubject = encodeURIComponent(
      `New Contact Form Submission from ${name}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`
    );
    window.open(
      `mailto:chmairbnb@outlook.com?subject=${emailSubject}&body=${emailBody}`,
      '_blank'
    );

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-[#04205D] mb-2">Message Sent!</h3>
            <p className="text-gray-600 mb-2">Your email client has been opened.</p>
            <p className="text-gray-500 text-sm mb-6">
              If it didn't open, please contact Evan directly at{' '}
              <a href="mailto:chmairbnb@outlook.com" className="text-[#04205D] underline">
                chmairbnb@outlook.com
              </a>
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              className="bg-[#04205D] hover:bg-[#04205D]/90 text-white"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 animate-in fade-in slide-in-from-bottom duration-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#04205D] mb-3 text-center animate-in fade-in slide-in-from-bottom duration-700 delay-100">
          Stay Informed with Evan Battaglia
        </h2>
        <p className="text-[#04205D] text-center mb-8 text-base sm:text-lg animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          Join the community of homeowners and investors who rely on Evan for the latest mortgage rates and expert market insights. In a changing economy, having the right information at the right time could save you thousands on your next loan.
        </p>

        {/* Email Contact Badge */}
        <div className="flex justify-center mb-8">
          <a
            href="mailto:chmairbnb@outlook.com"
            className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors"
          >
            <Mail className="w-4 h-4" />
            chmairbnb@outlook.com
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <div className="relative">
            <User className="absolute left-3 top-3.5 w-5 h-5 text-[#04205D]" />
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04205D] transition-all duration-300"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-[#04205D]" />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04205D] transition-all duration-300"
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-3.5 w-5 h-5 text-[#04205D]" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04205D] transition-all duration-300"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message *"
            rows={4}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04205D] transition-all duration-300 resize-none"
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#04205D] hover:bg-[#04205D]/90 text-white font-semibold py-3 disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </Button>

          <p className="text-xs text-center text-gray-400">
            Submitting will open your email client with your message pre-filled.
          </p>
        </form>
      </div>
    </section>
  );
}