import { defineConfig } from 'vitest/config';

// This is a Vitest configuration file for testing TypeScript files.
// It includes settings for test file patterns and the testing environment.
export default defineConfig({
  test: {
    include: ['**/*.{test,spec}.{js,ts}'], // Ensure .js and .ts tests are included
    environment: 'jsdom', // Use 'jsdom' for browser-like environment, or 'node' for server-like environment
  },
});