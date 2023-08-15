export function getCapRate(annualIncome: number, propertyValue: number) {
  return (annualIncome / propertyValue) * 100.0;
}

export function halfPercentRuleCashFlow(
  income: number,
  mortgagePayment: number
) {
  return income - (income * 0.5 + mortgagePayment);
}
