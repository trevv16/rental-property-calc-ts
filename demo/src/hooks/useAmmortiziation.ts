import { useMemo } from "react";
import { Mortgage } from "../utils/mortgage";
import { Loan, Purchase } from "../lib/deal";

export const useAmmortization = (loan: Loan, purchase: Purchase) => {
  const mortgage = useMemo(
    () =>
      new Mortgage(
        purchase.purchasePrice,
        loan.loanAmount,
        loan.loanTerm,
        loan.interestRate
      ),
    [purchase.purchasePrice, loan.loanAmount, loan.loanTerm, loan.interestRate]
  );

  return mortgage.ammortizeMortgage().map((point) => ({
    currentMonth: point.currentMonth,
    interestPaid: parseFloat(point.interestPaid.toFixed(2)),
    interestPayment: parseFloat(point.interestPayment.toFixed(2)),
    mortgagePayment: parseFloat(point.mortgagePayment.toFixed(2)),
    outstandingLoanBalance: parseFloat(point.outstandingLoanBalance.toFixed(2)),
    principalPaid: parseFloat(point.principalPaid.toFixed(2)),
    principalPayment: parseFloat(point.principalPayment.toFixed(2)),
  }));
};
