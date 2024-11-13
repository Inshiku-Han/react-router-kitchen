import { includeIgnoreFile } from '@eslint/compat';
import eslint from '@eslint/js';
import pluginVitest from '@vitest/eslint-plugin';
import configPrettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginPerfectionist from 'eslint-plugin-perfectionist';
import pluginPlaywright from 'eslint-plugin-playwright';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import pluginStorybook from 'eslint-plugin-storybook';
import pluginTestingLibrary from 'eslint-plugin-testing-library';
import pluginUnicorn from 'eslint-plugin-unicorn';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
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
  pluginImport.flatConfigs.recommended,
  pluginUnicorn.configs['flat/recommended'],
  pluginPerfectionist.configs['recommended-alphabetical'],
  ...pluginStorybook.configs['flat/recommended'],
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    plugins: {
      'unused-imports': pluginUnusedImports,
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
  // react
  {
    files: ['**/*.{ts,tsx}'],
    ...pluginReact.configs.flat.recommended,
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  // react-hooks
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },
  // react-refresh
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-refresh': pluginReactRefresh,
    },
    rules: {
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
    },
  },
  // jsx-a11y
  {
    files: ['**/*.tsx'],
    ...pluginJsxA11y.flatConfigs.recommended,
    rules: {
      ...pluginJsxA11y.flatConfigs.recommended.rules,
    },
  },
  // vitest
  {
    files: ['**/__tests__/**/*.spec.{ts,tsx}'],
    ...pluginVitest.configs.recommended,
    rules: {
      ...pluginVitest.configs.recommended.rules,
    },
  },
  // testing-library
  {
    files: ['**/__tests__/**/*.spec.{ts,tsx}'],
    ...pluginTestingLibrary.configs['flat/react'],
    rules: {
      ...pluginTestingLibrary.configs['flat/react'].rules,
    },
  },
  // playwright
  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['tests/e2e/**/*.spec.ts'],
    rules: {
      ...pluginPlaywright.configs['flat/recommended'].rules,
    },
  },
  includeIgnoreFile(gitignorePath),
  /**
   * You must set eslintConfigPrettier as the last configuration
   * @link https://github.com/prettier/eslint-config-prettier?tab=readme-ov-file#what-and-why
   */
  configPrettier,
);
