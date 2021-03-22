import React, { useState } from "react";
import Humanize from "humanize-plus";

import {
	getMonthlyFromAnnual,
	percentOfRentalIncome,
	mortgagePaymentCost,
	annualizedReturn,
	// getTermBreakpoints,
	// getCompoundValue
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
	UtilityForm
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
	ReviewUtility
} from "./index";

type infoI = {
	complete: boolean,
	name: string,
	streetAddress: string,
	city: string,
	state: string,
	zipCode: string,
};
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
type ownershipI = {
	complete: boolean,
	propertyTaxes: number,
	propertyInsurance: number,
	maintenancePercent: number,
	vacancyPercent: number,
	capexPercent: number,
	managementPercent: number,
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

export default function CalculatorPage() {
	const [info, setInfo] = useState<infoI>({
		complete: false,
		name: "",
		streetAddress: "",
		city: "",
		state: "",
		zipCode: ""
	});
	const [purchase, setPurchase] = useState<purchaseI>({
		complete: false,
		purchasePrice: 0.0,
		closingCost: 0.0,
		rehabCost: 0.0,
		propertyValueGrowth: 0.0
	});
	const [loan, setLoan] = useState<loanI>({
		complete: false,
		isCashPurchase: false,
		loanAmount: 0.0,
		interestRate: 0.0,
		pointsCharged: 0.0,
		loanTerm: 0.0
	});
	const [income, setIncome] = useState<incomeI>({
		complete: false,
		grossMonthlyRentalIncome: 0.0,
		annualIncomeGrowth: 0.0,
		otherMonthlyRentalIncome: 0.0
	});
	const [ownership, setOwnership] = useState<ownershipI>({
		complete: false,
		propertyTaxes: 0.0,
		propertyInsurance: 0.0,
		maintenancePercent: 0.0,
		vacancyPercent: 0.0,
		capexPercent: 0.0,
		managementPercent: 0.0
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

	// const [results, setResults] = useState<Object>({});
	// const [scheduleSummary, setScheduleSummary] = useState<any>([]);

	// useEffect(() => {
		// Ammortization Functions

		// const compoundedPropertyValue = (years: number): number => {
		// 	return getCompoundValue(
		// 		purchase.purchasePrice,
		// 		purchase.propertyValueGrowth,
		// 		years
		// 	);
		// };

		// const calculateMortgage = (): number => {
		// 	const mortgage = mortgagePaymentCost(
		// 		loan.loanAmount,
		// 		loan.interestRate,
		// 		loan.loanTerm
		// 	);

		// 	return mortgage;
		// };

		// const mortgagePaid = (elapsedYears: number): number => {
		// 	return elapsedYears * 12 * calculateMortgage();
		// };

		// const totalMortgageDue = (): number => {
		// 	return calculateMortgage() * (loan.loanTerm * 12);
		// };

		// const totalBalance = (elapsedYears: number): number => {
		// 	return totalMortgageDue() - mortgagePaid(elapsedYears);
		// };

		// const totalEquity = (homeValue: number, totalBalance: number): number => {
		// 	return homeValue - totalBalance;
		// };

		// const propertySaleValue = (propertyValue: number): number => {
		// 	const salePercent = utility.futureSalePercent / 100;

		// 	return propertyValue * (1 - salePercent);
		// };

		// const propertySaleProfit = (propertyValue: number): number => {
		// 	return propertySaleValue(propertyValue) - purchase.purchasePrice;
		// };

		// const propertyProfit = (propertyValue: number): number => {
		// 	return propertySaleProfit(propertyValue);
		// };

		// const amortizeLoan = (
		// 	currentPrincipal: number,
		// 	monthlyInterestRate: number,
		// 	payment: number
		// ): any => {
		// 	const interestPayment: number = currentPrincipal * monthlyInterestRate;
		// 	const principalPayment: number = payment - interestPayment;
		// 	const updatedPrincipal: number = currentPrincipal - principalPayment;

		// 	return {
		// 		updatedPrincipal,
		// 		principalPayment,
		// 		interestPayment,
		// 	};
		// };

		// const getAmortizationSchedule = (
		// 	principal: number,
		// 	interestRate: number,
		// 	mortgagePayment: number,
		// 	years: number
		// ): Object[] => {
		// 	const monthlyInterestRate: number = interestRate / 1200;
		// 	const numOfPayments: number = years * 12;
		// 	let schedule = [];

		// 	const {
		// 		updatedPrincipal,
		// 		principalPayment,
		// 		interestPayment,
		// 	} = amortizeLoan(principal, monthlyInterestRate, mortgagePayment);
		// 	const initalMonth: number = 1/12;
		// 	const balance: number = totalBalance(initalMonth);
		// 	const propertyValue: number = purchase.purchasePrice;
		// 	const equity: number = totalEquity(propertyValue, balance);

		// 	schedule.push({
		// 		month: 0,
		// 		propertyValue,
		// 		equity,
		// 		balance,
		// 		updatedPrincipal,
		// 		principalPayment,
		// 		interestPayment,
		// 	});

		// 	for (let i = 1; i < numOfPayments; i++) {
		// 		const previous = schedule[i - 1];
		// 		let elapsedYears = i / 12;
		// 		const {
		// 			updatedPrincipal,
		// 			principalPayment,
		// 			interestPayment,
		// 		} = amortizeLoan(
		// 			previous?.updatedPrincipal,
		// 			monthlyInterestRate,
		// 			mortgagePayment
		// 		);
		// 		const balance: number = totalBalance(elapsedYears);
		// 		const propertyValue: number = compoundedPropertyValue(elapsedYears);
		// 		const equity: number = totalEquity(propertyValue, balance);

		// 		schedule.push({
		// 			month: i,
		// 			propertyValue,
		// 			equity,
		// 			balance,
		// 			updatedPrincipal,
		// 			principalPayment,
		// 			interestPayment,
		// 		});
		// 	}
		// 	return schedule;
		// };

		// const getValuesAtBreakpoint = (schedule: Object[], pointArr: number[]): Object[] => {
		// 	const values = pointArr.map((point) => {
		// 		let index: number = point * 12;
		// 		return schedule[index];
		// 	});

		// 	return values;
		// };

		// const loanTerm = loan?.loanTerm;

		// if (loanTerm > 0 && loanTerm !== undefined) {
			// const breakpoints: number[] = getTermBreakpoints(loanTerm);

			// const loanSchedule: Object[] = getAmortizationSchedule(
			// 	loan.loanAmount,
			// 	loan.interestRate,
			// 	calculateMortgage(),
			// 	loan.loanTerm
			// );

			// const scheduleSummary: Object[] = getValuesAtBreakpoint(
			// 	loanSchedule,
			// 	breakpoints
			// );
			// setScheduleSummary(scheduleSummary);
		// }
	// }, [loan, purchase]);

	const isComplete = (): boolean => {
		return (
			purchase.complete &&
			loan.complete &&
			income.complete &&
			ownership.complete &&
			utility.complete
		);
	};

	const totalCost = (): number => {
		return (
			purchase.purchasePrice +
			purchase.closingCost +
			purchase.rehabCost
		);
	};

	const isCashPurchase = (): string => {
		return loan.isCashPurchase ? "Yes" : "No";
	};

	// const downPaymentAmount = (): number => {
	// 	return totalCost() - loan.loanAmount;
	// };

	// const downPaymentPercentage = () => {
	// 	return downPaymentAmount() / (totalCost() * 1.0);
	// };

	const totalMonthlyIncome = (): number => {
		return (
			income.grossMonthlyRentalIncome + income.otherMonthlyRentalIncome
		);
	};

	// const compoundedAnnualIncome = (): number => {
	// 	const annualIncome: number = totalMonthlyIncome() * 12;

	// 	return getCompoundValue(annualIncome, income.annualIncomeGrowth, 1);
	// };

	const maintenanceMonthlyCost = (): number => {
		return percentOfRentalIncome(totalMonthlyIncome(), ownership.maintenancePercent);
	};

	const vacancyMonthlyCost = (): number => {
		return percentOfRentalIncome(totalMonthlyIncome(), ownership.vacancyPercent);
	};

	const capexMonthlyCost = (): number => {
		return percentOfRentalIncome(totalMonthlyIncome(), ownership.capexPercent);
	};

	const managementMonthlyCost = (): number => {
		return percentOfRentalIncome(totalMonthlyIncome(), ownership.managementPercent);
	};

	const monthlyOwnershipCost = (): number => {
		const monthlyPropertyTax: number = getMonthlyFromAnnual(
			ownership.propertyTaxes
		);
		const monthlyPropertyInsurance: number = getMonthlyFromAnnual(
			ownership.propertyInsurance
		);

		return (
			monthlyPropertyTax +
			monthlyPropertyInsurance +
			maintenanceMonthlyCost() +
			vacancyMonthlyCost() +
			capexMonthlyCost() +
			managementMonthlyCost()
		);
	};

	// const annualOwnershipCost = (): number => {
	// 	return getAnnualFromMonthly(monthlyOwnershipCost());
	// };

	const monthlyUtilitiesCost = (): number => {
		return (
			utility.electricityExpense +
			utility.gasExpense +
			utility.waterSewerExpense +
			utility.hoaExpense +
			utility.garbageExpense +
			utility.otherExpense
		);
	};

	// const annualUtilitiesCost = (): number => {
	// 	return getAnnualFromMonthly(monthlyUtilitiesCost());
	// };

	const totalMonthlyExpense = (): number => {
		return (
			monthlyOwnershipCost() +
			monthlyUtilitiesCost() +
			calculateMortgage()
		);
	};

	// const compoundedAnnualExpense = (years): number => {
	// 	const annualExpense: number = totalMonthlyExpense() * 12;

	// 	return getCompoundValue(
	// 		annualExpense,
	// 		utility.annualExpenseGrowth,
	// 		years
	// 	);
	// };

	const initialMonthlyCashflow = (): number => {
		return (
			totalMonthlyIncome() - totalMonthlyExpense()
		);
	};

	const variableExpense = (): number => {
		return (
			utility.electricityExpense +
			utility.gasExpense +
			utility.waterSewerExpense +
			utility.hoaExpense +
			utility.garbageExpense +
			utility.otherExpense
		);
	};

	const fixedExpense = (): number => {
		return (
			maintenanceMonthlyCost() +
			vacancyMonthlyCost() +
			capexMonthlyCost() +
			managementMonthlyCost()
		);
	};

	const calculateMonthlyNOI = (): number => {
		return totalMonthlyIncome() - totalMonthlyExpense();
	};

	const calculateAnnualNOI = (): number => {
		const month = totalMonthlyIncome() - totalMonthlyExpense();

		return month * 12;
	};

	const calculateCocROI = (): number => {
		return (calculateAnnualNOI() / totalCost()) * 100.0;
	};

	const calculateMortgage = (): number => {
		const mortgage: number = mortgagePaymentCost(
			loan.loanAmount,
			loan.interestRate,
			loan.loanTerm
		);

		return mortgage;
	};

	const proFormaCap = (): number => {
		return (calculateMonthlyNOI() / totalCost()) * 100.0;
	};

	const purchaseCap = (): number => {
		return (calculateMonthlyNOI() / purchase.purchasePrice) * 100.0;
	};

	const halfPercentMonthlyExpense = (): number => {
		return totalMonthlyIncome() * 0.5;
	};

	const halfPercentRuleCashFlow = (): number => {
		return (
			totalMonthlyIncome() -
			(halfPercentMonthlyExpense() + calculateMortgage())
		);
	};

	// const getProperty = (): Object => {
	// 	return {
	// 		...info,
	// 		purchase: {
	// 			...purchase,
	// 		},
	// 		financing: {
	// 			...loan,
	// 		},
	// 		income: {
	// 			...income,
	// 		},
	// 		ownership: {
	// 			...ownership,
	// 		},
	// 		utilities: {
	// 			...utility,
	// 		},
	// 	};
	// };

	// UI Forms

	const handleInfo = (e: any) => {
		e.preventDefault();
		// Form Handlers
		const getFormData = (e: any): any => {
			let data: any = {};
			for (const field in e.target.elements) {
				let unNeeded: boolean =
					field === "length" || field === "item" || field === "namedItem";
	
				if (isNaN(parseInt(field)) && !unNeeded) {
					data[field] = e.target.elements[field].value;
				}
			}
	
			return data;
		};

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
		const getFormData = (e: any): any => {
			let data: any = {};
			for (const field in e.target.elements) {
				let unNeeded: boolean =
					field === "length" || field === "item" || field === "namedItem";
	
				if (isNaN(parseInt(field)) && !unNeeded) {
					data[field] = e.target.elements[field].value;
				}
			}
	
			return data;
		};
		
		let {
			purchasePrice,
			closingCost,
			rehabCost,
			propertyValueGrowth,
		} = getFormData(e);

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
		const getFormData = (e: any): any => {
			let data: any = {};
			for (const field in e.target.elements) {
				let unNeeded: boolean =
					field === "length" || field === "item" || field === "namedItem";
	
				if (isNaN(parseInt(field)) && !unNeeded) {
					data[field] = e.target.elements[field].value;
				}
			}
	
			return data;
		};
		
		let {
			isCashPurchase,
			loanAmount,
			interestRate,
			pointsCharged,
			loanTerm,
		} = getFormData(e);

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
		const getFormData = (e: any): any => {
			let data: any = {};
			for (const field in e.target.elements) {
				let unNeeded: boolean =
					field === "length" || field === "item" || field === "namedItem";
	
				if (isNaN(parseInt(field)) && !unNeeded) {
					data[field] = e.target.elements[field].value;
				}
			}
	
			return data;
		};
		
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
		const getFormData = (e: any): any => {
			let data: any = {};
			for (const field in e.target.elements) {
				let unNeeded: boolean =
					field === "length" || field === "item" || field === "namedItem";
	
				if (isNaN(parseInt(field)) && !unNeeded) {
					data[field] = e.target.elements[field].value;
				}
			}
	
			return data;
		};
		
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
		const getFormData = (e: any): any => {
			let data: any = {};
			for (const field in e.target.elements) {
				let unNeeded: boolean =
					field === "length" || field === "item" || field === "namedItem";
	
				if (isNaN(parseInt(field)) && !unNeeded) {
					data[field] = e.target.elements[field].value;
				}
			}
	
			return data;
		};
		
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

	// ReviewPurchase props
	const cleanPurchasePrice = !isNaN(purchase.purchasePrice) ? Humanize.formatNumber(
		purchase.purchasePrice, 2) : Humanize.formatNumber(0, 2);
		
	const cleanClosingCost = !isNaN(purchase.closingCost) ? Humanize.formatNumber(
		purchase.closingCost, 2) : Humanize.formatNumber(0, 2);

	const cleanRehabCost = !isNaN(purchase.rehabCost) ? Humanize.formatNumber(
		purchase.rehabCost, 2) : Humanize.formatNumber(0, 2);

	const cleanValueGrowth = !isNaN(purchase.propertyValueGrowth) ? Humanize.formatNumber(
		purchase.propertyValueGrowth, 2) : Humanize.formatNumber(0, 2);
	

	// ReviewLoan
	const cleanLoanAmount = !isNaN(loan.loanAmount) ? Humanize.formatNumber(
		loan.loanAmount, 2) : Humanize.formatNumber(0, 2);

	const cleanInterestRate = !isNaN(loan.interestRate) ? Humanize.formatNumber(
		loan.interestRate, 2) : Humanize.formatNumber(0, 2);

	const cleanPointsCharged = !isNaN(loan.pointsCharged) ? Humanize.formatNumber(
		loan.pointsCharged, 2) : Humanize.formatNumber(0, 2);

	const cleanLoanTerm = isNaN(loan.loanTerm) ? 0 : loan.loanTerm;

	const Results = () => {
		// MonthlyCashFlow props
		const cleanCashFlow = !isNaN(initialMonthlyCashflow()) ? Humanize.formatNumber(initialMonthlyCashflow(), 2) : 0;
		const cleanIncome = !isNaN(totalMonthlyIncome()) ? Humanize.formatNumber(totalMonthlyIncome(), 2) : 0;
		const cleanExpense = !isNaN(totalMonthlyExpense()) ? Humanize.formatNumber(totalMonthlyExpense(), 2) : 0;

		// AnnualizedAndMortgagePayment props
		const annualizedReturnValue = !isNaN(annualizedReturn(totalCost(), totalCost() * 2, 5)) ? annualizedReturn(totalCost(), totalCost() * 2, 5).toFixed(2) : 0;
		const mortgagePaymentValue = !isNaN(calculateMortgage()) ? calculateMortgage().toFixed(2) : 0;

		return (
			<React.Fragment>
			{info.complete && 
				<React.Fragment>
					<PropertyHeader 
						info={info}
					/>
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
						totalMonthlyExpense={totalMonthlyExpense()}
						calculateMortgage={calculateMortgage()}
						propertyTaxes={getMonthlyFromAnnual(
							ownership.propertyTaxes
						)}
						propertyInsurance={getMonthlyFromAnnual(
							ownership.propertyInsurance
						)}
						variableExpense={variableExpense()}
						fixedExpense={fixedExpense()}
						vacancyMonthlyCost={vacancyMonthlyCost()}
						maintenanceMonthlyCost={maintenanceMonthlyCost()}
						capexMonthlyCost={capexMonthlyCost()}
						managementMonthlyCost={managementMonthlyCost()}
						utility={utility}
					/>
					<ROI 
						calculateAnnualNOI={calculateAnnualNOI()}
						calculateCocROI={calculateCocROI()}
						proFormaCap={proFormaCap()}
						purchaseCap={purchaseCap()}
					/>
					<HalfPercentRule 
						totalMonthlyIncome={totalMonthlyIncome()}
						halfPercentMonthlyExpense={halfPercentMonthlyExpense()}
						calculateMortgage={calculateMortgage()}
						halfPercentRuleCashFlow={halfPercentRuleCashFlow()}
					/>
					<Graph />  
				</React.Fragment>
			}
			</React.Fragment>
		);
	};

	return (
		<div className="container mx-auto p-6">
			<div className="">
				<Header />
				{inReview && (
					<React.Fragment>
						<PropertyForm 
							handleForm={(e: any) => handleInfo(e)}
						/>
						<Divider />
						<PurchaseForm 
							handleForm={(e: any) => handlePurchase(e)}
						/>
						<Divider />
						<LoanForm 
							handleForm={(e: any) => handleLoan(e)}
						/>
						<Divider />
						<IncomeForm 
							handleForm={(e: any) => handleIncome(e)}
						/>
						<Divider />
						<OwnershipForm 
							handleForm={(e: any) => handleOwnership(e)}
						/>
						<Divider />
						<UtilityForm 
							handleForm={(e: any) => handleUtility(e)}
						/>
						<Divider />
					</React.Fragment>
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
						<ReviewToggle 
							inReview={inReview}
							setInReview={setInReview}
						/>
					</div>
				</div>
				{inReview && (
					<React.Fragment>
						{info.complete &&
							<>
								<ReviewInfo 
									info={info}
								/>
								<Divider />
							</>
						}

						{purchase.complete && 
							<>
								<ReviewPurchase 
									cleanPurchasePrice={cleanPurchasePrice}
									cleanClosingCost={cleanClosingCost}
									cleanRehabCost={cleanRehabCost}
									cleanValueGrowth={cleanValueGrowth}
								/>
								<Divider />
							</>
						}

						{loan.complete && 
							<>
								<ReviewLoan 
									isCashPurchase={isCashPurchase()}
									cleanLoanAmount={cleanLoanAmount}
									cleanInterestRate={cleanInterestRate}
									cleanPointsCharged={cleanPointsCharged}
									cleanLoanTerm={cleanLoanTerm}
								/>
								<Divider />
							</>
						}

						{income.complete && 
							<>
								<ReviewIncome 
									income={income}
								/>
								<Divider />
							</>
						}

						{ownership.complete && 
							<>
								<ReviewOwnership 
									ownership={ownership}
								/>
								<Divider />
							</>
						}

						{utility.complete && 
							<ReviewUtility 
								utility={utility}
							/>
						}
					</React.Fragment>
				)}
			</div>
			<Divider />
			<div className="container sm:prose-xl">
				{isComplete() && <Results />}
				<Results />
			</div>
		</div>
	);
}
