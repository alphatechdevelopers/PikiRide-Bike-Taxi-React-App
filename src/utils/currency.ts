/**
 * Formats a number as currency with the specified currency code
 * @param amount The amount to format
 * @param currencyCode The ISO currency code (e.g., 'KES', 'USD')
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number, currencyCode: string): string => {
  return `${currencyCode} ${amount.toLocaleString()}`;
};