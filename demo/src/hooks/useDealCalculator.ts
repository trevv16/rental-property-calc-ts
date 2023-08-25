import { Deal } from "../lib/deal";
import {
  Property,
  Income,
  Loan,
  OwnersExpense,
  Purchase,
  UtilityExpense,
} from "../lib/deal";

type CalculatorProps = {
  property: Property;
  purchase: Purchase;
  loan: Loan;
  ownership: OwnersExpense;
  income: Income;
  utility: UtilityExpense;
};

export default function useDealCalculator({
  property,
  purchase,
  loan,
  ownership,
  income,
  utility,
}: CalculatorProps) {
  return new Deal(property, purchase, loan, income, ownership, utility);
}
