import PoliciesPage from '@/views/PoliciesPage'
import { pageMetadata } from '@/lib/seo'
import { pageSchema } from '@/lib/schema'
import JsonLd from '@/components/JsonLd'

export const metadata = pageMetadata('/policies')
export default function Page() { return <><JsonLd data={pageSchema('/policies')} /><PoliciesPage /></> }
