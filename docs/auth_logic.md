# Authentication and Authorization Logic (Nuxt 4)

## 1. Login Process

- **Authentication**: Credentials are sent via `loginUser` in `app/apis/auth.ts`.
- **Storage**:
  - **Token**: Saved in Cookies using `js-cookie` (name: `APP_TOKEN_NAME`). Expiry is set based on "Remember Me" (1 day or 30 days).
  - **UserInfo**: Saved in `localStorage` as a JSON string for client-side persistence.
- **Navigation**:
  - Successfully logged-in users are redirected to `/`.
  - Mandatory password reset: If `first_login === 1`, the middleware forces a redirect to `/auth/reset-password`.

## 2. Global Middleware (`app/middleware/auth.global.ts`)

Nuxt uses global middleware to protect routes. The logic follows these rules:

1. **No Token**:
   - Private routes: Redirect to `/login`.
   - Public routes (`/login`, `/auth/forgot-password`, `/auth/reset-password`): Allowed.
2. **Invalid Session**:
   - If Token exists but `UserInfo` is missing, the session is cleared, and the user is redirected to `/login`.
3. **First Login Enforcement**:
   - If `userInfo.first_login === 1`, users are locked to the `/auth/reset-password` route until the password is changed.
4. **Guest Redirect**:
   - Logged-in users attempting to access public auth pages are redirected back to the home page (`/`).

## 3. API Interceptors (`app/utils/api.ts`)

The Axios instance handles session lifecycle:
- **Request**: Automatically attaches the Bearer token if it exists in cookies.
- **Response**:
  - Automatically updates the global `isLoading` state in `apiStore`.
  - **401 Unauthorized**: If an API call fails with 401, the system displays an error message, clears the token, and redirects to the login page via `window.location.href`.

## 4. State Management

- **Pinia (`app/stores/api.ts`)**: Manages the global loading state and temporarily holds user info for the session.
- **Composables (`app/composables/useAuth.ts`)**: Provides methods like `loginUser`, `logout`, `forgotPassword`, and `resetPassword` to components.
