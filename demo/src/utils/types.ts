export type InfoInput = {
  complete: boolean;
  nickname: string;
  address: string;
  city: string;
  state: string;
  zip: string;
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
  pmi: number;
  loanTerm: number;
};

export type IncomeInput = {
  complete: boolean;
  grossMonthlyRentalIncome: number;
  annualIncomeGrowthPercent: number;
  grossMonthlyOtherIncome: number;
};

export type OwnershipInput = {
  complete: boolean;
  annualPropertyTaxExpense: number;
  annualPropertyInsuranceExpense: number;
  maintenancePercentage: number;
  vacancyPercentage: number;
  capexPercentage: number;
  managementPercentage: number;
};

export type UtilityInput = {
  complete: boolean;
  monthlyElectricityExpense: number;
  monthlyGasExpense: number;
  monthlyWaterAndSewerExpense: number;
  hoaExpense: number;
  monthlyGarbageExpense: number;
  monthlyOtherExpense: number;
  annualExpenseGrowthPercent: number;
  futureSalePercent: number;
};
