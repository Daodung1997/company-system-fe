# Project Memory (AI-Agent Log) - Nuxt 4

This file tracks major technical decisions and architectural shifts.

## 2026-03-12: Migration to Nuxt 4 & TypeScript

- **Executor**: Antigravity (AI Agent).
- **Changes**:
  - Migrated core project structure from Vue 3 Vite to **Nuxt 4**.
  - Adopted the `app/` directory convention.
  - Enabled **TypeScript** as the mandatory language (overriding previous JS-only rule).
  - Implemented **Global Auth Middleware** (`auth.global.ts`) for route protection.
  - Ported and standardized API handling logic into `app/utils/api.ts` with auto-loading tracking.
  - Set up **PrimeVue 4** with Tailwind CSS integration and Dark Mode support.
  - Created a unified **Auth Layout** for login, forgot-password, and reset-password pages.
- **Reason**: Enhance performance, developer experience, and scalability. Nuxt 4 provides better SSR/Static generation support and a more structured ecosystem.
