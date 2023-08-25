import { formatNumberAsCurrency } from "../../utils/helpers";

export default function ReviewIncome(props: any) {
  return (
    <div>
      <div className="income">
        <h3 className="m-2">Income</h3>
        <h5>{`Gross Monthly Rental Income: $${formatNumberAsCurrency(
          props.income.grossMonthlyRentalIncome
        )}`}</h5>
        <h5>{`Other Monthly Rental Income: $${formatNumberAsCurrency(
          props.income.grossMonthlyOtherIncome
        )}`}</h5>
        <h5>{`Annual Income Growth: ${formatNumberAsCurrency(
          props.income.annualIncomeGrowthPercent
        )}%`}</h5>
      </div>
    </div>
  );
}
