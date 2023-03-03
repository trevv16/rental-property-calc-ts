import { useState } from "react";
import {
  InfoInput,
  PurchaseInput,
  LoanInput,
  IncomeInput,
  OwnershipInput,
  UtilityInput,
} from "../utils/types";

export default function useForm() {
  const [info, setInfo] = useState<InfoInput>({
    complete: false,
    name: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [purchase, setPurchase] = useState<PurchaseInput>({
    complete: false,
    purchasePrice: 0.0,
    closingCost: 0.0,
    rehabCost: 0.0,
    propertyValueGrowth: 0.0,
  });
  const [loan, setLoan] = useState<LoanInput>({
    complete: false,
    isCashPurchase: false,
    loanAmount: 0.0,
    interestRate: 0.0,
    pointsCharged: 0.0,
    loanTerm: 0.0,
  });
  const [income, setIncome] = useState<IncomeInput>({
    complete: false,
    grossMonthlyRentalIncome: 0.0,
    annualIncomeGrowth: 0.0,
    otherMonthlyRentalIncome: 0.0,
  });
  const [ownership, setOwnership] = useState<OwnershipInput>({
    complete: false,
    propertyTaxes: 0.0,
    propertyInsurance: 0.0,
    maintenancePercent: 0.0,
    vacancyPercent: 0.0,
    capexPercent: 0.0,
    managementPercent: 0.0,
  });
  const [utility, setUtility] = useState<UtilityInput>({
    complete: false,
    electricityExpense: 0.0,
    gasExpense: 0.0,
    waterSewerExpense: 0.0,
    hoaExpense: 0.0,
    garbageExpense: 0.0,
    otherExpense: 0.0,
    annualExpenseGrowth: 0.0,
    futureSalePercent: 0.0,
  });
  const [inReview, setInReview] = useState<boolean>(true);

  const isComplete =
    purchase.complete &&
    loan.complete &&
    income.complete &&
    ownership.complete &&
    utility.complete;

  return {
    isComplete,
    info,
    setInfo,
    purchase,
    setPurchase,
    loan,
    setLoan,
    income,
    setIncome,
    ownership,
    setOwnership,
    utility,
    setUtility,
    inReview,
    setInReview,
  };
}
