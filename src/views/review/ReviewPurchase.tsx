import React from "react";

export default function ReviewPurchase(props: any) {

	return (
        <div>
            <div className="prose sm:prose-xl">
                <div className="purchase">
                    <h3 className="m-2">Purchase</h3>
                    <h5>{`Purchase Price: $${props.cleanPurchasePrice}`}</h5>
                    <h5>{`Closing Costs: $${props.cleanClosingCost}`}</h5>
                    <h5>{`Rehab Costs: $${props.cleanRehabCost}`}</h5>
                    <h5>{`Property Value Growth: ${props.cleanValueGrowth}%`}</h5>
                </div>
            </div>
        </div>
    );
}