import {
  annualizedReturn,
  getCapRate,
  halfPercentRuleCashFlow,
} from "../utils/formulas";
import { Mortgage } from "../mortgage";
import {
  BreakdownItem,
  IDeal,
  Income,
  Loan,
  OwnersExpense,
  Property,
  Purchase,
  TimeUnits,
  UtilityExpense,
} from "./types";

export class Deal implements IDeal {
  property: Property;
  purchase: Purchase;
  loan: Loan;
  mortgage: Mortgage;
  income: Income;
  ownersExpense: OwnersExpense;
  utilityExpense: UtilityExpense;

  constructor(
    property: Property,
    purchase: Purchase,
    loan: Loan,
    income: Income,
    ownersExpense: OwnersExpense,
    utilityExpense: UtilityExpense
  ) {
    this.property = property;
    this.purchase = purchase;
    this.loan = loan;
    this.income = income;
    this.ownersExpense = ownersExpense;
    this.utilityExpense = utilityExpense;
    this.mortgage = new Mortgage(
      purchase.purchasePrice,
      loan.loanAmount,
      loan.loanTerm,
      loan.interestRate
    );
  }

  getTotalCost(): number {
    return (
      this.purchase.purchasePrice +
      this.purchase.closingCost +
      this.purchase.rehabCost
    );
  }

  getNOI(units: TimeUnits): number {
    return this.getIncome(units) - this.getExpenses(units);
  }

  getAnnualCashOnCashROI(annualNOI: number, totalCost: number) {
    return (annualNOI / totalCost) * 100.0;
  }

  getAnnualProFormaCap(): number {
    return getCapRate(
      this.getNOI("annual"),
      this.purchase?.afterRepairValue || this.purchase.purchasePrice
    );
  }

  getAnnualPurchaseCap(): number {
    return getCapRate(this.getNOI("annual"), this.purchase.purchasePrice);
  }

  getRentalIncome(units: TimeUnits = "annual") {
    if (units === "annual") {
      return this.income.grossMonthlyRentalIncome * 12;
    } else {
      return this.income.grossMonthlyRentalIncome;
    }
  }

  getOtherIncome(units: TimeUnits = "annual") {
    if (units === "annual") {
      return this.income.grossMonthlyOtherIncome * 12;
    } else {
      return this.income.grossMonthlyOtherIncome;
    }
  }

  getIncome(units: TimeUnits = "annual"): number {
    return this.getRentalIncome(units) + this.getOtherIncome(units);
  }

  getPropertyTaxExpense(units: TimeUnits) {
    if (units === "annual") {
      return this.ownersExpense.annualPropertyTaxExpense;
    } else {
      return this.ownersExpense.annualPropertyTaxExpense / 12;
    }
  }

  getPropertyInsuranceExpense(units: TimeUnits) {
    if (units === "annual") {
      return this.ownersExpense.annualPropertyInsuranceExpense;
    } else {
      return this.ownersExpense.annualPropertyInsuranceExpense / 12;
    }
  }

  getHOAExpense(units: TimeUnits) {
    if (units === "monthly") {
      return this.ownersExpense.monthlyHOAExpense;
    } else {
      return this.ownersExpense.monthlyHOAExpense * 12;
    }
  }

  getMaintenanceExpense(units: TimeUnits) {
    return (
      (this.ownersExpense.maintenancePercentage / 100) * this.getIncome(units)
    );
  }

  getVacanyExpense(units: TimeUnits) {
    return (this.ownersExpense.vacancyPercentage / 100) * this.getIncome(units);
  }

  getCapexExpense(units: TimeUnits) {
    return (this.ownersExpense.capexPercentage / 100) * this.getIncome(units);
  }

  getManagementExpense(units: TimeUnits) {
    return (
      (this.ownersExpense.managementPercentage / 100) * this.getIncome(units)
    );
  }

  getOwnersExpense(units: TimeUnits) {
    return (
      this.getPropertyTaxExpense(units) +
      this.getPropertyInsuranceExpense(units) +
      this.getMaintenanceExpense(units) +
      this.getVacanyExpense(units) +
      this.getCapexExpense(units) +
      this.getManagementExpense(units)
    );
  }

  getElectricityExpense(units: TimeUnits) {
    if (units === "monthly") {
      return this.utilityExpense.monthlyElectricityExpense;
    } else {
      return this.utilityExpense.monthlyElectricityExpense * 12;
    }
  }

  getGasExpense(units: TimeUnits) {
    if (units === "monthly") {
      return this.utilityExpense.monthlyGasExpense;
    } else {
      return this.utilityExpense.monthlyGasExpense * 12;
    }
  }

  getWaterSewerExpense(units: TimeUnits) {
    if (units === "monthly") {
      return this.utilityExpense.monthlyWaterAndSewerExpense;
    } else {
      return this.utilityExpense.monthlyWaterAndSewerExpense * 12;
    }
  }

  getGarbageExpense(units: TimeUnits) {
    if (units === "monthly") {
      return this.utilityExpense.monthlyGarbageExpense;
    } else {
      return this.utilityExpense.monthlyGarbageExpense * 12;
    }
  }

  getOtherExpenses(units: TimeUnits) {
    if (units === "monthly") {
      return this.utilityExpense.monthlyOtherExpense;
    } else {
      return this.utilityExpense.monthlyOtherExpense * 12;
    }
  }

  getUtilityExpense(units: TimeUnits) {
    return (
      this.getElectricityExpense(units) +
      this.getGasExpense(units) +
      this.getWaterSewerExpense(units) +
      this.getGarbageExpense(units) +
      this.getOtherExpenses(units)
    );
  }

  getMortgagePayment(units: TimeUnits = "annual") {
    if (units === "annual") {
      return this.mortgage.getMonthlyMortgagePayment() * 12;
    } else {
      return this.mortgage.getMonthlyMortgagePayment();
    }
  }

  getExpenses(units: TimeUnits = "annual"): number {
    return (
      this.getMortgagePayment(units) +
      this.getOwnersExpense(units) +
      this.getUtilityExpense(units)
    );
  }

  getCashFlow(units: TimeUnits = "annual") {
    return this.getIncome(units) - this.getExpenses(units);
  }

  getMonthlyHalfPercentCashFlow(): number {
    return halfPercentRuleCashFlow(
      this.getIncome("monthly"),
      this.getMortgagePayment("monthly")
    );
  }

  getFiveYearAnnualizedReturn() {
    return annualizedReturn(this.getTotalCost(), this.getTotalCost() * 2, 5);
  }

  getIncomeBreakdown(units: TimeUnits) {
    const income: BreakdownItem[] = [
      {
        name: "Rental Income",
        amount: this.getRentalIncome(units),
      },
    ];

    if (this.income.grossMonthlyOtherIncome > 0) {
      income.push({
        name: "Other Income",
        amount: this.getOtherIncome(units),
      });
    }

    return income;
  }

  getFixedExpenseBreakdown(units: TimeUnits) {
    let fixedExpenses: BreakdownItem[] = [
      {
        name: "Mortgage",
        amount: this.getMortgagePayment(units),
      },
      {
        name: "Property Tax",
        amount: this.getPropertyTaxExpense(units),
      },
      {
        name: "Property Insurance",
        amount: this.getPropertyInsuranceExpense(units),
      },
      {
        name: "HOA",
        amount: this.ownersExpense.monthlyHOAExpense,
      },
    ];

    if (this.ownersExpense.maintenancePercentage > 0) {
      fixedExpenses.push({
        name: "Maintenance",
        amount: this.getMaintenanceExpense(units),
      });
    }

    if (this.ownersExpense.capexPercentage > 0) {
      fixedExpenses.push({
        name: "Capex",
        amount: this.getCapexExpense(units),
      });
    }

    if (this.ownersExpense.vacancyPercentage > 0) {
      fixedExpenses.push({
        name: "Vacancy",
        amount: this.getVacanyExpense(units),
      });
    }

    if (this.ownersExpense.managementPercentage > 0) {
      fixedExpenses.push({
        name: "Management",
        amount: this.getManagementExpense(units),
      });
    }

    return fixedExpenses;
  }

  getVariableExpenseBreakdown(units: TimeUnits) {
    let variableExpenses: BreakdownItem[] = [];

    if (this.utilityExpense.monthlyElectricityExpense > 0) {
      variableExpenses.push({
        name: "Electricity",
        amount: this.getElectricityExpense(units),
      });
    }

    if (this.utilityExpense.monthlyGasExpense > 0) {
      variableExpenses.push({
        name: "Gas",
        amount: this.getGasExpense(units),
      });
    }

    if (this.utilityExpense.monthlyWaterAndSewerExpense > 0) {
      variableExpenses.push({
        name: "Water & Sewer",
        amount: this.getWaterSewerExpense(units),
      });
    }

    if (this.utilityExpense.monthlyGarbageExpense > 0) {
      variableExpenses.push({
        name: "Garbage",
        amount: this.getGarbageExpense(units),
      });
    }

    if (this.utilityExpense.monthlyOtherExpense > 0) {
      variableExpenses.push({
        name: "Other",
        amount: this.getOtherExpenses(units),
      });
    }

    return variableExpenses;
  }
}
