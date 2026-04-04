import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MediaLoader({ src, alt, type = 'image', className = '', isVisible = true }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Preload image/video if visible
    if (!isVisible) return;

    if (type === 'image') {
      const img = new Image();
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setError(true);
      img.src = src;
    }
  }, [src, type, isVisible]);

  if (!isVisible) return null;

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-800 ${className}`}>
        <span className="text-gray-500 text-sm">Failed to load</span>
      </div>
    );
  }

  return (
    <>
      {/* Skeleton Loading */}
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse ${className}`}
        />
      )}

      {/* Media */}
      <motion.img
        key={src}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        loading="lazy"
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setIsLoaded(true)}
      />
    </>
  );
}
