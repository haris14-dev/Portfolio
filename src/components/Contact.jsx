import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mailbox API - Contact form submission
    const mailboxUrl = `https://formspree.io/f/xeoqeqrq`;

    fetch(mailboxUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((err) => console.error('Form submission error:', err));
  };

  const socialLinks = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/923412133616',
      value: 'Message on WhatsApp',
      cta: true,
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:Harisasif761@gmail.com',
      value: 'Harisasif761@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/haris-asif-4b314b375/',
      value: 'Connect on LinkedIn',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/haris14-dev',
      value: 'View on GitHub',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-secondary/50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl opacity-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-blue font-semibold mb-2">LET'S CONNECT</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to build something impactful?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Whether you have a project to discuss, want to explore collaboration opportunities, or have a question—I'm here to help. Reach out instantly through your preferred channel.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={item}>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                Choose your preferred way to connect. I'm available for consultations, project discussions, and collaboration opportunities.
              </p>
            </motion.div>

            {/* Social Links */}
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              const isWhatsApp = social.label === 'WhatsApp';
              return (
                <motion.a
                  key={idx}
                  variants={item}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 12, boxShadow: isWhatsApp ? '0 20px 50px rgba(34, 197, 94, 0.4)' : '0 20px 50px rgba(59, 130, 246, 0.2)' }}
                  className={`flex items-center gap-4 p-6 rounded-2xl transition-all group backdrop-blur-sm ${
                    isWhatsApp
                      ? 'bg-gradient-to-br from-green-600/20 to-green-700/20 border border-green-600/40 hover:border-green-500/80'
                      : 'bg-gradient-to-br from-dark-secondary/80 to-dark-tertiary/80 border border-dark-tertiary/60 hover:border-accent-blue/40'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all group-hover:shadow-lg ${
                    isWhatsApp
                      ? 'bg-gradient-to-br from-green-500/30 to-green-600/30 group-hover:from-green-500/50 group-hover:to-green-600/50'
                      : 'bg-gradient-to-br from-accent-blue/25 to-accent-purple/25 group-hover:from-accent-blue/40 group-hover:to-accent-purple/40'
                  }`}>
                    <Icon className={`w-7 h-7 ${isWhatsApp ? 'text-green-400' : 'text-accent-blue'}`} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{social.label}</p>
                    <p className="text-white font-medium">{social.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-dark-secondary/80 to-dark-tertiary/80 border border-dark-tertiary/60 hover:border-accent-blue/30 transition-all backdrop-blur-sm shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-gray-400 mb-6">I'll respond within 24 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-dark-tertiary text-white placeholder-gray-500 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-dark-tertiary text-white placeholder-gray-500 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-dark-tertiary text-white placeholder-gray-500 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all"
                  placeholder="Project inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-dark-tertiary text-white placeholder-gray-500 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 text-sm text-center"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
