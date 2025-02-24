import React from 'react';
import { Cloud, Users, Award, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
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
            <Link to="/about" className="hover:text-yellow-500 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-yellow-100/90 mb-8">
            We offer a range of cloud services to elevate your business operations.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-teal-900/30 py-24 border-y border-emerald-800/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Cloud Architecture</h2>
              <p className="text-yellow-100/90 mb-6">
                Design scalable, secure, and high-performance cloud architectures tailored to your business needs.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-teal-900/50 p-6 rounded-xl border border-emerald-800/30">
                <Award className="w-12 h-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Enterprise Solutions</h3>
                <p className="text-yellow-100/90">Custom solutions for businesses of all sizes</p>
              </div>
              <div className="bg-teal-900/50 p-6 rounded-xl border border-emerald-800/30">
                <Building2 className="w-12 h-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cloud Migration</h3>
                <p className="text-yellow-100/90">Seamless cloud migration to modern infrastructure</p>
              </div>
            </div>
          </div>
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

export default ServicesPage;
