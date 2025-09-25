import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import jsxa11y from 'eslint-plugin-jsx-a11y';
import { fixupPluginRules } from '@eslint/compat';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import pluginQuery from '@tanstack/eslint-plugin-query';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/consistent-type-imports': 1,
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { caughtErrorsIgnorePattern: '^_' }
      ]
    }
  },
  reactPlugin.configs.flat.recommended,
  {
    plugins: { 'jsx-a11y': jsxa11y },
    rules: jsxa11y.configs.recommended.rules
  },
  ...pluginQuery.configs['flat/recommended'],
  {
    plugins: { 'react-hooks': fixupPluginRules(eslintPluginReactHooks) },
    rules: { ...eslintPluginReactHooks.configs.recommended.rules }
  },
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off'
    },
    settings: { react: { version: 'detect' } },
    ignores: ['node_modules', '.next']
  },
  eslintConfigPrettier
);
