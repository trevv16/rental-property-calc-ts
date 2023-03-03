export type InfoInput = {
  complete: boolean;
  name: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
};

export type PurchaseInput = {
  complete: boolean;
  purchasePrice: number;
  closingCost: number;
  rehabCost: number;
  propertyValueGrowth: number;
};

export type LoanInput = {
  complete: boolean;
  isCashPurchase: boolean;
  loanAmount: number;
  interestRate: number;
  pointsCharged: number;
  loanTerm: number;
};

export type IncomeInput = {
  complete: boolean;
  grossMonthlyRentalIncome: number;
  annualIncomeGrowth: number;
  otherMonthlyRentalIncome: number;
};

export type OwnershipInput = {
  complete: boolean;
  propertyTaxes: number;
  propertyInsurance: number;
  maintenancePercent: number;
  vacancyPercent: number;
  capexPercent: number;
  managementPercent: number;
};

export type UtilityInput = {
  complete: boolean;
  electricityExpense: number;
  gasExpense: number;
  waterSewerExpense: number;
  hoaExpense: number;
  garbageExpense: number;
  otherExpense: number;
  annualExpenseGrowth: number;
  futureSalePercent: number;
};
