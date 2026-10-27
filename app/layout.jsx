import { siteUrl, isPreview } from '@/lib/seo'
import { siteSchema } from '@/lib/schema'
import JsonLd from '@/components/JsonLd'
import { Playfair_Display, Open_Sans, Cormorant_Garamond } from 'next/font/google'
import SiteChrome from '@/components/SiteChrome'
import './globals.css'

const heading = Playfair_Display({ subsets: ['latin'], weight: 'variable', variable: '--font-playfair', display: 'swap' })
const body = Open_Sans({ subsets: ['latin'], weight: 'variable', variable: '--font-open-sans', display: 'swap' })
const editorial = Cormorant_Garamond({ subsets: ['latin'], weight: 'variable', style: ['normal', 'italic'], variable: '--font-cormorant', display: 'swap' })

export const metadata = {
  metadataBase: new URL(siteUrl), applicationName: 'SERIÉ',
  robots: { index: !isPreview, follow: !isPreview },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined, other: process.env.BING_SITE_VERIFICATION ? { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } : undefined },
  icons: { icon: '/icon.svg', apple: '/apple-touch-icon.png' },
  title: { default: 'SERIÉ | Lash, Brow & Training in Winnipeg', template: '%s | SERIÉ Winnipeg' },
  description: 'Personalized lash extensions, Korean lash lifts, brow lamination, Nano and Combo Brows, and hands-on training with Seri in Winnipeg.',
}

export default function RootLayout({ children }) {
  return <html lang="en" className={'scroll-smooth motion-reduce:scroll-auto ' + heading.variable + ' ' + body.variable + ' ' + editorial.variable}><body><JsonLd data={siteSchema()} /><div id="root"><SiteChrome />{children}</div></body></html>
}
