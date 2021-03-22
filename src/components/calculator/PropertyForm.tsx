import React from "react";

export default function PropertyForm(props: any) {
	return (
        <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Property Information
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                            Enter basic information about the property.
                        </p>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form id="purchaseForm" onSubmit={props.handleForm}>
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Nickname
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label
                                            htmlFor="streetAddress"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Street address
                                        </label>
                                        <input
                                            type="text"
                                            name="streetAddress"
                                            id="streetAddress"
                                            required
                                            autoComplete="street-address"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label
                                            htmlFor="city"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label
                                            htmlFor="state"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            State / Province
                                        </label>
                                        <input
                                            type="text"
                                            name="state"
                                            id="state"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label
                                            htmlFor="zipCode"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            ZIP / Postal
                                        </label>
                                        <input
                                            type="text"
                                            name="zipCode"
                                            id="zipCode"
                                            required
                                            autoComplete="postal-code"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
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