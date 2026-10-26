import { Playfair_Display, Open_Sans, Cormorant_Garamond } from 'next/font/google'
import SiteChrome from '@/components/SiteChrome'
import './globals.css'

const heading = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-playfair', display: 'swap' })
const body = Open_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-open-sans', display: 'swap' })
const editorial = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500'], style: ['normal', 'italic'], variable: '--font-cormorant', display: 'swap' })

export const metadata = {
  title: { default: 'SERIÉ | Lash, Brow & Training in Winnipeg', template: '%s | SERIÉ Winnipeg' },
  description: 'Personalized lash extensions, Korean lash lifts, brow lamination, Nano and Combo Brows, and hands-on training with Seri in Winnipeg.',
}

export default function RootLayout({ children }) {
  return <html lang="en" className={'scroll-smooth motion-reduce:scroll-auto ' + heading.variable + ' ' + body.variable + ' ' + editorial.variable}><body><div id="root"><SiteChrome />{children}</div></body></html>
}
