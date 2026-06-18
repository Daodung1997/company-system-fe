/**
 * Integration-level tests for page form validations
 * Tests the exact FIELD_VALIDATIONS configs used in login, forgot-password, reset-password pages
 */
import { describe, it, expect } from 'vitest';
import { validateOnAllField } from '~/utils/validate';

const t = (key: string, params?: Record<string, any>) => {
  if (params) return `${key}|${Object.entries(params).map(([k, v]) => `${k}=${v}`).join('|')}`;
  return key;
};

// ═══ LOGIN PAGE ═══
describe('Login Page Validation', () => {
  const RULES = {
    username: { transitionKey: 'auth.email', types: ['require', 'max50'], errorKey: 'errorUsername' },
    password: { transitionKey: 'auth.password', types: ['require', 'passwordStrength'], errorKey: 'errorPassword' },
  };

  it('fails when both fields empty', () => {
    const data = { username: '', password: '' };
    const errors = { errorUsername: '', errorPassword: '' };
    expect(validateOnAllField(data, errors, RULES, t)).toBe(false);
    expect(errors.errorUsername).toBeTruthy();
    expect(errors.errorPassword).toBeTruthy();
  });

  it('fails when username is empty', () => {
    const data = { username: '', password: 'P@ssw0rd123' };
    const errors = { errorUsername: '', errorPassword: '' };
    expect(validateOnAllField(data, errors, RULES, t)).toBe(false);
    expect(errors.errorUsername).toBeTruthy();
    expect(errors.errorPassword).toBe('');
  });

  it('fails when password is weak', () => {
    const data = { username: 'admin@compliance.vn', password: '12345678' };
    const errors = { errorUsername: '', errorPassword: '' };
    expect(validateOnAllField(data, errors, RULES, t)).toBe(false);
    expect(errors.errorUsername).toBe('');
    expect(errors.errorPassword).toBeTruthy();
  });

  it('fails when username exceeds 50 chars', () => {
    const data = { username: 'a'.repeat(51), password: 'P@ssw0rd123' };
    const errors = { errorUsername: '', errorPassword: '' };
    expect(validateOnAllField(data, errors, RULES, t)).toBe(false);
    expect(errors.errorUsername).toContain('text.max50');
  });

  it('passes with valid credentials', () => {
    const data = { username: 'admin@compliance.vn', password: 'P@ssw0rd123' };
    const errors = { errorUsername: '', errorPassword: '' };
    expect(validateOnAllField(data, errors, RULES, t)).toBe(true);
  });
});

// ═══ FORGOT PASSWORD PAGE ═══
describe('Forgot Password Page Validation', () => {
  const RULES = {
    email: { transitionKey: 'auth.email', types: ['require', 'validEmail'], errorKey: 'errorEmail' },
  };

  it('fails when email is empty', () => {
    const data = { email: '' };
    const errors = { errorEmail: '' };
    expect(validateOnAllField(data, errors, RULES, t)).toBe(false);
  });

  it('fails when email format is invalid', () => {
    const data = { email: 'invalid-email' };
    const errors = { errorEmail: '' };
    expect(validateOnAllField(data, errors, RULES, t)).toBe(false);
    expect(errors.errorEmail).toContain('text.errorMailFormat');
  });

  it('passes with valid email', () => {
    const data = { email: 'user@company.com' };
    const errors = { errorEmail: '' };
    expect(validateOnAllField(data, errors, RULES, t)).toBe(true);
  });
});

// ═══ RESET PASSWORD PAGE ═══
describe('Reset Password Page Validation', () => {
  const makeRules = (newPassword: string) => ({
    otp: { transitionKey: 'auth.code', types: ['require'], errorKey: 'errorOtp' },
    newPassword: { transitionKey: 'auth.newPassword', types: ['require', 'passwordStrength'], errorKey: 'errorNewPassword' },
    confirmPassword: {
      transitionKey: 'auth.newPasswordConfirm',
      types: ['require', 'passwordMatch'],
      errorKey: 'errorConfirmPassword',
      extraData: { matchValue: newPassword },
    },
  });

  it('fails when all fields empty', () => {
    const data = { otp: '', newPassword: '', confirmPassword: '' };
    const errors = { errorOtp: '', errorNewPassword: '', errorConfirmPassword: '' };
    expect(validateOnAllField(data, errors, makeRules(''), t)).toBe(false);
    expect(errors.errorOtp).toBeTruthy();
    expect(errors.errorNewPassword).toBeTruthy();
    expect(errors.errorConfirmPassword).toBeTruthy();
  });

  it('fails when passwords do not match', () => {
    const data = { otp: '123456', newPassword: 'NewP@ss1', confirmPassword: 'Different1!' };
    const errors = { errorOtp: '', errorNewPassword: '', errorConfirmPassword: '' };
    expect(validateOnAllField(data, errors, makeRules('NewP@ss1'), t)).toBe(false);
    expect(errors.errorConfirmPassword).toContain('auth.rePassNotMatch');
  });

  it('fails when new password is weak', () => {
    const data = { otp: '123456', newPassword: 'weakpass', confirmPassword: 'weakpass' };
    const errors = { errorOtp: '', errorNewPassword: '', errorConfirmPassword: '' };
    expect(validateOnAllField(data, errors, makeRules('weakpass'), t)).toBe(false);
    expect(errors.errorNewPassword).toBeTruthy();
  });

  it('passes with valid data', () => {
    const data = { otp: '123456', newPassword: 'NewP@ss1', confirmPassword: 'NewP@ss1' };
    const errors = { errorOtp: '', errorNewPassword: '', errorConfirmPassword: '' };
    expect(validateOnAllField(data, errors, makeRules('NewP@ss1'), t)).toBe(true);
  });
});

// ═══ CHANGE PASSWORD PAGE ═══
describe('Change Password Page Validation', () => {
  const makeRules = (newPassword: string) => ({
    currentPassword: { transitionKey: 'auth.currentPassword', types: ['require'], errorKey: 'errorCurrentPassword' },
    newPassword: { transitionKey: 'auth.newPassword', types: ['require', 'passwordStrength'], errorKey: 'errorNewPassword' },
    confirmPassword: {
      transitionKey: 'auth.newPasswordConfirm',
      types: ['require', 'passwordMatch'],
      errorKey: 'errorConfirmPassword',
      extraData: { matchValue: newPassword },
    },
  });

  it('fails when current password is empty', () => {
    const data = { currentPassword: '', newPassword: 'NewP@ss1', confirmPassword: 'NewP@ss1' };
    const errors = { errorCurrentPassword: '', errorNewPassword: '', errorConfirmPassword: '' };
    expect(validateOnAllField(data, errors, makeRules('NewP@ss1'), t)).toBe(false);
    expect(errors.errorCurrentPassword).toBeTruthy();
  });

  it('passes with all valid', () => {
    const data = { currentPassword: 'OldP@ss1', newPassword: 'NewP@ss1', confirmPassword: 'NewP@ss1' };
    const errors = { errorCurrentPassword: '', errorNewPassword: '', errorConfirmPassword: '' };
    expect(validateOnAllField(data, errors, makeRules('NewP@ss1'), t)).toBe(true);
  });
});
