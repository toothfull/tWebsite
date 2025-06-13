// eslint.config.mjs

import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended, // Use recommended rules from TypeScript ESLint

  {
    files: ['**/*.ts', '**/*.js'], // Apply to all TypeScript and JavaScript files
    ignores: ['dist/', 'node_modules/'], // Ignore build and dependency directories

    languageOptions: { // Use ECMAScript modules and latest ECMAScript version
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Node.js globals
        require: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        console: 'readonly'
      }
    },

    rules: {
      // allow `require()` in Node
      '@typescript-eslint/no-require-imports': 'off',
    }
  }
];
