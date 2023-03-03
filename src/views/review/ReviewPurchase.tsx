import { formatNumberAsCurrency } from "../../utils/helpers";

export default function ReviewPurchase(props: any) {
  // ReviewPurchase
  const cleanPurchasePrice = !isNaN(props.purchase.purchasePrice)
    ? formatNumberAsCurrency(props.purchase.purchasePrice)
    : formatNumberAsCurrency(0);

  const cleanClosingCost = !isNaN(props.purchase.closingCost)
    ? formatNumberAsCurrency(props.purchase.closingCost)
    : formatNumberAsCurrency(0);

  const cleanRehabCost = !isNaN(props.purchase.rehabCost)
    ? formatNumberAsCurrency(props.purchase.rehabCost)
    : formatNumberAsCurrency(0);

  const cleanValueGrowth = !isNaN(props.purchase.propertyValueGrowth)
    ? formatNumberAsCurrency(props.purchase.propertyValueGrowth)
    : formatNumberAsCurrency(0);

  return (
    <div>
      <div className="prose sm:prose-xl">
        <div className="purchase">
          <h3 className="m-2">Purchase</h3>
          <h5>{`Purchase Price: $${cleanPurchasePrice}`}</h5>
          <h5>{`Closing Costs: $${cleanClosingCost}`}</h5>
          <h5>{`Rehab Costs: $${cleanRehabCost}`}</h5>
          <h5>{`Property Value Growth: ${cleanValueGrowth}%`}</h5>
        </div>
      </div>
    </div>
  );
}
