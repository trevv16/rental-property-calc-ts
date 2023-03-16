export type MaybeNumber = number | null;

export type MortgageBreakdown = {
  mortgage: number;
  propertyTax: number;
  homeInsurance: number;
  hoa: number;
  pmi: number;
  otherCosts: number;
  total: number;
};

export type DynamicAmount = { value: number; type: "amount" | "percent" };

export type MortgageMonth = {
  currentMonth: number;
  mortgagePayment: number;
  principalPayment: number;
  interestPayment: number;
  principalPaid: number;
  interestPaid: number;
  outstandingLoanBalance: number;
};

export interface IMortgage {
  homePrice: number;
  loanAmount: number;
  loanTerm: number;
  interestRate: number;

  printMortgage(): void;
  updateMortgage(mortgageKey: keyof IMortgage, value: any): void;
  getPropertyTax(): MaybeNumber;
  getHOA(): MaybeNumber;
  getPMI(): MaybeNumber;
  getHomeInsurance(): MaybeNumber;
  getOtherCosts(): MaybeNumber;
  getDownPayment(): number;
  getTotalPaymentAmount(): number;
  getTotalInterest(): number;
  getPayoffDate(startDate: Date): Date;
  getMonthlyMortgagePayment(): number;
  getMonthlyMortgageCost(): MortgageBreakdown;
}
