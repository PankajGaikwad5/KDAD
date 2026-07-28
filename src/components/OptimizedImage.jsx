import Image from 'next/image';

/**
 * Optimized Image Component with automatic lazy loading and blur placeholder
 * @param {Object} props - Component props
 * @param {string} props.src - Image source path
 * @param {string} props.alt - Alt text for accessibility and SEO
 * @param {number} props.width - Image width
 * @param {number} props.height - Image height
 * @param {boolean} props.priority - Whether to prioritize loading (for above-fold images)
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Inline styles
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  style = {},
  ...props
}) {
  return (
    <Image
      unoptimized
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      placeholder='blur'
      blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
      quality={90}
      className={className}
      style={style}
      {...props}
    />
  );
}
