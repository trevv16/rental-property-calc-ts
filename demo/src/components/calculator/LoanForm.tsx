import { useState } from "react";

export default function LoanForm(props: any) {
  const [isCash, setIsCash] = useState<boolean>(true);

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Financing
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Enter information about the financing of the deal.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form id="loanForm" onSubmit={props.handleForm}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        checked={isCash}
                        onChange={() => setIsCash(!isCash)}
                        type="checkbox"
                        name="isCashPurchase"
                        id="isCashPurchase"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="isCashPurchase"
                        className="font-medium text-gray-700"
                      >
                        Cash Purchase?
                      </label>
                      <p className="text-gray-500">
                        A loan is not being used to make this purchase.
                      </p>
                    </div>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="loanAmount"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Loan Amount
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        $
                      </span>
                      <input
                        type="number"
                        step="0.01"
                        name="loanAmount"
                        required={isCash !== false}
                        disabled={isCash === true}
                        min="0"
                        id="loanAmount"
                        className="disabled:opacity-50 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="interestRate"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Interest Rate
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="number"
                        name="interestRate"
                        id="interestRate"
                        required={isCash !== false}
                        disabled={isCash === true}
                        step="0.01"
                        min="0"
                        className="disabled:opacity-50 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                      />
                      <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        %
                      </span>
                    </div>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="pmi"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Points Charged
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="number"
                        name="pmi"
                        id="pmi"
                        step="0.01"
                        min="0"
                        required={isCash !== false}
                        disabled={isCash === true}
                        className="disabled:opacity-50 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                      />
                      <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        %
                      </span>
                    </div>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="loanTerm"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Loan Term
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="number"
                        name="loanTerm"
                        id="loanTerm"
                        required={isCash !== false}
                        disabled={isCash === true}
                        min="0"
                        className="disabled:opacity-50 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                      />
                      <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        Years
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
