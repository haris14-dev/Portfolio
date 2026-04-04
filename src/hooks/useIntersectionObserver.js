import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * PERFORMANCE: Custom hook for Intersection Observer
 * Loads media only when visible in viewport
 * Prevents rendering offscreen content
 */
export const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Once visible, stop observing (content is loaded)
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, isVisible];
};

/**
 * PERFORMANCE: Image placeholder component
 * Shows when image is loading
 */
export function ImageSkeleton() {
  return (
    <div className="w-full h-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse" />
  );
}

/**
 * PERFORMANCE: Video loading indicator
 * Shown while video is loading
 */
export function VideoPlaceholder({ title = 'Project Preview' }) {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block p-3 rounded-full bg-accent-blue/20 mb-2">
          <svg className="w-6 h-6 text-accent-blue animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm10 10H5v2a2 2 0 002 2h6a2 2 0 002-2v-2z" />
          </svg>
        </div>
        <p className="text-xs text-gray-400 font-medium">Hover to preview</p>
      </div>
    </div>
  );
}
