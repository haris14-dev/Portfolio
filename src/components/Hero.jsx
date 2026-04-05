import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Meteors } from '../registry/magicui/meteors';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-20 md:pt-0 flex items-center justify-center">
      {/* Meteors background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Meteors number={30} />
      </div>

      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-blue/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl opacity-20" />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={item} className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-accent-blue/30">
            <Zap size={16} className="text-accent-blue" />
            <span className="text-sm text-gray-300">Available for opportunities</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
        >
          AI Engineer{' '}
          <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue bg-clip-text text-transparent animate-pulse-glow">
            Building Real-World ML Systems
          </span>
        </motion.h1>

        {/* Strong value proposition */}
        <motion.div variants={item} className="mb-8 px-4 sm:px-0">
          <p className="text-xl md:text-2xl font-semibold text-accent-blue mb-3">
            I solve problems, not just write code.
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Specialized in building production ML systems, computer vision applications, and intelligent automation 
            that deliver measurable business impact—from concept to deployment.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 30px 70px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold flex items-center justify-center gap-2 hover:shadow-2xl transition-all group shadow-xl"
          >
            ✨ View Projects
            <motion.div
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.15)', borderColor: 'rgba(139, 92, 246, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-lg border-2 border-accent-purple/40 text-white font-semibold hover:border-accent-purple/80 hover:text-accent-purple transition-all duration-300 flex items-center justify-center gap-2 hover:bg-accent-purple/5"
          >
            💼 Hire Me
          </motion.a>
        </motion.div>

        {/* Stats - Trust Signals */}
        <motion.div variants={item} className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mt-8">
          {[
            { number: '6+', label: 'ML Projects' },
            { number: '94%+', label: 'Avg Accuracy' },
            { number: '100%', label: 'Delivery' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 rounded-lg bg-gradient-to-br from-dark-secondary/40 to-dark-tertiary/40 border border-accent-blue/10 hover:border-accent-blue/30 transition-all">
              <p className="text-xl md:text-3xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
                {stat.number}
              </p>
              <p className="text-xs md:text-sm text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
