import { includeIgnoreFile } from '@eslint/compat';
import eslint from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import perfectionist from 'eslint-plugin-perfectionist';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tsEslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  unicorn.configs['flat/recommended'],
  perfectionist.configs['recommended-alphabetical'],
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      'import/first': 'warn',
      'import/no-unresolved': 'off',
      'no-unused-vars': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  // react related
  {
    files: ['**/*.{ts,tsx}'],
    ...react.configs.flat.recommended,
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {
          allowExportNames: [
            'action',
            'clientAction',
            'clientLoader',
            'headers',
            'links',
            'loader',
            'meta',
          ],
        },
      ],
      'react/react-in-jsx-scope': 'off',
    },
  },
  // jsx-a11y
  {
    files: ['**/*.tsx'],
    ...jsxA11y.flatConfigs.recommended,
  },
  // common config for react, jsx-a11y
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  // vitest
  {
    files: ['**/__tests__/**'],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      'vitest/expect-expect': [
        'error',
        {
          assertFunctionNames: ['expect', 'render'],
        },
      ],
    },
  },
  includeIgnoreFile(gitignorePath),
  /**
   * You must set eslintConfigPrettier as the last configuration
   * @link https://github.com/prettier/eslint-config-prettier?tab=readme-ov-file#what-and-why
   */
  eslintConfigPrettier,
);
