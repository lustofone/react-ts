import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  js.configs.recommended,
  {
    ignores: ['**/.vscode/**'],
  },
  tseslint.configs.recommended
);
