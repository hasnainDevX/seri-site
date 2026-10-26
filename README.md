# SERIÉ — Next.js

Migrated from the sibling Vite project without modifying it.

## Run locally

Use Node.js 20.9 or newer. Run npm install, then npm run dev. Open http://localhost:3000. Both development and production builds explicitly use Webpack.

## Commands

- npm run dev — Next.js development with Webpack
- npm run build — production build with Webpack
- npm start — serve the production build
- npm run lint — ESLint

## Structure

- app/ — App Router routes, root layout, metadata, error and 404 pages
- components/ — shared visual and interactive components
- views/ — existing page designs composed by App Router routes
- data/ — service details, FAQs, policies and training copy
- public/assets/ — original images and videos

JavaScript/JSX, Tailwind CSS, npm, ESLint, root app directory, @/* alias. No src directory. React Compiler is off.

## EmailJS

Copy .env.example to .env.local and supply the NEXT_PUBLIC_EMAILJS_* values. The old VITE_* names are no longer used. These are public browser identifiers; do not add a private EmailJS key. Forms keep their existing behavior and show a fallback if credentials are missing. Live email delivery requires the supplied EmailJS templates and a real submission test.

## Deployment

Deploy this folder as a Next.js project on Vercel. Use npm run build and automatic Next.js output settings. Do not copy the Vite vercel.json rewrites or set output to dist. Add the NEXT_PUBLIC_EMAILJS_* values in the hosting environment and rebuild. Legacy service URLs redirect to their canonical service pages; unknown URLs use the App Router 404.

The design, content, scrolling effects, preloader timing, external booking destination, and desktop-only circular text are preserved. No CMS or new pages were added as part of the migration.
