import React from "react";

export default function PurchaseForm(props: any) {
	return (
        <div className="mt-10 sm:mt-">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Purchase
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                            Use a permanent address where you can receive
                            mail.
                        </p>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form
                        id="purchaseForm"
                        onSubmit={props.handleForm}
                    >
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-3 sm:col-span-2">
                                        <label
                                            htmlFor="purchasePrice"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Purchase Price
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                $
                                            </span>
                                            <input
                                                type="number"
                                                step="0.01"
                                                min="0"
                                                name="purchasePrice"
                                                id="purchasePrice"
                                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-3 sm:col-span-2">
                                        <label
                                            htmlFor="closingCost"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Closing Costs
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                $
                                            </span>
                                            <input
                                                type="number"
                                                step="0.01"
                                                min="0"
                                                name="closingCost"
                                                id="closingCost"
                                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-3 sm:col-span-2">
                                        <label
                                            htmlFor="rehabCost"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Rehab Costs
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                $
                                            </span>
                                            <input
                                                type="number"
                                                step="0.01"
                                                min="0"
                                                name="rehabCost"
                                                id="rehabCost"
                                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-3 sm:col-span-2">
                                        <label
                                            htmlFor="propertyValueGrowth"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Property Value Growth
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                                type="number"
                                                name="propertyValueGrowth"
                                                id="propertyValueGrowth"
                                                step="0.01"
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