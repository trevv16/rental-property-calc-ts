export default function MonthlyCashFlow(props: any) {
  return (
    <div>
      <div>
        <h5 className="mt-4 text-md text-gray-500">
          <strong>Calculated</strong>
        </h5>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Monthly Cash Flow
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {`$${props.cleanCashFlow}`}
              </dd>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Income
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {`$${props.cleanIncome}`}
              </dd>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Expenses
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {`$${props.cleanExpense}`}
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
}