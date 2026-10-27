import pages from '@/data/seoPages.json'
import { absoluteUrl, isPreview } from '@/lib/seo'
export default function sitemap() {
  return isPreview ? [] : pages.map(page => ({ url: absoluteUrl(page.path) }))
}
