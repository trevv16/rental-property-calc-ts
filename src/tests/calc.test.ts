import {
    getAnnualFromMonthly,
	getMonthlyFromAnnual,
	percentOfRentalIncome,
	mortgagePaymentCost,
	annualizedReturn,
	getTermBreakpoints,
	getCompoundValue,
} from "../utils/calc";


describe('Annual to monthly conversion', () => {
    test('$120/year = $10/month', () => {
        expect(getMonthlyFromAnnual(120)).toBe(10);
    });

    test('$0/year = $0/month', () => {
        expect(getMonthlyFromAnnual(0)).toBe(0);
    });

    test('$12.12/year = $1.01/month', () => {
        expect(getMonthlyFromAnnual(12.12)).toBe(1.01);
    });
});

describe('Monthly to annual conversion', () => {
    test('$10/month = $10/year', () => {
        expect(getAnnualFromMonthly(10)).toBe(120);
    });

    test('$0/month = $0/year', () => {
        expect(getAnnualFromMonthly(0)).toBe(0);
    });

    test('$12.12/month = $1.01/year', () => {
        expect(getAnnualFromMonthly(1.01)).toBe(12.12);
    });
});

describe('Calculate percent of rental income', () => {
    test('$1000 income / 10% = $100', () => {
        expect(percentOfRentalIncome(1000, 10)).toBe(100);
    });

    test('$0 income / 10% = $0', () => {
        expect(percentOfRentalIncome(0, 10)).toBe(0);
    });

    test('$1000 income / 0% = $0', () => {
        expect(percentOfRentalIncome(1000, 0)).toBe(0);
    });

    test('$0 income / 0% = $0', () => {
        expect(percentOfRentalIncome(0, 0)).toBe(0);
    });

    test('$1000 income / 2.5% = $25', () => {
        expect(percentOfRentalIncome(1000, 2.5)).toBe(25);
    });

    test('$10000 income / 2.005% = $200.5', () => {
        expect(percentOfRentalIncome(10000, 2.005)).toBe(200.5);
    });
});

describe('Calculate mortgage payment, 3% interest, 15 years', () => {
    const interestRate = 3;
    const years = 15;

    test('$100,000 principal = $690 payment', () => {
        expect(mortgagePaymentCost(100000, interestRate, years)).toBeCloseTo(690.58, 1);
    });

    test('$10,000 principal = $69.1 payment', () => {
        expect(mortgagePaymentCost(10000, interestRate, years)).toBeCloseTo(69.1, 1);
    });

    test('$1,000 principal = $6.91 payment', () => {
        expect(mortgagePaymentCost(1000, interestRate, years)).toBeCloseTo(6.91, 1);
    });

    test('$0 principal = $0 payment', () => {
        expect(mortgagePaymentCost(0, interestRate, years)).toBeCloseTo(0, 1);
    });
});

describe('Calculate annualized return, over 5 years', () => {
    const years = 5;

    test('$1000 initial / $2000 = 14.87%', () => {
        expect(annualizedReturn(1000, 2000, years)).toBe(14.87);
    });

    test('$1000 initial / $20 = -54.27%', () => {
        expect(annualizedReturn(1000, 20, years)).toBe(-54.27);
    });

    test('$1 initial / $2000 = 357.31%', () => {
        expect(annualizedReturn(1, 2000, years)).toBe(357.31);
    });
});

describe('Get term breakpoints', () => {
    test('15 year term = [0, 1, 2, 3, 4, 5, 10, 15]', () => {
        expect(getTermBreakpoints(15)).toStrictEqual([0, 1, 2, 3, 4, 5, 10, 15]);
    });

    test('23 year term = [0, 1, 2, 3, 4, 5, 10, 15, 20, 23]', () => {
        expect(getTermBreakpoints(23)).toStrictEqual([0, 1, 2, 3, 4, 5, 10, 15, 20, 23]);
    });

    test('40 year term = [0, 1, 2, 3, 4, 5, 10, 15, 20, 30, 40]', () => {
        expect(getTermBreakpoints(40)).toStrictEqual([0, 1, 2, 3, 4, 5, 10, 15, 20, 30, 40]);
    });

    test('0 year term = [0]', () => {
        expect(getTermBreakpoints(0)).toStrictEqual([0]);
    });
});

describe('Calculate compound value, 8% rate, 5 years', () => {
    const interestRate = 8;
    const years = 5;

    test('$1,000 principal = $1,469.33 compounded', () => {
        expect(getCompoundValue(1000, interestRate, years)).toBeCloseTo(1469.33, 1);
    });

    test('$10,000 principal = $14,693.28 compounded', () => {
        expect(getCompoundValue(10000, interestRate, years)).toBeCloseTo(14693.28, 1);
    });

    test('$0 principal = $0 compounded', () => {
        expect(getCompoundValue(0, interestRate, years)).toBe(0);
    });
});
