import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      category: 'Machine Learning & AI',
      skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Transfer Learning', 'Model Optimization'],
      icon: '🤖',
    },
    {
      category: 'Computer Vision',
      skills: ['CNNs', 'Object Detection', 'Image Classification', 'Hand Gesture Recognition', 'Video Analysis'],
      icon: '👁️',
    },
    {
      category: 'Tools & Frameworks',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'NumPy', 'Pandas'],
      icon: '⚙️',
    },
    {
      category: 'Data & Analytics',
      skills: ['Data Analysis', 'EDA', 'Data Visualization', 'Statistical Analysis', 'Feature Engineering'],
      icon: '📊',
    },
    {
      category: 'Backend & Integration',
      skills: ['Python', 'FastAPI', 'Flask', 'REST APIs', 'Model Deployment'],
      icon: '🔧',
    },
    {
      category: 'Other Skills',
      skills: ['Problem Solving', 'Research', 'Technical Writing', 'Mentoring', 'Agile/Scrum'],
      icon: '💡',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-dark-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-blue font-semibold mb-2">EXPERTISE</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -8, boxShadow: '0 30px 60px rgba(59, 130, 246, 0.25)' }}
              onMouseEnter={() => setHoveredCategory(idx)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-dark-secondary/80 to-dark-tertiary/80 border border-dark-tertiary/60 hover:border-accent-blue/40 transition-all duration-300 group cursor-pointer backdrop-blur-sm"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity\" />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      initial={{ width: '0%' }}
                      whileInView={{
                        width: hoveredCategory === idx ? '100%' : '80%',
                      }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Looking for specific expertise? Let's discuss your project requirements.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-lg bg-dark-tertiary border border-accent-blue/50 text-white font-semibold hover:bg-accent-blue/10 transition-all duration-300"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
