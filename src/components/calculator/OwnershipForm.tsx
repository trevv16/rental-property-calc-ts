import React from "react";

export default function OwnershipForm(props: any) {
	return (
        <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Rental Expenses - Ownership
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                            Use a permanent address where you can receive
                            mail.
                        </p>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form
                        id="ownershipExpenseForm"
                        onSubmit={props.handleForm}
                    >
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-3 sm:col-span-2">
                                        <label
                                            htmlFor="propertyTaxes"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Annual Property Taxes
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                $
                                            </span>
                                            <input
                                                type="number"
                                                step="0.01"
                                                name="propertyTaxes"
                                                id="propertyTaxes"
                                                min="0"
                                                required
                                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-3 sm:col-span-2">
                                        <label
                                            htmlFor="propertyInsurance"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Annual Property Insurance
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                $
                                            </span>
                                            <input
                                                type="number"
                                                step="0.01"
                                                name="propertyInsurance"
                                                id="propertyInsurance"
                                                min="0"
                                                required
                                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-3 sm:col-span-2">
                                        <label
                                            htmlFor="maintenancePercent"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Maintenance
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                                type="number"
                                                name="maintenancePercent"
                                                id="maintenancePercent"
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

                                    <div className="col-span-3 sm:col-span-2">
                                        <label
                                            htmlFor="vacancyPercent"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Vacancy
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                                type="number"
                                                name="vacancyPercent"
                                                id="vacancyPercent"
                                                step="0.01"
                                                min="0"
                                                required
                                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                                            />
                                            <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                %
                                            </span>
                                        </div>
                                    </div>

                                    <div className="col-span-3 sm:col-span-2">
                                        <label
                                            htmlFor="capexPercent"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            CapEx
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                                type="number"
                                                name="capexPercent"
                                                id="capexPercent"
                                                step="0.01"
                                                min="0"
                                                required
                                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                                            />
                                            <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                %
                                            </span>
                                        </div>
                                    </div>

                                    <div className="col-span-3 sm:col-span-2">
                                        <label
                                            htmlFor="managementPercent"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Management
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                                type="number"
                                                name="managementPercent"
                                                id="managementPercent"
                                                step="0.01"
                                                min="0"
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