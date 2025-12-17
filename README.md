# First Freight – Next.js Concept Site

Improved, modern single-page marketing site for First Freight, rebuilt with Next.js and React and based on the current public website at [`firstfreight.co.za`](https://firstfreight.co.za).

## Tech stack

- Next.js 14
- React 18
- CSS (no CSS framework)

## Getting started

```bash
cd /Users/jessica-leetingley/Documents/first-freight
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Available scripts

- `npm run dev` – start Next.js dev server
- `npm run build` – build for production
- `npm start` – run the production build

## Project structure

- `pages/_app.js` – global app shell, meta tags and fonts
- `pages/index.js` – main First Freight landing page layout (hero, services, tools, testimonials, branches, quote form)
- `styles/globals.css` – global styles and layout system

## Deploying

### Vercel

When imported into Vercel as a static site:

- **Build Command**: `npm run deploy`
- **Output Directory**: `out`

### GitHub Pages

You can also use the included GitHub Actions workflow in `.github/workflows/deploy.yml`, which runs `npm run deploy` and publishes the static output in `out/` to GitHub Pages.



