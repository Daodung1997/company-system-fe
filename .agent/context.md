# Project Context (For AI Agents) - Nuxt 4

This project is the **Base Nuxt Vite** system, a high-performance web application built with Nuxt 4.

## 1. Tech Stack

- **Framework**: Nuxt 4 (Vue 3 / TypeScript)
- **Build Tool**: Vite (integrated into Nuxt)
- **UI Library**: PrimeVue 4 & Tailwind CSS
- **State Management**: Pinia (`app/stores/`)
- **Routing**: Nuxt automatic file-system routing
- **HTTP Client**: Axios (Instance located at `app/utils/api.ts`)
- **i18n**: Configurable (currently using custom utilities in `app/utils/global.ts`)
- **Cookies**: `js-cookie` (Stores Auth Token)

## 2. URLs & Environments

- **API URL**: Retrieved from `VITE_APP_API_URL` in `.env`.
- **App Name**: Retrieved from `VITE_APP_NAME` in `.env`.

## 3. Architecture

- **Auth**: Manages login, password reset, and session enforcement via global middleware.
- **Pages**: Screens are located in `app/pages/`.
- **Layouts**: Designs are shared via `app/layouts/`.
- **Composables**: Business logic and API wrappers are in `app/composables/`.

## 4. Important Characteristics

- **Nuxt 4 Structure**: Uses the `app/` directory.
- **TypeScript**: Mandatory for all new script files and components.
- **Auto-import**: Components in `app/components/` and Nuxt/Vue functions are automatically available.
- **Server Side Rendering (SSR)**: Capable of SSR, though currently focused on SPA-like interactive features.

## 5. Reference Documentation

### A. AI Guidelines
- [Coding Rules & Standards](./rules.md)
- [Project Documentation](../docs/)

### B. Business Logic
- [Auth & Permission Logic](../docs/auth_logic.md)
- [API Usage Guide](../docs/api_usage.md)
- [Project Structure](../docs/project_structure.md)
