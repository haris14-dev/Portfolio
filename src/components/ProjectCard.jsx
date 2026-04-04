import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectDetailsModal from './ProjectDetailsModal';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

/**
 * OPTIMIZED ProjectCard Component - INSTANT LOADING VERSION
 * 
 * PERFORMANCE FEATURES:
 * - Intersection Observer: Only renders when visible
 * - Eager Video Loading: Videos load and autoplay immediately
 * - Smooth transitions: 400ms fade for professional feel
 * - Optimized images: Pre-optimized PNG files for fast loading
 * - Instant preview: No hover delay - content ready immediately
 */
export default function ProjectCard({
  title,
  description,
  video,
  images = [],
  tech = [],
  github = null,
  opensourced = true,
  demo = null,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  
  // PERFORMANCE: Intersection Observer - Only render when visible
  const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  // PERFORMANCE: Autoplay video on mount for instant loading
  useEffect(() => {
    if (!videoRef.current) return;

    // Attempt autoplay
    videoRef.current.play().catch(() => {
      // Autoplay may be blocked by browser policies, that's fine
    });
  }, []);

  // Don't render if not visible (saves memory)
  if (!isVisible) {
    return (
      <div
        ref={containerRef}
        className="group h-full"
        style={{ minHeight: '400px' }}
      >
        {/* Placeholder while loading into viewport */}
      </div>
    );
  }

  return (
    <>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-50px' }}
        whileHover={{ y: -4 }}
        className="group h-full"
      >
        <div className="h-full flex flex-col bg-dark-secondary/60 backdrop-blur border border-gray-800/50 rounded-xl hover:border-accent-blue/30 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:shadow-blue-500/5">
          
          {/* PERFORMANCE: Fixed height prevents layout shift */}
          <div className="relative w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
            
            {/* Video - Always visible, eagerly loaded */}
            {video && (
              <div className="absolute inset-0">
                <video
                  ref={videoRef}
                  loop
                  muted
                  playsInline
                  autoPlay
                  preload="auto"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                >
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            )}
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="p-5 flex-grow flex flex-col">
            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-accent-blue transition-colors duration-300">
              {title}
            </h3>

            {/* Tech Stack - Compact */}
            <div className="flex flex-wrap gap-1.5 mb-4 flex-grow">
              {tech.slice(0, 3).map((tag, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 text-accent-blue border border-accent-blue/30 hover:border-accent-blue/60 transition-colors cursor-default whitespace-nowrap"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* View Details Button */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-sm hover:shadow-lg transition-all duration-300"
            >
              View Details
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Modal only renders when opened */}
      {isModalOpen && (
        <ProjectDetailsModal
          title={title}
          description={description}
          video={video}
          images={images}
          tech={tech}
          github={github}
          opensourced={opensourced}
          demo={demo}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
