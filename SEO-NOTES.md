# SEO implementation and launch notes

Research date: October 27, 2026. Canonical domain confirmed by the owner: https://seribeauty.ca.

## Keyword research

Qualitative research using current search results and local studios' own service pages. These are intent-based targets, not paid-tool search volumes or difficulty scores. No ranking guarantee is implied.

| Page | Primary target | Supporting intent |
| --- | --- | --- |
| Home | lash and brow services Winnipeg | local studio, book lashes and brows |
| Nano & Combo Brows | nano brows Winnipeg | combo brows, permanent makeup brows, hairstrokes |
| Brow Lamination | brow lamination Winnipeg | brow sculpt, shaping, waxing and tint |
| Korean Lash Lift | Korean lash lift Winnipeg | lash lift and tint, natural lashes |
| Lash Extensions | lash extensions Winnipeg | classic, wet look, wispy lashes, fills |
| Training | Korean lash lift training Winnipeg | one-to-one beginner class, hands-on training |
| About | Seri lash and brow artist Winnipeg | brand and artist discovery |
| Contact | SERIÉ Winnipeg booking | studio address, directions, appointment inquiry |
| Policies | SERIÉ cancellation policy | brand-specific booking information |

Each service has its own canonical page and metadata. Training targets education intent, rather than competing with the treatment page. Supplied descriptions, FAQs, biography, prices, and policies are preserved.

### Research evidence

- https://totalwrapture.ca/lash-extensions-winnipeg/ — local lash extensions and style terminology.
- https://www.thelashloungewpg.com/brow-lamination-winnipeg — dedicated local brow-lamination intent.
- https://lisatranbrows.com/services — nano and nano-combo brow terminology.
- https://www.bbartistry.ca/ — Korean lash lift positioning in Winnipeg.
- https://www.bonitalifts.ca/ — local lash lift and tint terminology.
- https://www.standoutbeautyshop.com/pages/in-person-trainings — Korean lash lift training intent.
- https://www.alluredbyseri.com/training — the original course offer. The user-confirmed 296 Stafford St address takes precedence over the old site's address.

## What is implemented

- Nine unique page titles, descriptions, self-canonical URLs, Open Graph and Twitter cards.
- Nine branded 1200×630 social images at /og/{page-key}; favicon and Apple touch icon.
- /robots.txt and /sitemap.xml using Next metadata routes. Robots is plain text, not JSON. Sitemap includes only the nine canonical public pages, not redirects or 404s.
- Server-rendered JSON-LD: BeautySalon, WebSite, WebPage/AboutPage/ContactPage, BreadcrumbList, Service, Course, and FAQPage on pages where those questions are rendered.
- No fabricated phone, opening hours, coordinates, ratings, or review counts. Testimonials are displayed as quotes; no self-serving review-star markup is added. Schema does not guarantee a Google rich result; FAQ and Course markup are semantic descriptions rather than promises of enhanced search displays.
- Unknown pages retain HTTP 404 and noindex. Preview deployments on Vercel have noindex metadata, X-Robots-Tag, disallow-all robots and an empty sitemap. For other staging hosts set SITE_NOINDEX=true. Deployment protection/passwords remain the best way to keep a private preview private.
- Optional Google/Bing verification tokens through environment variables. No fake verification codes.

## Before production launch

1. Connect seribeauty.ca in the hosting dashboard and enable HTTPS. Redirect www to the chosen apex domain. Domain setup has not been performed by this code change.
2. Use SITE_URL=https://seribeauty.ca, SITE_NOINDEX=false, and VERCEL_ENV=production (Vercel manages VERCEL_ENV). Rebuild after environment changes.
3. Verify the domain in Google Search Console and Bing Webmaster Tools. Add supplied verification tokens if using HTML verification, then rebuild. Submit https://seribeauty.ca/sitemap.xml after launch.
4. Configure permanent redirects on the old alluredbyseri.com host to the matching new pages. Redirecting that external domain is not accomplished by metadata on the new site. Existing legacy service-path redirects are already in next.config.mjs; inventory the old site's remaining live URLs before switching it off.
5. Update the Google Business Profile and Instagram website link to the new domain, using the confirmed studio address. These external profiles have not been changed.
6. Validate the live URLs with Google's Rich Results Test and Schema.org Validator; inspect indexing and social previews after deployment. Monitor Search Console after the domain change.

### Technical references

- https://developers.google.com/search/docs/appearance/structured-data/local-business
- https://developers.google.com/search/docs/appearance/structured-data/review-snippet
- https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes
- https://nextjs.org/docs/app/guides/json-ld
- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots

No live domain changes, Search Console submissions, or external messages were performed.
