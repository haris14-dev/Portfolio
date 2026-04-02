import { motion } from 'framer-motion';
import { Lightbulb, Zap, Brain, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI & ML Solutions',
      description: 'Build intelligent systems with machine learning and deep learning. From model development to production deployment, I create solutions that scale.',
      features: ['Model Architecture', 'Algorithm Optimization', 'Real-time Processing'],
    },
    {
      icon: Zap,
      title: 'Computer Vision',
      description: 'Develop cutting-edge computer vision systems for image recognition, object detection, and real-time video analysis.',
      features: ['Image Classification', 'Object Detection', 'Gesture Recognition'],
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Transform data into actionable insights. Predict customer behavior, optimize processes, and make data-driven decisions.',
      features: ['Churn Prediction', 'Trend Analysis', 'Forecasting'],
    },
    {
      icon: Lightbulb,
      title: 'Intelligent Automation',
      description: 'Automate complex business processes with AI. Reduce manual work, improve accuracy, and accelerate operations.',
      features: ['Process Automation', 'Workflow Optimization', 'System Integration'],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-dark-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-blue font-semibold mb-2">SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I Can Do For You
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I offer comprehensive AI and ML solutions tailored to transform your business and drive measurable results.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-6" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-dark-secondary/80 to-dark-tertiary/80 border border-dark-tertiary/60 hover:border-accent-blue/40 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Background animation */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.15 }}
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-blue/25 to-accent-purple/25 flex items-center justify-center mb-6 group-hover:from-accent-blue/35 group-hover:to-accent-purple/35 transition-all shadow-lg"
                  >
                    <Icon className="w-8 h-8 text-accent-blue" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIdx) => (
                      <motion.li
                        key={featureIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIdx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-gray-300 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 mt-16 pt-8 border-t border-dark-tertiary"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              Have a project in mind?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's discuss how I can help you achieve your business goals with AI and ML.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Schedule a Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
