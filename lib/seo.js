import pages from '@/data/seoPages.json'
export const siteUrl = new URL(process.env.SITE_URL || 'https://seribeauty.ca').origin
export const isPreview = process.env.VERCEL_ENV === 'preview' || process.env.SITE_NOINDEX === 'true'
export const absoluteUrl = path => new URL(path, siteUrl).href
export function pageMetadata(path) {
  const page = pages.find(item => item.path === path)
  if (!page) return { robots: { index: false, follow: true } }
  const image = { url: absoluteUrl('/og/' + page.key), width: 1200, height: 630, alt: 'SERIÉ — ' + page.heading + ' in Winnipeg' }
  return {
    title: { absolute: page.title }, description: page.description,
    alternates: { canonical: absoluteUrl(path) },
    robots: { index: !isPreview, follow: !isPreview, googleBot: { index: !isPreview, follow: !isPreview, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
    openGraph: { type: 'website', locale: 'en_CA', siteName: 'SERIÉ', title: page.title, description: page.description, url: absoluteUrl(path), images: [image] },
    twitter: { card: 'summary_large_image', title: page.title, description: page.description, images: [image.url] },
  }
}
