import { formatNumberAsCurrency } from "../../utils/helpers";
import { ResultCard } from "../common/ResultCard";

type CashFlowSectionProps = {
  cleanCashFlow: number;
  cleanIncome: number;
  cleanExpense: number;
  totalMonthlyIncome: number;
  halfPercentMonthlyExpense: number;
  calculateMortgage: number;
  halfPercentRuleCashFlow: number;
};

export default function CashFlowSection({
  cleanCashFlow,
  cleanIncome,
  cleanExpense,
  totalMonthlyIncome,
  halfPercentMonthlyExpense,
  calculateMortgage,
  halfPercentRuleCashFlow,
}: CashFlowSectionProps) {
  return (
    <div>
      <div>
        <h5 className="mt-4 text-md text-gray-500">
          <strong>Calculated</strong>
        </h5>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <ResultCard
            title="Monthly Cash Flow"
            value={`$${formatNumberAsCurrency(cleanCashFlow, 2)}`}
          />
          <ResultCard
            title="Income"
            value={`$${formatNumberAsCurrency(cleanIncome, 2)}`}
          />
          <ResultCard
            title="Expenses"
            value={`$${formatNumberAsCurrency(cleanExpense, 2)}`}
          />
        </dl>
      </div>
      <div>
        <h5 className="mt-8 text-md text-gray-500">
          <strong>50% Rule (Monthly)</strong>
        </h5>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
          <ResultCard
            title="Total Monthly Income"
            value={`$${formatNumberAsCurrency(totalMonthlyIncome, 2)}`}
          />
          <ResultCard
            title="50% estimation for expenses"
            value={`$${formatNumberAsCurrency(halfPercentMonthlyExpense, 2)}`}
          />
          <ResultCard
            title="Monthly Mortgage (P&I)"
            value={`$${formatNumberAsCurrency(calculateMortgage, 2)}`}
          />
          <ResultCard
            title="50% Rule Cash Flow"
            value={`$${formatNumberAsCurrency(halfPercentRuleCashFlow, 2)}`}
          />
        </dl>
      </div>
    </div>
  );
}
