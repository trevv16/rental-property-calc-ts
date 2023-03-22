import { useMemo } from "react";
import { Mortgage } from "../utils/mortgage";
import { LoanInput, PurchaseInput } from "../utils/types";

export const useMortgageAmmortization = (
  loan: LoanInput,
  purchase: PurchaseInput
) => {
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
