// Only known fields and routes can be changed by the dashboard.
export const text=(value,fallback='')=>typeof value==='string' && value.trim()?value.trim():fallback;
export const httpsUrl=(value,fallback='')=>{try {const u=new URL(value);return u.protocol==='https:'?u.href:fallback}catch{return fallback}};
const pairs=(items,fallback)=>Array.isArray(items)&&items.some(x=>x.question?.trim()&&x.answer?.trim())?items.filter(x=>x.question?.trim()&&x.answer?.trim()).map(x=>[x.question,x.answer]):fallback;
// Accept only public image assets supported by the website's Next Image allowlist.
// Crops and focal points stay server-side; the browser receives a normal image URL.
export function servicePhoto(photo) {
 try {
  const url=new URL(photo?.url);
  if(url.protocol!=='https:' || url.hostname!=='cdn.sanity.io' || !url.pathname.startsWith('/images/zbxbb6jd/production/'))return null;
  const dimensions=url.pathname.match(/-(\d+)x(\d+)\.[a-z]+$/i);
  if(!dimensions)return null;
  const clamp=(v,min,max)=>Math.min(max,Math.max(min,v));
  const fraction=v=>Number.isFinite(v)?clamp(v,0,1):0;
  const crop=photo.crop || {};
  const left=fraction(crop.left),top=fraction(crop.top);
  const width=1-left-fraction(crop.right),height=1-top-fraction(crop.bottom);
  if(width<=0 || height<=0)return null;
  if(left || top || width<1 || height<1) {
   const w=Number(dimensions[1]),h=Number(dimensions[2]);
   const x=Math.min(w-1,Math.round(left*w)),y=Math.min(h-1,Math.round(top*h));
   url.searchParams.set('rect',[x,y,clamp(Math.round(width*w),1,w-x),clamp(Math.round(height*h),1,h-y)].join(','));
  }
  const x=Number.isFinite(photo.hotspot?.x)?photo.hotspot.x:0.5;
  const y=Number.isFinite(photo.hotspot?.y)?photo.hotspot.y:0.5;
  return {src:url.href,alt:text(photo.alt),position:clamp((x-left)/width*100,0,100)+'% '+clamp((y-top)/height*100,0,100)+'%'};
 }catch{return null}
}
export function mergeContent(base,docs=[]) {
 const result=structuredClone(base);
 for(const doc of docs) {
  if(doc._id==='studio-details') {for(const k of ['street','city','region','postalCode','hours','email','phone']) result.settings[k]=text(doc[k],result.settings[k]);for(const k of ['bookingUrl','instagram'])result.settings[k]=httpsUrl(doc[k],result.settings[k]);}
  if(doc._id==='announcement') result.announcement={enabled:doc.enabled!==false,message:text(doc.message,base.announcement.message),link:httpsUrl(doc.link)};
  if(doc._type==='imageSlot'&&doc.url?.startsWith('https://cdn.sanity.io/images/')) result.images.push({original:doc.original,src:doc.url,alt:text(doc.alt)});
  if(doc._type==='service') {const s=result.services.find(x=>x.slug===doc.slug);if(!s)continue;for(const k of ['title','tagline','description'])s[k]=text(doc[k],s[k]);s.bookingUrl=httpsUrl(doc.bookingUrl,result.settings.bookingUrl);s.summary={...s.summary,name:s.title,intro:text(doc.intro,s.summary.intro),description:text(doc.summaryDescription,s.summary.description)};
   const hero=servicePhoto(doc.heroPhoto),menu=servicePhoto(doc.menuPhoto);
   if(hero){s.heroImage=hero.src;s.heroAlt=hero.alt || s.title+' at SERIÉ';s.heroPosition=hero.position;}
   if(menu){s.summary.image=menu.src;s.summary.imageAlt=menu.alt || s.title+' by Seri';s.summary.imagePosition=menu.position;}
   const grid=servicePhoto(doc.gridPhoto),hover=servicePhoto(doc.gridHoverPhoto);
   if(grid)s.gridPhoto=grid;
   if(hover)s.gridHoverPhoto=hover;
   s.sections=s.sections.map(section=>{const entry=doc.sections?.find(x=>x.id===section.id);if(!entry)return section;const out={...section};for(const k of ['title','description','detail','price'])out[k]=text(entry[k],section[k]);out.bookingUrl=httpsUrl(entry.bookingUrl,s.bookingUrl);
    const photo=servicePhoto(entry.photo);
    if(photo){out.image=photo.src;out.imageAlt=photo.alt || section.imageAlt;out.imagePosition=photo.position;}
    out.caption=text(entry.imageCaption,section.caption);
    return out});
  }
  if(doc._type==='faqGroup') {if(doc._id==='faq-training')result.trainingFAQs=pairs(doc.items,base.trainingFAQs);else{const group=result.faqGroups.find(x=>x.title===doc.category);if(group)group.items=pairs(doc.items,group.items)}}
 }
 return result;
}
