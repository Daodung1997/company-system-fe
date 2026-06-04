# API Usage Guide (Nuxt 4)

## 1. Base Service Configuration

All API calls go through the shared Axios service in `app/utils/api.ts`.

- **Base URL**: Configured in `.env` as `VITE_APP_API_URL`.
- **Request Interceptors**:
  - Automatically attaches `Bearer Token` from cookies to every request.
  - Updates the global `apiStore` to track active requests for the loading spinner.
- **Response Interceptors**:
  - Automatically decrements the loading counter in `apiStore`.
  - **401 Management**: Clears the session and redirects to `/login` on unauthorized access.
  - **Error Display**: Automatically shows toast notifications for errors using the `showMessage` utility.

## 2. API Best Practices

- **Definition**: Define endpoint functions in `app/apis/`. Use TypeScript interfaces for payload and response types.
- **Consumption**: Use module-specific composables in `app/composables/` to wrap API calls with appropriate success/error callbacks.
- **Environment**: Always use `import.meta.env` for accessing configuration variables.

## 3. Data Normalization

Use utility functions in `app/utils/` to handle common data transformations:
- `validate.ts`: For pre-submission form validation.
- `global.ts`: For showing messages or formatting common response structures.

## 4. Nuxt-Specific Data Fetching

While the Axios-based `Service` is standard for mutations (POST/PUT/DELETE), consider using Nuxt's built-in `useFetch` or `useAsyncData` for Server Side Rendering (SSR) of initial page data to improve performance and SEO.
