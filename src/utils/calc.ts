export const getAnnualFromMonthly = (value: number): number => {
	return value * 12.0;
};

export const getMonthlyFromAnnual = (value: number): number => {
	return value / 12.0;
};

export const percentOfRentalIncome = (rentalIncome: number, percentage: number): number => {
	return rentalIncome * percentage;
};

export const mortgagePaymentCost = (principal: number, rate: number, years: number): number => {
	const monthlyRate = rate / 1200;
	const months = years * 12;

	return (
		(principal * (monthlyRate * (1 + monthlyRate) ** months)) /
		((1 + monthlyRate) ** months - 1)
	);
};

export const sumElements = (array: number[]): number => {
	const sum = array.reduce((total, current) => {
		return total + current;
	}, 0);

	return sum;
};

export const annualizedReturn = (initialValue: number, finalValue: number, years: number): number => {
	const primary = finalValue / (initialValue * 1.0);
	const secondary = primary ** (1 / (years * 1.0));

	return (secondary - 1) * 100;
};

export const getTermBreakpoints = (term: number): number[] => {
	const mainPoints = [0, 1, 2, 3, 4, 5, 10, 15, 20, 30];

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

export const getCompoundValue = (principal: number, rate: number, years: number): number => {
	const primary = 1 + rate / 12;
	const secondary = primary ** (12 * years);

	return principal * (secondary * 1.0);
};
