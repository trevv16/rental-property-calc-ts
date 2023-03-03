import { useState } from "react";

import {
  Header,
  Divider,
  ReviewToggle,
  PropertyForm,
  PurchaseForm,
  LoanForm,
  IncomeForm,
  OwnershipForm,
  UtilityForm,
} from "../components/index";

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

  const getFormData = (e: any): any => {
    const invalid = ["length", "item", "namedItem"];
    let data: any = {};
    for (const field in e.target.elements) {
      let unNeeded: boolean = invalid.includes(field);

      if (isNaN(parseInt(field)) && !unNeeded) {
        data[field] = e.target.elements[field].value;
      }
    }

    return data;
  };
  const handleInfo = (e: any) => {
    e.preventDefault();
    // Form Handlers
    const { name, streetAddress, city, state, zipCode } = getFormData(e);

    setInfo({
      complete: true,
      name,
      streetAddress,
      city,
      state,
      zipCode,
    });
  };
  const handlePurchase = (e: any) => {
    e.preventDefault();
    // Form Handlers
    let { purchasePrice, closingCost, rehabCost, propertyValueGrowth } =
      getFormData(e);

    purchasePrice = parseFloat(purchasePrice);
    closingCost = parseFloat(closingCost);
    rehabCost = parseFloat(rehabCost);
    propertyValueGrowth = parseFloat(propertyValueGrowth);

    setPurchase({
      complete: true,
      purchasePrice,
      closingCost,
      rehabCost,
      propertyValueGrowth,
    });
  };
  const handleLoan = (e: any) => {
    e.preventDefault();
    // Form Handlers
    let { isCashPurchase, loanAmount, interestRate, pointsCharged, loanTerm } =
      getFormData(e);

    isCashPurchase = isCashPurchase === "on";
    loanAmount = parseFloat(loanAmount);
    interestRate = parseFloat(interestRate);
    pointsCharged = parseFloat(pointsCharged);
    loanTerm = parseFloat(loanTerm);

    setLoan({
      complete: true,
      isCashPurchase,
      loanAmount,
      interestRate,
      pointsCharged,
      loanTerm,
    });
  };
  const handleIncome = (e: any) => {
    e.preventDefault();
    // Form Handlers
    let {
      grossMonthlyRentalIncome,
      annualIncomeGrowth,
      otherMonthlyRentalIncome,
    } = getFormData(e);

    grossMonthlyRentalIncome = parseFloat(grossMonthlyRentalIncome);
    annualIncomeGrowth = parseFloat(annualIncomeGrowth);
    otherMonthlyRentalIncome = parseFloat(otherMonthlyRentalIncome);

    setIncome({
      complete: true,
      grossMonthlyRentalIncome,
      annualIncomeGrowth,
      otherMonthlyRentalIncome,
    });
  };
  const handleOwnership = (e: any) => {
    e.preventDefault();
    // Form Handlers
    let {
      propertyTaxes,
      propertyInsurance,
      maintenancePercent,
      vacancyPercent,
      capexPercent,
      managementPercent,
    } = getFormData(e);

    propertyTaxes = parseFloat(propertyTaxes);
    propertyInsurance = parseFloat(propertyInsurance);
    maintenancePercent = parseFloat(maintenancePercent);
    vacancyPercent = parseFloat(vacancyPercent);
    capexPercent = parseFloat(capexPercent);
    managementPercent = parseFloat(managementPercent);

    setOwnership({
      complete: true,
      propertyTaxes,
      propertyInsurance,
      maintenancePercent,
      vacancyPercent,
      capexPercent,
      managementPercent,
    });
  };
  const handleUtility = (e: any) => {
    e.preventDefault();
    // Form Handlers
    let {
      electricityExpense,
      gasExpense,
      waterSewerExpense,
      hoaExpense,
      garbageExpense,
      otherExpense,
      annualExpenseGrowth,
      futureSalePercent,
    } = getFormData(e);

    electricityExpense = parseFloat(electricityExpense);
    gasExpense = parseFloat(gasExpense);
    waterSewerExpense = parseFloat(waterSewerExpense);
    hoaExpense = parseFloat(hoaExpense);
    garbageExpense = parseFloat(garbageExpense);
    otherExpense = parseFloat(otherExpense);
    annualExpenseGrowth = parseFloat(annualExpenseGrowth);
    futureSalePercent = parseFloat(futureSalePercent);

    setUtility({
      complete: true,
      electricityExpense,
      gasExpense,
      waterSewerExpense,
      hoaExpense,
      garbageExpense,
      otherExpense,
      annualExpenseGrowth,
      futureSalePercent,
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="">
        <Header />
        {inReview && (
          <>
            <PropertyForm handleForm={(e: any) => handleInfo(e)} />
            <Divider />
            <PurchaseForm handleForm={(e: any) => handlePurchase(e)} />
            <Divider />
            <LoanForm handleForm={(e: any) => handleLoan(e)} />
            <Divider />
            <IncomeForm handleForm={(e: any) => handleIncome(e)} />
            <Divider />
            <OwnershipForm handleForm={(e: any) => handleOwnership(e)} />
            <Divider />
            <UtilityForm handleForm={(e: any) => handleUtility(e)} />
            <Divider />
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
