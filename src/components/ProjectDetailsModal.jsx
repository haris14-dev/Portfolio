import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

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

  useEffect(() => {
    // Prevent scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

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
        {/* Backdrop */}
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-dark-secondary/95 backdrop-blur border border-gray-700/50 shadow-2xl"
        >
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-dark-primary/60 hover:bg-accent-blue/20 text-gray-300 hover:text-accent-blue transition-colors"
          >
            <X size={20} />
          </motion.button>

          <div className="p-6 sm:p-8">
            {/* Video - Larger */}
            {video && (
              <div className="relative w-full mb-6 rounded-xl overflow-hidden bg-black">
                <div className="aspect-video">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              </div>
            )}

            {/* Title */}
            <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>

            {/* Description */}
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              {description}
            </p>

            {/* Screenshots Grid */}
            {images.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Screenshots
                </h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedImageIndex(idx)}
                      className="relative rounded-lg overflow-hidden border border-gray-700/50 hover:border-accent-blue/50 transition-colors cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`${title} screenshot ${idx + 1}`}
                        className="w-full h-32 sm:h-40 object-cover hover:brightness-110 transition-all"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {tech.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 text-accent-blue border border-accent-blue/40 hover:border-accent-blue/60 transition-all"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-700/50">
              {demo && (
                <motion.a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold hover:shadow-lg transition-all"
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
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-600 text-gray-300 font-semibold hover:border-accent-blue/50 hover:text-accent-blue transition-all"
                >
                  <Github size={18} />
                  GitHub
                </motion.a>
              )}
              {!opensourced && (
                <div className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-600 text-gray-400 font-semibold bg-gray-900/50">
                  Not Open Sourced Yet
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal for Screenshots */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
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
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                className="absolute -top-12 right-0 z-10 p-2 rounded-lg bg-accent-blue hover:bg-accent-blue/80 text-white transition-colors"
              >
                <X size={24} />
              </motion.button>

              {/* Image */}
              <img
                src={images[selectedImageIndex]}
                alt={`Screenshot ${selectedImageIndex + 1}`}
                className="w-full rounded-lg shadow-2xl"
              />

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <motion.button
                    onClick={handlePrevImage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-3 rounded-lg bg-accent-blue hover:bg-accent-blue/80 text-white transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </motion.button>

                  <motion.button
                    onClick={handleNextImage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-3 rounded-lg bg-accent-blue hover:bg-accent-blue/80 text-white transition-colors"
                  >
                    <ChevronRight size={24} />
                  </motion.button>

                  {/* Image Counter */}
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-gray-300 text-sm font-semibold">
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
