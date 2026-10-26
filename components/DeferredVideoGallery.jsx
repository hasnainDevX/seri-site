'use client'
import dynamic from 'next/dynamic'
import useNearViewport from '@/hooks/useNearViewport'
const VideoGallery = dynamic(() => import('./VideoGallery'), { ssr: false })
export default function DeferredVideoGallery({ clips }) {
  const [ref, ready] = useNearViewport()
  return <div ref={ref} className="min-h-[568px] md:min-h-[684px]">{ready && <VideoGallery clips={clips} />}</div>
}
