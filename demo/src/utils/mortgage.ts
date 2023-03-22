export type MaybeNumber = number | null;

export type MortgageBreakdown = {
  mortgage: number;
  propertyTax: number;
  homeInsurance: number;
  hoa: number;
  pmi: number;
  otherCosts: number;
  total: number;
};

export type DynamicAmount = { value: number; type: "amount" | "percent" };

export type MortgageMonth = {
  currentMonth: number;
  mortgagePayment: number;
  principalPayment: number;
  interestPayment: number;
  principalPaid: number;
  interestPaid: number;
  outstandingLoanBalance: number;
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const toFixedNumber = (amount: number): string => {
  return formatter.format(amount);
};

export class Mortgage {
  homePrice: number;
  loanAmount: number;
  loanTerm: number;
  interestRate: number;
  propertyTax?: DynamicAmount;
  homeInsurance?: DynamicAmount;
  pmi?: DynamicAmount;
  hoa?: DynamicAmount;
  otherCosts?: DynamicAmount;
  schedule?: any[];

  constructor(
    _homePrice: number,
    _loanAmount: number,
    _loanTerm: number,
    _interestRate: number
  ) {
    this.homePrice = _homePrice;
    this.loanAmount = _loanAmount;
    this.loanTerm = _loanTerm;
    this.interestRate = _interestRate;
  }

  printMortgage() {
    const mortgageBreakdown = this.getMonthlyMortgageCost();
    console.log("Home Price:\t", toFixedNumber(this.homePrice));
    console.log("Down Payment:\t", toFixedNumber(this.getDownPayment()));
    console.log("Loan Amount:\t", toFixedNumber(this.loanAmount));
    console.log(
      "Total Payment:\t",
      toFixedNumber(this.getTotalPaymentAmount())
    );
    console.log("Total Interest:\t", toFixedNumber(this.getTotalInterest()));
    console.log(
      "Payoff Date:\t",
      this.getPayoffDate(new Date("2023-03-01")).toDateString()
    );
    console.log("Loan Term:\t", this.loanTerm);
    console.log("Interest Rate:\t", this.interestRate);
    console.log(
      "-------------------------------------------------------------"
    );
    console.log(
      "-------------------------------------------------------------"
    );
    console.log(
      "Monthly Payment:\t",
      toFixedNumber(this.getMonthlyMortgagePayment())
    );
    console.log(
      "Property Tax:\t\t",
      toFixedNumber(mortgageBreakdown.propertyTax)
    );
    console.log(
      "Home Insurance:\t\t",
      toFixedNumber(mortgageBreakdown.homeInsurance)
    );
    console.log("HOA:\t\t\t", toFixedNumber(mortgageBreakdown.hoa));
    console.log("PMI:\t\t\t", toFixedNumber(mortgageBreakdown.pmi));
    console.log(
      "Other Costs:\t\t",
      toFixedNumber(mortgageBreakdown.otherCosts)
    );
    console.log(
      "Total Monthly Cost:\t",
      toFixedNumber(mortgageBreakdown.total)
    );
  }

  ammortizeMortgage() {
    const loanTermInMonths = this.loanTerm * 12;

    let schedule: MortgageMonth[] = [];

    for (let i = 0; i < loanTermInMonths; i++) {
      const previousMonth = i > 0 ? schedule[i - 1] : null;
      const previousLoanBalance = previousMonth
        ? previousMonth.outstandingLoanBalance
        : this.loanAmount;
      const mortgagePayment = this.getMonthlyMortgagePayment();
      const principalPayment =
        mortgagePayment - previousLoanBalance * (this.interestRate / 1200);
      const interestPayment = mortgagePayment - principalPayment;
      const principalPaid = previousMonth
        ? previousMonth.principalPaid + principalPayment
        : principalPayment;
      const interestPaid = previousMonth
        ? previousMonth.interestPaid + interestPayment
        : interestPayment;
      const outstandingLoanBalance = previousLoanBalance - principalPayment;

      schedule.push({
        currentMonth: i + 1,
        mortgagePayment,
        principalPayment,
        interestPayment,
        principalPaid,
        interestPaid,
        outstandingLoanBalance,
      });
    }

    this.schedule = schedule;
    return schedule;
  }

  updateMortgage(mortgageKey: keyof Mortgage, value: any) {
    switch (mortgageKey) {
      case "homePrice":
        this.homePrice = value;
        break;

      case "loanAmount":
        this.loanAmount = value;
        break;

      case "loanTerm":
        this.loanTerm = value;
        break;

      case "propertyTax":
        this.propertyTax = value;
        break;

      case "homeInsurance":
        this.homeInsurance = value;
        break;

      case "pmi":
        this.pmi = value;
        break;

      case "hoa":
        this.hoa = value;
        break;

      case "otherCosts":
        this.otherCosts = value;
        break;

      default:
        break;
    }
  }

  getPayoffDate(startDate: Date): Date {
    const tempStartDate = startDate;
    const loanTermInMonths = this.loanTerm * 12;

    return new Date(
      tempStartDate.setMonth(tempStartDate.getMonth() + loanTermInMonths)
    );
  }

  getPercentageOfHomePrice(percentage: number): number {
    return this.homePrice * (percentage / 100);
  }

  getDownPayment(): number {
    return this.homePrice - this.loanAmount;
  }

  getPropertyTax(): MaybeNumber {
    if (!this.propertyTax) return null;

    if (this.propertyTax.type === "amount") {
      return this.propertyTax.value;
    } else {
      return this.getPercentageOfHomePrice(this.propertyTax.value);
    }
  }

  getHomeInsurance(): MaybeNumber {
    if (!this.homeInsurance) return null;

    if (this.homeInsurance.type === "amount") {
      return this.homeInsurance.value;
    } else {
      return this.getPercentageOfHomePrice(this.homeInsurance.value);
    }
  }

  getPMI(): MaybeNumber {
    if (!this.pmi) return null;

    if (this.pmi.type === "amount") {
      return this.pmi.value;
    } else {
      return this.getPercentageOfHomePrice(this.pmi.value);
    }
  }

  getHOA(): MaybeNumber {
    if (!this.hoa) return null;

    if (this.hoa.type === "amount") {
      return this.hoa.value;
    } else {
      return this.getPercentageOfHomePrice(this.hoa.value);
    }
  }

  getOtherCosts(): MaybeNumber {
    if (!this.otherCosts) return null;

    if (this.otherCosts.type === "amount") {
      return this.otherCosts.value;
    } else {
      return this.getPercentageOfHomePrice(this.otherCosts.value);
    }
  }

  getTotalPaymentAmount(): number {
    const loanTermInMonths = this.loanTerm * 12;
    return this.getMonthlyMortgagePayment() * loanTermInMonths;
  }

  getTotalInterest(): number {
    return this.getTotalPaymentAmount() - this.loanAmount;
  }

  getMonthlyMortgagePayment(): number {
    const loanAmount = this.loanAmount;
    const interestRate = this.interestRate / 100 / 12;
    const loanTermInMonths = this.loanTerm * 12;

    const numeratorExponents = Math.pow(1 + interestRate, loanTermInMonths);
    const numerator = loanAmount * (interestRate * numeratorExponents);
    const denominatorExponents = Math.pow(1 + interestRate, loanTermInMonths);
    const denominator = denominatorExponents - 1;
    return numerator / denominator;
  }

  getMonthlyMortgageCost(): MortgageBreakdown {
    const mortgage = this.getMonthlyMortgagePayment();
    let propertyTax = this.getPropertyTax();
    let homeInsurance = this.getHomeInsurance();
    let hoa = this.getHOA();
    let pmi = this.getPMI();
    let otherCosts = this.getOtherCosts();

    if (propertyTax) {
      propertyTax = propertyTax / 12;
    } else {
      propertyTax = 0;
    }

    if (homeInsurance) {
      homeInsurance = homeInsurance / 12;
    } else {
      homeInsurance = 0;
    }

    if (hoa) {
      hoa = hoa / 12;
    } else {
      hoa = 0;
    }

    if (pmi) {
      pmi = pmi / 12;
    } else {
      pmi = 0;
    }

    if (otherCosts) {
      otherCosts = otherCosts / 12;
    } else {
      otherCosts = 0;
    }

    return {
      mortgage,
      propertyTax,
      homeInsurance,
      hoa,
      pmi,
      otherCosts,
      total: mortgage + propertyTax + homeInsurance + hoa + pmi + otherCosts,
    };
  }
}
