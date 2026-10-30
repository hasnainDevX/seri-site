import 'server-only'
import { cache } from 'react'
import defaults from '@/data/cms-defaults.json'
import { mergeContent } from './cms-merge.mjs'
// Next retains the previous successful cache entry when revalidation fails.
// Bundled defaults are returned outside fetch; only the remote response enters its data cache.
const project=process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'zbxbb6jd'
const dataset=process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const getContent=cache(async()=>{
 try {
  const query='*[_type in ["studioDetails","announcement","service","faqGroup","imageSlot"] && !(_id in path("drafts.**"))]{..., "url": image.asset->url}'
  const response=await fetch('https://'+project+'.api.sanity.io/v2026-10-01/data/query/'+dataset+'?perspective=published&query='+encodeURIComponent(query),{next:{revalidate:300,tags:['sanity-content']},signal:AbortSignal.timeout(3000)})
  if(!response.ok)throw new Error('Sanity '+response.status)
  const payload=await response.json()
  if(!Array.isArray(payload.result))throw new Error('Invalid Sanity response')
  return mergeContent(defaults,payload.result)
 }catch(error){console.warn('[CMS] Serving bundled content:',error.message);return defaults}
})

