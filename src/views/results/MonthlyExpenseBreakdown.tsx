import React from "react";
import Humanize from "humanize-plus";

export default function MonthlyExpenseBreakdown(props: any) {

	return (
        <div>
            <h2>Monthly Expense Breakdown</h2>
            <div className="grid md:grid-cols-3 gap-3">
                <div className="totalExpense mr-4">
                    <h3>
                        <strong>{`Total expenses $${Humanize.formatNumber(
                            props.totalMonthlyExpense,
                            2
                        )}`}</strong>
                    </h3>
                    <p>
                        <strong>Mortgage</strong>&emsp;
                        {`$${Humanize.formatNumber(
                            props.calculateMortgage,
                            2
                        )}`}
                    </p>
                    <p>
                        <strong>Taxes</strong>&emsp;
                        {`$${Humanize.formatNumber(
                            props.propertyTaxes,
                            2
                        )}`}
                    </p>
                    <p>
                        <strong>Insurance</strong>&emsp;
                        {`$${Humanize.formatNumber(
                            props.propertyInsurance,
                            2
                        )}`}
                    </p>
                    <p>
                        <strong>Variable expenses</strong>&emsp;
                        {`$${Humanize.formatNumber(
                            props.variableExpense,
                            2
                        )}`}
                    </p>
                    <p>
                        <strong>Fixed expenses</strong>&emsp;
                        {`$${Humanize.formatNumber(props.fixedExpense, 2)}`}
                    </p>
                </div>
                <div className="fixedExpense mr-4">
                    <h3>
                        <strong>{`Fixed expenses $${Humanize.formatNumber(
                            props.fixedExpense,
                            2
                        )}`}</strong>
                    </h3>
                    <p>
                        <strong>Vacancy</strong>&emsp;
                        {`$${Humanize.formatNumber(
                            props.vacancyMonthlyCost,
                            2
                        )}`}
                    </p>
                    <p>
                        <strong>Maintenance</strong>&emsp;
                        {`$${Humanize.formatNumber(
                            props.maintenanceMonthlyCost,
                            2
                        )}`}
                    </p>
                    <p>
                        <strong>CapEx</strong>&emsp;
                        {`$${Humanize.formatNumber(
                            props.capexMonthlyCost,
                            2
                        )}`}
                    </p>
                    <p>
                        <strong>Management fees</strong>&emsp;
                        {`$${Humanize.formatNumber(
                            props.managementMonthlyCost,
                            2
                        )}`}
                    </p>
                </div>
                <div className="variableExpense">
                    <h3>
                        <strong>{`Variable expenses $${Humanize.formatNumber(
                            props.variableExpense,
                            2
                        )}`}</strong>
                    </h3>
                    <p>
                        <strong>Electricity</strong>&emsp;
                        {`$${Humanize.formatNumber(
                            props.utility.electricityExpense,
                            2
                        )}`}
                    </p>
                    <p>
                        <strong>Gas</strong>&emsp;
                        {`$${Humanize.formatNumber(
                            props.utility.gasExpense,
                            2
                        )}`}
                    </p>
                    <p>
                        <strong>{"Water & Sewer"}</strong>&emsp;
                        {`$${Humanize.formatNumber(
                            props.utility.waterSewerExpense,
                            2
                        )}`}
                    </p>
                    <p>
                        <strong>HOA Fees</strong>&emsp;
                        {`$${Humanize.formatNumber(
                            props.utility.hoaExpense,
                            2
                        )}`}
                    </p>
                    <p>
                        <strong>Garbage</strong>&emsp;
                        {`$${Humanize.formatNumber(
                            props.utility.garbageExpense,
                            2
                        )}`}
                    </p>
                    <p>
                        <strong>Other</strong>&emsp;
                        {`$${Humanize.formatNumber(
                            props.utility.otherExpense,
                            2
                        )}`}
                    </p>
                </div>
            </div>
        </div>
    );
}