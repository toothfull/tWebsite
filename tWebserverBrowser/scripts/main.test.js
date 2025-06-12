import { describe, it, expect } from 'vitest';
import { greet } from './main.js';

// This is a simple test for the greet function
// It checks if the function returns the expected greeting message
describe('greet function', () => {
  it('returns a greeting message', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});