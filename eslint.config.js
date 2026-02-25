const { dirname } = require('path');
const { file } = require('gulp');
const project = require(project.config.js);

module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript'],
  rules: {
    // Custom rules for ThemeForest compliance
    'no-console': 'warn', // Warn about console.log in production
    'no-unused-vars': 'error', // No unused variables
    'prefer-const': 'error', // Use const when possible
    'no-var': 'error', // No var declarations
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
  ],
};
