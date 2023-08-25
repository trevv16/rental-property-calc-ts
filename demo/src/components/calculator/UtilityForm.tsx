export default function UtilityForm(props: any) {
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Rental Expenses - Utilities
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form id="ownershipExpenseForm" onSubmit={props.handleForm}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="monthlyElectricityExpense"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Electricity
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        $
                      </span>
                      <input
                        type="number"
                        step="0.01"
                        name="monthlyElectricityExpense"
                        id="monthlyElectricityExpense"
                        min="0"
                        required
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="monthlyGasExpense"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Gas
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        $
                      </span>
                      <input
                        type="number"
                        step="0.01"
                        name="monthlyGasExpense"
                        id="monthlyGasExpense"
                        min="0"
                        required
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="monthlyWaterAndSewerExpense"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {"Water & Sewer"}
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        $
                      </span>
                      <input
                        type="number"
                        step="0.01"
                        name="monthlyWaterAndSewerExpense"
                        id="monthlyWaterAndSewerExpense"
                        min="0"
                        required
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="hoaExpense"
                      className="block text-sm font-medium text-gray-700"
                    >
                      HOA
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        $
                      </span>
                      <input
                        type="number"
                        step="0.01"
                        name="hoaExpense"
                        id="hoaExpense"
                        min="0"
                        required
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="monthlyGarbageExpense"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Garbage
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        $
                      </span>
                      <input
                        type="number"
                        step="0.01"
                        name="monthlyGarbageExpense"
                        id="monthlyGarbageExpense"
                        min="0"
                        required
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="monthlyOtherExpense"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Other
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        $
                      </span>
                      <input
                        type="number"
                        step="0.01"
                        name="monthlyOtherExpense"
                        id="monthlyOtherExpense"
                        min="0"
                        required
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="annualExpenseGrowthPercent"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Annual Expense Growth
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="number"
                        step="0.01"
                        name="annualExpenseGrowthPercent"
                        id="annualExpenseGrowthPercent"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                      />
                      <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        %
                      </span>
                    </div>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="futureSalePercent"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Future Sales Expense
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="number"
                        step="0.01"
                        name="futureSalePercent"
                        id="futureSalePercent"
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
