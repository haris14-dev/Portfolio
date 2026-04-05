import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

/**
 * OPTIMIZED ProjectThumbnail Component
 * 
 * PERFORMANCE FEATURES:
 * - Displays static image by default (no video loading)
 * - Lazy loads thumbnail image
 * - Professional play button overlay
 * - Smooth hover animations
 * - Zero video preloading on initial view
 */
export default function ProjectThumbnail({
  thumbnail,
  title,
  onPlayClick,
  fallbackGradient = 'from-gray-800 to-gray-900',
}) {
  return (
    <motion.div
      className="relative w-full h-48 bg-gradient-to-br overflow-hidden group cursor-pointer"
      whileHover="hover"
      initial="initial"
      variants={{
        initial: { scale: 1 },
        hover: { scale: 1.02 },
      }}
      onClick={onPlayClick}
    >
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient}`} />

      {/* Thumbnail Image - Lazy Loaded */}
      {thumbnail && (
        <img
          src={thumbnail}
          alt={`${title} thumbnail`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
        />
      )}

      {/* Overlay Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"
        variants={{
          initial: { opacity: 0.3 },
          hover: { opacity: 0.6 },
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Play Button */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        variants={{
          initial: { opacity: 0.7, scale: 1 },
          hover: { opacity: 1, scale: 1.1 },
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple shadow-lg backdrop-blur-sm border border-white/20"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <Play
            size={32}
            className="text-white fill-white ml-1"
            strokeWidth={1.5}
          />
        </motion.div>
      </motion.div>

      {/* Bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
