export const DEFAULT_INFO = {
  complete: true,
  nickname: "Deal #1",
  address: "123 Main St",
  city: "Memphis",
  state: "TN",
  zip: "123456",
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
  pmi: 0.1,
  loanTerm: 30,
};

export const DEFAULT_INCOME = {
  complete: true,
  grossMonthlyRentalIncome: 2400.0,
  annualIncomeGrowthPercent: 1.0,
  grossMonthlyOtherIncome: 100.0,
};

export const DEFAULT_OWNERSHIP = {
  complete: true,
  annualPropertyTaxExpense: 2000.0,
  annualPropertyInsuranceExpense: 1500.0,
  maintenancePercentage: 5.0,
  vacancyPercentage: 5.0,
  capexPercentage: 5.0,
  managementPercentage: 8.0,
};

export const DEFAULT_UTILITY = {
  complete: true,
  monthlyElectricityExpense: 0.0,
  monthlyGasExpense: 0.0,
  monthlyWaterAndSewerExpense: 100.0,
  hoaExpense: 100.0,
  monthlyGarbageExpense: 0.0,
  monthlyOtherExpense: 100.0,
  annualExpenseGrowthPercent: 1.0,
  futureSalePercent: 6.0,
};
