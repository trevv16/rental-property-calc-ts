import {
  calculateMortgage,
  totalMortgageDue,
  totalMortgagePaid,
  totalBalance,
  totalEquity,
  compoundedPropertyValue,
  getTermBreakpoints,
  getValuesAtBreakpoint,
} from "../utils/calc";
import { LoanInput, PurchaseInput } from "../utils/types";

type ScheduleSummaryProps = {
  purchase: PurchaseInput;
  loan: LoanInput;
};

export function useScheduleSummary({ loan, purchase }: ScheduleSummaryProps) {
  const mortgage = calculateMortgage(loan);
  const loanTerm = loan?.loanTerm;

  // Ammortization Functions
  const amortizeLoan = (
    currentPrincipal: number,
    monthlyInterestRate: number,
    payment: number
  ): any => {
    const interestPayment: number = currentPrincipal * monthlyInterestRate;
    const principalPayment: number = payment - interestPayment;
    const updatedPrincipal: number = currentPrincipal - principalPayment;

    return {
      updatedPrincipal,
      principalPayment,
      interestPayment,
    };
  };

  const getAmortizationSchedule = (
    principal: number,
    interestRate: number,
    mortgagePayment: number,
    years: number
  ): Object[] => {
    const monthlyInterestRate: number = interestRate / 1200;
    const numOfPayments: number = years * 12;
    let schedule = [];

    const { updatedPrincipal, principalPayment, interestPayment } =
      amortizeLoan(principal, monthlyInterestRate, mortgagePayment);
    const initalMonth: number = 1 / 12;
    const mortgageDue: number = totalMortgageDue(mortgage, loan);
    const mortgagePaid: number = totalMortgagePaid(initalMonth, mortgage);
    const balance: number = totalBalance(mortgageDue, mortgagePaid);
    const propertyValue: number = purchase.purchasePrice;
    const equity: number = totalEquity(propertyValue, balance);

    schedule.push({
      month: 0,
      propertyValue,
      equity,
      balance,
      updatedPrincipal,
      principalPayment,
      interestPayment,
    });

    for (let i = 1; i < numOfPayments; i++) {
      const previous = schedule[i - 1];
      let elapsedYears = i / 12;
      const { updatedPrincipal, principalPayment, interestPayment } =
        amortizeLoan(
          previous?.updatedPrincipal,
          monthlyInterestRate,
          mortgagePayment
        );
      const currentMortgagePaid: number = totalMortgagePaid(
        elapsedYears,
        mortgage
      );
      const currentBalance: number = totalBalance(
        mortgageDue,
        currentMortgagePaid
      );
      const currentPropertyValue: number = compoundedPropertyValue(
        elapsedYears,
        purchase
      );
      const currentEquity: number = totalEquity(
        currentPropertyValue,
        currentBalance
      );

      schedule.push({
        month: i,
        propertyValue: currentPropertyValue,
        equity: currentEquity,
        balance: currentBalance,
        updatedPrincipal,
        principalPayment,
        interestPayment,
      });
    }
    return schedule;
  };

  if (loanTerm > 0 && loanTerm !== undefined) {
    const breakpoints: number[] = getTermBreakpoints(loanTerm);

    const loanSchedule: Object[] = getAmortizationSchedule(
      loan.loanAmount,
      loan.interestRate,
      mortgage,
      loan.loanTerm
    );

    const scheduleSummaryVal: Object[] = getValuesAtBreakpoint(
      loanSchedule,
      breakpoints
    );

    return scheduleSummaryVal;
  } else {
    return [];
  }
}
