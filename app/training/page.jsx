import {getContent} from '@/lib/cms'
import TrainingPage from '@/views/TrainingPage'
import { pageMetadata } from '@/lib/seo'
import { pageSchema } from '@/lib/schema'
import JsonLd from '@/components/JsonLd'

export const metadata = pageMetadata('/training')
export default async function Page() { const {trainingFAQs,settings}=await getContent(); return <><JsonLd data={pageSchema('/training', { questions: trainingFAQs })} /><TrainingPage trainingFAQs={trainingFAQs} settings={settings} /></> }
