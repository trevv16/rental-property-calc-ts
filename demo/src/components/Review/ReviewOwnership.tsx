import { formatNumberAsCurrency } from "../../utils/helpers";

export default function ReviewOwnership(props: any) {
  return (
    <div>
      <div className="ownership">
        <h3 className="m-2">Ownership</h3>
        <h5>{`Annual Property Taxes: $${formatNumberAsCurrency(
          props.ownership.annualPropertyTaxExpense
        )}`}</h5>
        <h5>{`Annual Property Insurance: $${formatNumberAsCurrency(
          props.ownership.annualPropertyInsuranceExpense
        )}`}</h5>
        <h5>{`Maintenace: ${props.ownership.maintenancePercentage}%`}</h5>
        <h5>{`Vacancy: ${props.ownership.vacancyPercentage}%`}</h5>
        <h5>{`CapEx: ${props.ownership.capexPercentage}%`}</h5>
        <h5>{`Management: ${props.ownership.managementPercentage}%`}</h5>
      </div>
    </div>
  );
}
