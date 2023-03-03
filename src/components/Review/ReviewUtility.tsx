import { formatNumberAsCurrency } from "../../utils/helpers";

export default function ReviewUtility(props: any) {
  return (
    <div>
      <div className="utility">
        <h3 className="m-2">Utilities</h3>
        <h5>{`Electricity: $${formatNumberAsCurrency(
          props.utility.electricityExpense
        )}`}</h5>
        <h5>{`Gas: $${formatNumberAsCurrency(props.utility.gasExpense)}`}</h5>
        <h5>{`Water & Sewer: $${formatNumberAsCurrency(
          props.utility.waterSewerExpense
        )}`}</h5>
        <h5>{`HOA: $${formatNumberAsCurrency(props.utility.hoaExpense)}`}</h5>
        <h5>{`Garbage: $${formatNumberAsCurrency(
          props.utility.garbageExpense
        )}`}</h5>
        <h5>{`Other: $${formatNumberAsCurrency(
          props.utility.otherExpense
        )}`}</h5>
        <h5>{`Annual Expense Growth: ${props.utility.annualExpenseGrowth}%`}</h5>
        <h5>{`Future Sales Cost: ${props.utility.futureSalePercent}%`}</h5>
      </div>
    </div>
  );
}
