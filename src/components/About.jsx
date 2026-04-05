import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-dark-primary relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={item} className="text-center mb-16">
            <p className="text-accent-blue font-semibold mb-2">ABOUT ME</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who I am & what I do
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto" />
          </motion.div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <motion.div variants={item}>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm <strong>Haris Asif</strong>, an AI engineer obsessed with building systems that actually work in the real world. 
                My journey started with a simple question: <em>"How can AI solve business problems at scale?"</em>
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                <strong>My specialization:</strong> End-to-end machine learning pipelines, computer vision systems, 
                and intelligent automation. Whether it's predicting customer churn, detecting anomalies, or building recommendation engines, 
                I translate complex algorithms into production-ready solutions that drive measurable ROI.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                <strong>What drives me:</strong> I don't just build models—I solve problems. I thrive on understanding business constraints, 
                optimizing for real-world performance, and delivering systems that make an impact. From healthcare tech to e-commerce, 
                I've built ML solutions that improved efficiency, reduced costs, and unlocked new opportunities.
              </p>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold hover:shadow-lg shadow-md transition-all"
              >
                See case studies →
              </motion.a>
            </motion.div>

            {/* Right - Stats & Info */}
            <motion.div variants={item} className="space-y-6">
              {[
                {
                  icon: '🎯',
                  label: 'Expertise',
                  value: 'ML, DL, Computer Vision, NLP',
                },
                {
                  icon: '⚡',
                  label: 'Approach',
                  value: 'Data-driven, Production-focused',
                },
                {
                  icon: '💡',
                  label: 'Problem-Solving',
                  value: 'Real-world impact over theory',
                },
                {
                  icon: '🚀',
                  label: 'Delivery',
                  value: 'Scalable, Tested, Deployed',
                },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="p-5 rounded-lg bg-gradient-to-br from-dark-secondary/50 to-dark-tertiary/50 border border-accent-blue/20 hover:border-accent-blue/50 transition-all"
                >
                  <p className="text-2xl mb-2">{stat.icon}</p>
                  <p className="text-gray-400 text-sm font-semibold mb-1 uppercase tracking-wide">{stat.label}</p>
                  <p className="text-white text-base font-medium">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
