import { ScrollVelocityContainer, ScrollVelocityRow } from '../registry/magicui/scroll-based-velocity';
import { motion } from 'framer-motion';

/**
 * ScrollShowcase Component
 * 
 * Displays animated project showcase images with scroll-based velocity effect
 * Images move based on user scroll speed for engaging parallax animation
 * 
 * PERFORMANCE:
 * - Lazy loading on all images
 * - Optimized for mobile with responsive sizing
 * - Momentum-based scrolling for smooth 60 FPS
 */
export default function ScrollShowcase() {
  // Project showcase images - Mix of AI/ML visuals and tech
  const SHOWCASE_ROW_A = [
    {
      src: "https://images.unsplash.com/photo-1677442d019cecf8c86a4198b73e69b24be82f795?q=80&w=2070&auto=format&fit=crop",
      alt: "Machine Learning Dashboard",
      title: "ML Analytics"
    },
    {
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      alt: "Data Science Visualization",
      title: "Data Science"
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      alt: "AI Neural Networks",
      title: "Deep Learning"
    },
    {
      src: "https://images.unsplash.com/photo-1654165485551-83f583bb20be?q=80&w=2070&auto=format&fit=crop",
      alt: "Computer Vision",
      title: "Computer Vision"
    },
  ];

  const SHOWCASE_ROW_B = [
    {
      src: "https://images.unsplash.com/photo-1488229297570-58019aafae23?q=80&w=2070&auto=format&fit=crop",
      alt: "Web Development",
      title: "Full Stack Dev"
    },
    {
      src: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?q=80&w=2070&auto=format&fit=crop",
      alt: "Python Programming",
      title: "Python & ML"
    },
    {
      src: "https://images.unsplash.com/photo-1531746790731-6c087fecd65b?q=80&w=2070&auto=format&fit=crop",
      alt: "Cloud Computing",
      title: "Cloud Tech"
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
      alt: "AI Integration",
      title: "AI Solutions"
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-dark-primary to-dark-secondary/50 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-transparent to-accent-purple/5 pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <p className="text-accent-blue font-semibold mb-2">EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Scroll to Explore My Tech Stack
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and domains I specialize in - Scroll to see velocity-based animations in action
          </p>
        </motion.div>

        {/* Scroll Velocity Component */}
        <ScrollVelocityContainer className="w-full">
          <ScrollVelocityRow baseVelocity={5} direction={1} className="py-6">
            {SHOWCASE_ROW_A.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative mx-3 md:mx-4 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:shadow-accent-blue/20 transition-all duration-300"
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.alt}
                  width={280}
                  height={160}
                  loading="lazy"
                  decoding="async"
                  className="h-36 md:h-40 w-52 md:w-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Title on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-end justify-start p-4"
                >
                  <p className="text-white font-semibold text-sm md:text-base">
                    {item.title}
                  </p>
                </motion.div>

                {/* Blue accent border on hover */}
                <div className="absolute inset-0 border-2 border-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </motion.div>
            ))}
          </ScrollVelocityRow>

          {/* Second row - opposite direction */}
          <ScrollVelocityRow baseVelocity={5} direction={-1} className="py-6">
            {SHOWCASE_ROW_B.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative mx-3 md:mx-4 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:shadow-accent-purple/20 transition-all duration-300"
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.alt}
                  width={280}
                  height={160}
                  loading="lazy"
                  decoding="async"
                  className="h-36 md:h-40 w-52 md:w-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Title on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-end justify-start p-4"
                >
                  <p className="text-white font-semibold text-sm md:text-base">
                    {item.title}
                  </p>
                </motion.div>

                {/* Purple accent border on hover */}
                <div className="absolute inset-0 border-2 border-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </motion.div>
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>

        {/* Gradient overlays for seamless effect */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-dark-primary to-transparent pointer-events-none z-20" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-dark-primary to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
}
