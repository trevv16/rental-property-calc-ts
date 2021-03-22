type purchaseI = {
	complete: boolean,
	purchasePrice: number,
	closingCost: number,
	rehabCost: number,
	propertyValueGrowth: number,
};
type loanI = {
	complete: boolean,
	isCashPurchase: boolean,
	loanAmount: number,
	interestRate: number,
	pointsCharged: number,
	loanTerm: number,
};
type incomeI = {
	complete: boolean,
	grossMonthlyRentalIncome: number,
	annualIncomeGrowth: number,
	otherMonthlyRentalIncome: number,
};
type utilityI = {
	complete: boolean,
	electricityExpense: number,
	gasExpense: number,
	waterSewerExpense: number,
	hoaExpense: number,
	garbageExpense: number,
	otherExpense: number,
	annualExpenseGrowth: number,
	futureSalePercent: number,
};

/** Takes an annual price and converts to a monthly price
 * 
 * @param {number} value annual price of subject
 * @returns {number} monthly price of subject
 */
export const getAnnualFromMonthly = (value: number): number => {
	const input: number = value * 12.0;
	
	return Math.round(input*100)/100;
};

/** Takes a monthly price and converts to an annual price
 * 
 * @param {number} value monthly price of subject
 * @returns {number} annual price of subject
 */
export const getMonthlyFromAnnual = (value: number): number => {
	const input: number = value / 12.0;
	
	return Math.round(input*100)/100;
};

/** Returns a percentage of rental income
 * 
 * @param {number} rentalIncome rental income value
 * @param {number} percentage percentage value
 * @returns {number} percentage of rental income
 */
export const percentOfRentalIncome = (rentalIncome: number, percentage: number): number => {
	const value: number = rentalIncome * (percentage / 100);
	
	return Math.round(value * 100) / 100;
};

/** Calculates the monthly mortgage cost of a loan
 * 
 * @param {number} principal principal cost of the loan
 * @param {number} rate interest rate of the loan
 * @param {number} years term in years of the loan
 * @returns returns monthly mortgage payment cost
 */
export const mortgagePaymentCost = (principal: number, rate: number, years: number): number => {
	const monthlyRate: number = rate / 1200;
	const months: number = years * 12;

	return (
		(principal * (monthlyRate * (1 + monthlyRate) ** months)) /
		((1 + monthlyRate) ** months - 1)
	);
};

/** Calculates the annualized return of an investment
 * 
 * @param {number} initialValue inital value of the investment
 * @param {number} finalValue final value of the investment
 * @param {number} years number of years invested
 * @returns {number} annualized return value as percentage
 */
export const annualizedReturn = (initialValue: number, finalValue: number, years: number): number => {
	const primary: number = finalValue / (initialValue * 1.0);
	const secondary: number = primary ** (1 / (years * 1.0));
	const final: number = (secondary - 1) * 100;

	return Math.round(final * 100) / 100;
};

/** Takes a default array of year breakpoints for a 30 year loan
 * Formats array to have the term parameter as the final value
 * Array represents points in duration of loan, 
 * used to create summary of loan values
 * 
 * @param {number} term term length of loan in years
 * @returns {number[]} array of breakpoint years
 */
export const getTermBreakpoints = (term: number): number[] => {
	const mainPoints: number[] = [0, 1, 2, 3, 4, 5, 10, 15, 20, 30];

	if (isNaN(term)) {
		return [];
	}

	let breakpoints = mainPoints.filter((point) => {
		return point <= term;
	});

	if (!breakpoints.includes(term)) {
		breakpoints.push(term);
	}

	return breakpoints;
};

/**
 * 
 * @param {number} principal inital value
 * @param {number} rate compounding rate
 * @param {number} years number of years compounded
 * @returns {number} compounded value
 */
export const getCompoundValue = (principal: number, rate: number, years: number): number => {
	const rate_frequency: number = (rate / 100);
	const primary: number = 1 + rate_frequency;
	const secondary: number = primary ** years;
	const final: number = principal * (secondary * 1.0);

	return Math.round(final * 100) / 100;
};


// ------------------------CALCULATOR FUNCTIONS----------------------------------------

export const totalCost = (purchase: purchaseI): number => {
	return (
		purchase.purchasePrice +
		purchase.closingCost +
		purchase.rehabCost
	);
};

export const isCashPurchase = (loan: loanI): string => {
	return loan.isCashPurchase ? "Yes" : "No";
};

// const downPaymentAmount = (): number => {
// 	return totalCost() - loan.loanAmount;
// };

// const downPaymentPercentage = () => {
// 	return downPaymentAmount() / (totalCost() * 1.0);
// };

export const totalMonthlyIncome = (income: incomeI): number => {
	return (income.grossMonthlyRentalIncome + income.otherMonthlyRentalIncome);
};

// const compoundedAnnualIncome = (): number => {
// 	const annualIncome: number = totalMonthlyIncome() * 12;

// 	return getCompoundValue(annualIncome, income.annualIncomeGrowth, 1);
// };

// const annualOwnershipCost = (): number => {
// 	return getAnnualFromMonthly(monthlyOwnershipCost());
// };

// const annualUtilitiesCost = (): number => {
// 	return getAnnualFromMonthly(monthlyUtilitiesCost());
// };

export const totalMonthlyExpense = (ownershipCost: number, utiltityCost: number, mortgage: number): number => {
	return (ownershipCost + utiltityCost + mortgage);
};

// const compoundedAnnualExpense = (years): number => {
// 	const annualExpense: number = totalMonthlyExpense() * 12;

// 	return getCompoundValue(
// 		annualExpense,
// 		utility.annualExpenseGrowth,
// 		years
// 	);
// };

export const monthlyCashFlow = (monthlyIncome: number, monthlyExpense: number): number => {
	return (
		monthlyIncome - monthlyExpense
	);
};

export const variableExpense = (utility: utilityI): number => {
	return (
		utility.electricityExpense +
		utility.gasExpense +
		utility.waterSewerExpense +
		utility.hoaExpense +
		utility.garbageExpense +
		utility.otherExpense
	);
};

export const fixedExpense = (maintenanceCost: number, vacancyCost: number, capexCost: number, managementCost: number): number => {
	return (maintenanceCost + vacancyCost + capexCost + managementCost);
};

export const calculateAnnualNOI = (monthlyIncome: number, monthlyExpense: number): number => {
	const month = monthlyIncome - monthlyExpense;

	return month * 12;
};

export const calculateCocROI = (annualNOI: number, totalCost: number): number => {
	return (annualNOI / totalCost) * 100.0;
};

export const calculateMortgage = (loan: loanI): number => {
	const principal: number = loan.loanAmount;
	const monthlyRate: number = loan.interestRate / 1200;
	const months: number = loan.loanTerm * 12;

	return (
		(principal * (monthlyRate * (1 + monthlyRate) ** months)) /
		((1 + monthlyRate) ** months - 1)
	);
};

export const proFormaCap = (annualNOI: number, totalCost: number): number => {
	return (annualNOI / totalCost) * 100.0;
};

export const purchaseCap = (annualNOI: number, purchase: purchaseI): number => {
	return (annualNOI / purchase.purchasePrice) * 100.0;
};

export const halfPercentMonthlyExpense = (monthlyIncome: number): number => {
	return monthlyIncome * 0.5;
};

export const halfPercentRuleCashFlow = (monthlyIncome: number, mortgageExpense: number): number => {
	return (monthlyIncome - ((monthlyIncome * 0.5) + mortgageExpense));
};