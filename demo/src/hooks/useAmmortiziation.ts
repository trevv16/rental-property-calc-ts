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

  return mortgage.ammortizeMortgage();
};
