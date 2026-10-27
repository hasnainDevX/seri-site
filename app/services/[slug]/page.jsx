import { pageMetadata } from '@/lib/seo'
import { pageSchema } from '@/lib/schema'
import JsonLd from '@/components/JsonLd'
import { faqGroups } from '@/data/faqs'
import { notFound } from 'next/navigation'
import ServicePage from '@/views/ServicePage'
import { servicePages } from '@/data/servicePages'

export const dynamicParams = false
export function generateStaticParams() { return servicePages.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = servicePages.find(item => item.slug === slug)
  return service ? pageMetadata('/services/' + service.slug) : { robots: { index: false, follow: true } }
}
export default async function Page({ params }) {
  const { slug } = await params
  const service = servicePages.find(item => item.slug === slug)
  if (!service) notFound()
  return <><JsonLd data={pageSchema('/services/' + slug, { service, questions: faqGroups.find(group => group.title === service.faqTitle)?.items })} /><ServicePage service={service} /></>
}
