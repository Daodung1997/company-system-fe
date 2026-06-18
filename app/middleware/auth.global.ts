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
    "/landing",
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
  const guestOnlyPaths = [
    "/login",
    "/auth/forgot-password",
    "/auth/reset-password",
  ];
  if (guestOnlyPaths.includes(to.path)) {
    // Only redirect if they are not already at home (to avoid infinite loops)
    if (to.path !== "/") {
      return navigateTo("/");
    }
    return;
  }

  // 5. Role-based Route Guard (RBAC - Role-Based Access Control)
  const role = userInfo.role;
  const path = to.path;

  // ADMIN and MANAGER have full access to everything
  if (role === 'ADMIN' || role === 'MANAGER') {
    return;
  }

  // Helper to check if path matches prefix or is nested under it
  const isPath = (prefix: string) => path === prefix || path.startsWith(prefix + '/');

  // STAFF restrictions
  if (role === 'STAFF') {
    // Staff can only access their own profile detail page: /master/employee/[id]
    if (isPath('/master/employee')) {
      const ownProfilePath = `/master/employee/${userInfo.id}`;
      if (path !== ownProfilePath) {
        return navigateTo('/');
      }
    }
    // Block admin/management paths entirely
    if (
      isPath('/master/department') ||
      isPath('/timesheet/manage') ||
      isPath('/leave-request/pending') ||
      isPath('/compliance') ||
      isPath('/transaction') ||
      isPath('/contract')
    ) {
      return navigateTo('/');
    }
  }

  // HR restrictions
  if (role === 'HR') {
    // HR can manage HR files, timesheets, contracts, leaves, compliance
    // But cannot access financial transactions
    if (isPath('/transaction')) {
      return navigateTo('/');
    }
  }

  // ACCOUNTANT restrictions
  if (role === 'ACCOUNTANT') {
    // Accountant can access transactions, contracts, timesheet logs, compliance
    // But cannot access general employee list (except own profile), departments, or leave approval list
    if (isPath('/master/employee')) {
      const ownProfilePath = `/master/employee/${userInfo.id}`;
      if (path !== ownProfilePath) {
        return navigateTo('/');
      }
    }
    if (
      isPath('/master/department') ||
      isPath('/leave-request/pending')
    ) {
      return navigateTo('/');
    }
  }
});
