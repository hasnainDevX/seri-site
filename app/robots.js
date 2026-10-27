import { absoluteUrl, isPreview } from '@/lib/seo'
export default function robots() {
  return isPreview ? { rules: { userAgent: '*', disallow: '/' } } : { rules: { userAgent: '*', allow: '/', disallow: ['/api/'] }, sitemap: absoluteUrl('/sitemap.xml') }
}
