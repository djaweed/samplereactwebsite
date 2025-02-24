import React from 'react';
import { Cloud, Server, Settings, Code, Database, Layers, ArrowRight, Shield, Cpu, BarChart2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  { 
    name: 'Cloud Solutions Architecture', 
    description: 'Designing scalable, secure, and cost-efficient cloud environments.',
    detailedDescription: 'Our Cloud Solutions Architecture service helps you design robust and secure cloud infrastructures that are cost-effective and scalable. We follow industry best practices for security, reliability, and performance to ensure that your cloud environment supports your business growth.',
    icon: Cloud 
  },
  { 
    name: 'Cloud Engineering', 
    description: 'Building and managing cloud-native applications and infrastructure.',
    detailedDescription: 'Cloud Engineering involves the implementation and management of your cloud infrastructure. Our team ensures smooth integration and deployment, optimizes performance, and leverages modern technologies to keep your systems agile and resilient.',
    icon: Server 
  },
  { 
    name: 'DevOps', 
    description: 'Implementing CI/CD pipelines, automation, and infrastructure as code.',
    detailedDescription: 'Our DevOps service streamlines your software development lifecycle with automation and continuous delivery practices. We set up robust CI/CD pipelines and leverage infrastructure-as-code to reduce downtime and improve product quality.',
    icon: Settings 
  },
 
  { 
    name: 'Data Engineering', 
    description: 'Developing data pipelines and optimizing big data workflows.',
    detailedDescription: 'Data Engineering services build robust data pipelines to transform raw data into actionable insights. We integrate cutting-edge tools and best practices to ensure data accuracy, scalability, and secure management across platforms.',
    icon: Database 
  },
  { 
    name: 'Automation', 
    description: 'Streamlining IT operations and workflows through automation.',
    detailedDescription: 'Our Automation services reduce manual intervention and optimize your IT operations by implementing automated workflows. This enhances efficiency, reduces errors, and enables real-time system monitoring and management.',
    icon: Code 
  },
  { 
    name: 'Solution Architecture', 
    description: 'Crafting tailored solutions that align with business objectives.',
    detailedDescription: 'Solution Architecture involves designing customized IT solutions that perfectly align with your business objectives. We conduct thorough analyses, develop strategic plans, and implement solutions that drive innovation and competitive advantage.',
    icon: Layers 
  },
  { 
    name: 'FinOps', 
    description: 'Optimize your cloud spending and improve financial efficiency.', 
    detailedDescription: 'Our FinOps service focuses on aligning cloud expenditures with business goals. We work closely with both finance and engineering teams to implement cost management practices, track usage, and optimize spending—ensuring you get maximum value from your cloud investments.', 
    icon: BarChart2
  },
  { 
    name: 'Security', 
    description: 'Protect your infrastructure with robust cybersecurity measures.', 
    detailedDescription: 'Our Security services provide enterprise-grade protection for your digital assets. We implement multi-layered security protocols, continuous monitoring, vulnerability assessments, and compliance measures to safeguard your infrastructure and data against emerging threats.', 
    icon: Shield 
  },
  { 
    name: 'A.I.', 
    description: 'Leverage artificial intelligence to drive innovation and efficiency.', 
    detailedDescription: 'Our A.I. services help you harness the power of machine learning and data analytics to transform your operations. From predictive analytics and process automation to natural language processing, we design custom A.I. solutions that unlock insights and improve decision-making across your organization.', 
    icon: Cpu
  },
];

const ServicesPage = () => {
  const location = useLocation();

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
            <Link to="/tech" className="hover:text-yellow-500 transition-colors">Tech</Link>
            <Link to="/about" className="hover:text-yellow-500 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <motion.h1 
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>
        <motion.p 
          className="text-xl text-yellow-100/90 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Unlock the power of the cloud with our expert solutions tailored for your business needs.
        </motion.p>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-teal-900/50 p-6 rounded-xl border border-emerald-800/30 text-center transform transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <service.icon className="w-12 h-12 text-yellow-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
            <p className="text-yellow-100/90 mb-4">{service.description}</p>
            <details className="text-left">
              <summary className="cursor-pointer text-yellow-300 hover:underline">Learn More</summary>
              <p className="mt-2 text-yellow-100/80 text-sm">{service.detailedDescription}</p>
            </details>
          </motion.div>
        ))}
      </section>

      {/* Global Get in Touch Button */}
      <section className="container mx-auto px-6 py-12 text-center">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/contact" className="inline-block bg-yellow-600 text-teal-950 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition-colors">
            Get in Touch
          </Link>
        </motion.div>
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
