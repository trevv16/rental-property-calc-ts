import {
  totalCost,
  calculateMortgage,
  totalMonthlyIncome,
  getMonthlyFromAnnual,
  percentOfRentalIncome,
  fixedExpense,
  variableExpense,
  totalMonthlyExpense,
  monthlyCashFlow,
  annualizedReturn,
  calculateAnnualNOI,
  calculateCocROI,
  proFormaCap,
  purchaseCap,
  halfPercentMonthlyExpense,
  halfPercentRuleCashFlow,
} from "../utils/calc";
import { formatNumberAsCurrency } from "../utils/helpers";
import {
  IncomeInput,
  LoanInput,
  OwnershipInput,
  PurchaseInput,
  UtilityInput,
} from "../utils/types";

type CalculatorProps = {
  purchase: PurchaseInput;
  loan: LoanInput;
  ownership: OwnershipInput;
  income: IncomeInput;
  utility: UtilityInput;
};

export default function useCalculator({
  purchase,
  loan,
  ownership,
  income,
  utility,
}: CalculatorProps) {
  const totalCostVal = totalCost(purchase);
  const mortgageVal = calculateMortgage(loan);

  const monthlyIncomeVal = totalMonthlyIncome(income);
  const taxesVal = getMonthlyFromAnnual(ownership.annualPropertyTaxExpense);
  const insuranceVal = getMonthlyFromAnnual(
    ownership.annualPropertyInsuranceExpense
  );
  const vacancyVal = percentOfRentalIncome(
    monthlyIncomeVal,
    ownership.vacancyPercentage
  );
  const maintenanceVal = percentOfRentalIncome(
    monthlyIncomeVal,
    ownership.maintenancePercentage
  );
  const capexVal = percentOfRentalIncome(
    monthlyIncomeVal,
    ownership.capexPercentage
  );
  const managementVal = percentOfRentalIncome(
    monthlyIncomeVal,
    ownership.managementPercentage
  );

  const fixedExpenseVal = fixedExpense(
    maintenanceVal,
    vacancyVal,
    capexVal,
    managementVal
  );
  const variableExpenseVal = variableExpense(utility);

  // MonthlyCashFlow props
  const monthlyUtilityVal = variableExpenseVal;
  const monthlyOwnershipVal = taxesVal + insuranceVal + fixedExpenseVal;
  const monthlyExpenseVal = totalMonthlyExpense(
    monthlyOwnershipVal,
    monthlyUtilityVal,
    mortgageVal
  );
  const monthlyCashFlowVal = monthlyCashFlow(
    monthlyIncomeVal,
    monthlyExpenseVal
  );
  const cleanCashFlow = !isNaN(monthlyCashFlowVal)
    ? formatNumberAsCurrency(monthlyCashFlowVal)
    : 0;
  const cleanIncome = !isNaN(monthlyIncomeVal)
    ? formatNumberAsCurrency(monthlyIncomeVal)
    : 0;
  const cleanExpense = !isNaN(monthlyExpenseVal)
    ? formatNumberAsCurrency(monthlyExpenseVal)
    : 0;

  // AnnualizedAndMortgagePayment props
  const _annualizedReturn = annualizedReturn(totalCostVal, totalCostVal * 2, 5);
  const annualizedReturnValue = !isNaN(_annualizedReturn)
    ? _annualizedReturn.toFixed(2)
    : 0;
  const mortgagePaymentValue = !isNaN(mortgageVal) ? mortgageVal.toFixed(2) : 0;

  const annualNOIVal = calculateAnnualNOI(monthlyIncomeVal, monthlyExpenseVal);
  const cocROIVal = calculateCocROI(annualNOIVal, totalCostVal);
  const proFormaCapVal = proFormaCap(annualNOIVal, totalCostVal);
  const purchaseCapVal = purchaseCap(annualNOIVal, purchase);
  const halfPercentExpenseVal = halfPercentMonthlyExpense(monthlyIncomeVal);
  const halfPercentCashFlowVal = halfPercentRuleCashFlow(
    monthlyIncomeVal,
    mortgageVal
  );

  return {
    cleanCashFlow,
    cleanIncome,
    cleanExpense,
    annualizedReturnValue,
    mortgagePaymentValue,
    monthlyExpenseVal,
    mortgageVal,
    taxesVal,
    insuranceVal,
    variableExpenseVal,
    fixedExpenseVal,
    vacancyVal,
    maintenanceVal,
    capexVal,
    managementVal,
    annualNOIVal,
    cocROIVal,
    proFormaCapVal,
    purchaseCapVal,
    monthlyIncomeVal,
    halfPercentExpenseVal,
    halfPercentCashFlowVal,
  };
}
