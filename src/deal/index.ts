import { getCapRate, halfPercentRuleCashFlow } from "../utils/formulas";
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

  getNOI(units: TimeUnits): number {
    return this.getIncome(units) - this.getExpenses(units);
  }

  getAnnualCashOnCashROI(annualNOI: number, totalCost: number) {
    return (annualNOI / totalCost) * 100.0;
  }

  getAnnualProFormaCap(): number {
    return getCapRate(this.getNOI("annual"), this.purchase.afterRepairValue);
  }

  getAnnualPurchaseCap(): number {
    return getCapRate(this.getNOI("annual"), this.purchase.purchasePrice);
  }

  getIncome(units: TimeUnits): number {
    if (units === "annual") {
      return (
        this.income.grossMonthlyRentalIncome +
        this.income.grossMonthlyOtherIncome
      );
    } else {
      return (
        (this.income.grossMonthlyRentalIncome +
          this.income.grossMonthlyOtherIncome) *
        12
      );
    }
  }

  getPropertyTaxExpense(units: TimeUnits) {
    if (units === "annual") {
      return (
        this.ownersExpense.annualPropertyTaxPercent *
        this.purchase.purchasePrice
      );
    } else {
      return (
        (this.ownersExpense.annualPropertyTaxPercent *
          this.purchase.purchasePrice) /
        12
      );
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
    return this.ownersExpense.maintenancePercentage * this.getIncome(units);
  }

  getVacanyExpense(units: TimeUnits) {
    return this.ownersExpense.vacancyPercentage * this.getIncome(units);
  }

  getCapexExpense(units: TimeUnits) {
    return this.ownersExpense.capexPercentage * this.getIncome(units);
  }

  getManagementExpense(units: TimeUnits) {
    return this.ownersExpense.managementPercentage * this.getIncome(units);
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

  getExpenses(units: TimeUnits): number {
    return (
      this.mortgage.getMonthlyMortgagePayment() +
      this.getOwnersExpense(units) +
      this.getUtilityExpense(units)
    );
  }

  getMonthlyHalfPercentCashFlow(): number {
    return halfPercentRuleCashFlow(
      this.getIncome("monthly"),
      this.mortgage.getMonthlyMortgagePayment()
    );
  }

  getFiveYearAnnualizedReturn(
    initialValue: number,
    finalValue: number,
    years: number
  ) {
    const primary: number = finalValue / (initialValue * 1.0);
    const secondary: number = primary ** (1 / (years * 1.0));
    const final: number = (secondary - 1) * 100;

    return Math.round(final * 100) / 100;
  }

  getIncomeBreakdown(units: TimeUnits) {
    const income: BreakdownItem[] = [
      {
        name: "Rental Income",
        amount: this.income.grossMonthlyRentalIncome,
      },
    ];

    if (this.income.grossMonthlyOtherIncome > 0) {
      income.push({
        name: "Other Income",
        amount: this.income.grossMonthlyOtherIncome,
      });
    }

    return income;
  }

  getFixedExpenseBreakdown(units: TimeUnits) {
    return [
      {
        name: "Mortgage",
        amount: this.mortgage.getMonthlyMortgagePayment(),
      },
      {
        name: "Property Tax",
        amount: this.getPropertyTaxExpense(units),
      },
      {
        name: "Home Insurance",
        amount: this.getPropertyInsuranceExpense(units),
      },
      {
        name: "HOA",
        amount: this.ownersExpense.monthlyHOAExpense,
      },
      {
        name: "Maintenance",
        amount: this.getMaintenanceExpense(units),
      },
      {
        name: "Vacancy",
        amount: this.getVacanyExpense(units),
      },
      {
        name: "Capex",
        amount: this.getCapexExpense(units),
      },
    ] as BreakdownItem[];
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
        name: "Electricity",
        amount: this.getGasExpense(units),
      });
    }

    if (this.utilityExpense.monthlyWaterAndSewerExpense > 0) {
      variableExpenses.push({
        name: "Electricity",
        amount: this.getWaterSewerExpense(units),
      });
    }

    if (this.utilityExpense.monthlyGarbageExpense > 0) {
      variableExpenses.push({
        name: "Electricity",
        amount: this.getGarbageExpense(units),
      });
    }

    if (this.utilityExpense.monthlyOtherExpense > 0) {
      variableExpenses.push({
        name: "Electricity",
        amount: this.getOtherExpenses(units),
      });
    }

    return variableExpenses;
  }

  getCashFlowBreakdown(units: TimeUnits) {
    const income = this.getIncomeBreakdown(units);
    const fixed = this.getFixedExpenseBreakdown(units);
    const variable = this.getVariableExpenseBreakdown(units);

    return {
      income,
      fixed,
      variable,
    };
  }
}
