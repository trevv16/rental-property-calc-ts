import { IMortgage } from "../mortgage/types";

export type Property = {
  nickname: string;
  address: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
};

export type Purchase = {
  purchasePrice: number;
  closingCost: number;
  rehabCost: number;
  afterRepairValue?: number;
  propertyValueGrowthPercent?: number;
};

export type Loan = {
  isCashPurchase: boolean;
  loanAmount: number;
  interestRate: number;
  pmi: number;
  loanTerm: number;
};

export type Income = {
  grossMonthlyRentalIncome: number;
  grossMonthlyOtherIncome: number;
  annualIncomeGrowthPercent: number;
};

export type OwnersExpense = {
  annualPropertyTaxExpense: number;
  annualPropertyInsuranceExpense: number;
  monthlyHOAExpense: number;
  maintenancePercentage: number;
  vacancyPercentage: number;
  capexPercentage: number;
  managementPercentage: number;
  futureSalesExpense?: number;
};

export type UtilityExpense = {
  monthlyElectricityExpense: number;
  monthlyGasExpense: number;
  monthlyWaterAndSewerExpense: number;
  monthlyGarbageExpense: number;
  monthlyOtherExpense: number;
  annualExpenseGrowthPercent: number;
};

export type TimeUnits = "monthly" | "annual";

export type BreakdownItem = {
  name: string;
  amount: number;
};

export interface IDeal {
  property: Property;
  purchase: Purchase;
  loan: Loan;
  mortgage: IMortgage;
  income: Income;
  ownersExpense: OwnersExpense;
  utilityExpense: UtilityExpense;

  getTotalCost(): number;
  getNOI(units: TimeUnits): number;
  getAnnualCashOnCashROI(annualNOI: number, totalCost: number): number;
  getAnnualProFormaCap(): number;
  getAnnualPurchaseCap(): number;
  getRentalIncome(units: TimeUnits): number;
  getOtherIncome(units: TimeUnits): number;
  getIncome(units: TimeUnits): number;
  getExpenses(units: TimeUnits): number;
  getMonthlyHalfPercentCashFlow(): number;
  getFiveYearAnnualizedReturn(
    initialValue: number,
    finalValue: number,
    years: number
  ): number;

  getPropertyTaxExpense(units: TimeUnits): number;
  getPropertyInsuranceExpense(units: TimeUnits): number;
  getHOAExpense(units: TimeUnits): number;
  getMaintenanceExpense(units: TimeUnits): number;
  getVacanyExpense(units: TimeUnits): number;
  getCapexExpense(units: TimeUnits): number;
  getManagementExpense(units: TimeUnits): number;
  getOwnersExpense(units: TimeUnits): number;
  getElectricityExpense(units: TimeUnits): number;
  getGasExpense(units: TimeUnits): number;
  getWaterSewerExpense(units: TimeUnits): number;
  getGarbageExpense(units: TimeUnits): number;
  getOtherExpenses(units: TimeUnits): number;
  getUtilityExpense(units: TimeUnits): number;
  getMortgagePayment(units: TimeUnits): number;
  getExpenses(units: TimeUnits): number;
  getCashFlow(units: TimeUnits): number;
  getIncomeBreakdown(units: TimeUnits): BreakdownItem[];
  getFixedExpenseBreakdown(units: TimeUnits): BreakdownItem[];
  getVariableExpenseBreakdown(units: TimeUnits): BreakdownItem[];
}
