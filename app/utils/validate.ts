const convertToHalfsize = (chars: string) => {
  let halfwidth = "";

  for (let i = 0, l = chars.length; i < l; i++) {
    let charCode = chars[i].charCodeAt(0);

    // Fix full-width dot
    if (charCode === 12290) {
      charCode = 46; // ASCII code for dot
    }

    if (charCode >= 0xff00 && charCode <= 0xffef) {
      charCode = 0xff & (charCode + 0x20);
    }

    halfwidth += String.fromCharCode(charCode);
  }

  return formatNumber(halfwidth);
};

const formatNumber = (number: any) => {
  return number !== null ? number.toString().replace(/[,]+/g, "") : number;
};

const validMaxLength = (value: any, numberLength = 255) => {
  let valueString = value ?? "";
  return valueString.length <= numberLength;
};

const validMinLength = (value: any, numberLength = 255) => {
  let valueString = value ?? "";
  return valueString.length >= numberLength;
};

const validCalendarRange = (value: any) => {
  return value && value[0] !== null && value[1] !== null;
};

const validCode = (code: string) => {
  const regex = /^[a-zA-Z0-9_\-\u3040-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]+$/;
  return regex.test(code);
};

const validEmail = (email: string) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

/**
 * Validate password strength:
 * - Min 8 characters, Max 50 characters
 * - At least 1 uppercase letter
 * - At least 1 lowercase letter
 * - At least 1 digit
 * - At least 1 special character
 */
const validPasswordStrength = (password: string, t?: any): { valid: boolean; message: string } => {
  const getMsg = (key: string, fallback: string) => t ? t(key) : fallback;
  if (!password) return { valid: false, message: "" };

  if (password.length < 8) {
    return { valid: false, message: getMsg("auth.passwordMin", "Mật khẩu phải chứa ít nhất 8 ký tự.") };
  }
  if (password.length > 50) {
    return { valid: false, message: getMsg("auth.passwordMax", "Mật khẩu không được vượt quá 50 ký tự.") };
  }
  if (!/[a-z]/.test(password)) {
    return { valid: false, message: getMsg("auth.passwordLower", "Mật khẩu phải chứa ít nhất 1 chữ thường (a-z).") };
  }
  if (!/[A-Z]/.test(password)) {
    return { valid: false, message: getMsg("auth.passwordUpper", "Mật khẩu phải chứa ít nhất 1 chữ hoa (A-Z).") };
  }
  if (!/[0-9]/.test(password)) {
    return { valid: false, message: getMsg("auth.passwordDigit", "Mật khẩu phải chứa ít nhất 1 chữ số (0-9).") };
  }
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(password)) {
    return { valid: false, message: getMsg("auth.passwordSpecial", "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt (!@#$%...).") };
  }

  return { valid: true, message: "" };
};

const validate = (value: any, translationKey: string, type: string[], t: any, extraData?: any) => {
  let check = true;
  let errorValue = "";

  if (check && type.includes("require")) {
    let valueTrim = value ? String(value).trim() : null;
    if (!valueTrim && value !== 0) {
      errorValue = t("text.notEmptyInput", {
        field: t(translationKey),
      });
      check = false;
    }
  }

  if (check && type.includes("validEmail") && value && !validEmail(value)) {
    errorValue = t("text.errorMailFormat");
    check = false;
  }

  if (check && type.includes("minLength8") && value && !validMinLength(value, 8)) {
    errorValue = t ? t("auth.passwordMin") : "Mật khẩu phải chứa ít nhất 8 ký tự.";
    check = false;
  }

  if (check && type.includes("passwordStrength") && value) {
    const result = validPasswordStrength(value, t);
    if (!result.valid) {
      errorValue = result.message;
      check = false;
    }
  }

  if (check && type.includes("passwordMatch") && value && extraData) {
    if (value !== extraData.matchValue) {
      errorValue = t("auth.rePassNotMatch");
      check = false;
    }
  }

  if (check && type.includes("max10") && value && !validMaxLength(value, 10)) {
    errorValue = t("text.max10", { field: t(translationKey) });
    check = false;
  }

  if (check && type.includes("max20") && value && !validMaxLength(value, 20)) {
    errorValue = t("text.max20", { field: t(translationKey) });
    check = false;
  }

  if (check && type.includes("max50") && value && !validMaxLength(value, 50)) {
    errorValue = t("text.max50", { field: t(translationKey) });
    check = false;
  }

  if (check && type.includes("max100") && value && !validMaxLength(value, 100)) {
    errorValue = t("text.max100", { field: t(translationKey) });
    check = false;
  }

  if (check && type.includes("max150") && value && !validMaxLength(value, 150)) {
    errorValue = t("text.max150", { field: t(translationKey) });
    check = false;
  }

  if (check && type.includes("max255") && value && !validMaxLength(value, 255)) {
    errorValue = t("text.max255", { field: t(translationKey) });
    check = false;
  }

  if (check && type.includes("max500") && value && !validMaxLength(value, 500)) {
    errorValue = t("text.max500", { field: t(translationKey) });
    check = false;
  }

  return { check: check, errorInfo: errorValue };
};

export const validateOnField = (field: string, objectData: any, objectError: any, fieldValidate: any, t: any) => {
  let check = true;

  for (const [fieldCheck, config] of Object.entries(fieldValidate)) {
    if (field && field !== fieldCheck) continue;
    const { transitionKey, types, errorKey, extraData } = config as any;
    const validation = validate(objectData[fieldCheck], transitionKey, types, t, extraData);
    check = validation.check && check;
    objectError[errorKey] = validation.errorInfo;
  }
  return check;
};

export const validateOnAllField = (objectData: any, objectError: any, fieldValidate: any, t: any) => {
  let check = true;

  for (const [field, config] of Object.entries(fieldValidate)) {
    const { transitionKey, types, errorKey, extraData } = config as any;
    const validation = validate(objectData[field], transitionKey, types, t, extraData);
    check = validation.check && check;
    objectError[errorKey] = validation.errorInfo;
  }
  return check;
};

export { validPasswordStrength };
