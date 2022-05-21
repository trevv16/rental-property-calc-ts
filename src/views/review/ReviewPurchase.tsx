import Humanize from "humanize-plus";

export default function ReviewPurchase(props: any) {
  // ReviewPurchase
  const cleanPurchasePrice = !isNaN(props.purchase.purchasePrice)
    ? Humanize.formatNumber(props.purchase.purchasePrice, 2)
    : Humanize.formatNumber(0, 2);

  const cleanClosingCost = !isNaN(props.purchase.closingCost)
    ? Humanize.formatNumber(props.purchase.closingCost, 2)
    : Humanize.formatNumber(0, 2);

  const cleanRehabCost = !isNaN(props.purchase.rehabCost)
    ? Humanize.formatNumber(props.purchase.rehabCost, 2)
    : Humanize.formatNumber(0, 2);

  const cleanValueGrowth = !isNaN(props.purchase.propertyValueGrowth)
    ? Humanize.formatNumber(props.purchase.propertyValueGrowth, 2)
    : Humanize.formatNumber(0, 2);

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
