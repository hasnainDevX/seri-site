'use client'

import { useId, useState } from 'react'
import RevealHeading from './RevealHeading'


export function FAQList({ items }) {
  const id = useId()
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="border-t border-stone">
      {items.map(([question, answer], index) => {
        const open = openIndex === index
        return (
          <div key={question} className="border-b border-stone">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              aria-controls={id + '-' + index}
              className="flex min-h-24 w-full cursor-pointer items-center justify-between gap-6 py-8 text-left font-editorial text-[22px] font-medium leading-[1.4] tracking-[-0.01em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-espresso md:text-[24px]"
            >
              <span className="max-w-[44ch]">{question}</span>
              <span aria-hidden="true" className="relative size-3 shrink-0 text-espresso">
                <span className="absolute left-0 top-1/2 h-px w-full bg-current" />
                <span
                  className={`absolute left-1/2 top-0 h-full w-px bg-current transition-transform duration-300 motion-reduce:transition-none ${open ? 'rotate-90' : ''}`}
                />
              </span>
            </button>
            <div
              id={id + '-' + index}
              aria-hidden={!open}
              className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <p className="max-w-[62ch] whitespace-pre-line pb-8 pr-6 pt-1 font-body text-sm leading-[1.9] text-espresso md:pr-10 md:text-[15px]">
                  {answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function FAQ({ service, faqGroups }) {
  const [active, setActive] = useState(0)
  const groups = service ? faqGroups.filter(item => item.title === service) : faqGroups
  const group = groups[active] ?? groups[0]

  if(!group)return null
  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-40 bg-white px-6 py-16 text-black md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto grid max-w-[1200px] items-start gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] md:gap-12 lg:gap-24">
        <div className="md:sticky md:top-28">
          <p className="mb-4 font-body text-[10px] font-medium uppercase tracking-[0.18em] text-clay">{"Before your appointment"}</p>
          <RevealHeading id="faq-heading" className="max-w-[14ch] font-editorial text-[44px] font-normal leading-[1.05] tracking-[-0.025em] lg:text-[54px]">Frequently asked questions</RevealHeading>
          {/* <p className="mt-6 max-w-[25ch] font-body text-sm leading-[1.75] text-espresso">Treatment details, preparation, and aftercare.</p> */}

          {!service && <div role="group" aria-label="Filter questions by treatment" className="mt-9 flex flex-col gap-3 md:mt-10">
            {groups.map((category, index) => (
              <button
                key={category.title}
                type="button"
                aria-pressed={active === index}
                aria-controls="faq-answers"
                onClick={() => setActive(index)}
                className={`inline-flex min-h-12 cursor-pointer items-center justify-center border px-8 py-3 text-center text-[10px] font-medium uppercase tracking-[0.16em] transition-colors motion-reduce:transition-none ${active === index ? 'border-espresso bg-butter text-clay t' : 'border-espresso text-espresso hover:bg-espresso hover:text-off-white'}`}
              >
                {category.title}
              </button>
            ))}
          </div>}
        </div>

        <div className="min-w-0">
          <div id="faq-answers" key={group.title}>
            <RevealHeading as="h3" className="mb-7 text-center font-editorial text-[30px] font-medium leading-[1.2] tracking-[-0.015em] md:text-[34px]">{group.title}</RevealHeading>            <FAQList items={group.items} />
          </div>
        </div>
      </div>
    </section>
  )
}