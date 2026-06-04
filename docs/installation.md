# Installation Guide and Libraries Used (Nuxt 4)

## 1. Project Setup

```bash
# Install dependencies
npm install

# Run development environment
npm run dev

# Build production
npm run build
```

## 2. Core Libraries

| Library       | Purpose                                  |
| :------------ | :--------------------------------------- |
| `nuxt` (v4)   | Meta-Framework for Vue                   |
| `vite`        | Integrated build tool                    |
| `pinia`       | State management                         |
| `axios`       | API Calls (Standardized Service)        |
| `primevue`    | UI component library (v4)                |
| `tailwindcss` | Utility-first CSS Framework              |
| `@nuxtjs/i18n`| Internationalization (i18n)             |
| `js-cookie`   | Manage Token in Cookies                  |

## 3. Configuration

- **`.env`**: Contains environment variables like `VITE_APP_API_URL`.
- **`nuxt.config.ts`**: Main configuration for modules, CSS, and app settings.
- **`tailwind.config.js`**: Tailwind CSS theme and plugin configuration.

## 4. Nuxt 4 Features Used

- **`app/` Directory**: Modern Nuxt 4 structure.
- **Auto-imports**: Components, composables, and utilities are automatically available.
- **Global Middleware**: Role-based access control in `app/middleware/auth.global.ts`.
- **Layout System**: Flexible page-level layouts in `app/layouts/`.
