# SERIÉ dashboard

Separate Studio in studio/ keeps Sanity editor dependencies out of the public website. Project zbxbb6jd, dataset production.

1. In studio/, run npm install, then npx sanity login using your account.
2. Run npm run seed. This creates the supplied content only if absent; never overwrites edits.
3. Run npm run dev and sign in. Add http://localhost:3333 as an authenticated CORS origin in Sanity API settings if prompted.
4. Run npm run deploy when ready; choose a Studio hostname. Invite Seri as a project member for handover.

Website reads published data server-side, with a five-minute Next cache. Publishing becomes visible after cache revalidation and a fresh visit; no browser-side CMS request. Missing fields/documents and network errors fall back to bundled content. Previous successful fetches remain cached during failed revalidation. No private token is required for public reads. Keep dataset public.

Only service menu, prices, announcement, four images, studio details, and FAQs are editable. Navigation, design, page routes, and supplied policy content remain in code. Existing prices were not supplied and are left blank. Upload a replacement image to change its slot; clearing it restores the original.

Optional website environment overrides: NEXT_PUBLIC_SANITY_PROJECT_ID=zbxbb6jd and NEXT_PUBLIC_SANITY_DATASET=production. Changing project requires updating the allowed image hostname path in next.config.mjs.

Validation: website and Studio production builds, ESLint, fallback merge checks, and mobile browser checks passed. All 15 initial content documents were imported and published on October 30, 2026. npm audit reports upstream Studio/CLI dependency advisories remaining after compatible fixes; these dependencies are isolated from the public website. Review upstream updates before deployment.

Hosted dashboard: https://serie-beauty-zbxbb6jd.sanity.studio/
Deployment app ID: pkf5xlc0pd2g33fa6bvgpc2w (saved in studio/sanity.cli.js).
Sign in with your Sanity account, choose an item under Website essentials, edit, then Publish. The public Vercel website must receive the updated Next.js code once before it can consume CMS changes. After that, published edits use the five-minute cache and do not require redeploys.

