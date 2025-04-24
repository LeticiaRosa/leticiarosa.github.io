import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['dist/**', 'node_modules/**', '.git/**', 'public/**'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
]);
