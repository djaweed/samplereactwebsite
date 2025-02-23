import React from 'react';
import { Cloud, Users, Award, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      description: 'Cloud architecture expert with 15+ years experience in enterprise solutions.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      description: 'Former tech lead at major cloud providers, specialized in scalable systems.'
    },
    {
      name: 'Aisha Patel',
      role: 'Head of DevOps',
      description: 'DevOps pioneer with expertise in automation and cloud-native technologies.'
    }
  ];

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
            <Link to="/services" className="hover:text-yellow-500 transition-colors">Services</Link>
            <Link to="/about" className="text-yellow-500">About</Link>
            <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-yellow-100/90 mb-8">
            Founded in 2020, Fallstreak Cloud emerged from a vision to make cloud infrastructure more accessible and efficient for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-teal-900/30 py-24 border-y border-emerald-800/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-yellow-100/90 mb-6">
                At Fallstreak Cloud, we believe in democratizing cloud technology. Our mission is to empower organizations with scalable, secure, and cost-effective cloud solutions that drive innovation and growth.
              </p>
              <ul className="space-y-4">
                {[
                  'Delivering enterprise-grade solutions',
                  'Promoting cloud adoption best practices',
                  'Ensuring maximum security and reliability',
                  'Optimizing costs through FinOps'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <ArrowRight className="w-5 h-5 text-yellow-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-teal-900/50 p-6 rounded-xl border border-emerald-800/30">
                <Award className="w-12 h-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Certified Experts</h3>
                <p className="text-yellow-100/90">Top-tier certifications across major cloud platforms</p>
              </div>
              <div className="bg-teal-900/50 p-6 rounded-xl border border-emerald-800/30">
                <Users className="w-12 h-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Team</h3>
                <p className="text-yellow-100/90">Diverse professionals across time zones</p>
              </div>
              <div className="bg-teal-900/50 p-6 rounded-xl border border-emerald-800/30">
                <Building2 className="w-12 h-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Enterprise Focus</h3>
                <p className="text-yellow-100/90">Solutions for businesses of all sizes</p>
              </div>
              <div className="bg-teal-900/50 p-6 rounded-xl border border-emerald-800/30">
                <Cloud className="w-12 h-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cloud Native</h3>
                <p className="text-yellow-100/90">Built for modern infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-teal-900/50 p-6 rounded-xl border border-emerald-800/30">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-yellow-600 mb-4">{member.role}</p>
              <p className="text-yellow-100/90">{member.description}</p>
            </div>
          ))}
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

export default AboutPage;