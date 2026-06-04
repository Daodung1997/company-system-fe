import { APP_TOKEN_NAME } from "~/config/constants";

export default defineNuxtRouteMiddleware((to) => {
  // Only execute on client side if we need localStorage
  if (import.meta.server) return;

  let token = useCookie(APP_TOKEN_NAME).value;
  if (!token && import.meta.client) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [rawName, rawValue] = cookie.trim().split('=');
      if (decodeURIComponent(rawName) === APP_TOKEN_NAME) {
        token = decodeURIComponent(rawValue);
        break;
      }
    }
  }

  const userInfoRaw = localStorage.getItem("userInfo");
  
  const publicPaths = [
    "/login",
    "/auth/forgot-password",
    "/auth/reset-password",
  ];

  // 1. If no token
  if (!token) {
    // allow public paths
    if (publicPaths.includes(to.path)) {
      return;
    }
    
    // redirect to login for private paths
    if (to.path !== "/login") {
      return navigateTo("/login");
    }
    return;
  }

  // 2. If token exists but no user info (session potentially invalid/incomplete)
  if (!userInfoRaw) {
    // Clear the invalid token
    const tokenCookie = useCookie(APP_TOKEN_NAME);
    tokenCookie.value = null;
    
    if (to.path !== "/login") {
      return navigateTo("/login");
    }
    return;
  }

  const userInfo = JSON.parse(userInfoRaw);

  // 3. Handle mandatory password reset on first login
  if (userInfo.first_login === 1) {
    if (to.path !== "/auth/reset-password") {
      return navigateTo("/auth/reset-password");
    }
    return;
  }

  // 4. Prevent logged-in users from visiting login/forgot-password etc.
  if (publicPaths.includes(to.path)) {
    // Only redirect if they are not already at home (to avoid infinite loops)
    if (to.path !== "/") {
      return navigateTo("/");
    }
    return;
  }

  // 5. Role-based Route Guard (Restrict specific routes to ADMIN & MANAGER)
  const managerAdminPaths = [
    '/master/employee',
    '/master/department',
    '/timesheet/manage',
    '/leave-request/pending',
    '/compliance'
  ];

  const isRestricted = managerAdminPaths.some(path => 
    to.path === path || to.path.startsWith(path + '/')
  );

  if (isRestricted && userInfo.role !== 'ADMIN' && userInfo.role !== 'MANAGER') {
    return navigateTo('/');
  }
});
