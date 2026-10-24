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
