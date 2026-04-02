import { motion } from 'framer-motion';
import { ArrowRight, Code2, Zap } from 'lucide-react';

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
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          I build <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue bg-clip-text text-transparent animate-pulse-glow">
            AI-powered solutions
          </span>{' '}
          that solve real business problems
        </motion.h1>

        {/* Subtext */}
        <motion.p variants={item} className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Machine Learning & Deep Learning Engineer specializing in computer vision, predictive analytics,
          and intelligent automation. I transform complex data into actionable insights and scalable systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 30px 70px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold flex items-center justify-center gap-2 hover:shadow-2xl transition-all group shadow-xl"
          >
            View My Work
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
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-lg border-2 border-gray-500/50 text-white font-semibold hover:border-accent-blue hover:text-accent-blue transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Code2 size={20} />
            Let's talk
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div variants={item} className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
          {[
            { number: '10+', label: 'AI/ML Projects' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
                {stat.number}
              </p>
              <p className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
