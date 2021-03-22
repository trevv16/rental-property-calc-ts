import React from "react";

export default function ReviewLoan(props: any) {

	return (
        <div>
            <div className="loan">
                <h3 className="m-2">Loan</h3>
                <h5>{`Cash Purchase?: ${props.isCashPurchase}`}</h5>
                <h5>{`Loan Amount: $${props.cleanLoanAmount}`}</h5>
                <h5>{`Interest Rate: ${props.cleanInterestRate}%`}</h5>
                <h5>{`Points Charged: ${props.cleanPointsCharged}%`}</h5>
                <h5>{`Loan Term: ${props.cleanLoanTerm} Years`}</h5>
            </div>
        </div>
    );
}