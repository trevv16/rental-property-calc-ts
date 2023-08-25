import { formatNumberAsCurrency } from "../../utils/helpers";

export default function ReviewLoan(props: any) {
  // ReviewLoan
  const cleanLoanAmount = !isNaN(props.loan.loanAmount)
    ? formatNumberAsCurrency(props.loan.loanAmount)
    : formatNumberAsCurrency(0);

  const cleanInterestRate = !isNaN(props.loan.interestRate)
    ? formatNumberAsCurrency(props.loan.interestRate)
    : formatNumberAsCurrency(0);

  const cleanPointsCharged = !isNaN(props.loan.pmi)
    ? formatNumberAsCurrency(props.loan.pmi)
    : formatNumberAsCurrency(0);

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
