import React from 'react';
import { motion } from 'framer-motion';

/**
 * REUSABLE TechStack Component
 * 
 * Renders a clean, consistent tech stack display as horizontal pill badges.
 * Used across ProjectCard and ProjectDetailsModal for uniform styling.
 * 
 * FEATURES:
 * ✅ Clean horizontal pill layout
 * ✅ Responsive flex wrapping
 * ✅ Consistent spacing and sizing
 * ✅ No vertical stretching or distortion
 * ✅ Support for "+X more" truncation
 * ✅ Smooth hover animations
 * ✅ Works on all screen sizes
 * 
 * @param {Array} tech - Array of technology strings (e.g., ["React", "Node.js"])
 * @param {Number} maxVisible - Maximum number of tags to show (default: all)
 * @param {String} variant - Display variant: "card" (3 tags) or "modal" (all tags)
 * @param {String} gap - Spacing between tags: "gap-1.5" (card) or "gap-2" (modal)
 */
export default function TechStack({
  tech = [],
  maxVisible = null,
  variant = 'card',
  gap = 'gap-1.5',
}) {
  if (!tech || tech.length === 0) return null;

  // Determine how many tags to show
  const displayCount = maxVisible || (variant === 'card' ? 3 : tech.length);
  const visibleTech = tech.slice(0, displayCount);
  const hiddenCount = tech.length - displayCount;
  const showMore = hiddenCount > 0;

  // Styling based on variant
  const variantStyles = {
    card: {
      containerClass: `flex flex-wrap ${gap} mb-4 flex-grow`,
      tagClass: 'px-2.5 py-1 text-xs',
      moreClass: 'px-2.5 py-1 text-xs',
    },
    modal: {
      containerClass: `flex flex-wrap ${gap}`,
      tagClass: 'px-3 py-1.5 text-xs sm:text-sm',
      moreClass: 'px-3 py-1.5 text-xs sm:text-sm',
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={styles.containerClass}>
      {visibleTech.map((tag, idx) => (
        <motion.span
          key={idx}
          initial={variant === 'modal' ? { opacity: 0, scale: 0.8 } : undefined}
          animate={variant === 'modal' ? { opacity: 1, scale: 1 } : undefined}
          transition={
            variant === 'modal'
              ? { delay: idx * 0.03 }
              : undefined
          }
          whileHover={{ scale: 1.08, y: -2 }}
          className={`${styles.tagClass} font-medium rounded-full bg-gradient-to-r from-accent-blue/15 to-accent-purple/15 text-accent-blue border border-accent-blue/25 hover:border-accent-blue/50 transition-all cursor-default whitespace-nowrap backdrop-blur-sm inline-flex items-center h-fit`}
        >
          {tag}
        </motion.span>
      ))}

      {/* +X more indicator */}
      {showMore && (
        <span
          className={`${styles.moreClass} font-medium text-gray-400 inline-flex items-center h-fit`}
        >
          +{hiddenCount} more
        </span>
      )}
    </div>
  );
}
