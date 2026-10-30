'use client'
import {useContentSettings} from './ContentSettings'
import Image from 'next/image'
import dimensions from '@/data/imageDimensions.json'

// Intrinsic dimensions reserve space; existing Tailwind classes keep each crop.
export default function MediaImage({ src, alt, sizes = '100vw', fetchPriority, loading, ...props }) {
  const {images}=useContentSettings()
  const replacement=images.find(image=>image.original===src)
  const imageSrc=replacement?.src || src
  const imageAlt=alt ? replacement?.alt || alt : alt
  const [width, height] = dimensions[imageSrc] || [1600, 1000]
  return <Image src={imageSrc} alt={imageAlt} width={width} height={height} sizes={sizes} fetchPriority={fetchPriority} loading={loading || (fetchPriority === 'high' ? 'eager' : 'lazy')} {...props} />
}

