'use client';

import { useState } from 'react';
import { Mail, Phone, User } from 'lucide-react';

export function Newsletter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 animate-in fade-in slide-in-from-bottom duration-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 text-center animate-in fade-in slide-in-from-bottom duration-700 delay-100">
          Stay Informed with Evan Battaglia
        </h2>
        <p className="text-gray-700 text-center mb-8 text-base sm:text-lg animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          Join the community of homeowners and investors who rely on Evan for the latest mortgage rates and expert market insights. In a changing economy, having the right information at the right time could save you thousands on your next loan.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <div className="relative">
            <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all duration-300"
              required
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all duration-300"
              required
            />
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all duration-300"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all duration-300"
          />
          <button
            type="submit"
            className="w-full bg-gray-700 text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition-colors duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
