import Divider from "../calculator/Divider";
import IncomeForm from "../calculator/IncomeForm";
import LoanForm from "../calculator/LoanForm";
import OwnershipForm from "../calculator/OwnershipForm";
import PropertyForm from "../calculator/PropertyForm";
import PurchaseForm from "../calculator/PurchaseForm";
import UtilityForm from "../calculator/UtilityForm";

type CalculatorFormProps = {
  setInfo: Function;
  setPurchase: Function;
  setLoan: Function;
  setIncome: Function;
  setOwnership: Function;
  setUtility: Function;
};

export default function CalculatorForm({
  setInfo,
  setPurchase,
  setLoan,
  setIncome,
  setOwnership,
  setUtility,
}: CalculatorFormProps) {
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
  );
}
