'use client'
import MediaImage from './MediaImage'
import useNearViewport from '@/hooks/useNearViewport'
export default function DeferredBackdrop(props) {
  const [ref, ready] = useNearViewport()
  return <div ref={ref} className="absolute inset-0">{ready && <MediaImage {...props} />}</div>
}
