// Only known fields and routes can be changed by the dashboard.
export const text=(value,fallback='')=>typeof value==='string' && value.trim()?value.trim():fallback;
export const httpsUrl=(value,fallback='')=>{try {const u=new URL(value);return u.protocol==='https:'?u.href:fallback}catch{return fallback}};
const pairs=(items,fallback)=>Array.isArray(items)&&items.some(x=>x.question?.trim()&&x.answer?.trim())?items.filter(x=>x.question?.trim()&&x.answer?.trim()).map(x=>[x.question,x.answer]):fallback;
export function mergeContent(base,docs=[]) {
 const result=structuredClone(base);
 for(const doc of docs) {
  if(doc._id==='studio-details') {for(const k of ['street','city','region','postalCode','hours','email','phone']) result.settings[k]=text(doc[k],result.settings[k]);for(const k of ['bookingUrl','instagram'])result.settings[k]=httpsUrl(doc[k],result.settings[k]);}
  if(doc._id==='announcement') result.announcement={enabled:doc.enabled!==false,message:text(doc.message,base.announcement.message),link:httpsUrl(doc.link)};
  if(doc._type==='imageSlot'&&doc.url?.startsWith('https://cdn.sanity.io/images/')) result.images.push({original:doc.original,src:doc.url,alt:text(doc.alt)});
  if(doc._type==='service') {const s=result.services.find(x=>x.slug===doc.slug);if(!s)continue;for(const k of ['title','tagline','description'])s[k]=text(doc[k],s[k]);s.bookingUrl=httpsUrl(doc.bookingUrl,result.settings.bookingUrl);s.summary={...s.summary,name:s.title,intro:text(doc.intro,s.summary.intro),description:text(doc.summaryDescription,s.summary.description)};
   s.sections=s.sections.map(section=>{const entry=doc.sections?.find(x=>x.id===section.id);if(!entry)return section;const out={...section};for(const k of ['title','description','detail','price'])out[k]=text(entry[k],section[k]);out.bookingUrl=httpsUrl(entry.bookingUrl,s.bookingUrl);return out});
  }
  if(doc._type==='faqGroup') {if(doc._id==='faq-training')result.trainingFAQs=pairs(doc.items,base.trainingFAQs);else{const group=result.faqGroups.find(x=>x.title===doc.category);if(group)group.items=pairs(doc.items,group.items)}}
 }
 return result;
}
