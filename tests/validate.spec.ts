/**
 * Unit Tests for validate.ts
 * Tests all validation functions: validate, validateOnField, validateOnAllField, validPasswordStrength
 */
import { describe, it, expect } from 'vitest';
import { validateOnField, validateOnAllField, validPasswordStrength } from '~/utils/validate';

// Mock translation function — returns the key with interpolated params
const t = (key: string, params?: Record<string, any>) => {
  if (params) {
    let result = key;
    for (const [k, v] of Object.entries(params)) {
      result += `|${k}=${v}`;
    }
    return result;
  }
  return key;
};

// ══════════════════════════════════════════════════════════
// validPasswordStrength
// ══════════════════════════════════════════════════════════
describe('validPasswordStrength', () => {
  it('should return invalid for empty password', () => {
    const result = validPasswordStrength('', t);
    expect(result.valid).toBe(false);
  });

  it('should return invalid for password shorter than 8 chars', () => {
    const result = validPasswordStrength('Ab1!xyz', t);
    expect(result.valid).toBe(false);
    expect(result.message).toContain('auth.passwordMin');
  });

  it('should return invalid for password longer than 50 chars', () => {
    const longPassword = 'Aa1!' + 'x'.repeat(50);
    const result = validPasswordStrength(longPassword, t);
    expect(result.valid).toBe(false);
    expect(result.message).toContain('auth.passwordMax');
  });

  it('should return invalid without lowercase letter', () => {
    const result = validPasswordStrength('ABCDEF1!@', t);
    expect(result.valid).toBe(false);
    expect(result.message).toContain('auth.passwordLower');
  });

  it('should return invalid without uppercase letter', () => {
    const result = validPasswordStrength('abcdef1!@', t);
    expect(result.valid).toBe(false);
    expect(result.message).toContain('auth.passwordUpper');
  });

  it('should return invalid without digit', () => {
    const result = validPasswordStrength('Abcdefgh!', t);
    expect(result.valid).toBe(false);
    expect(result.message).toContain('auth.passwordDigit');
  });

  it('should return invalid without special character', () => {
    const result = validPasswordStrength('Abcdefg1', t);
    expect(result.valid).toBe(false);
    expect(result.message).toContain('auth.passwordSpecial');
  });

  it('should return valid for strong password', () => {
    const result = validPasswordStrength('P@ssw0rd123', t);
    expect(result.valid).toBe(true);
    expect(result.message).toBe('');
  });

  it('should return valid for minimum strong password (8 chars)', () => {
    const result = validPasswordStrength('Aa1!aaaa', t);
    expect(result.valid).toBe(true);
  });

  it('should return valid for password at max boundary (50 chars)', () => {
    const pw = 'Aa1!' + 'b'.repeat(46);
    expect(pw.length).toBe(50);
    const result = validPasswordStrength(pw, t);
    expect(result.valid).toBe(true);
  });

  it('should work without t function (uses fallback messages)', () => {
    const result = validPasswordStrength('short');
    expect(result.valid).toBe(false);
    expect(result.message).toContain('8');
  });
});

// ══════════════════════════════════════════════════════════
// validateOnField — single field validation
// ══════════════════════════════════════════════════════════
describe('validateOnField', () => {
  it('should validate required field — empty value', () => {
    const data = { email: '' };
    const errors = { errorEmail: '' };
    const rules = {
      email: { transitionKey: 'auth.email', types: ['require'], errorKey: 'errorEmail' },
    };

    const result = validateOnField('email', data, errors, rules, t);
    expect(result).toBe(false);
    expect(errors.errorEmail).toContain('text.notEmptyInput');
  });

  it('should validate required field — whitespace only', () => {
    const data = { email: '   ' };
    const errors = { errorEmail: '' };
    const rules = {
      email: { transitionKey: 'auth.email', types: ['require'], errorKey: 'errorEmail' },
    };

    const result = validateOnField('email', data, errors, rules, t);
    expect(result).toBe(false);
  });

  it('should pass required field with valid value', () => {
    const data = { email: 'test@example.com' };
    const errors = { errorEmail: '' };
    const rules = {
      email: { transitionKey: 'auth.email', types: ['require'], errorKey: 'errorEmail' },
    };

    const result = validateOnField('email', data, errors, rules, t);
    expect(result).toBe(true);
    expect(errors.errorEmail).toBe('');
  });

  it('should validate email format — invalid', () => {
    const data = { email: 'not-an-email' };
    const errors = { errorEmail: '' };
    const rules = {
      email: { transitionKey: 'auth.email', types: ['require', 'validEmail'], errorKey: 'errorEmail' },
    };

    const result = validateOnField('email', data, errors, rules, t);
    expect(result).toBe(false);
    expect(errors.errorEmail).toContain('text.errorMailFormat');
  });

  it('should validate email format — valid', () => {
    const data = { email: 'admin@compliance.vn' };
    const errors = { errorEmail: '' };
    const rules = {
      email: { transitionKey: 'auth.email', types: ['require', 'validEmail'], errorKey: 'errorEmail' },
    };

    const result = validateOnField('email', data, errors, rules, t);
    expect(result).toBe(true);
    expect(errors.errorEmail).toBe('');
  });

  it('should validate max50 — over limit', () => {
    const data = { name: 'x'.repeat(51) };
    const errors = { errorName: '' };
    const rules = {
      name: { transitionKey: 'text.name', types: ['max50'], errorKey: 'errorName' },
    };

    const result = validateOnField('name', data, errors, rules, t);
    expect(result).toBe(false);
    expect(errors.errorName).toContain('text.max50');
  });

  it('should validate max50 — at limit', () => {
    const data = { name: 'x'.repeat(50) };
    const errors = { errorName: '' };
    const rules = {
      name: { transitionKey: 'text.name', types: ['max50'], errorKey: 'errorName' },
    };

    const result = validateOnField('name', data, errors, rules, t);
    expect(result).toBe(true);
  });

  it('should validate max10', () => {
    const data = { code: 'x'.repeat(11) };
    const errors = { errorCode: '' };
    const rules = {
      code: { transitionKey: 'text.code', types: ['max10'], errorKey: 'errorCode' },
    };

    const result = validateOnField('code', data, errors, rules, t);
    expect(result).toBe(false);
    expect(errors.errorCode).toContain('text.max10');
  });

  it('should validate max20', () => {
    const data = { phone: 'x'.repeat(21) };
    const errors = { errorPhone: '' };
    const rules = {
      phone: { transitionKey: 'text.phone', types: ['max20'], errorKey: 'errorPhone' },
    };

    const result = validateOnField('phone', data, errors, rules, t);
    expect(result).toBe(false);
  });

  it('should validate max100', () => {
    const data = { address: 'x'.repeat(101) };
    const errors = { errorAddress: '' };
    const rules = {
      address: { transitionKey: 'text.address', types: ['max100'], errorKey: 'errorAddress' },
    };

    const result = validateOnField('address', data, errors, rules, t);
    expect(result).toBe(false);
  });

  it('should validate max150', () => {
    const data = { desc: 'x'.repeat(151) };
    const errors = { errorDesc: '' };
    const rules = {
      desc: { transitionKey: 'text.desc', types: ['max150'], errorKey: 'errorDesc' },
    };

    const result = validateOnField('desc', data, errors, rules, t);
    expect(result).toBe(false);
  });

  it('should validate max255', () => {
    const data = { note: 'x'.repeat(256) };
    const errors = { errorNote: '' };
    const rules = {
      note: { transitionKey: 'text.note', types: ['max255'], errorKey: 'errorNote' },
    };

    const result = validateOnField('note', data, errors, rules, t);
    expect(result).toBe(false);
  });

  it('should validate max500', () => {
    const data = { memo: 'x'.repeat(501) };
    const errors = { errorMemo: '' };
    const rules = {
      memo: { transitionKey: 'text.memo', types: ['max500'], errorKey: 'errorMemo' },
    };

    const result = validateOnField('memo', data, errors, rules, t);
    expect(result).toBe(false);
  });

  it('should validate passwordStrength type', () => {
    const data = { password: 'weak' };
    const errors = { errorPassword: '' };
    const rules = {
      password: { transitionKey: 'auth.password', types: ['require', 'passwordStrength'], errorKey: 'errorPassword' },
    };

    const result = validateOnField('password', data, errors, rules, t);
    expect(result).toBe(false);
    expect(errors.errorPassword).not.toBe('');
  });

  it('should validate passwordMatch — mismatch', () => {
    const data = { confirmPassword: 'Password123!' };
    const errors = { errorConfirmPassword: '' };
    const rules = {
      confirmPassword: {
        transitionKey: 'auth.newPasswordConfirm',
        types: ['require', 'passwordMatch'],
        errorKey: 'errorConfirmPassword',
        extraData: { matchValue: 'DifferentPassword!' },
      },
    };

    const result = validateOnField('confirmPassword', data, errors, rules, t);
    expect(result).toBe(false);
    expect(errors.errorConfirmPassword).toContain('auth.rePassNotMatch');
  });

  it('should validate passwordMatch — match', () => {
    const data = { confirmPassword: 'P@ssw0rd123' };
    const errors = { errorConfirmPassword: '' };
    const rules = {
      confirmPassword: {
        transitionKey: 'auth.newPasswordConfirm',
        types: ['require', 'passwordMatch'],
        errorKey: 'errorConfirmPassword',
        extraData: { matchValue: 'P@ssw0rd123' },
      },
    };

    const result = validateOnField('confirmPassword', data, errors, rules, t);
    expect(result).toBe(true);
    expect(errors.errorConfirmPassword).toBe('');
  });

  it('should validate minLength8', () => {
    const data = { password: 'short' };
    const errors = { errorPassword: '' };
    const rules = {
      password: { transitionKey: 'auth.password', types: ['require', 'minLength8'], errorKey: 'errorPassword' },
    };

    const result = validateOnField('password', data, errors, rules, t);
    expect(result).toBe(false);
    expect(errors.errorPassword).toContain('auth.passwordMin');
  });

  it('should only validate the specified field', () => {
    const data = { email: 'test@test.com', name: '' };
    const errors = { errorEmail: '', errorName: '' };
    const rules = {
      email: { transitionKey: 'auth.email', types: ['require'], errorKey: 'errorEmail' },
      name: { transitionKey: 'text.name', types: ['require'], errorKey: 'errorName' },
    };

    const result = validateOnField('email', data, errors, rules, t);
    expect(result).toBe(true);
    expect(errors.errorEmail).toBe('');
    expect(errors.errorName).toBe(''); // name should not be validated
  });

  it('should allow 0 as a valid value for require', () => {
    const data = { amount: 0 };
    const errors = { errorAmount: '' };
    const rules = {
      amount: { transitionKey: 'text.amount', types: ['require'], errorKey: 'errorAmount' },
    };

    const result = validateOnField('amount', data, errors, rules, t);
    expect(result).toBe(true);
    expect(errors.errorAmount).toBe('');
  });

  it('should skip max validation when value is empty', () => {
    const data = { name: '' };
    const errors = { errorName: '' };
    const rules = {
      name: { transitionKey: 'text.name', types: ['max50'], errorKey: 'errorName' },
    };

    // max50 should only trigger when value is non-empty
    const result = validateOnField('name', data, errors, rules, t);
    expect(result).toBe(true);
  });
});

// ══════════════════════════════════════════════════════════
// validateOnAllField — validate all fields at once
// ══════════════════════════════════════════════════════════
describe('validateOnAllField', () => {
  it('should validate all fields and return false if any fails', () => {
    const data = { username: '', password: '' };
    const errors = { errorUsername: '', errorPassword: '' };
    const rules = {
      username: { transitionKey: 'auth.email', types: ['require', 'max50'], errorKey: 'errorUsername' },
      password: { transitionKey: 'auth.password', types: ['require', 'passwordStrength'], errorKey: 'errorPassword' },
    };

    const result = validateOnAllField(data, errors, rules, t);
    expect(result).toBe(false);
    expect(errors.errorUsername).not.toBe('');
    expect(errors.errorPassword).not.toBe('');
  });

  it('should return true if all fields pass', () => {
    const data = { username: 'admin@compliance.vn', password: 'P@ssw0rd123' };
    const errors = { errorUsername: '', errorPassword: '' };
    const rules = {
      username: { transitionKey: 'auth.email', types: ['require', 'max50'], errorKey: 'errorUsername' },
      password: { transitionKey: 'auth.password', types: ['require', 'passwordStrength'], errorKey: 'errorPassword' },
    };

    const result = validateOnAllField(data, errors, rules, t);
    expect(result).toBe(true);
    expect(errors.errorUsername).toBe('');
    expect(errors.errorPassword).toBe('');
  });

  it('should set individual errors when only some fields fail', () => {
    const data = { username: 'admin@compliance.vn', password: '' };
    const errors = { errorUsername: '', errorPassword: '' };
    const rules = {
      username: { transitionKey: 'auth.email', types: ['require'], errorKey: 'errorUsername' },
      password: { transitionKey: 'auth.password', types: ['require'], errorKey: 'errorPassword' },
    };

    const result = validateOnAllField(data, errors, rules, t);
    expect(result).toBe(false);
    expect(errors.errorUsername).toBe('');
    expect(errors.errorPassword).not.toBe('');
  });

  it('should handle complex multi-field form (login)', () => {
    const data = { username: 'admin@compliance.vn', password: 'P@ssw0rd123' };
    const errors = { errorUsername: '', errorPassword: '' };
    const rules = {
      username: { transitionKey: 'auth.email', types: ['require', 'max50'], errorKey: 'errorUsername' },
      password: { transitionKey: 'auth.password', types: ['require', 'passwordStrength'], errorKey: 'errorPassword' },
    };

    expect(validateOnAllField(data, errors, rules, t)).toBe(true);
  });

  it('should handle reset password form validation', () => {
    const data = { otp: '123456', newPassword: 'NewP@ss1', confirmPassword: 'NewP@ss1' };
    const errors = { errorOtp: '', errorNewPassword: '', errorConfirmPassword: '' };
    const rules = {
      otp: { transitionKey: 'auth.code', types: ['require'], errorKey: 'errorOtp' },
      newPassword: { transitionKey: 'auth.newPassword', types: ['require', 'passwordStrength'], errorKey: 'errorNewPassword' },
      confirmPassword: {
        transitionKey: 'auth.newPasswordConfirm',
        types: ['require', 'passwordMatch'],
        errorKey: 'errorConfirmPassword',
        extraData: { matchValue: 'NewP@ss1' },
      },
    };

    expect(validateOnAllField(data, errors, rules, t)).toBe(true);
  });

  it('should fail when confirm password does not match', () => {
    const data = { newPassword: 'NewP@ss1', confirmPassword: 'Mismatch1!' };
    const errors = { errorNewPassword: '', errorConfirmPassword: '' };
    const rules = {
      newPassword: { transitionKey: 'auth.newPassword', types: ['require', 'passwordStrength'], errorKey: 'errorNewPassword' },
      confirmPassword: {
        transitionKey: 'auth.newPasswordConfirm',
        types: ['require', 'passwordMatch'],
        errorKey: 'errorConfirmPassword',
        extraData: { matchValue: 'NewP@ss1' },
      },
    };

    expect(validateOnAllField(data, errors, rules, t)).toBe(false);
    expect(errors.errorConfirmPassword).toContain('auth.rePassNotMatch');
  });
});

// ══════════════════════════════════════════════════════════
// Edge cases
// ══════════════════════════════════════════════════════════
describe('Edge Cases', () => {
  it('should handle null value as empty for require', () => {
    const data = { field: null };
    const errors = { errorField: '' };
    const rules = {
      field: { transitionKey: 'text.field', types: ['require'], errorKey: 'errorField' },
    };

    expect(validateOnField('field', data, errors, rules, t)).toBe(false);
  });

  it('should handle undefined value as empty for require', () => {
    const data = {} as any;
    const errors = { errorField: '' };
    const rules = {
      field: { transitionKey: 'text.field', types: ['require'], errorKey: 'errorField' },
    };

    expect(validateOnField('field', data, errors, rules, t)).toBe(false);
  });

  it('should chain multiple validations and stop at first failure', () => {
    // Empty email should fail on "require" and not reach "validEmail"
    const data = { email: '' };
    const errors = { errorEmail: '' };
    const rules = {
      email: { transitionKey: 'auth.email', types: ['require', 'validEmail'], errorKey: 'errorEmail' },
    };

    validateOnField('email', data, errors, rules, t);
    expect(errors.errorEmail).toContain('text.notEmptyInput'); // stopped at require
  });

  it('should validate email edge cases', () => {
    const validEmails = ['a@b.co', 'user+tag@domain.com', 'first.last@sub.domain.org'];
    const invalidEmails = ['@domain.com', 'user@', 'user@.com', 'user@com', 'user space@domain.com'];

    validEmails.forEach(email => {
      const data = { email };
      const errors = { errorEmail: '' };
      const rules = {
        email: { transitionKey: 'auth.email', types: ['validEmail'], errorKey: 'errorEmail' },
      };
      expect(validateOnField('email', data, errors, rules, t)).toBe(true);
    });

    invalidEmails.forEach(email => {
      const data = { email };
      const errors = { errorEmail: '' };
      const rules = {
        email: { transitionKey: 'auth.email', types: ['validEmail'], errorKey: 'errorEmail' },
      };
      expect(validateOnField('email', data, errors, rules, t)).toBe(false);
    });
  });

  it('should validate password with various special characters', () => {
    const specialChars = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '+', '=', '?'];
    specialChars.forEach(char => {
      const pw = `Abcdef1${char}`;
      const result = validPasswordStrength(pw, t);
      expect(result.valid).toBe(true);
    });
  });
});
