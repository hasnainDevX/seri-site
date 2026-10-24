# Training inquiry form

Copy .env.example to .env.local and fill in:
- VITE_EMAILJS_SERVICE_ID
- VITE_EMAILJS_TRAINING_TEMPLATE_ID
- VITE_EMAILJS_PUBLIC_KEY

Restart the dev server after changing env values. For production, set them in the hosting build environment and rebuild.

Create an EmailJS email template with its recipient set to Seri's inquiry inbox in the EmailJS dashboard. Set Reply-To to {{reply_to}}. No recipient address is accepted from the visitor.

Suggested subject: Training inquiry from {{from_name}}

Template body:
Course: {{course}}
Name: {{first_name}} {{last_name}}
Email: {{email}}
Phone: {{phone}}
Certified lash artist: {{certified_lash_artist}}

Questions or inquiries:
{{message}}

Available variables: first_name, last_name, from_name, email, reply_to, phone, certified_lash_artist, course, message.

Allow the development and production website origins in EmailJS. This form uses EmailJS's browser REST API, so it needs the public key only. Never put a private key in a VITE_ variable.

Without configuration, the form gives a clear unavailable message and links to the existing training form. Failed requests preserve the fields. Only a successful EmailJS response clears the fields and displays confirmation. Inquiry submission does not book a date or take payment.

Content source: https://www.alluredbyseri.com/training
API reference: https://www.emailjs.com/docs/rest-api/send/

## Contact form

The contact page uses the same VITE_EMAILJS_SERVICE_ID and VITE_EMAILJS_PUBLIC_KEY.
Set VITE_EMAILJS_CONTACT_TEMPLATE_ID to a separate general-contact template.

Set the recipient in the EmailJS dashboard and Reply-To to {{reply_to}}.
Suggested subject: Contact inquiry from {{from_name}}

Template body:
Name: {{from_name}}
Email: {{email}}
Phone: {{phone}}
Interested in: {{interest}}

Message:
{{message}}

The form validates required fields, prevents duplicate submissions, preserves input on errors, and only confirms success after EmailJS accepts the request.
### Updated contact inquiry fields

The contact form now matches the centered booking-inquiry layout. Add these variables to the contact template so all preferences are included:

First name: {{first_name}}
Last name: {{last_name}}
Full name: {{from_name}}
Email: {{email}}
Phone: {{phone}}
Services (multiple selections): {{interest}}
Preferred date: {{preferred_date}}
Preferred time: {{preferred_time}}
How they heard about SERIÉ: {{referral}}
Desired look / questions: {{message}}

The name, email, phone, service selection, and referral are required. Date, time, and message are optional. These are preferences, not a confirmed booking.