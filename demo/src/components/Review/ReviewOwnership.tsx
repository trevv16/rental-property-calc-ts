import { formatNumberAsCurrency } from "../../utils/helpers";

export default function ReviewOwnership(props: any) {
  return (
    <div>
      <div className="ownership">
        <h3 className="m-2">Ownership</h3>
        <h5>{`Annual Property Taxes: $${formatNumberAsCurrency(
          props.ownership.propertyTaxes
        )}`}</h5>
        <h5>{`Annual Property Insurance: $${formatNumberAsCurrency(
          props.ownership.propertyInsurance
        )}`}</h5>
        <h5>{`Maintenace: ${props.ownership.maintenancePercent}%`}</h5>
        <h5>{`Vacancy: ${props.ownership.vacancyPercent}%`}</h5>
        <h5>{`CapEx: ${props.ownership.capexPercent}%`}</h5>
        <h5>{`Management: ${props.ownership.managementPercent}%`}</h5>
      </div>
    </div>
  );
}
