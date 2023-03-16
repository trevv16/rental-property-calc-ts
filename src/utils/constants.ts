export const DEFAULT_INFO = {
  complete: true,
  name: "Deal #1",
  streetAddress: "123 Main St",
  city: "Memphis",
  state: "TN",
  zipCode: "123456",
};

export const DEFAULT_PURCHASE = {
  complete: true,
  purchasePrice: 200000.0,
  closingCost: 10000.0,
  rehabCost: 10000.0,
  propertyValueGrowth: 1.0,
};

export const DEFAULT_LOAN = {
  complete: true,
  isCashPurchase: false,
  loanAmount: 193000.0,
  interestRate: 7.0,
  pointsCharged: 0.1,
  loanTerm: 30,
};

export const DEFAULT_INCOME = {
  complete: true,
  grossMonthlyRentalIncome: 2400.0,
  annualIncomeGrowth: 1.0,
  otherMonthlyRentalIncome: 100.0,
};

export const DEFAULT_OWNERSHIP = {
  complete: true,
  propertyTaxes: 2000.0,
  propertyInsurance: 1500.0,
  maintenancePercent: 5.0,
  vacancyPercent: 5.0,
  capexPercent: 5.0,
  managementPercent: 8.0,
};

export const DEFAULT_UTILITY = {
  complete: true,
  electricityExpense: 0.0,
  gasExpense: 0.0,
  waterSewerExpense: 100.0,
  hoaExpense: 100.0,
  garbageExpense: 0.0,
  otherExpense: 100.0,
  annualExpenseGrowth: 1.0,
  futureSalePercent: 6.0,
};
