import React from "react";
import Humanize from "humanize-plus";

export default function ReviewLoan(props: any) {
	// ReviewLoan
	const cleanLoanAmount = !isNaN(props.loan.loanAmount) ? Humanize.formatNumber(
		props.loan.loanAmount, 2) : Humanize.formatNumber(0, 2);

	const cleanInterestRate = !isNaN(props.loan.interestRate) ? Humanize.formatNumber(
		props.loan.interestRate, 2) : Humanize.formatNumber(0, 2);

	const cleanPointsCharged = !isNaN(props.loan.pointsCharged) ? Humanize.formatNumber(
		props.loan.pointsCharged, 2) : Humanize.formatNumber(0, 2);

	const cleanLoanTerm = isNaN(props.loan.loanTerm) ? 0 : props.loan.loanTerm;

	const isCashPurchase = (): string => {
		return props.loan.isCashPurchase ? "Yes" : "No";
	};

	return (
        <div>
            <div className="loan">
                <h3 className="m-2">Loan</h3>
                <h5>{`Cash Purchase?: ${isCashPurchase()}`}</h5>
                <h5>{`Loan Amount: $${cleanLoanAmount}`}</h5>
                <h5>{`Interest Rate: ${cleanInterestRate}%`}</h5>
                <h5>{`Points Charged: ${cleanPointsCharged}%`}</h5>
                <h5>{`Loan Term: ${cleanLoanTerm} Years`}</h5>
            </div>
        </div>
    );
}