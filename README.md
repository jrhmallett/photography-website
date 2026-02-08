# Photography Website

**A modern photography portfolio built with AI-assisted development**

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)

---

## Overview

This is a photography portfolio website for showcasing photography work without relying on social media platforms. The project also serves as a hands-on learning experience in modern software development practices, AI-assisted coding, and DevOps methodologies.

**Project Goals:**
1. Create a professional photography portfolio with image optimization and responsive design
2. Learn prompt engineering and AI-assisted development workflows
3. Practice modern software development: TypeScript, React, testing, and CI/CD
4. Document the entire build process for learning and reference

---

## Features

### Current Features (MVP in Progress)
- ✅ Next.js 16 with App Router
- ✅ TypeScript with strict mode
- ✅ Tailwind CSS for styling
- ✅ Jest and React Testing Library for testing
- ✅ ESLint for code quality
- ✅ Comprehensive documentation

### Planned Features
- 📸 Photo gallery with optimized images
- 🎨 Responsive design (mobile-first)
- 🖼️ Lightbox for full-size viewing
- 📄 About and Contact pages
- 🚀 Deployed on Netlify with CI/CD
- ⚡ Performance optimized (Lighthouse > 90)
- ♿ Accessibility compliant (WCAG 2.1 AA)

---

## Quick Start

### Prerequisites

- Node.js 18+ (tested with v23.10.0)
- npm 10+ (tested with 10.9.2)
- Git 2+ (tested with 2.39.5)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/photography-website.git
cd photography-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm test             # Run all tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

---

## Project Structure

```
/photography-website
├── app/                # Next.js App Router pages
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable React components
├── public/             # Static assets (images, fonts)
├── tests/              # Unit and integration tests
├── docs/               # Project documentation
│   ├── ARCHITECTURE.md # Tech stack and design decisions
│   ├── SETUP.md        # Detailed setup guide
│   └── FEATURES.md     # Feature tracking and progress
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── next.config.ts      # Next.js configuration
└── jest.config.js      # Jest testing configuration
```

---

## Documentation

Comprehensive documentation is available in the `/docs` folder:

- **[ARCHITECTURE.md](docs/ARCHITECTURE.md)** — Technology choices, architecture decisions, and deployment strategy
- **[SETUP.md](docs/SETUP.md)** — Complete setup guide with installation, running, and troubleshooting
- **[FEATURES.md](docs/FEATURES.md)** — Feature tracking and implementation progress

---

## Technology Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Framework** | Next.js 16 | React framework with SSG, image optimization |
| **UI Library** | React 19 | Component-based UI development |
| **Language** | TypeScript 5 | Type-safe JavaScript with better tooling |
| **Styling** | Tailwind CSS 4 | Utility-first CSS framework |
| **Testing** | Jest + RTL | Unit and integration testing |
| **Linting** | ESLint | Code quality and consistency |
| **Deployment** | Netlify | Static hosting with CI/CD |

---

## Development Approach

This project uses **AI-assisted development** with GitHub Copilot and Claude. The development workflow emphasizes:

- **Prompt Engineering:** Writing clear specifications for AI to implement
-**Architecture Decisions:** Human-driven technology and design choices
- **Code Review:** Validating AI outputs meet requirements and best practices
- **Comprehensive Documentation:** Explaining what was built and why
- **Test-Driven Development:** Tests validate functionality before proceeding

---

## Testing

The project includes comprehensive unit tests for all components and pages.

```bash
# Run tests
npm test

# Example output:
# PASS  tests/setup.test.ts
#   Project Setup
#     ✓ package.json has required dependencies
#     ✓ TypeScript config is valid
#     ✓ Tailwind config is valid
```

**Coverage Goals:**
- Components: > 80%
- Pages: > 70%
- Utils/helpers: > 90%

---

## Deployment

The site is deployed to Netlify with automatic deployments on every push to the main branch.

**Deployment Flow:**
```
Local Development → Git Push → GitHub → Netlify Build → Live Site
                              ↓
                        Branch Push → Preview URL
```

---

## Contributing

This is a personal learning project, but contributions and suggestions are welcome!

### Development Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes and add tests
3. Ensure all tests pass: `npm test`
4. Lint your code: `npm run lint`
5. Commit with clear message: `git commit -m "Feature: Description"`
6. Push and create pull request

---

## Learning Goals & Outcomes

This project demonstrates:

✅ **AI-Assisted Development** — Using AI tools to accelerate development while maintaining quality  
✅ **Modern React Patterns** — App Router, Server Components, TypeScript  
✅ **Testing Best Practices** — Unit tests, integration tests, coverage reporting  
✅ **DevOps Practices** — CI/CD pipelines, automated deployments, branch previews  
✅ **Documentation** — Comprehensive docs for architecture, setup, and features  
✅ **Performance Optimization** — Image optimization, lazy loading, Lighthouse scores  
✅ **Accessibility** — WCAG compliance, keyboard navigation, screen reader support  

---

## Project Status

**Current Sprint:** Sprint 0 - Foundation & Environment Setup  
**Progress:** Epic 1 - ⬜⬜🟡 (2/3 stories complete)

See [FEATURES.md](docs/FEATURES.md) for detailed progress tracking.

---

## License

MIT License - feel free to use this project as a template for your own learning.

---

## Contact

**Jonathan Mallett**
- Portfolio: [Coming Soon]
- Email: jrhmallett@gmail.com
- GitHub: github.com/YOUR_USERNAME/photography-website

---

## Acknowledgments

- Built with [Next.js](https://nextjs.org/) by Vercel
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- AI assistance from [GitHub Copilot](https://github.com/features/copilot) and [Claude](https://www.anthropic.com/claude)
- Deployed on [Netlify](https://www.netlify.com/)

---

**Last Updated:** February 8, 2026

