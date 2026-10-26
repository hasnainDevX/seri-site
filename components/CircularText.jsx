'use client'
import dynamic from 'next/dynamic'
import useNearViewport from '@/hooks/useNearViewport'
const CircularTextVisual = dynamic(() => import('./CircularTextVisual'), { ssr: false })
export default function CircularText(props) {
  const [ref, ready] = useNearViewport({ desktopOnly: true })
  return <div ref={ref} className="hidden lg:block" style={{ width: props.size || 200, height: props.size || 200 }}>{ready && <CircularTextVisual {...props} />}</div>
}
