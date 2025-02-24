import React, { useState } from 'react';
import { Cloud, Server, Settings, BarChart3, Code2, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FallstreakCloud = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: 'DevOps Services',
      icon: <Server className="w-12 h-12 mb-4 text-emerald-600" />,
      description: 'Streamline your development pipeline with our comprehensive DevOps solutions. We automate, optimize, and secure your delivery process.',
    },
    {
      title: 'Solution Architecture',
      icon: <Code2 className="w-12 h-12 mb-4 text-emerald-600" />,
      description: 'Design scalable, resilient systems that align with your business goals. Our architects bring years of experience in building enterprise solutions.',
    },
    {
      title: 'Cloud Engineering',
      icon: <Cloud className="w-12 h-12 mb-4 text-emerald-600" />,
      description: 'Transform your infrastructure with cloud-native solutions. We specialize in AWS, Azure, and GCP implementations.',
    },
    {
      title: 'FinOps',
      icon: <BarChart3 className="w-12 h-12 mb-4 text-emerald-600" />,
      description: 'Optimize your cloud spending while maintaining performance. Our FinOps practices ensure you get the most value from your cloud investment.',
    }
  ];

  return (
<div className="min-h-screen bg-gradient-to-b from-teal-950 to-emerald-950 text-white">
  {/* Hero Section */}
  <header className="container mx-auto px-6 py-16">
    <nav className="flex items-center justify-between mb-16">
      <div className="flex items-center space-x-2">
        <img src="/logo.webp" alt="Fallstreak Cloud Logo" className="w-8 h-8" />
        <span className="text-2xl font-bold">Fallstreak Cloud</span>
      </div>
      <div className="space-x-8">
        <Link to="/services" className="hover:text-yellow-500 transition-colors">Services</Link>
        <Link to="/tech" className="hover:text-yellow-500 transition-colors">Tech</Link>
        <Link to="/about" className="hover:text-yellow-500 transition-colors">About</Link>
        <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
      </div>
    </nav>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">
            Transform Your Cloud Journey
          </h1>
          <p className="text-xl text-yellow-100 mb-8">
            Expert cloud solutions that drive innovation, efficiency, and growth for your business
          </p>
          <Link to="/services" className="bg-yellow-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors">
            Explore Our Services
          </Link>
        </div>
      </header>

      {/* Services Section */}
<section className="container mx-auto px-6 py-24">
  <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {services.map((service) => (
      <motion.div
        key={service.title}
        className="bg-teal-900/50 p-6 rounded-xl transition-colors cursor-pointer border border-emerald-800/30"
        onMouseEnter={() => setActiveService(service.title)}
        onMouseLeave={() => setActiveService(null)}
        whileHover={{ backgroundColor: 'rgba(245, 158, 11, 0.2)' }}  // New hover color
      >
        <div className="flex flex-col items-center text-center">
          {service.icon}
          <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
          <p className="text-yellow-100/90">{service.description}</p>
          <AnimatePresence>
            {activeService === service.title && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4"
              >
                <Link
                  to="/services"
                  className="inline-block bg-yellow-600 px-4 py-2 rounded text-teal-950 font-bold hover:bg-yellow-500 transition-colors"
                >
                  Explore {service.title}
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* Why Choose Us Section */}
      <section className="bg-teal-900/30 py-24 border-y border-emerald-800/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Fallstreak Cloud</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Settings className="w-16 h-16 text-yellow-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-yellow-100/90">Tailored cloud strategies designed by certified professionals</p>
            </div>
            <div className="text-center">
              <Lock className="w-16 h-16 text-yellow-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Security First</h3>
              <p className="text-yellow-100/90">Enterprise-grade security measures to protect your assets</p>
            </div>
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-yellow-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Cost Optimization</h3>
              <p className="text-yellow-100/90">Maximize ROI with our FinOps expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="bg-teal-900/50 rounded-2xl p-12 max-w-4xl mx-auto border border-emerald-800/30">
          <h2 className="text-4xl font-bold text-center mb-8">Ready to Get Started?</h2>
          <p className="text-center text-yellow-100/90 mb-8">
            Contact us today to discuss how we can help transform your cloud infrastructure
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="bg-yellow-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors">
              Contact Us
            </Link>
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

export default FallstreakCloud;
