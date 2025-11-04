// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 2023,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      // Requiere comillas simples
      quotes: 'off',

      // Requiere ; al final de las líneas
      semi: 'off',

      // Obliga a usar const en lugar de let si la variable no se reasigna
      'prefer-const': ['error'],

      // Prohibe el uso de var, fomentando let/const
      'no-var': ['error'],

      // Requiere espacio después de palabras clave como if, for, while
      'keyword-spacing': ['error'],

      // Requiere un espacio antes de abrir llaves { }
      'space-before-blocks': ['error'],

      // Requiere espacio antes y después de comas
      'comma-spacing': ['error'],

      // Advierte si las líneas superan los 80 caracteres
      'max-len': ['warn', { code: 150 }],

      // Requiere salto de línea estilo Unix (LF) para compatibilidad multiplataforma
      'linebreak-style': ['error', 'unix'],

      // evita declarar variables (let, const, function, class) en bloques de código sin llaves
      'no-case-declarations': 'off',

      // === Reglas específicas de TypeScript ===

      // Advierte cuando usas el tipo any (mala práctica)
      '@typescript-eslint/no-explicit-any': ['off'],

      // Detecta variables declaradas pero no utilizadas
      '@typescript-eslint/no-unused-vars': ['warn'],

      // Desactiva advertencias sobre tipos inferidos innecesariamente
      '@typescript-eslint/no-inferrable-type': ['off'],

      // Advierte cuando usas ! para afirmar que algo no es null/undefined
      '@typescript-eslint/no-non-null-assertion': ['warn'],

      // Permite omitir tipos explícitos en funciones/métodos (útil en muchos casos)
      '@typescript-eslint/explicit-module-boundary-types': ['off'],

      // Permite el acceso a propiedades sin tipo explícito
      '@typescript-eslint/no-unsafe-member-access': ['off'],

      // Promesas que no se manejan (sin await, .then o .catch)
      '@typescript-eslint/no-floating-promises': 'off',

      // Uso de any como argumento de funciones donde se espera un tipo específico
      '@typescript-eslint/no-unsafe-argument': 'warn',
    },
  },
);
