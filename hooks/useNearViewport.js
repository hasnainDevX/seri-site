'use client'
import { useEffect, useRef, useState } from 'react'
export default function useNearViewport({ desktopOnly = false } = {}) {
  const ref = useRef(null)
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node || ready) return
    const media = window.matchMedia('(min-width: 1024px)')
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setReady(true); observer.disconnect() }
    }, { rootMargin: '600px' })
    const observe = () => { observer.disconnect(); if (!desktopOnly || media.matches) observer.observe(node) }
    observe()
    media.addEventListener('change', observe)
    return () => { observer.disconnect(); media.removeEventListener('change', observe) }
  }, [desktopOnly, ready])
  return [ref, ready]
}
