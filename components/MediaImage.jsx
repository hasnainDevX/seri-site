import Image from 'next/image'
import dimensions from '@/data/imageDimensions.json'

// Intrinsic dimensions reserve space; existing Tailwind classes keep each crop.
export default function MediaImage({ src, alt, sizes = '100vw', fetchPriority, loading, ...props }) {
  const [width, height] = dimensions[src] || [1600, 1000]
  return <Image src={src} alt={alt} width={width} height={height} sizes={sizes} fetchPriority={fetchPriority} loading={loading || (fetchPriority === 'high' ? 'eager' : 'lazy')} {...props} />
}
