import { ImageResponse } from 'next/og'
import pages from '@/data/seoPages.json'
export const dynamic = 'force-static'
export const dynamicParams = false
export function generateStaticParams() { return pages.map(page => ({ slug: page.key })) }
export async function GET(request, { params }) {
  const { slug } = await params
  const page = pages.find(item => item.key === slug)
  if (!page) return new Response('Not found', { status: 404 })
  return new ImageResponse(<div style={{ width:'100%',height:'100%',display:'flex',flexDirection:'column',background:'#f8f7f5',color:'#49443f',padding:'56px 72px',border:'14px solid #d8d4ce' }}>
    <div style={{display:'flex',fontSize:80,letterSpacing:'-5px'}}>SERIÉ</div>
    <div style={{display:'flex',fontSize:16,letterSpacing:'5px',marginTop:8}}>LASH, BROW & TRAINING</div>
    <div style={{display:'flex',height:1,background:'#aaa097',marginTop:38}} />
    <div style={{display:'flex',fontSize:60,lineHeight:1.1,marginTop:40,maxWidth:1000}}>{page.heading}</div>
    <div style={{display:'flex',marginTop:'auto',justifyContent:'space-between',fontSize:22}}><span>WINNIPEG, MANITOBA</span><span>seribeauty.ca</span></div>
  </div>, { width:1200,height:630 })
}
