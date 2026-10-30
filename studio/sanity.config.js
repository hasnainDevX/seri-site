import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import documents from './initial-content.json'
const field=(name,title,type='string',extra={})=>({name,title,type,...extra})
const required=Rule=>Rule.required()
const url=(name,title)=>field(name,title,'url',{validation:Rule=>Rule.uri({scheme:['https']})})
const fields={
 studioDetails:[url('bookingUrl','Default booking link'),...['street','city','region','postalCode','hours','phone'].map(k=>field(k,k)),field('email','Email','string',{validation:Rule=>Rule.email()}),url('instagram','Instagram URL')],
 announcement:[field('enabled','Show announcement','boolean'),field('message','Announcement text','text',{rows:2,validation:required}),url('link','Optional announcement link')],
 service:[field('slug','Page identifier','string',{readOnly:true}),field('title','Service name','string',{validation:required}),field('tagline','Tagline'),field('description','Service page introduction','text',{validation:required}),field('intro','Home menu introduction','text',{validation:required}),field('summaryDescription','Home menu details','text',{validation:required}),url('bookingUrl','Booking link (optional override)'),field('sections','Treatments and prices','array',{options:{disableActions:['add','remove','duplicate']},of:[{type:'object',name:'treatment',fields:[field('id','Identifier','string',{readOnly:true}),field('title','Treatment name','string',{validation:required}),field('description','Description','text',{validation:required}),field('detail','Additional details','text'),field('price','Price label (e.g. $90 + GST)'),url('bookingUrl','Treatment booking link')]}]})],
 faqGroup:[field('category','Category','string',{readOnly:true}),field('items','Questions','array',{validation:Rule=>Rule.required().min(1),of:[{type:'object',name:'question',fields:[field('question','Question','string',{validation:required}),field('answer','Answer','text',{validation:required})],preview:{select:{title:'question'}}}]})],
 imageSlot:[field('title','Image placement','string',{readOnly:true}),field('original','Original fallback path','string',{hidden:true,readOnly:true}),field('image','Replacement photo','image',{options:{hotspot:true}}),field('alt','Image description','string',{validation:required})]
}
const schemaTypes=Object.entries(fields).map(([name,fields])=>({name,title:name,type:'document',fields,preview:{select:{title:name==='faqGroup'?'category':'title'},prepare:({title})=>({title:title||({studioDetails:'Studio details',announcement:'Announcement'}[name])||name})}}))
export default defineConfig({name:'serie',title:'SERIÉ Beauty',projectId:'zbxbb6jd',dataset:'production',plugins:[structureTool({structure:S=>S.list().title('Website essentials').items(documents.map(doc=>S.listItem().id(doc._id).title(doc.title||doc.category||({studioDetails:'Studio details',announcement:'Announcement'}[doc._type])).child(S.document().schemaType(doc._type).documentId(doc._id))))})],schema:{types:schemaTypes},document:{newDocumentOptions:()=>[],actions:prev=>prev.filter(action=>!['delete','duplicate','unpublish'].includes(action.action))}})

