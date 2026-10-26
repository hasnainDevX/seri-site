'use client'

import SiteLink from '@/components/SiteLink'
import useHydrated from '@/hooks/useHydrated'
import { useRef, useState } from 'react'
import { bookingUrl, services } from '@/data/site'

const fieldClass = 'mt-2 min-h-12 min-w-0 w-full rounded-none border-0 border-b border-stone bg-transparent px-0 py-3 text-base text-black outline-none transition-colors focus:border-espresso focus:ring-0'
const labelClass = 'block text-[13px] font-medium leading-relaxed text-espresso'
const interests = [...services.map(service => service.label), 'Fill / Touch-up', 'Not sure yet']

function localDate() {
  const now = new Date()
  return [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('-')
}

export default function ContactForm() {
  const hydrated = useHydrated()
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')
  const [selected, setSelected] = useState([])
  const sending = useRef(false)

  async function handleSubmit(event) {
    event.preventDefault()
    if (sending.current) return
    const form = event.currentTarget
    const values = new FormData(form)
    const read = key => String(values.get(key) || '').trim()
    const firstName = read('first_name')
    const lastName = read('last_name')
    const email = read('email')
    const phone = read('phone')
    const referral = read('referral')
    const preferredDate = read('preferred_date')
    if (!firstName || !lastName || !email || !phone || !referral || !selected.length) {
      setStatus('error')
      setFeedback('Please complete the required fields and select at least one service.')
      return
    }
    if (preferredDate && preferredDate < localDate()) {
      setStatus('error')
      setFeedback('Please choose today or a future date.')
      return
    }
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setFeedback('Our inquiry form is temporarily unavailable. Please try again later, or book directly using the link below.')
      return
    }
    sending.current = true
    setStatus('sending')
    setFeedback('')
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: AbortSignal.timeout(20000),
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            first_name: firstName,
            last_name: lastName,
            from_name: firstName + ' ' + lastName,
            email,
            reply_to: email,
            phone,
            interest: selected.join(', '),
            preferred_date: preferredDate || 'No preference',
            preferred_time: read('preferred_time') || 'No preference',
            referral,
            message: read('message') || 'No additional details.',
          },
        }),
      })
      if (!response.ok) throw new Error('Inquiry could not be sent')
      form.reset()
      setSelected([])
      setStatus('success')
      setFeedback('Thank you! Your inquiry has been sent. Seri will be in touch by email to discuss your appointment.')
    } catch {
      setStatus('error')
      setFeedback('We couldn’t confirm your inquiry was sent. Your details are still here so you can try again.')
    } finally {
      sending.current = false
    }
  }

  return (
    <form aria-label="Contact Seri" aria-busy={status === 'sending'} onSubmit={handleSubmit}>
      <fieldset disabled={status === 'sending'} className="space-y-8">
        <legend className="sr-only">Your appointment inquiry. Fields marked with an asterisk are required.</legend>
        <div className="grid gap-8 sm:grid-cols-2">
          <label htmlFor="contact-first-name" className={labelClass}>First name *
            <input id="contact-first-name" name="first_name" autoComplete="given-name" maxLength={80} required className={fieldClass} />
          </label>
          <label htmlFor="contact-last-name" className={labelClass}>Last name *
            <input id="contact-last-name" name="last_name" autoComplete="family-name" maxLength={80} required className={fieldClass} />
          </label>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <label htmlFor="contact-email" className={labelClass}>Email *
            <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required className={fieldClass} />
          </label>
          <label htmlFor="contact-phone" className={labelClass}>Phone number *
            <input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} required className={fieldClass} />
          </label>
        </div>
        <fieldset>
          <legend className={labelClass}>Service interested in *</legend>
          <p id="service-hint" className="mt-1 text-xs leading-relaxed text-espresso/80">Select all that apply.</p>
          <div className="mt-3">
            {interests.map((interest, index) => <label key={interest} className="flex min-h-10 cursor-pointer items-center gap-3 text-[13px] leading-relaxed text-espresso">
              <input type="checkbox" name="interest" value={interest} checked={selected.includes(interest)} required={index === 0 && selected.length === 0} aria-describedby="service-hint" onChange={event => setSelected(current => event.target.checked ? [...current, interest] : current.filter(item => item !== interest))} className="size-4 shrink-0 accent-espresso" />{interest}
            </label>)}
          </div>
        </fieldset>
        <label htmlFor="contact-date" className={labelClass}>Preferred date <span className="font-normal">(optional)</span>
          <input id="contact-date" name="preferred_date" type="date" min={hydrated ? localDate() : undefined} className={fieldClass} />
        </label>
        <label htmlFor="contact-time" className={labelClass}>Preferred time <span className="font-normal">(optional)</span>
          <select id="contact-time" name="preferred_time" className={fieldClass} defaultValue="">
            <option value="">Select an option</option>
            <option>Morning</option><option>Afternoon</option><option>Evening</option><option>Flexible</option>
          </select>
        </label>
        <label htmlFor="contact-referral" className={labelClass}>How did you hear about us? *
          <select id="contact-referral" name="referral" required className={fieldClass} defaultValue="">
            <option value="" disabled>Select an option</option>
            <option>Instagram</option><option>Referral from a friend</option><option>Google</option><option>Returning client</option><option>Other</option>
          </select>
        </label>
        <label htmlFor="contact-message" className={labelClass}>Tell us about the look you have in mind
          <textarea id="contact-message" name="message" rows={4} maxLength={5000} placeholder="Your ideal look, any questions, or anything you’d like Seri to know." className="mt-3 min-h-28 w-full resize-y rounded-none border border-stone bg-transparent px-3 py-3 text-base font-normal leading-relaxed text-black outline-none placeholder:text-espresso/55 focus:border-espresso" />
        </label>
        <button type="submit" className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center bg-espresso px-8 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-black disabled:cursor-wait disabled:opacity-60">{status === 'sending' ? 'Sending your inquiry…' : 'Send my message'}</button>
      </fieldset>
      <div aria-live="polite" aria-atomic="true" className="mt-5 text-sm leading-[1.8]">
        {feedback && <p role={status === 'error' ? 'alert' : undefined}>{feedback}</p>}
      </div>
      <p className="mt-5 text-center text-xs leading-[1.8] text-espresso">This is an inquiry, not a confirmed appointment. Prefer to book directly? <SiteLink href={bookingUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Find a time for me.</SiteLink></p>
    </form>
  )
}
