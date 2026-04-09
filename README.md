# Pramod Joshi Portfolio

Minimal Next.js + TypeScript portfolio with custom visual direction, smooth animations, and practical SEO setup.

## Sections Included

- About
- Skills
- Projects
- Certificates
- Hobbies
- Contact
- Resume download

## Local Development

1. Install dependencies:

   npm install

2. Start development server:

   npm run dev

3. Open:

   http://localhost:3000

## Production Build

Run:

npm run build

This project is configured for static export and GitHub Pages deployment.

## GitHub Pages Deployment

1. Push this folder to a GitHub repository.
2. In GitHub repository settings:
   - Open Pages
   - Set Source to GitHub Actions
3. Ensure your default branch is main.
4. The workflow in .github/workflows/deploy.yml will build and deploy automatically.

## Custom Domain

The domain is set via public/CNAME:

pramodjoshi.com.np

After deployment, configure your DNS provider records to point to GitHub Pages.

## SEO Checklist After Deploy

1. Add your domain property in Google Search Console.
2. Submit sitemap URL:
   https://pramodjoshi.com.np/sitemap.xml
3. Request indexing for your homepage.
