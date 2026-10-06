# Help Jason Fight His Brain Tumor

A dependency-free, responsive fundraising landing page for Jason’s continuing medical care and recovery. The visitor-facing site is written in English and uses the supplied campaign photograph.

## Run locally

Requires Node.js 20 or newer. No package installation is required.

```bash
npm run dev
```

Open `http://localhost:3000`.

## Project layout

- `public/` — static website files and campaign photograph
- `public/manus-routes.json` — route manifest declaring the home page
- `server.mjs` — local static development server
- `vercel.json` — Vercel static deployment configuration

## Deploy to GitHub

1. Create a new **private** GitHub repository.
2. From this project folder, initialize Git, commit the project files, add the GitHub repository as `origin`, and push the `main` branch.
3. Do not commit wallet credentials, private keys, or `.env` files — this site does not need any.

If this project is managed in Manus, use the project’s GitHub connection flow to transfer the canonical repository instead of manually changing managed remotes.

## Deploy to Vercel

1. In Vercel, choose **Add New → Project** and import the GitHub repository.
2. Vercel will use the included `vercel.json`. If prompted, use:
   - **Build command:** `npm run build`
   - **Output directory:** `public`
3. Deploy. Each future push to `main` will create a new Vercel deployment.

## Important content note

Bitcoin transactions are irreversible. Before publishing or sharing the campaign, independently verify the displayed wallet address and campaign information. The website only offers a copy-address convenience; it does not accept, handle, or relay payments.
