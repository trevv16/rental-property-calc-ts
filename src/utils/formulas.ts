export function getCapRate(annualIncome: number, propertyValue: number) {
  return (annualIncome / propertyValue) * 100.0;
}

export function halfPercentRuleCashFlow(
  income: number,
  mortgagePayment: number
) {
  return income - (income * 0.5 + mortgagePayment);
}

/** Calculates the annualized return of an investment
 *
 * @param {number} initialValue inital value of the investment
 * @param {number} finalValue final value of the investment
 * @param {number} years number of years invested
 * @returns {number} annualized return value as percentage
 */
export const annualizedReturn = (
  initialValue: number,
  finalValue: number,
  years: number
): number => {
  const primary: number = finalValue / (initialValue * 1.0);
  const secondary: number = primary ** (1 / (years * 1.0));
  const final: number = (secondary - 1) * 100;

  return Math.round(final * 100) / 100;
};
