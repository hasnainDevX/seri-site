import AboutPage from '@/views/AboutPage'
import { pageMetadata } from '@/lib/seo'
import { pageSchema } from '@/lib/schema'
import JsonLd from '@/components/JsonLd'

export const metadata = pageMetadata('/about')
export default function Page() { return <><JsonLd data={pageSchema('/about')} /><AboutPage /></> }
