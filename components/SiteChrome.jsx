'use client'
import { usePathname } from 'next/navigation'
import AnnouncementBar from './AnnouncementBar'
import Preloader from './Preloader'
import Navbar from './Navbar'
import { getServicePage } from '@/data/servicePages'

export default function SiteChrome({announcement}) {
  const pathname = usePathname()
  const photographicPage = ['/', '/about', '/training', '/contact'].includes(pathname) || Boolean(getServicePage(pathname || ''))
  return <><Preloader key={pathname} /><AnnouncementBar {...announcement} /><Navbar key={'nav-' + pathname} forceSolid={!photographicPage} /></>
}
