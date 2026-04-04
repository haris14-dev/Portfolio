import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({
  title,
  description,
  video,
  images = [],
  tech = [],
  github = null,
  demo = null,
}) {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="bg-dark-secondary/80 backdrop-blur rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800/50 hover:border-accent-blue/30 group"
    >
      {/* Video Section */}
      <div className="relative w-full aspect-video bg-black overflow-hidden">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            onError={handleVideoError}
            className="w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : null}

        {/* Fallback to first image if video fails */}
        {(videoError || !video) && images.length > 0 && (
          <img
            src={images[0]}
            alt={`${title} - fallback`}
            className="w-full h-full object-cover"
          />
        )}

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Screenshots Row */}
      {images.length > 0 && (
        <div className="px-6 py-4 bg-dark-primary/50 border-b border-gray-800/50">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                variants={imageVariants}
                whileHover="hover"
                className="flex-shrink-0"
              >
                <img
                  src={img}
                  alt={`${title} screenshot ${idx + 1}`}
                  className="h-20 rounded-lg shadow-md object-cover border border-gray-700/50 hover:border-accent-blue/50 transition-colors"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Project Details */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent-blue transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Tech Stack */}
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tech.map((tag, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 text-accent-blue border border-accent-blue/30 hover:border-accent-blue/60 transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-gray-800/50">
          {demo && (
            <motion.a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium text-sm hover:shadow-lg transition-all duration-300"
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
          )}
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-600 text-gray-300 font-medium text-sm hover:border-accent-blue/50 hover:text-accent-blue transition-all duration-300"
            >
              <Github size={16} />
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
