/**
 * Unit Tests for composables/auth.ts — verifies the composable wraps API calls correctly
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

const mockPost = vi.fn(() => Promise.resolve({ data: {} }));
const mockGet = vi.fn(() => Promise.resolve({ data: {} }));

vi.mock('~/utils/api', () => ({
  default: { get: mockGet, post: mockPost, put: vi.fn(), delete: vi.fn() },
}));

beforeEach(() => vi.clearAllMocks());

describe('useAuth composable', () => {
  it('loginUser calls LOGIN_USER with correct payload structure', async () => {
    const { useAuth } = await import('~/composables/auth');
    const { loginUser } = useAuth();
    const successCb = vi.fn();
    const errorCb = vi.fn();

    await loginUser({
      data: { username: 'admin@test.com', password: 'P@ss1234' },
      successCallback: successCb,
      errorCallback: errorCb,
    });

    expect(mockPost).toHaveBeenCalledWith('/auth/login', {
      username: 'admin@test.com',
      password: 'P@ss1234',
    });
  });

  it('forgotPassword calls FORGOT_PASSWORD', async () => {
    const { useAuth } = await import('~/composables/auth');
    const { forgotPassword } = useAuth();

    await forgotPassword({
      data: { email: 'user@test.com' },
      successCallback: vi.fn(),
      errorCallback: vi.fn(),
    });

    expect(mockPost).toHaveBeenCalledWith('/auth/forgot-password', { email: 'user@test.com' });
  });

  it('resetPassword calls RESET_PASSWORD', async () => {
    const { useAuth } = await import('~/composables/auth');
    const { resetPassword } = useAuth();

    await resetPassword({
      data: { token: 'abc', password: 'NewP@ss1' },
      successCallback: vi.fn(),
      errorCallback: vi.fn(),
    });

    expect(mockPost).toHaveBeenCalledWith('/auth/reset-password', { token: 'abc', password: 'NewP@ss1' });
  });

  it('changePassword calls CHANGE_PASSWORD', async () => {
    const { useAuth } = await import('~/composables/auth');
    const { changePassword } = useAuth();

    await changePassword({
      data: { old_password: 'Old1!aaa', new_password: 'New1!aaa' },
      successCallback: vi.fn(),
      errorCallback: vi.fn(),
    });

    expect(mockPost).toHaveBeenCalledWith('/auth/change-password', {
      old_password: 'Old1!aaa',
      new_password: 'New1!aaa',
    });
  });

  it('logout calls LOGOUT', async () => {
    const { useAuth } = await import('~/composables/auth');
    const { logout } = useAuth();

    await logout({ successCallback: vi.fn(), errorCallback: vi.fn() });
    expect(mockPost).toHaveBeenCalledWith('/auth/logout', {});
  });

  it('getMe calls GET_ME', async () => {
    const { useAuth } = await import('~/composables/auth');
    const { getMe } = useAuth();

    await getMe({ successCallback: vi.fn(), errorCallback: vi.fn() });
    expect(mockGet).toHaveBeenCalledWith('/auth/me');
  });
});
