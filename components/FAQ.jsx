import {getContent} from '@/lib/cms'
import FAQClient from './FAQClient'
export default async function FAQ(props){const {faqGroups}=await getContent();return <FAQClient {...props} faqGroups={faqGroups}/>}