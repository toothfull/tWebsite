// eslint.config.mjs

import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ['**/*.ts', '**/*.js'],
    ignores: ['dist/', 'node_modules/'],

    languageOptions: {
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
