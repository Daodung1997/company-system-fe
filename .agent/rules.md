# AI Coding Rules & Standards (Nuxt 4)

All code changes made by AI must strictly adhere to the following rules for this Nuxt-based project:

> [!IMPORTANT]
> AI Agent must read and reference detailed documents in the `docs/` directory before performing tasks to understand business logic and technical standards.

## 1. Naming Conventions

- **Component & Page Files**: Use **kebab-case** or **PascalCase** depending on Nuxt conventions (Nuxt typically uses kebab-case for files but PascalCase for component names). Let's stick to **PascalCase for Components** and **kebab-case for Pages/Folders**.
- **Folders & Script Files**: Use **kebab-case** (e.g., `api-service.ts`, `data-link/`).
- **Variables & Functions**: Use **camelCase**.
- **Component Prefix**: Shared components should have an `App` prefix (e.g., `AppButton.vue`) to avoid conflicts with PrimeVue or built-in elements.

## 2. Code Structure

- **Language**: Always use **TypeScript**. The previous prohibition on TypeScript is lifted for this Nuxt 4 project.
- **Syntax**: Always use `<script setup>` and Composition API.
- **API Logic**: Use files in `app/apis/` and `app/composables/`. Leverage Nuxt's `useFetch` or `useAsyncData` when appropriate, but maintain the Axios-based `Service` for consistency with existing logic.
- **Data Handling**: Use util functions in `app/utils/` (like `validate.ts`, `global.ts`).

## 3. UI/UX (PrimeVue & Tailwind)

- Always prioritize **PrimeVue 4 Components** over plain HTML tags.
- Use **Tailwind CSS** for layout, spacing, and responsive customizations.
- Utilize the `Aura` theme preset and custom primary color configurations.

## 4. Security & Auth

- Do not hardcode Tokens or API Keys. Use `RuntimeConfig` or `.env`.
- Access rights are managed via global middleware in `app/middleware/auth.global.ts`.

## 5. Prohibited

- Do not use `var`.
- Do not use plain JavaScript (`.js`) when TypeScript (`.ts`) is available.
- Do not skip error handling when calling APIs.
- Do not use `process.env` in client code; use `import.meta.env` or Nuxt's `useRuntimeConfig`.
