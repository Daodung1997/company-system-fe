/**
 * Common status options used across the application
 * @param {Function} t - The translation function ($t or t from useI18n)
 * @returns {Array} Array of status objects
 */
export const getStatusOptions = (t: any) => [
  {
    label: t('text.active'),
    value: 'active'
  },
  {
    label: t('text.inactive'),
    value: 'inactive'
  },
  {
    label: t('text.deleted'),
    value: 'deleted'
  }
];
