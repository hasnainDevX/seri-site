import Link from 'next/link'

export default function SiteLink({ href, children, ...props }) {
  if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('//')) {
    return <Link prefetch={false} href={href} {...props}>{children}</Link>
  }
  return <a href={href} {...props}>{children}</a>
}
