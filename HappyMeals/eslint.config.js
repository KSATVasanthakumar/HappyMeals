import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactYouMightNotNeedAnEffect from 'eslint-plugin-react-you-might-not-need-an-effect'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      reactYouMightNotNeedAnEffect.configs.recommended,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'react-you-might-not-need-an-effect/no-chain-state-updates': 'error',
      'react-you-might-not-need-an-effect/no-derived-state': 'error',
      'react-you-might-not-need-an-effect/no-initialize-state': 'error',
      'react-you-might-not-need-an-effect/no-external-store-subscription':
        'error',
    },
  },
])
