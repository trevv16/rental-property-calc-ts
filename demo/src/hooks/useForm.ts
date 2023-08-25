import { useState } from "react";
import {
  DEFAULT_INCOME,
  DEFAULT_INFO,
  DEFAULT_LOAN,
  DEFAULT_OWNERSHIP,
  DEFAULT_PURCHASE,
  DEFAULT_UTILITY,
} from "../utils/constants";
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
    nickname: "",
    address: "",
    city: "",
    state: "",
    zip: "",
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
    pmi: 0.0,
    loanTerm: 0.0,
  });
  const [income, setIncome] = useState<IncomeInput>({
    complete: false,
    grossMonthlyRentalIncome: 0.0,
    grossMonthlyOtherIncome: 0.0,
    annualIncomeGrowthPercent: 0.0,
  });
  const [ownership, setOwnership] = useState<OwnershipInput>({
    complete: false,
    annualPropertyTaxExpense: 0.0,
    annualPropertyInsuranceExpense: 0.0,
    maintenancePercentage: 0.0,
    vacancyPercentage: 0.0,
    capexPercentage: 0.0,
    managementPercentage: 0.0,
  });
  const [utility, setUtility] = useState<UtilityInput>({
    complete: false,
    monthlyElectricityExpense: 0.0,
    monthlyGasExpense: 0.0,
    monthlyWaterAndSewerExpense: 0.0,
    hoaExpense: 0.0,
    monthlyGarbageExpense: 0.0,
    monthlyOtherExpense: 0.0,
    annualExpenseGrowthPercent: 0.0,
    futureSalePercent: 0.0,
  });
  const [inReview, setInReview] = useState<boolean>(true);

  const isComplete =
    purchase.complete &&
    loan.complete &&
    income.complete &&
    ownership.complete &&
    utility.complete;

  const populateForm = () => {
    setInfo(DEFAULT_INFO);
    setPurchase(DEFAULT_PURCHASE);
    setLoan(DEFAULT_LOAN);
    setIncome(DEFAULT_INCOME);
    setOwnership(DEFAULT_OWNERSHIP);
    setUtility(DEFAULT_UTILITY);
    setInReview(false);
  };

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
    populateForm,
  };
}
