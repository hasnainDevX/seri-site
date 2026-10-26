'use client'

import { useEffect } from 'react'

export default function useOutsideClick(ref, onOutsideClick) {
  useEffect(() => {
    function handlePointerDown(event) {
      const node = ref.current
      if (!node || node.contains(event.target)) return
      onOutsideClick(event)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [ref, onOutsideClick])
}