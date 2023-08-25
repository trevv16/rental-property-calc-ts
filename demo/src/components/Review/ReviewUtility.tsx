import { formatNumberAsCurrency } from "../../utils/helpers";

export default function ReviewUtility(props: any) {
  return (
    <div>
      <div className="utility">
        <h3 className="m-2">Utilities</h3>
        <h5>{`Electricity: $${formatNumberAsCurrency(
          props.utility.monthlyElectricityExpense
        )}`}</h5>
        <h5>{`Gas: $${formatNumberAsCurrency(
          props.utility.monthlyGasExpense
        )}`}</h5>
        <h5>{`Water & Sewer: $${formatNumberAsCurrency(
          props.utility.monthlyWaterAndSewerExpense
        )}`}</h5>
        <h5>{`HOA: $${formatNumberAsCurrency(props.utility.hoaExpense)}`}</h5>
        <h5>{`Garbage: $${formatNumberAsCurrency(
          props.utility.monthlyGarbageExpense
        )}`}</h5>
        <h5>{`Other: $${formatNumberAsCurrency(
          props.utility.monthlyOtherExpense
        )}`}</h5>
        <h5>{`Annual Expense Growth: ${props.utility.annualExpenseGrowthPercent}%`}</h5>
        <h5>{`Future Sales Cost: ${props.utility.futureSalePercent}%`}</h5>
      </div>
    </div>
  );
}
