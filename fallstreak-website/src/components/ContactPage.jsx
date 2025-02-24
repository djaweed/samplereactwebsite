import React, { useState } from 'react';
import { Cloud, Users, Award, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState(""); // State to hold submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:3500/send-email", { // Backend endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-teal-900/50 border border-emerald-800/30"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-teal-900/50 border border-emerald-800/30"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-teal-900/50 border border-emerald-800/30"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-teal-900/50 border border-emerald-800/30"
              rows="4"
            />
            <button
              type="submit"
              className="w-full py-3 bg-yellow-600 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Send Message
            </button>
          </form>
          <p className="text-center mt-4 text-lg">{status}</p>
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
