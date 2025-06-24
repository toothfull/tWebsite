import { describe, it, expect } from 'vitest';
import { greet } from './main.js';

/**
 * @vitest-environment jsdom
 */


// This is a simple test for the greet function in main.js
// It checks if the function returns the expected greeting message
describe('greet function', () => {
  it('returns a greeting message', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});