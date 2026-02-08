# Photography Website - Setup Guide

**Last Updated:** February 8, 2026

This guide explains how to set up and run the Photography Website project locally.

---

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

1. **Node.js** (v18 or higher)
   - Download: https://nodejs.org/
   - Verify installation: `node --version`
   - This project tested with: Node.js v23.10.0

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`
   - This project tested with: npm 10.9.2

3. **Git** (v2.0 or higher)
   - Download: https://git-scm.com/
   - Verify installation: `git --version`
   - This project tested with: Git 2.39.5

4. **VS Code** (recommended)
   - Download: https://code.visualstudio.com/
   - Recommended extensions:
     - ESLint
     - Prettier - Code formatter
     - Tailwind CSS IntelliSense
     - TypeScript and JavaScript Language Features

---

## Initial Setup

### 1. Clone the Repository

```bash
# Clone from GitHub (replace with actual repo URL)
git clone https://github.com/YOUR_USERNAME/photography-website.git

# Navigate to project directory
cd photography-website
```

### 2. Install Dependencies

```bash
# Install all project dependencies
npm install

# This will install:
# - Next.js 16
# - React 19
# - TypeScript 5
# - Tailwind CSS 4
# - Jest and testing libraries
# - ESLint and related tools
```

Installation takes approximately 1-2 minutes depending on your internet connection.

### 3. Verify Installation

```bash
# Check that all key files exist
ls -la

# You should see:
# - package.json
# - package-lock.json
# - node_modules/
# - tsconfig.json
# - tailwind.config.ts
# - next.config.ts
```

---

## Running the Project

### Development Server

Start the Next.js development server:

```bash
npm run dev
```

**Output:**
```
▲ Next.js 16.1.6 (Turbopack)
- Local:   http://localhost:3000
- Network: http://192.168.x.x:3000

✓ Starting...
✓ Ready in ~400ms
```

**Access the site:**
- Open your browser to: http://localhost:3000
- The page auto-reloads when you save changes
- Hot Module Replacement (HMR) enabled for instant updates

**Stop the server:**
- Press `Ctrl + C` in the terminal

---

### Production Build

Build the project for production:

```bash
npm run build
```

This command:
1. Compiles TypeScript to JavaScript
2. Optimizes React components
3. Generates static pages
4. Minifies CSS and JavaScript
5. Optimizes images

**Expected output:**
```
✓ Compiled successfully
✓ Generating static pages
✓ Finalizing page optimization

Route (app)        Size
┌ ○ /              ...KB
```

**Run production build locally:**

```bash
npm run start
```

Access at: http://localhost:3000

---

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

This checks for:
- TypeScript errors
- Code style issues
- Potential bugs
- Best practice violations

**Auto-fix issues:**
```bash
npx eslint --fix
```

---

### Testing

Run the test suite:

```bash
# Run all tests once
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

**Test coverage report shows:**
- % of lines covered
- % of functions tested
- % of branches tested
- Uncovered code locations

---

## Git Configuration

### First-Time Setup

Configure Git with your details:

```bash
# Set your name (used in commits)
git config --global user.name "Your Name"

# Set your email (used in commits)
git config --global user.email "your.email@example.com"

# Verify configuration
git config user.name
git config user.email
```

### Git Workflow

**Create a feature branch:**
```bash
# Create and switch to new branch
git checkout -b feature/your-feature-name
```

**Make changes and commit:**
```bash
# Check what files changed
git status

# Stage files for commit
git add .

# Commit with descriptive message
git commit -m "Feature: Add gallery page (see docs/FEATURES.md)"
```

**Push to GitHub:**
```bash
# First time pushing a new branch
git push -u origin feature/your-feature-name

# Subsequent pushes
git push
```

**Merge back to main:**
```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull

# Merge your feature branch
git merge feature/your-feature-name

# Push to GitHub
git push
```

---

## Project Structure

After setup, your project structure looks like:

```
/photography-website
├── app/                # Next.js pages and layouts
│   ├── layout.tsx      # Root layout (wraps all pages)
│   ├── page.tsx        # Home page
│   └── globals.css     # Global CSS
├── components/         # Reusable React components (created as needed)
├── public/             # Static files (images, fonts, etc.)
│   ├── next.svg        # Sample SVG
│   └── vercel.svg      # Sample SVG
├── tests/              # Unit and integration tests
│   └── setup.test.ts   # Project setup tests
├── docs/               # Project documentation
│   ├── ARCHITECTURE.md # Tech stack and decisions
│   └── SETUP.md        # This file
├── node_modules/       # Dependencies (not committed to Git)
├── .next/              # Next.js build output (not committed)
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── next.config.ts      # Next.js configuration
├── jest.config.js      # Jest test configuration
├── .gitignore          # Files to exclude from Git
├── .eslintrc.json      # ESLint configuration
└── README.md           # Project overview
```

---

## Common Issues & Troubleshooting

### Issue: Port 3000 already in use

**Error:**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution:**
```bash
# Option 1: Kill the process using port 3000
lsof -i :3000
kill -9 <PID>

# Option 2: Use a different port
npm run dev -- -p 3001
```

---

### Issue: node_modules not found

**Error:**
```
Cannot find module 'next'
```

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

### Issue: TypeScript errors after pulling changes

**Solution:**
```bash
# Rebuild TypeScript types
rm -rf .next
npm run build
```

---

### Issue: Tests failing with module errors

**Solution:**
```bash
# Clear Jest cache
npx jest --clearCache

# Reinstall test dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

---

## Environment Variables

If the project requires environment variables (API keys, etc.):

1. Copy the example file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` with your values:
   ```bash
   # Example variables
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. Restart the dev server to load new variables

**Important:** Never commit `.env.local` to Git (it's in `.gitignore`)

---

## Development Tips

### Fast Development Workflow

1. Keep `npm run dev` running in one terminal
2. Make changes in VS Code
3. Save files (Cmd+S / Ctrl+S)
4. Browser auto-refreshes with changes
5. Check terminal for build errors

### Before Committing

```bash
# Check for errors
npm run lint
npm test
npm run build

# All should pass before committing
```

### VS Code Shortcuts

- `Cmd/Ctrl + P`: Quick file open
- `Cmd/Ctrl + Shift + F`: Search across all files
- `Cmd/Ctrl + B`: Toggle sidebar
- `F12`: Go to definition
- `Shift + F12`: Find all references

---

## Getting Help

### Project Resources

- **Documentation:** Check `/docs` folder
- **Architecture:** See `docs/ARCHITECTURE.md`
- **Features:** See `docs/FEATURES.md`

### External Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## Next Steps

After setup is complete:

1. ✅ Run `npm run dev` to start development server
2. ✅ Open http://localhost:3000 to see the site
3. ✅ Explore the codebase in VS Code
4. ✅ Read `docs/ARCHITECTURE.md` to understand tech choices
5. ✅ Check `docs/FEATURES.md` for what to build next

**Ready to build!** 🚀
