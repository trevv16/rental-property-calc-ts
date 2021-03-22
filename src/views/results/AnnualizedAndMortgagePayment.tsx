import React from "react";

export default function AnnualizedAndMortgagePayment(props: any) {

	return (
        <div>
            <div>
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                    KPIs
                </h2>
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 truncate">
                                5-year Annualized Return
                            </dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900">
                                {`${props.annualizedReturnValue}%`}
                            </dd>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 truncate">
                                Mortgage Payement
                            </dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900">
                                {`$${props.mortgagePaymentValue}`}
                            </dd>
                        </div>
                    </div>
                </dl>
            </div>
        </div>
    );
}