/**
 * Minimal ESLint flat configuration.
 *
 * ESLint is not a project dependency, so this file exists for editors and for
 * anyone who runs `npx eslint .` on demand. It intentionally uses no plugins so
 * it works without installing anything beyond ESLint itself.
 */
export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    // Node-based test and tooling scripts at the repository root.
    files: ['*.js'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        URL: 'readonly',
      },
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'warn',
    },
  },
  {
    // The zero-build reviewers are classic browser scripts.
    files: ['*/data.js'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'script',
      globals: {
        globalThis: 'readonly',
      },
    },
    rules: {
      'no-undef': 'error',
    },
  },
];
