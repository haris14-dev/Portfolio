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
                I'm Haris Asif, a passionate Machine Learning and Deep Learning engineer with a proven track record
                of delivering high-impact AI solutions. My expertise lies in transforming complex business challenges
                into data-driven, intelligent systems.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With hands-on experience in computer vision, predictive analytics, and neural network optimization,
                I've helped businesses reduce costs, improve efficiency, and unlock new revenue streams through AI.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether it's building production-ready ML models, implementing real-time computer vision systems,
                or architecting end-to-end AI pipelines, I'm committed to delivering solutions that drive tangible
                business value.
              </p>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold hover:shadow-lg"
              >
                See my work →
              </motion.a>
            </motion.div>

            {/* Right - Stats & Info */}
            <motion.div variants={item} className="space-y-6">
              {[
                {
                  label: 'Specialization',
                  value: 'ML, DL, Computer Vision',
                },
                {
                  label: 'Experience',
                  value: '5+ years in production ML',
                },
                {
                  label: 'Approach',
                  value: 'Data-driven, Business-focused',
                },
                {
                  label: 'Mission',
                  value: 'Solving real problems with AI',
                },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="p-4 rounded-lg bg-dark-tertiary/50 border border-accent-blue/20 hover:border-accent-blue/50 transition-colors"
                >
                  <p className="text-gray-400 text-sm font-semibold mb-1">{stat.label}</p>
                  <p className="text-white text-lg">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
