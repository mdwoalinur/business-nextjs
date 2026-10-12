# BUSINESS Frontend

Next.js App Router website with Home, About Us, Services and Contact Us pages.
Uses React, Tailwind CSS and React Leaflet with self-hosted fonts and local images.

## Requirements

Node.js 20.9 or newer and npm.

## Install And Run

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Use `npm run dev -- --port 3001` if that port is occupied.

## Verify And Run Production

```sh
npm run lint
npm run build
npm run start
```

Stop the development server before starting production on the same port.

## Deployment

Push the project to your GitHub repository and import it into Vercel as a Next.js
project. Use `npm ci` to install dependencies and `npm run build` to build.
No application API keys or environment variables are required.

## Integration Notes

The Contact form validates locally; message delivery is not configured. Subscribe
opens the configured external Google sign-in URL and does not create a newsletter
subscription. Social links use the configured platform homepages.

The office map uses OpenStreetMap community tiles, whose availability is not
guaranteed. Keep visible OpenStreetMap attribution. Font licenses are included
under `public/fonts`; Leaflet marker licensing is under `public/icons`.
