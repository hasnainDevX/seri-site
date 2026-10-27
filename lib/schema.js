import { absoluteUrl } from './seo'
import pages from '@/data/seoPages.json'
const businessId = absoluteUrl('/#business')
export function siteSchema() {
  return { '@context': 'https://schema.org', '@graph': [
    { '@type': 'BeautySalon', '@id': businessId, name: 'SERIÉ', alternateName: 'AlluredbySeri', url: absoluteUrl('/'), image: absoluteUrl('/assets/Profile&ETC/seri-white-blazer-hand-on-chin.jpg'), logo: absoluteUrl('/brand-logo.png'), description: 'Lash and brow services and Korean lash lift training with Seri in Winnipeg.', address: { '@type': 'PostalAddress', streetAddress: '296 Stafford St', addressLocality: 'Winnipeg', addressRegion: 'MB', postalCode: 'R3M 1J1', addressCountry: 'CA' }, areaServed: { '@type': 'City', name: 'Winnipeg' }, sameAs: ['https://www.instagram.com/alluredbyseri/'] },
    { '@type': 'WebSite', '@id': absoluteUrl('/#website'), name: 'SERIÉ', alternateName: 'AlluredbySeri', url: absoluteUrl('/'), inLanguage: 'en-CA', publisher: { '@id': businessId } },
  ] }
}
export function pageSchema(path, { service, questions } = {}) {
  const page = pages.find(item => item.path === path)
  const url = absoluteUrl(path)
  const graph = [{ '@type': path === '/about' ? 'AboutPage' : path === '/contact' ? 'ContactPage' : 'WebPage', '@id': url + '#webpage', url, name: page.title, description: page.description, inLanguage: 'en-CA', isPartOf: { '@id': absoluteUrl('/#website') }, about: { '@id': businessId } }]
  if (path !== '/') graph.push({ '@type': 'BreadcrumbList', '@id': url + '#breadcrumb', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') }, { '@type': 'ListItem', position: 2, name: page.heading, item: url }] })
  if (service) graph.push({ '@type': 'Service', '@id': url + '#service', name: service.title, serviceType: service.title, description: page.description, url, image: absoluteUrl(service.heroImage), areaServed: { '@type': 'City', name: 'Winnipeg' }, provider: { '@id': businessId } })
  if (path === '/training') graph.push({ '@type': 'Course', '@id': url + '#course', name: '1:1 Korean Lash Lift — One Day Beginner Class', description: page.description, url, inLanguage: 'en-CA', provider: { '@id': businessId } })
  if (questions?.length) graph.push({ '@type': 'FAQPage', '@id': url + '#faq', mainEntity: questions.map(([question,answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) })
  return { '@context': 'https://schema.org', '@graph': graph }
}
