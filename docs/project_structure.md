# Project Structure and Development Guide (Nuxt 4)

The project is built on **Nuxt 4**, **Vite**, **Pinia**, **Tailwind CSS**, and **PrimeVue 4**. It uses the `app/` directory structure introduced in Nuxt 4.

## 1. Directory Structure `app/`

- `apis/`: Defines API calling functions (Axios).
- `assets/`: Contains global styles (Tailwind, PrimeVue overrides), images, and fonts.
- `components/`: Shared UI components, automatically imported by Nuxt.
- `composables/`: Contains reusable logic functions, including API interaction and state management helpers.
- `config/`: System constants and configuration (`constants.ts`).
- `layouts/`: Application layouts (`auth.vue`, `default.vue`).
- `middleware/`: Navigation guards and route middleware (`auth.global.ts`).
- `pages/`: Application screens and routing hierarchy.
- `stores/`: Global state management with Pinia (`api.ts`).
- `utils/`: Shared utility functions (validation, global helpers).

## 2. Development and Extensibility

- **Add New Module**:
  1. Create a sub-directory in `app/pages/`.
  2. Define API endpoints in `app/apis/`.
  3. Create a Composable in `app/composables/` to handle specific module logic.
  4. Nuxt automatically handles routing based on the file structure in `app/pages/`.
- **Add Multilingual Feature**: Add keys to JSON files in `app/locales/`. Use `$t('key')` in templates. Configuration is handled by `@nuxtjs/i18n` in `nuxt.config.ts`.
- **Add New State**: Create a new file in `app/stores/` using Pinia's `defineStore`.

## 3. Best Practices

- Use **TypeScript** for better type safety and DX.
- Prefer **Composition API** with `<script setup>`.
- Keep components focused and reusable.
- Centrally manage constants in `app/config/constants.ts`.
