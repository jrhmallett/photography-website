/**
 * Story 1.2: Initialize Next.js Project - Unit Tests
 * 
 * These tests validate that the project is properly set up with all required
 * dependencies and configuration files.
 */

import fs from 'fs';
import path from 'path';

describe('Project Setup', () => {
  test('package.json exists and has required dependencies', () => {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    expect(fs.existsSync(packageJsonPath)).toBe(true);

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    
    // Check required dependencies
    expect(packageJson.dependencies).toHaveProperty('next');
    expect(packageJson.dependencies).toHaveProperty('react');
    expect(packageJson.dependencies).toHaveProperty('react-dom');
    
    // Check required dev dependencies
    expect(packageJson.devDependencies).toHaveProperty('typescript');
    expect(packageJson.devDependencies).toHaveProperty('tailwindcss');
    expect(packageJson.devDependencies).toHaveProperty('eslint');
    
    // Check scripts
    expect(packageJson.scripts).toHaveProperty('dev');
    expect(packageJson.scripts).toHaveProperty('build');
    expect(packageJson.scripts).toHaveProperty('start');
    expect(packageJson.scripts).toHaveProperty('lint');
  });

  test('TypeScript config is valid', () => {
    const tsconfigPath = path.join(process.cwd(), 'tsconfig.json');
    expect(fs.existsSync(tsconfigPath)).toBe(true);

    const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf-8'));
    
    // Verify key TypeScript settings
    expect(tsconfig.compilerOptions).toHaveProperty('jsx');
    expect(tsconfig.compilerOptions).toHaveProperty('strict');
    expect(tsconfig.compilerOptions.strict).toBe(true);
    
    // Verify path aliases are configured
    expect(tsconfig.compilerOptions).toHaveProperty('paths');
    expect(tsconfig.compilerOptions.paths).toHaveProperty('@/*');
  });

  test('Tailwind config is valid', () => {
    const tailwindConfigPath = path.join(process.cwd(), 'tailwind.config.ts');
    expect(fs.existsSync(tailwindConfigPath)).toBe(true);

    // Read and verify the file exists and has content
    const tailwindConfig = fs.readFileSync(tailwindConfigPath, 'utf-8');
    expect(tailwindConfig).toContain('content');
    expect(tailwindConfig).toContain('theme');
  });

  test('Next.js config exists', () => {
    const nextConfigPath = path.join(process.cwd(), 'next.config.ts');
    expect(fs.existsSync(nextConfigPath)).toBe(true);
  });

  test('.gitignore exists and excludes necessary files', () => {
    const gitignorePath = path.join(process.cwd(), '.gitignore');
    expect(fs.existsSync(gitignorePath)).toBe(true);

    const gitignore = fs.readFileSync(gitignorePath, 'utf-8');
    
    // Verify important exclusions
    expect(gitignore).toContain('node_modules');
    expect(gitignore).toContain('.next');
    expect(gitignore).toContain('.env');
  });

  test('App directory exists', () => {
    const appDirPath = path.join(process.cwd(), 'app');
    expect(fs.existsSync(appDirPath)).toBe(true);
    expect(fs.statSync(appDirPath).isDirectory()).toBe(true);
  });

  test('Jest configuration is valid', () => {
    const jestConfigPath = path.join(process.cwd(), 'jest.config.js');
    expect(fs.existsSync(jestConfigPath)).toBe(true);

    const jestConfig = fs.readFileSync(jestConfigPath, 'utf-8');
    expect(jestConfig).toContain('next/jest');
    expect(jestConfig).toContain('jest-environment-jsdom');
  });
});
