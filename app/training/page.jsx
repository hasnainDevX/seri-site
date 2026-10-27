import TrainingPage from '@/views/TrainingPage'
import { pageMetadata } from '@/lib/seo'
import { pageSchema } from '@/lib/schema'
import JsonLd from '@/components/JsonLd'
import { trainingFAQs } from '@/data/training'
export const metadata = pageMetadata('/training')
export default function Page() { return <><JsonLd data={pageSchema('/training', { questions: trainingFAQs })} /><TrainingPage /></> }
