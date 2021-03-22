import React from "react";

export default function IncomeForm(props: any) {
	return (
        <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Rental Income
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                            Enter information about the potential income of the deal.
                        </p>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form id="incomeForm" onSubmit={props.handleForm}>
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-3 sm:col-span-2">
                                        <label
                                            htmlFor="grossMonthlyRentalIncome"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Gross Monthly Rental Income
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                $
                                            </span>
                                            <input
                                                type="number"
                                                step="0.01"
                                                name="grossMonthlyRentalIncome"
                                                id="grossMonthlyRentalIncome"
                                                min="0"
                                                required
                                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-3 sm:col-span-2">
                                        <label
                                            htmlFor="otherMonthlyRentalIncome"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Other Monthly Rental Income
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                $
                                            </span>
                                            <input
                                                type="number"
                                                step="0.01"
                                                name="otherMonthlyRentalIncome"
                                                id="otherMonthlyRentalIncome"
                                                min="0"
                                                required
                                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-3 sm:col-span-2">
                                        <label
                                            htmlFor="annualIncomeGrowth"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Annual Income Growth
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                                type="number"
                                                name="annualIncomeGrowth"
                                                id="annualIncomeGrowth"
                                                min="0"
                                                step="0.01"
                                                required
                                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                                            />
                                            <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                %
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}