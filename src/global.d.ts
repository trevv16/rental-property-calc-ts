type infoI = {
  complete: boolean;
  name: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
};
type purchaseI = {
  complete: boolean;
  purchasePrice: number;
  closingCost: number;
  rehabCost: number;
  propertyValueGrowth: number;
};
type loanI = {
  complete: boolean;
  isCashPurchase: boolean;
  loanAmount: number;
  interestRate: number;
  pointsCharged: number;
  loanTerm: number;
};
type incomeI = {
  complete: boolean;
  grossMonthlyRentalIncome: number;
  annualIncomeGrowth: number;
  otherMonthlyRentalIncome: number;
};
type ownershipI = {
  complete: boolean;
  propertyTaxes: number;
  propertyInsurance: number;
  maintenancePercent: number;
  vacancyPercent: number;
  capexPercent: number;
  managementPercent: number;
};
type utilityI = {
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
