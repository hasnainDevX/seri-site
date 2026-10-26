'use client'
import Link from 'next/link'
export default function ErrorPage({ reset }) {
  return <main className="min-h-svh bg-off-white px-6 pb-20 pt-40 text-center text-espresso"><p className="mb-6 text-xs uppercase tracking-[0.16em]">Something went wrong</p><h1 className="font-editorial text-5xl">Let’s try that again.</h1><div className="mt-8 flex flex-wrap justify-center gap-6"><button onClick={reset} className="min-h-12 bg-espresso px-8 text-sm text-white">Try again</button><Link href="/" className="inline-flex min-h-12 items-center underline underline-offset-4">Take me home</Link></div></main>
}
