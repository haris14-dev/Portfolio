import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import VideoPlayer from './VideoPlayer';
import TechStack from './TechStack';

/**
 * OPTIMIZED ProjectDetailsModal Component
 * 
 * PERFORMANCE FEATURES:
 * ✅ Video loads ONLY when modal opens (lazy loading)
 * ✅ ESC key support for closing
 * ✅ Click outside modal to close
 * ✅ Lazy loading for screenshot images
 * ✅ Optimized animations with Framer Motion
 * ✅ Responsive design for all devices
 * ✅ Professional dark theme
 */
export default function ProjectDetailsModal({
  title,
  description,
  video,
  images = [],
  tech = [],
  github = null,
  opensourced = true,
  demo = null,
  onClose,
}) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // PERFORMANCE: Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Handle ESC key to close modal
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    // Handle keyboard navigation in lightbox
    const handleKeyDown = (e) => {
      if (selectedImageIndex !== null) {
        if (e.key === 'ArrowLeft') {
          handlePrevImage();
        } else if (e.key === 'ArrowRight') {
          handleNextImage();
        }
      }
    };

    window.addEventListener('keydown', handleEscKey);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscKey);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex, onClose]);

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Close lightbox when pressing escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && selectedImageIndex !== null) {
        setSelectedImageIndex(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedImageIndex]);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', damping: 25, stiffness: 300 },
    },
    exit: { opacity: 0, scale: 0.95, y: 20 },
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop - Click outside to close */}
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-dark-secondary/95 to-dark-primary/80 backdrop-blur-xl border border-gray-700/40 shadow-2xl"
        >
          {/* Close Button - Always visible */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.15, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="sticky top-4 right-4 z-20 p-2.5 rounded-full bg-gradient-to-r from-accent-blue/30 to-accent-purple/30 border border-accent-blue/40 hover:from-accent-blue/50 hover:to-accent-purple/50 text-accent-blue hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm"
            title="Close (ESC)"
          >
            <X size={22} strokeWidth={2.5} />
          </motion.button>

          <div className="p-6 sm:p-8 space-y-6">
            {/* VIDEO SECTION - Lazy loaded */}
            {video && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative w-full rounded-xl overflow-hidden bg-black shadow-lg"
              >
                <div className="aspect-video relative bg-gradient-to-br from-gray-800 to-black">
                  {/* Video Player - Only renders when modal is open */}
                  <VideoPlayer
                    src={video}
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    preload="metadata"
                  />
                </div>
              </motion.div>
            )}
            {/* TITLE SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-accent-blue to-accent-purple bg-clip-text text-transparent">
                {title}
              </h2>
            </motion.div>

            {/* DESCRIPTION SECTION */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-gray-300 text-base leading-relaxed"
            >
              {description}
            </motion.p>

            {/* SCREENSHOTS SECTION */}
            {images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h3 className="text-sm font-bold text-transparent bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text uppercase tracking-widest mb-4">
                  📸 Screenshots
                </h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      whileHover={{ scale: 1.08, y: -4 }}
                      onClick={() => setSelectedImageIndex(idx)}
                      className="relative rounded-lg overflow-hidden border border-gray-700/50 hover:border-accent-blue/60 transition-all duration-300 cursor-pointer group"
                    >
                      {/* Lazy Load Image */}
                      <img
                        src={img}
                        alt={`${title} screenshot ${idx + 1}`}
                        loading="lazy"
                        className="w-full h-32 sm:h-40 object-cover group-hover:brightness-125 transition-all duration-300"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TECH STACK SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <h3 className="text-sm font-bold text-transparent bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text uppercase tracking-widest mb-4">
                🛠️ Tech Stack
              </h3>
              <TechStack tech={tech} variant="modal" gap="gap-2" />
            </motion.div>

            {/* ACTION BUTTONS SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-700/40"
            >
              {demo && (
                <motion.a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-sm hover:shadow-lg hover:shadow-accent-blue/30 transition-all duration-300"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </motion.a>
              )}
              {github && (
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-600 text-gray-300 font-semibold text-sm hover:border-accent-blue/60 hover:text-accent-blue transition-all duration-300 hover:bg-accent-blue/5"
                >
                  <Github size={18} />
                  GitHub
                </motion.a>
              )}
              {!opensourced && (
                <div className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-700 text-gray-400 font-semibold text-sm bg-gray-900/40">
                  🔒 Not Open Sourced
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* LIGHTBOX MODAL FOR SCREENSHOTS */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedImageIndex(null)}
                whileHover={{ scale: 1.15, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -top-16 right-0 z-10 p-2.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-lg text-white transition-all duration-300"
                title="Close (ESC)"
              >
                <X size={24} strokeWidth={2.5} />
              </motion.button>

              {/* Full-Size Image */}
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={images[selectedImageIndex]}
                alt={`Screenshot ${selectedImageIndex + 1}`}
                loading="lazy"
                className="w-full rounded-lg shadow-2xl border border-accent-blue/20"
              />

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <motion.button
                    onClick={handlePrevImage}
                    whileHover={{ scale: 1.15, x: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 p-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-lg text-white transition-all duration-300"
                    title="Previous (←)"
                  >
                    <ChevronLeft size={28} strokeWidth={2.5} />
                  </motion.button>

                  <motion.button
                    onClick={handleNextImage}
                    whileHover={{ scale: 1.15, x: 4 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 p-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-lg text-white transition-all duration-300"
                    title="Next (→)"
                  >
                    <ChevronRight size={28} strokeWidth={2.5} />
                  </motion.button>

                  {/* Image Counter */}
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-gray-300 text-sm font-bold tracking-wide">
                    {selectedImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}
