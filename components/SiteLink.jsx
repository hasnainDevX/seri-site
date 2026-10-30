'use client'
import {useContentSettings} from './ContentSettings'
import Link from 'next/link'

export default function SiteLink({ href, children, ...props }) {
  const {settings}=useContentSettings()
  if(href==='https://app.acuityscheduling.com/schedule/3b520d52') href=settings.bookingUrl || href
  if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('//')) {
    return <Link prefetch={false} href={href} {...props}>{children}</Link>
  }
  return <a href={href} {...props}>{children}</a>
}
