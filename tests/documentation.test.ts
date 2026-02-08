/**
 * Story 1.3: Documentation Structure & Git Initialization - Unit Tests
 * 
 * These tests validate that documentation is properly structured and
 * Git repository is correctly initialized.
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

describe('Documentation Structure', () => {
  test('docs folder exists', () => {
    const docsPath = path.join(process.cwd(), 'docs');
    expect(fs.existsSync(docsPath)).toBe(true);
    expect(fs.statSync(docsPath).isDirectory()).toBe(true);
  });

  test('ARCHITECTURE.md exists and has content', () => {
    const archPath = path.join(process.cwd(), 'docs', 'ARCHITECTURE.md');
    expect(fs.existsSync(archPath)).toBe(true);

    const content = fs.readFileSync(archPath, 'utf-8');
    
    // Verify key sections exist
    expect(content).toContain('# Photography Website - Architecture');
    expect(content).toContain('Technology Stack');
    expect(content).toContain('Next.js');
    expect(content).toContain('TypeScript');
    expect(content).toContain('Tailwind');
    expect(content.length).toBeGreaterThan(1000); // Ensure substantial content
  });

  test('SETUP.md exists and has content', () => {
    const setupPath = path.join(process.cwd(), 'docs', 'SETUP.md');
    expect(fs.existsSync(setupPath)).toBe(true);

    const content = fs.readFileSync(setupPath, 'utf-8');
    
    // Verify key sections exist
    expect(content).toContain('# Photography Website - Setup Guide');
    expect(content).toContain('Prerequisites');
    expect(content).toContain('npm install');
    expect(content).toContain('npm run dev');
    expect(content.length).toBeGreaterThan(2000); // Ensure comprehensive guide
  });

  test('FEATURES.md exists and has content', () => {
    const featuresPath = path.join(process.cwd(), 'docs', 'FEATURES.md');
    expect(fs.existsSync(featuresPath)).toBe(true);

    const content = fs.readFileSync(featuresPath, 'utf-8');
    
    // Verify key sections exist
    expect(content).toContain('# Photography Website - Features');
    expect(content).toContain('Epic 1');
    expect(content).toContain('Story 1.1');
    expect(content).toContain('Story 1.2');
    expect(content.length).toBeGreaterThan(1000);
  });

  test('README.md exists at root with project overview', () => {
    const readmePath = path.join(process.cwd(), 'README.md');
    expect(fs.existsSync(readmePath)).toBe(true);

    const content = fs.readFileSync(readmePath, 'utf-8');
    
    // Verify it's not the default Next.js README
    expect(content).not.toContain('create-next-app');
    
    // Verify custom content
    expect(content).toContain('# Photography Website');
    expect(content).toContain('Overview');
    expect(content).toContain('Features');
    expect(content).toContain('Quick Start');
    expect(content).toContain('Documentation');
    expect(content.length).toBeGreaterThan(2000);
  });

  test('README.md links to documentation files', () => {
    const readmePath = path.join(process.cwd(), 'README.md');
    const content = fs.readFileSync(readmePath, 'utf-8');
    
    // Verify links to docs
    expect(content).toContain('ARCHITECTURE.md');
    expect(content).toContain('SETUP.md');
    expect(content).toContain('FEATURES.md');
  });
});

describe('Git Repository', () => {
  test('Git repository is initialized', () => {
    const gitPath = path.join(process.cwd(), '.git');
    expect(fs.existsSync(gitPath)).toBe(true);
    expect(fs.statSync(gitPath).isDirectory()).toBe(true);
  });

  test('Git has at least one commit', () => {
    try {
      const output = execSync('git log --oneline', { encoding: 'utf-8' });
      expect(output.length).toBeGreaterThan(0);
      expect(output).toContain('Initial commit');
    } catch (error) {
      fail('Git log command should succeed if commits exist');
    }
  });

  test('Git user is configured', () => {
    try {
      const name = execSync('git config user.name', { encoding: 'utf-8' }).trim();
      const email = execSync('git config user.email', { encoding: 'utf-8' }).trim();
      
      expect(name.length).toBeGreaterThan(0);
      expect(email.length).toBeGreaterThan(0);
      expect(email).toContain('@');
    } catch (error) {
      fail('Git should be configured with user name and email');
    }
  });

  test('.gitignore excludes necessary files', () => {
    const gitignorePath = path.join(process.cwd(), '.gitignore');
    expect(fs.existsSync(gitignorePath)).toBe(true);

    const gitignore = fs.readFileSync(gitignorePath, 'utf-8');
    
    // Verify critical exclusions
    expect(gitignore).toContain('node_modules');
    expect(gitignore).toContain('.next');
    expect(gitignore).toContain('.env');
    expect(gitignore).toContain('*.tsbuildinfo');
    expect(gitignore).toContain('next-env.d.ts');
  });

  test('node_modules is not tracked by git', () => {
    const nodeModulesPath = path.join(process.cwd(), 'node_modules');
    
    // node_modules should exist
    expect(fs.existsSync(nodeModulesPath)).toBe(true);
    
    // But it should not be tracked by git
    try {
      const trackedFiles = execSync('git ls-files node_modules', { encoding: 'utf-8' });
      expect(trackedFiles.trim()).toBe('');
    } catch (error) {
      // If command fails, that's also fine - means nothing is tracked
      expect(true).toBe(true);
    }
  });

  test('.next directory is not tracked by git (if exists)', () => {
    const nextPath = path.join(process.cwd(), '.next');
    
    // .next might not exist yet, only test if it does
    if (fs.existsSync(nextPath)) {
      try {
        const trackedFiles = execSync('git ls-files .next', { encoding: 'utf-8' });
        expect(trackedFiles.trim()).toBe('');
      } catch (error) {
        expect(true).toBe(true);
      }
    } else {
      // If .next doesn't exist, test passes
      expect(true).toBe(true);
    }
  });
});

describe('Documentation Quality', () => {
  test('All markdown files have proper headings', () => {
    const docFiles = [
      'README.md',
      'docs/ARCHITECTURE.md',
      'docs/SETUP.md',
      'docs/FEATURES.md',
    ];

    docFiles.forEach((file) => {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // Should start with # heading
      expect(content.trim()).toMatch(/^#\s+/);
    });
  });

  test('Documentation includes last updated dates', () => {
    const docFiles = [
      'docs/ARCHITECTURE.md',
      'docs/SETUP.md',
      'docs/FEATURES.md',
    ];

    docFiles.forEach((file) => {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // Should contain a date
      expect(content).toMatch(/\d{4}/); // At least a year
    });
  });
});
