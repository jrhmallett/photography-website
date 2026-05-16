# Deployment Changelog

Use this file to record each production deployment.

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
  - Home page loads
  - Portfolio categories load
  - Sport gallery image paths correct
  - Places gallery has no blank tiles
  - Hero image viewport behavior verified
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
- Commit SHA: pending local commit
- Tag: pending local tag
- Summary of changes:
  - Updated Sport image mapping to use `sport-ls.jpg`
  - Removed stale Places image paths and mapped missing slot to `travel-117.jpg`
  - Refined homepage hero to viewport-fit without requiring page scroll
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
  - Fill in commit SHA and tag after local commit/tag steps complete.
