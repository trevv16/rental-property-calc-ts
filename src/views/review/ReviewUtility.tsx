import Humanize from "humanize-plus";

export default function ReviewUtility(props: any) {
  return (
    <div>
      <div className="utility">
        <h3 className="m-2">Utilities</h3>
        <h5>{`Electricity: $${Humanize.formatNumber(
          props.utility.electricityExpense,
          2
        )}`}</h5>
        <h5>{`Gas: $${Humanize.formatNumber(props.utility.gasExpense, 2)}`}</h5>
        <h5>{`Water & Sewer: $${Humanize.formatNumber(
          props.utility.waterSewerExpense,
          2
        )}`}</h5>
        <h5>{`HOA: $${Humanize.formatNumber(props.utility.hoaExpense, 2)}`}</h5>
        <h5>{`Garbage: $${Humanize.formatNumber(
          props.utility.garbageExpense,
          2
        )}`}</h5>
        <h5>{`Other: $${Humanize.formatNumber(
          props.utility.otherExpense,
          2
        )}`}</h5>
        <h5>{`Annual Expense Growth: ${props.utility.annualExpenseGrowth}%`}</h5>
        <h5>{`Future Sales Cost: ${props.utility.futureSalePercent}%`}</h5>
      </div>
    </div>
  );
}
