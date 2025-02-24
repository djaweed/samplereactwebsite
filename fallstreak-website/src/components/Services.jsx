import React from 'react';
import { Cloud, Server, Settings, Code, Database, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { name: 'Cloud Solutions Architecture', description: 'Designing scalable, secure, and cost-efficient cloud environments.', icon: Cloud },
  { name: 'Cloud Engineering', description: 'Building and managing cloud-native applications and infrastructure.', icon: Server },
  { name: 'DevOps', description: 'Implementing CI/CD pipelines, automation, and infrastructure as code.', icon: Settings },
  { name: 'Data Engineering', description: 'Developing data pipelines and optimizing big data workflows.', icon: Database },
  { name: 'Automation', description: 'Streamlining IT operations and workflows through automation.', icon: Code },
  { name: 'Solution Architecture', description: 'Crafting tailored solutions that align with business objectives.', icon: Layers },
];

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
            <Link to="/tech" className="hover:text-yellow-500 transition-colors">Tech</Link>
            <Link to="/about" className="hover:text-yellow-500 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-yellow-100/90 mb-8">
          Unlock the power of the cloud with our expert solutions tailored for your business needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-teal-900/50 p-6 rounded-xl border border-emerald-800/30 text-center">
            <service.icon className="w-12 h-12 text-yellow-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
            <p className="text-yellow-100/90 mb-4">{service.description}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-teal-950 py-12 border-t border-emerald-800/30">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cloud className="w-6 h-6 text-yellow-600" />
            <span className="text-xl font-bold">Fallstreak Cloud</span>
          </div>
          <div className="text-yellow-100/70">
            © 2025 Fallstreak Cloud. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
