import { formatNumberAsCurrency } from "../../utils/helpers";

export default function MonthlyExpenseBreakdown(props: any) {
  return (
    <div>
      <h2 className="my-8">
        <strong>Monthly Expense Breakdown</strong>
      </h2>
      <div className="grid md:grid-cols-3 gap-3">
        <div className="totalExpense mr-4">
          <h3>
            <strong>{`Total expenses $${formatNumberAsCurrency(
              props.totalMonthlyExpense,
              2
            )}`}</strong>
          </h3>
          <p>
            <strong>Mortgage</strong>&emsp;
            {`$${formatNumberAsCurrency(props.calculateMortgage)}`}
          </p>
          <p>
            <strong>Taxes</strong>&emsp;
            {`$${formatNumberAsCurrency(props.propertyTaxes)}`}
          </p>
          <p>
            <strong>Insurance</strong>&emsp;
            {`$${formatNumberAsCurrency(props.propertyInsurance)}`}
          </p>
          <p>
            <strong>Variable expenses</strong>&emsp;
            {`$${formatNumberAsCurrency(props.variableExpense)}`}
          </p>
          <p>
            <strong>Fixed expenses</strong>&emsp;
            {`$${formatNumberAsCurrency(props.fixedExpense)}`}
          </p>
        </div>
        <div className="fixedExpense mr-4">
          <h3>
            <strong>{`Fixed expenses $${formatNumberAsCurrency(
              props.fixedExpense
            )}`}</strong>
          </h3>
          <p>
            <strong>Vacancy</strong>&emsp;
            {`$${formatNumberAsCurrency(props.vacancyMonthlyCost)}`}
          </p>
          <p>
            <strong>Maintenance</strong>&emsp;
            {`$${formatNumberAsCurrency(props.maintenanceMonthlyCost)}`}
          </p>
          <p>
            <strong>CapEx</strong>&emsp;
            {`$${formatNumberAsCurrency(props.capexMonthlyCost)}`}
          </p>
          <p>
            <strong>Management fees</strong>&emsp;
            {`$${formatNumberAsCurrency(props.managementMonthlyCost)}`}
          </p>
        </div>
        <div className="variableExpense">
          <h3>
            <strong>{`Variable expenses $${formatNumberAsCurrency(
              props.variableExpense,
              2
            )}`}</strong>
          </h3>
          <p>
            <strong>Electricity</strong>&emsp;
            {`$${formatNumberAsCurrency(props.utility.electricityExpense)}`}
          </p>
          <p>
            <strong>Gas</strong>&emsp;
            {`$${formatNumberAsCurrency(props.utility.gasExpense)}`}
          </p>
          <p>
            <strong>{"Water & Sewer"}</strong>&emsp;
            {`$${formatNumberAsCurrency(props.utility.waterSewerExpense)}`}
          </p>
          <p>
            <strong>HOA Fees</strong>&emsp;
            {`$${formatNumberAsCurrency(props.utility.hoaExpense)}`}
          </p>
          <p>
            <strong>Garbage</strong>&emsp;
            {`$${formatNumberAsCurrency(props.utility.garbageExpense)}`}
          </p>
          <p>
            <strong>Other</strong>&emsp;
            {`$${formatNumberAsCurrency(props.utility.otherExpense)}`}
          </p>
        </div>
      </div>
    </div>
  );
}
