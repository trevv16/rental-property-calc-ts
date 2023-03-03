import { useState, useEffect } from "react";

import {
  getMonthlyFromAnnual,
  percentOfRentalIncome,
  annualizedReturn,
  getTermBreakpoints,
  totalCost,
  calculateCocROI,
  calculateAnnualNOI,
  calculateMortgage,
  proFormaCap,
  purchaseCap,
  halfPercentMonthlyExpense,
  halfPercentRuleCashFlow,
  totalMonthlyIncome,
  totalMonthlyExpense,
  fixedExpense,
  variableExpense,
  monthlyCashFlow,
  getValuesAtBreakpoint,
  totalBalance,
  totalEquity,
  totalMortgagePaid,
  totalMortgageDue,
  compoundedPropertyValue,
} from "../utils/calc";

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
  Graph,
  ROI,
  HalfPercentRule,
  MonthlyCashFlow,
  MonthlyExpenseBreakdown,
  PropertyHeader,
  AnnualizedAndMortgagePayment,
  ReviewInfo,
  ReviewPurchase,
  ReviewLoan,
  ReviewIncome,
  ReviewOwnership,
  ReviewUtility,
} from "./index";
import { formatNumberAsCurrency } from "../utils/helpers";

export default function CalculatorPage() {
  const [scheduleSummary, setScheduleSummary] = useState<any>([]);
  const [info, setInfo] = useState<infoI>({
    complete: false,
    name: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [purchase, setPurchase] = useState<purchaseI>({
    complete: false,
    purchasePrice: 0.0,
    closingCost: 0.0,
    rehabCost: 0.0,
    propertyValueGrowth: 0.0,
  });
  const [loan, setLoan] = useState<loanI>({
    complete: false,
    isCashPurchase: false,
    loanAmount: 0.0,
    interestRate: 0.0,
    pointsCharged: 0.0,
    loanTerm: 0.0,
  });
  const [income, setIncome] = useState<incomeI>({
    complete: false,
    grossMonthlyRentalIncome: 0.0,
    annualIncomeGrowth: 0.0,
    otherMonthlyRentalIncome: 0.0,
  });
  const [ownership, setOwnership] = useState<ownershipI>({
    complete: false,
    propertyTaxes: 0.0,
    propertyInsurance: 0.0,
    maintenancePercent: 0.0,
    vacancyPercent: 0.0,
    capexPercent: 0.0,
    managementPercent: 0.0,
  });
  const [utility, setUtility] = useState<utilityI>({
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

  useEffect(() => {
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

      setScheduleSummary(scheduleSummaryVal);
    }
  }, [loan, purchase]);

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

  const Results = () => {
    const totalCostVal = totalCost(purchase);
    const mortgageVal = calculateMortgage(loan);

    const monthlyIncomeVal = totalMonthlyIncome(income);
    const taxesVal = getMonthlyFromAnnual(ownership.propertyTaxes);
    const insuranceVal = getMonthlyFromAnnual(ownership.propertyInsurance);
    const vacancyVal = percentOfRentalIncome(
      monthlyIncomeVal,
      ownership.vacancyPercent
    );
    const maintenanceVal = percentOfRentalIncome(
      monthlyIncomeVal,
      ownership.maintenancePercent
    );
    const capexVal = percentOfRentalIncome(
      monthlyIncomeVal,
      ownership.capexPercent
    );
    const managementVal = percentOfRentalIncome(
      monthlyIncomeVal,
      ownership.managementPercent
    );

    const fixedExpenseVal = fixedExpense(
      maintenanceVal,
      vacancyVal,
      capexVal,
      managementVal
    );
    const variableExpenseVal = variableExpense(utility);

    // MonthlyCashFlow props
    const monthlyUtilityVal = variableExpenseVal;
    const monthlyOwnershipVal = taxesVal + insuranceVal + fixedExpenseVal;
    const monthlyExpenseVal = totalMonthlyExpense(
      monthlyOwnershipVal,
      monthlyUtilityVal,
      mortgageVal
    );
    const monthlyCashFlowVal = monthlyCashFlow(
      monthlyIncomeVal,
      monthlyExpenseVal
    );
    const cleanCashFlow = !isNaN(monthlyCashFlowVal)
      ? formatNumberAsCurrency(monthlyCashFlowVal)
      : 0;
    const cleanIncome = !isNaN(monthlyIncomeVal)
      ? formatNumberAsCurrency(monthlyIncomeVal)
      : 0;
    const cleanExpense = !isNaN(monthlyExpenseVal)
      ? formatNumberAsCurrency(monthlyExpenseVal)
      : 0;

    // AnnualizedAndMortgagePayment props
    const annualizedReturnValue = !isNaN(
      annualizedReturn(totalCostVal, totalCostVal * 2, 5)
    )
      ? annualizedReturn(totalCostVal, totalCostVal * 2, 5).toFixed(2)
      : 0;
    const mortgagePaymentValue = !isNaN(mortgageVal)
      ? mortgageVal.toFixed(2)
      : 0;

    const annualNOIVal = calculateAnnualNOI(
      monthlyIncomeVal,
      monthlyExpenseVal
    );
    const cocROIVal = calculateCocROI(annualNOIVal, totalCostVal);
    const proFormaCapVal = proFormaCap(annualNOIVal, totalCostVal);
    const purchaseCapVal = purchaseCap(annualNOIVal, purchase);
    const halfPercentExpenseVal = halfPercentMonthlyExpense(monthlyIncomeVal);
    const halfPercentCashFlowVal = halfPercentRuleCashFlow(
      monthlyIncomeVal,
      mortgageVal
    );

    return (
      <>
        {info.complete && (
          <>
            <PropertyHeader info={info} />
            <Divider />
            <MonthlyCashFlow
              cleanCashFlow={cleanCashFlow}
              cleanIncome={cleanIncome}
              cleanExpense={cleanExpense}
            />
            <AnnualizedAndMortgagePayment
              annualizedReturnValue={annualizedReturnValue}
              mortgagePaymentValue={mortgagePaymentValue}
            />

            <MonthlyExpenseBreakdown
              totalMonthlyExpense={monthlyExpenseVal}
              calculateMortgage={mortgageVal}
              propertyTaxes={taxesVal}
              propertyInsurance={insuranceVal}
              variableExpense={variableExpenseVal}
              fixedExpense={fixedExpenseVal}
              vacancyMonthlyCost={vacancyVal}
              maintenanceMonthlyCost={maintenanceVal}
              capexMonthlyCost={capexVal}
              managementMonthlyCost={managementVal}
              utility={utility}
            />
            <ROI
              calculateAnnualNOI={annualNOIVal}
              calculateCocROI={cocROIVal}
              proFormaCap={proFormaCapVal}
              purchaseCap={purchaseCapVal}
            />
            <HalfPercentRule
              totalMonthlyIncome={monthlyIncomeVal}
              halfPercentMonthlyExpense={halfPercentExpenseVal}
              calculateMortgage={mortgageVal}
              halfPercentRuleCashFlow={halfPercentCashFlowVal}
            />
            <Graph scheduleSummary={scheduleSummary} />
          </>
        )}
      </>
    );
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
          <>
            {info.complete && (
              <>
                <ReviewInfo info={info} />
                <Divider />
              </>
            )}

            {purchase.complete && (
              <>
                <ReviewPurchase purchase={purchase} />
                <Divider />
              </>
            )}

            {loan.complete && (
              <>
                <ReviewLoan loan={loan} />
                <Divider />
              </>
            )}

            {income.complete && (
              <>
                <ReviewIncome income={income} />
                <Divider />
              </>
            )}

            {ownership.complete && (
              <>
                <ReviewOwnership ownership={ownership} />
                <Divider />
              </>
            )}

            {utility.complete && <ReviewUtility utility={utility} />}
          </>
        )}
      </div>
      <Divider />
      <div className="container sm:prose-xl">{isComplete() && <Results />}</div>
    </div>
  );
}
