import useCalculator from "../../hooks/useCalculator";
import {
  IncomeInput,
  InfoInput,
  LoanInput,
  OwnershipInput,
  PurchaseInput,
  UtilityInput,
} from "../../utils/types";
import {
  PropertyHeader,
  MonthlyCashFlow,
  AnnualizedAndMortgagePayment,
  MonthlyExpenseBreakdown,
  ROI,
  HalfPercentRule,
  Graph,
} from "../";
import Divider from "../calculator/Divider";
import { useMortgageAmmortization } from "../../hooks/useMortgageAmmortization";

type ResultProps = {
  info: InfoInput;
  purchase: PurchaseInput;
  loan: LoanInput;
  ownership: OwnershipInput;
  income: IncomeInput;
  utility: UtilityInput;
};

export const Results = ({
  info,
  purchase,
  loan,
  ownership,
  income,
  utility,
}: ResultProps) => {
  const schedule = useMortgageAmmortization(loan, purchase);
  const calcResult = useCalculator({
    purchase,
    loan,
    ownership,
    income,
    utility,
  });

  return (
    <>
      {info.complete && (
        <>
          <PropertyHeader info={info} />
          <Divider />
          <ROI
            calculateAnnualNOI={calcResult.annualNOIVal}
            calculateCocROI={calcResult.cocROIVal}
            proFormaCap={calcResult.proFormaCapVal}
            purchaseCap={calcResult.purchaseCapVal}
          />
          <h2 className="my-2 text-lg leading-6 font-medium text-gray-900">
            <strong>Cash Flow</strong>
          </h2>
          <MonthlyCashFlow
            cleanCashFlow={calcResult.cleanCashFlow}
            cleanIncome={calcResult.cleanIncome}
            cleanExpense={calcResult.cleanExpense}
          />
          <HalfPercentRule
            totalMonthlyIncome={calcResult.monthlyIncomeVal}
            halfPercentMonthlyExpense={calcResult.halfPercentExpenseVal}
            calculateMortgage={calcResult.mortgageVal}
            halfPercentRuleCashFlow={calcResult.halfPercentCashFlowVal}
          />
          <AnnualizedAndMortgagePayment
            annualizedReturnValue={calcResult.annualizedReturnValue}
            mortgagePaymentValue={calcResult.mortgagePaymentValue}
          />
          <MonthlyExpenseBreakdown
            totalMonthlyExpense={calcResult.monthlyExpenseVal}
            calculateMortgage={calcResult.mortgageVal}
            propertyTaxes={calcResult.taxesVal}
            propertyInsurance={calcResult.insuranceVal}
            variableExpense={calcResult.variableExpenseVal}
            fixedExpense={calcResult.fixedExpenseVal}
            vacancyMonthlyCost={calcResult.vacancyVal}
            maintenanceMonthlyCost={calcResult.maintenanceVal}
            capexMonthlyCost={calcResult.capexVal}
            managementMonthlyCost={calcResult.managementVal}
            utility={utility}
          />
          <Graph scheduleSummary={schedule} />
        </>
      )}
    </>
  );
};
