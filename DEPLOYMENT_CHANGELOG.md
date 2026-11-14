# Deployment Changelog

Use this file to record each production deployment.

Entries below describe the state recorded at their dates, not the current local application. The pending entry is a historical note, not confirmation of a deployment. Check Vercel and the deployed commit for current production status; no November 14, 2026 deployment has been recorded here.

## Template

- Date (UTC):
- Deployed by:
- Environment: production
- Domain:
- Vercel deployment URL:
- Git branch:
- Commit SHA:
- Tag:
- Summary of changes:
- Verification checklist:
  - Home gallery loads
  - About page loads
  - Portfolio overview and collection galleries load in the intended order
  - Lightbox interaction works
  - Responsive layout preserves image proportions
- Rollback plan:
- Notes:

---

## 2026-05-16

- Date (UTC): 2026-05-16
- Deployed by: GitHub Copilot + Jonathan Mallett
- Environment: production
- Domain: https://jonathanmallett.com
- Vercel deployment URL: https://photography-website-59kb89519-jonathan-malletts-projects.vercel.app
- Git branch: main
- Commit SHA: 04b128c
- Tag: v2026.05.16
- Summary of changes:
  - Updated Sport image mapping to use `sport-ls.jpg`
  - Removed stale Places image paths and corrected the image mapping
  - Refined the homepage hero to viewport-fit without requiring page scroll
  - Updated project documentation to match current categories, image paths, and deployment flow
- Verification checklist:
  - Home page loads
  - Portfolio categories load
  - Sport gallery image paths correct
  - Places gallery has no blank tiles
  - Hero image viewport behavior verified
- Rollback plan:
  - Re-deploy previous Vercel production deployment from dashboard if needed
- Notes:
  - Deployment metadata finalized after push to origin/main.

---

## 2026-08-31 (pending deployment)

- Date (UTC): 2026-08-31
- Deployed by: GitHub Copilot + Jonathan Mallett
- Environment: prepared locally; deploy after push to `main`
- Domain: https://jonathanmallett.com
- Git branch: main
- Summary of changes:
  - Replaced the hero homepage with a curated 33-photo portfolio gallery
  - Added responsive masonry columns with natural image proportions and 8px gutters
  - Added a light monochrome lightbox and Portfolio link back to `/`
  - Removed the legacy `/portfolio` route tree; the next deployment will make the route return 404
- Verification checklist:
  - Home gallery loads with the curated sequence
  - About page loads with readable light-theme styling
  - Lightbox opens, closes, and supports keyboard navigation
  - `/portfolio` returns 404 without a redirect after deployment
  - Production build and full test suite pass
- Rollback plan:
  - Re-deploy the previous Vercel production deployment from the dashboard if needed
