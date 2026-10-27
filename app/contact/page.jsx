import ContactPage from '@/views/ContactPage'
import { pageMetadata } from '@/lib/seo'
import { pageSchema } from '@/lib/schema'
import JsonLd from '@/components/JsonLd'

export const metadata = pageMetadata('/contact')
export default function Page() { return <><JsonLd data={pageSchema('/contact')} /><ContactPage /></> }
