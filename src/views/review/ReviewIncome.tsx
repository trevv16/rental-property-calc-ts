import Humanize from "humanize-plus";

export default function ReviewIncome(props: any) {
  return (
    <div>
      <div className="income">
        <h3 className="m-2">Income</h3>
        <h5>{`Gross Monthly Rental Income: $${Humanize.formatNumber(
          props.income.grossMonthlyRentalIncome,
          2
        )}`}</h5>
        <h5>{`Other Monthly Rental Income: $${Humanize.formatNumber(
          props.income.otherMonthlyRentalIncome,
          2
        )}`}</h5>
        <h5>{`Annual Income Growth: ${Humanize.formatNumber(
          props.income.annualIncomeGrowth,
          2
        )}%`}</h5>
      </div>
    </div>
  );
}
