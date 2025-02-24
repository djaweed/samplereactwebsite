import React from 'react';
import { Cloud, Users, Award, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-950 to-emerald-950 text-white">
      {/* Navigation */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Cloud className="w-8 h-8 text-yellow-600" />
            <span className="text-2xl font-bold">Fallstreak Cloud</span>
          </Link>
          <div className="space-x-8">
          <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
          <Link to="/services" className="text-yellow-500">Services</Link>
          <Link to="/tech" className="hover:text-yellow-500 transition-colors">Tech</Link>
          <Link to="/about" className="hover:text-yellow-500 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-yellow-100/90 mb-8">
            Get in touch with us for any inquiries, support, or consultations.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Send Us a Message</h2>
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg bg-teal-900/50 border border-emerald-800/30" />
            <input type="email" placeholder="Your Email" className="w-full p-4 rounded-lg bg-teal-900/50 border border-emerald-800/30" />
            <textarea placeholder="Your Message" className="w-full p-4 rounded-lg bg-teal-900/50 border border-emerald-800/30" rows="4"></textarea>
            <button type="submit" className="w-full py-3 bg-yellow-600 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-950 py-12 border-t border-emerald-800/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Cloud className="w-6 h-6 text-yellow-600" />
              <span className="text-xl font-bold">Fallstreak Cloud</span>
            </div>
            <div className="text-yellow-100/70">
              © 2025 Fallstreak Cloud. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
