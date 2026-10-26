import { notFound } from 'next/navigation'
import ServicePage from '@/views/ServicePage'
import { servicePages } from '@/data/servicePages'

export const dynamicParams = false
export function generateStaticParams() { return servicePages.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = servicePages.find(item => item.slug === slug)
  return service ? { title: service.title, description: service.description } : {}
}
export default async function Page({ params }) {
  const { slug } = await params
  const service = servicePages.find(item => item.slug === slug)
  if (!service) notFound()
  return <ServicePage service={service} />
}
