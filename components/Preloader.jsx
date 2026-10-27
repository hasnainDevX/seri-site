'use client'
import { useEffect, useState } from 'react'

const delays = [0.12, 0.03, 0.24, 0.09, 0.3, 0.18, 0, 0.27, 0.06, 0.21, 0.15, 0.33, 0.04, 0.25, 0.1, 0.19]

export default function Preloader() {
  const [finished, setFinished] = useState(false)
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mobile = window.matchMedia('(max-width: 767px)').matches
    const timer = setTimeout(() => setFinished(true), reduced ? 0 : mobile ? 1500 : 3400)
    return () => clearTimeout(timer)
  }, [])
  useEffect(() => {
    if (finished) return
    const previous = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => { document.documentElement.style.overflow = previous }
  }, [finished])
  if (finished) return null
  return <div className="serie-preloader fixed inset-0 z-[1000] overflow-hidden" role="status" aria-label="Loading SERIÉ">
    <style>{`
      .serie-preloader { --exit-delay: 2s; --exit-duration: .9s; --logo-delay: 1.9s; --logo-duration: .5s; --intro-duration: 1s; --intro-delay: .3s; }
      @keyframes loader-bar { to { transform: scaleY(0); } }
      @keyframes loader-logo { to { opacity: 0; } }
      @keyframes loader-intro { from { transform: translateY(110%); } to { transform: translateY(0); } }
      .loader-bar { animation: loader-bar var(--exit-duration) cubic-bezier(.76,0,.24,1) calc(var(--exit-delay) + var(--bar-delay)) both; }
      .loader-logo { animation: loader-logo var(--logo-duration) ease var(--logo-delay) both; }
      .loader-intro { animation: loader-intro var(--intro-duration) cubic-bezier(.22,1,.36,1) var(--intro-delay) both; }
      @media(max-width:767px) { .serie-preloader { --exit-delay: .75s; --exit-duration: .4s; --logo-delay: .65s; --logo-duration: .25s; --intro-duration: .4s; --intro-delay: .1s; } }
      @media(prefers-reduced-motion:reduce) { .serie-preloader { display:none; } }
    `}</style>
    <div className="absolute inset-0 flex" aria-hidden="true">
      {delays.map((delay,index)=><div key={index} style={{'--bar-delay': delay+'s'}} className="loader-bar -mr-px h-full flex-1 origin-top bg-white"/>)}
    </div>
    <div aria-hidden="true" className="loader-logo absolute inset-0 flex flex-col items-center justify-center text-espresso">
      <div className="overflow-hidden pb-2"><span className="loader-intro block font-heading text-[64px] leading-[1.15] tracking-[-0.065em] md:text-[88px]">SERIÉ</span></div>
      <div className="mt-2 overflow-hidden"><span className="loader-intro block font-body text-[9px] font-semibold uppercase tracking-[0.24em] md:text-[10px]">Lash, Brow &amp; Training</span></div>
    </div>
  </div>
}
