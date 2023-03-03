import { useState } from "react";

import { Header, Divider, ReviewToggle } from "../components/index";

import {
  IncomeInput,
  InfoInput,
  LoanInput,
  OwnershipInput,
  PurchaseInput,
  UtilityInput,
} from "../utils/types";
import { Results } from "../components/Results";
import Review from "../components/Review";
import CalculatorForm from "../components/CalculatorForm";

export default function CalculatorPage() {
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

  const isComplete = (): boolean => {
    return (
      purchase.complete &&
      loan.complete &&
      income.complete &&
      ownership.complete &&
      utility.complete
    );
  };

  return (
    <div className="container mx-auto p-6">
      <div className="">
        <Header />
        {inReview && (
          <>
            <CalculatorForm
              setInfo={setInfo}
              setPurchase={setPurchase}
              setLoan={setLoan}
              setOwnership={setOwnership}
              setIncome={setIncome}
              setUtility={setUtility}
            />
          </>
        )}
      </div>
      <div className="container sm:prose-xl">
        <div>
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Review/Edit
            </h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <ReviewToggle inReview={inReview} setInReview={setInReview} />
          </div>
        </div>
        {inReview && (
          <Review
            info={info}
            purchase={purchase}
            loan={loan}
            ownership={ownership}
            income={income}
            utility={utility}
          />
        )}
      </div>
      <Divider />
      <div className="container sm:prose-xl">
        {isComplete() && (
          <Results
            info={info}
            purchase={purchase}
            loan={loan}
            ownership={ownership}
            income={income}
            utility={utility}
          />
        )}
      </div>
    </div>
  );
}
