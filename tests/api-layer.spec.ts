/**
 * Unit Tests for API layer — tests all API modules call correct endpoints with correct HTTP methods
 * Mocks axios (~/utils/api) to verify URL, method, and payload patterns
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the Api (axios instance) 
const mockGet = vi.fn(() => Promise.resolve({ data: { data: {} } }));
const mockPost = vi.fn(() => Promise.resolve({ data: { data: {} } }));
const mockPut = vi.fn(() => Promise.resolve({ data: { data: {} } }));
const mockDelete = vi.fn(() => Promise.resolve({ data: { data: {} } }));

vi.mock('~/utils/api', () => ({
  default: { get: mockGet, post: mockPost, put: mockPut, delete: mockDelete },
}));

beforeEach(() => {
  vi.clearAllMocks();
});

const noop = () => {};

// ═══ AUTH APIs ═══
describe('Auth APIs', () => {
  it('LOGIN_USER posts to /auth/login', async () => {
    const { LOGIN_USER } = await import('~/apis/auth');
    await LOGIN_USER({ payload: { data: { username: 'a', password: 'b' } } }, noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/auth/login', { username: 'a', password: 'b' });
  });

  it('LOGOUT posts to /auth/logout', async () => {
    const { LOGOUT } = await import('~/apis/auth');
    await LOGOUT({}, noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/auth/logout', {});
  });

  it('GET_ME gets /auth/me', async () => {
    const { GET_ME } = await import('~/apis/auth');
    await GET_ME(noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/auth/me');
  });

  it('FORGOT_PASSWORD posts to /auth/forgot-password', async () => {
    const { FORGOT_PASSWORD } = await import('~/apis/auth');
    await FORGOT_PASSWORD({ payload: { data: { email: 'test@test.com' } } }, noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/auth/forgot-password', { email: 'test@test.com' });
  });

  it('RESET_PASSWORD posts to /auth/reset-password', async () => {
    const { RESET_PASSWORD } = await import('~/apis/auth');
    await RESET_PASSWORD({ payload: { data: { token: 'abc', password: 'x' } } }, noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/auth/reset-password', { token: 'abc', password: 'x' });
  });

  it('CHANGE_PASSWORD posts to /auth/change-password', async () => {
    const { CHANGE_PASSWORD } = await import('~/apis/auth');
    await CHANGE_PASSWORD({ payload: { data: { old: 'a', new: 'b' } } }, noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/auth/change-password', { old: 'a', new: 'b' });
  });
});

// ═══ EMPLOYEE APIs ═══
describe('Employee APIs', () => {
  it('GET_EMPLOYEES gets /employees with params', async () => {
    const { GET_EMPLOYEES } = await import('~/apis/employee');
    await GET_EMPLOYEES({ page: 1 }, noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/employees', { params: { page: 1 } });
  });

  it('GET_EMPLOYEE gets /employees/:id', async () => {
    const { GET_EMPLOYEE } = await import('~/apis/employee');
    await GET_EMPLOYEE(5, noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/employees/5');
  });

  it('CREATE_EMPLOYEE posts to /employees', async () => {
    const { CREATE_EMPLOYEE } = await import('~/apis/employee');
    const data = { name: 'Test' };
    await CREATE_EMPLOYEE(data, noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/employees', data);
  });

  it('UPDATE_EMPLOYEE puts to /employees/:id', async () => {
    const { UPDATE_EMPLOYEE } = await import('~/apis/employee');
    await UPDATE_EMPLOYEE(3, { name: 'Updated' }, noop, noop);
    expect(mockPut).toHaveBeenCalledWith('/employees/3', { name: 'Updated' });
  });

  it('DELETE_EMPLOYEE deletes /employees/:id', async () => {
    const { DELETE_EMPLOYEE } = await import('~/apis/employee');
    await DELETE_EMPLOYEE(3, noop, noop);
    expect(mockDelete).toHaveBeenCalledWith('/employees/3');
  });

  it('GET_EMPLOYEE_RELATIVES gets /employees/:id/relatives', async () => {
    const { GET_EMPLOYEE_RELATIVES } = await import('~/apis/employee');
    await GET_EMPLOYEE_RELATIVES(1, noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/employees/1/relatives');
  });

  it('CREATE_EMPLOYEE_RELATIVE posts to /employees/:id/relatives', async () => {
    const { CREATE_EMPLOYEE_RELATIVE } = await import('~/apis/employee');
    await CREATE_EMPLOYEE_RELATIVE(1, { name: 'R' }, noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/employees/1/relatives', { name: 'R' });
  });

  it('UPDATE_EMPLOYEE_RELATIVE puts /employees/:eid/relatives/:rid', async () => {
    const { UPDATE_EMPLOYEE_RELATIVE } = await import('~/apis/employee');
    await UPDATE_EMPLOYEE_RELATIVE(1, 2, { name: 'U' }, noop, noop);
    expect(mockPut).toHaveBeenCalledWith('/employees/1/relatives/2', { name: 'U' });
  });

  it('DELETE_EMPLOYEE_RELATIVE deletes /employees/:eid/relatives/:rid', async () => {
    const { DELETE_EMPLOYEE_RELATIVE } = await import('~/apis/employee');
    await DELETE_EMPLOYEE_RELATIVE(1, 2, noop, noop);
    expect(mockDelete).toHaveBeenCalledWith('/employees/1/relatives/2');
  });

  it('UPLOAD_EMPLOYEE_DOCUMENT posts multipart to /employees/:id/documents', async () => {
    const { UPLOAD_EMPLOYEE_DOCUMENT } = await import('~/apis/employee');
    const formData = new FormData();
    await UPLOAD_EMPLOYEE_DOCUMENT(1, formData, noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/employees/1/documents', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  });

  it('DELETE_EMPLOYEE_DOCUMENT deletes /documents/:id', async () => {
    const { DELETE_EMPLOYEE_DOCUMENT } = await import('~/apis/employee');
    await DELETE_EMPLOYEE_DOCUMENT(10, noop, noop);
    expect(mockDelete).toHaveBeenCalledWith('/documents/10');
  });
});

// ═══ CONTRACT APIs ═══
describe('Contract APIs', () => {
  it('GET_CONTRACTS gets /contracts', async () => {
    const { GET_CONTRACTS } = await import('~/apis/contract');
    await GET_CONTRACTS({ page: 1 }, noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/contracts', { params: { page: 1 } });
  });

  it('GET_CONTRACT gets /contracts/:id', async () => {
    const { GET_CONTRACT } = await import('~/apis/contract');
    await GET_CONTRACT(7, noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/contracts/7');
  });

  it('CREATE_CONTRACT posts /contracts', async () => {
    const { CREATE_CONTRACT } = await import('~/apis/contract');
    await CREATE_CONTRACT({ type: 'FT' }, noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/contracts', { type: 'FT' });
  });

  it('UPDATE_CONTRACT puts /contracts/:id', async () => {
    const { UPDATE_CONTRACT } = await import('~/apis/contract');
    await UPDATE_CONTRACT(7, { type: 'PT' }, noop, noop);
    expect(mockPut).toHaveBeenCalledWith('/contracts/7', { type: 'PT' });
  });

  it('DELETE_CONTRACT deletes /contracts/:id', async () => {
    const { DELETE_CONTRACT } = await import('~/apis/contract');
    await DELETE_CONTRACT(7, noop, noop);
    expect(mockDelete).toHaveBeenCalledWith('/contracts/7');
  });
});

// ═══ TRANSACTION APIs ═══
describe('Transaction APIs', () => {
  it('GET_TRANSACTIONS gets /transactions', async () => {
    const { GET_TRANSACTIONS } = await import('~/apis/transaction');
    await GET_TRANSACTIONS({}, noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/transactions', { params: {} });
  });

  it('GET_TRANSACTION gets /transactions/:id', async () => {
    const { GET_TRANSACTION } = await import('~/apis/transaction');
    await GET_TRANSACTION(9, noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/transactions/9');
  });

  it('CREATE_TRANSACTION posts /transactions', async () => {
    const { CREATE_TRANSACTION } = await import('~/apis/transaction');
    await CREATE_TRANSACTION({ amount: 100 }, noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/transactions', { amount: 100 });
  });

  it('UPDATE_TRANSACTION puts /transactions/:id', async () => {
    const { UPDATE_TRANSACTION } = await import('~/apis/transaction');
    await UPDATE_TRANSACTION(9, { amount: 200 }, noop, noop);
    expect(mockPut).toHaveBeenCalledWith('/transactions/9', { amount: 200 });
  });

  it('DELETE_TRANSACTION deletes /transactions/:id', async () => {
    const { DELETE_TRANSACTION } = await import('~/apis/transaction');
    await DELETE_TRANSACTION(9, noop, noop);
    expect(mockDelete).toHaveBeenCalledWith('/transactions/9');
  });
});

// ═══ TIMESHEET APIs ═══
describe('Timesheet APIs', () => {
  it('CHECK_IN posts /timesheets/check-in', async () => {
    const { CHECK_IN } = await import('~/apis/timesheet');
    await CHECK_IN(noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/timesheets/check-in', {});
  });

  it('CHECK_OUT posts /timesheets/check-out', async () => {
    const { CHECK_OUT } = await import('~/apis/timesheet');
    await CHECK_OUT(noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/timesheets/check-out', {});
  });

  it('GET_MONTHLY_TIMESHEETS gets /timesheets/monthly', async () => {
    const { GET_MONTHLY_TIMESHEETS } = await import('~/apis/timesheet');
    await GET_MONTHLY_TIMESHEETS({ year_month: '2026-06' }, noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/timesheets/monthly', { params: { year_month: '2026-06' } });
  });

  it('CREATE_LEAVE_REQUEST posts /leave-requests', async () => {
    const { CREATE_LEAVE_REQUEST } = await import('~/apis/timesheet');
    await CREATE_LEAVE_REQUEST({ type: 'annual' }, noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/leave-requests', { type: 'annual' });
  });

  it('GET_MY_LEAVE_REQUESTS gets /leave-requests', async () => {
    const { GET_MY_LEAVE_REQUESTS } = await import('~/apis/timesheet');
    await GET_MY_LEAVE_REQUESTS(noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/leave-requests');
  });

  it('GET_PENDING_LEAVE_REQUESTS gets /leave-requests/pending', async () => {
    const { GET_PENDING_LEAVE_REQUESTS } = await import('~/apis/timesheet');
    await GET_PENDING_LEAVE_REQUESTS(noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/leave-requests/pending');
  });

  it('APPROVE_LEAVE_REQUEST posts /leave-requests/:id/approve', async () => {
    const { APPROVE_LEAVE_REQUEST } = await import('~/apis/timesheet');
    await APPROVE_LEAVE_REQUEST(5, { status: 'approved' }, noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/leave-requests/5/approve', { status: 'approved' });
  });

  it('GET_ADMIN_TIMESHEETS gets /timesheets/manage', async () => {
    const { GET_ADMIN_TIMESHEETS } = await import('~/apis/timesheet');
    await GET_ADMIN_TIMESHEETS({ month: '06' }, noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/timesheets/manage', { params: { month: '06' } });
  });

  it('STORE_MANUAL_TIMESHEET posts /timesheets/store-manual', async () => {
    const { STORE_MANUAL_TIMESHEET } = await import('~/apis/timesheet');
    await STORE_MANUAL_TIMESHEET({ employee_id: 1 }, noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/timesheets/store-manual', { employee_id: 1 });
  });

  it('GET_WORKING_HOUR_CONFIGS gets /timesheets/working-hour-configs', async () => {
    const { GET_WORKING_HOUR_CONFIGS } = await import('~/apis/timesheet');
    await GET_WORKING_HOUR_CONFIGS(noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/timesheets/working-hour-configs');
  });

  it('STORE_WORKING_HOUR_CONFIG posts config', async () => {
    const { STORE_WORKING_HOUR_CONFIG } = await import('~/apis/timesheet');
    await STORE_WORKING_HOUR_CONFIG({ start: '08:00' }, noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/timesheets/working-hour-configs', { start: '08:00' });
  });

  it('DELETE_WORKING_HOUR_CONFIG deletes config', async () => {
    const { DELETE_WORKING_HOUR_CONFIG } = await import('~/apis/timesheet');
    await DELETE_WORKING_HOUR_CONFIG(3, noop, noop);
    expect(mockDelete).toHaveBeenCalledWith('/timesheets/working-hour-configs/3');
  });

  it('GET_SHIFTS gets /timesheets/shifts', async () => {
    const { GET_SHIFTS } = await import('~/apis/timesheet');
    await GET_SHIFTS(noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/timesheets/shifts');
  });

  it('STORE_SHIFT posts /timesheets/shifts', async () => {
    const { STORE_SHIFT } = await import('~/apis/timesheet');
    await STORE_SHIFT({ name: 'Morning' }, noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/timesheets/shifts', { name: 'Morning' });
  });

  it('DELETE_SHIFT deletes /timesheets/shifts/:id', async () => {
    const { DELETE_SHIFT } = await import('~/apis/timesheet');
    await DELETE_SHIFT(2, noop, noop);
    expect(mockDelete).toHaveBeenCalledWith('/timesheets/shifts/2');
  });

  it('GET_PAYROLL gets /timesheets/payroll', async () => {
    const { GET_PAYROLL } = await import('~/apis/timesheet');
    await GET_PAYROLL({ month: '2026-06' }, noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/timesheets/payroll', { params: { month: '2026-06' } });
  });

  it('SAVE_PAYROLL posts /timesheets/payroll', async () => {
    const { SAVE_PAYROLL } = await import('~/apis/timesheet');
    await SAVE_PAYROLL({ data: [] }, noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/timesheets/payroll', { data: [] });
  });
});

// ═══ NOTIFICATION APIs ═══
describe('Notification APIs', () => {
  it('GET_NOTIFICATIONS gets /notifications', async () => {
    const { GET_NOTIFICATIONS } = await import('~/apis/notification');
    await GET_NOTIFICATIONS({ limit: 30 }, noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/notifications', { params: { limit: 30 } });
  });

  it('GET_UNREAD_COUNT gets /notifications/unread-count', async () => {
    const { GET_UNREAD_COUNT } = await import('~/apis/notification');
    await GET_UNREAD_COUNT(noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/notifications/unread-count');
  });

  it('MARK_NOTIFICATION_READ puts /notifications/:id/read', async () => {
    const { MARK_NOTIFICATION_READ } = await import('~/apis/notification');
    await MARK_NOTIFICATION_READ(5, noop, noop);
    expect(mockPut).toHaveBeenCalledWith('/notifications/5/read');
  });

  it('MARK_ALL_NOTIFICATIONS_READ puts /notifications/read-all', async () => {
    const { MARK_ALL_NOTIFICATIONS_READ } = await import('~/apis/notification');
    await MARK_ALL_NOTIFICATIONS_READ(noop, noop);
    expect(mockPut).toHaveBeenCalledWith('/notifications/read-all');
  });
});

// ═══ COMPLIANCE APIs ═══
describe('Compliance APIs', () => {
  it('GET_COMPLIANCE_ISSUES gets /compliance', async () => {
    const { GET_COMPLIANCE_ISSUES } = await import('~/apis/compliance');
    await GET_COMPLIANCE_ISSUES({ page: 1 }, noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/compliance', { params: { page: 1 } });
  });

  it('SCAN_COMPLIANCE posts /compliance/scan', async () => {
    const { SCAN_COMPLIANCE } = await import('~/apis/compliance');
    await SCAN_COMPLIANCE(noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/compliance/scan');
  });

  it('RESOLVE_COMPLIANCE_ISSUE puts /compliance/:id/resolve', async () => {
    const { RESOLVE_COMPLIANCE_ISSUE } = await import('~/apis/compliance');
    await RESOLVE_COMPLIANCE_ISSUE(3, 'Fixed', noop, noop);
    expect(mockPut).toHaveBeenCalledWith('/compliance/3/resolve', { note: 'Fixed' });
  });
});

// ═══ DASHBOARD API ═══
describe('Dashboard API', () => {
  it('GET_DASHBOARD_STATS gets /dashboard', async () => {
    const { GET_DASHBOARD_STATS } = await import('~/apis/dashboard');
    await GET_DASHBOARD_STATS({ year: 2026 }, noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/dashboard', { params: { year: 2026 } });
  });
});

// ═══ MASTER APIs ═══
describe('Master APIs', () => {
  it('GET_COMPANY_SETTING gets /master/company-setting', async () => {
    const { GET_COMPANY_SETTING } = await import('~/apis/master/companySetting');
    await GET_COMPANY_SETTING(noop, noop);
    expect(mockGet).toHaveBeenCalledWith('/master/company-setting');
  });

  it('UPDATE_COMPANY_SETTING posts /master/company-setting', async () => {
    const { UPDATE_COMPANY_SETTING } = await import('~/apis/master/companySetting');
    await UPDATE_COMPANY_SETTING({ name: 'New' }, noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/master/company-setting', { name: 'New' });
  });

  it('CREATE_DEPARTMENT posts /master/department/create', async () => {
    const { CREATE_DEPARTMENT } = await import('~/apis/master/department');
    await CREATE_DEPARTMENT({ payload: { data: { name: 'IT' } } }, noop, noop);
    expect(mockPost).toHaveBeenCalledWith('/master/department/create', { name: 'IT' });
  });

  it('UPDATE_DEPARTMENT puts /master/department/:id', async () => {
    const { UPDATE_DEPARTMENT } = await import('~/apis/master/department');
    await UPDATE_DEPARTMENT({ payload: { id: 1, data: { name: 'HR' } } }, noop, noop);
    expect(mockPut).toHaveBeenCalledWith('/master/department/1', { name: 'HR' });
  });

  it('DELETE_DEPARTMENT deletes /master/department/:id', async () => {
    const { DELETE_DEPARTMENT } = await import('~/apis/master/department');
    await DELETE_DEPARTMENT({ payload: { id: 2 } }, noop, noop);
    expect(mockDelete).toHaveBeenCalledWith('/master/department/2');
  });
});

// ═══ CALLBACK PATTERN ═══
describe('API Callback Pattern', () => {
  it('should call successCallback on resolve', async () => {
    const successCb = vi.fn();
    const errorCb = vi.fn();
    const { GET_ME } = await import('~/apis/auth');
    await GET_ME(successCb, errorCb);
    expect(successCb).toHaveBeenCalled();
    expect(errorCb).not.toHaveBeenCalled();
  });

  it('should call errorCallback on reject', async () => {
    mockGet.mockRejectedValueOnce(new Error('Network error'));
    const successCb = vi.fn();
    const errorCb = vi.fn();
    const { GET_ME } = await import('~/apis/auth');
    await GET_ME(successCb, errorCb);
    expect(errorCb).toHaveBeenCalled();
    expect(successCb).not.toHaveBeenCalled();
  });
});
