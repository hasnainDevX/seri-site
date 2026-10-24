import { useRef, useState } from 'react'

const inputClass = 'mt-2 min-h-12 w-full rounded-none border border-stone bg-white px-4 py-3 text-base text-black outline-none transition-colors focus:border-espresso focus:ring-1 focus:ring-espresso disabled:opacity-60'
const labelClass = 'block text-xs font-medium leading-relaxed text-espresso'

export default function TrainingInquiryForm() {
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')
  const submitting = useRef(false)

  async function handleSubmit(event) {
    event.preventDefault()
    if (submitting.current) return
    const form = event.currentTarget
    const values = new FormData(form)
    const firstName = String(values.get('first_name') || '').trim()
    const lastName = String(values.get('last_name') || '').trim()
    const email = String(values.get('email') || '').trim()
    const phone = String(values.get('phone') || '').trim()
    const certified = String(values.get('certified_lash_artist') || '')

    if (!firstName || !lastName || !email || !phone || !['Yes', 'No'].includes(certified)) {
      setStatus('error')
      setFeedback('Please complete all required fields.')
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TRAINING_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setFeedback('Online inquiries are temporarily unavailable. Please use our existing training form below.')
      return
    }

    submitting.current = true
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
            certified_lash_artist: certified,
            message: String(values.get('message') || '').trim() || 'No additional questions.',
            course: '1:1 Korean Lash Lift — One Day Beginner Class',
          },
        }),
      })
      if (!response.ok) throw new Error('Inquiry could not be sent')
      form.reset()
      setStatus('success')
      setFeedback('Thank you! Your inquiry has been sent. Seri will get back to you by email within 24 hours.')
    } catch {
      setStatus('error')
      setFeedback('We couldn’t confirm your inquiry was sent. Your details are still here. Please try again or use our existing training form below.')
    } finally {
      submitting.current = false
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Training registration inquiry" aria-busy={status === 'sending'}>
      <p className="mb-6 text-xs text-espresso">Fields marked * are required.</p>
      <fieldset disabled={status === 'sending'} className="space-y-6">
        <legend className="sr-only">Your contact details and training inquiry</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <label className={labelClass} htmlFor="training-first-name">First name *
            <input className={inputClass} id="training-first-name" name="first_name" autoComplete="given-name" maxLength={80} required />
          </label>
          <label className={labelClass} htmlFor="training-last-name">Last name *
            <input className={inputClass} id="training-last-name" name="last_name" autoComplete="family-name" maxLength={80} required />
          </label>
        </div>
        <label className={labelClass} htmlFor="training-email">Email *
          <input className={inputClass} id="training-email" name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>
        <label className={labelClass} htmlFor="training-phone">Phone *
          <input className={inputClass} id="training-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} required />
        </label>
        <fieldset>
          <legend className={labelClass}>Are you currently a certified lash artist? *</legend>
          <div className="mt-2 flex gap-8">
            {['Yes', 'No'].map(answer => <label key={answer} className="flex min-h-11 cursor-pointer items-center gap-3 text-sm"><input type="radio" name="certified_lash_artist" value={answer} required className="size-4 accent-espresso" />{answer}</label>)}
          </div>
        </fieldset>
        <label className={labelClass} htmlFor="training-message">Questions or inquiries
          <textarea className={inputClass + ' min-h-36 resize-y'} id="training-message" name="message" rows={5} maxLength={5000} />
        </label>
        <button type="submit" className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center bg-espresso px-8 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-black disabled:cursor-wait disabled:opacity-60 sm:w-auto">
          {status === 'sending' ? 'Sending your inquiry…' : 'Send training inquiry'}
        </button>
      </fieldset>
      <div aria-live="polite" aria-atomic="true" className="mt-5 text-sm leading-[1.8]">
        {feedback && <p role={status === 'error' ? 'alert' : undefined}>{feedback}</p>}
        {status === 'error' && <a href="https://www.alluredbyseri.com/training" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center underline underline-offset-4">Open the existing training form ↗</a>}
      </div>
    </form>
  )
}
