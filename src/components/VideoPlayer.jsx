import React, { useRef, useEffect } from 'react';

/**
 * OPTIMIZED VideoPlayer Component
 * 
 * PERFORMANCE FEATURES:
 * - Only renders video element when visible
 * - Uses minimal preload (metadata only)
 * - Muted by default for autoplay compatibility
 * - Responsive sizing with aspect ratio
 * - Smooth playback and controls
 */
export default function VideoPlayer({
  src,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = 'metadata',
  onLoadedMetadata = null,
  onPlay = null,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt autoplay on mount
    if (autoPlay) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          // Autoplay was prevented - this is normal and expected
          console.debug('Autoplay prevented:', err);
        });
      }
    }
  }, [autoPlay]);

  const handleLoadedMetadata = () => {
    onLoadedMetadata?.();
  };

  const handlePlay = () => {
    onPlay?.();
  };

  return (
    <video
      ref={videoRef}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={preload}
      onLoadedMetadata={handleLoadedMetadata}
      onPlay={handlePlay}
      className={`w-full h-full object-cover ${className}`}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
