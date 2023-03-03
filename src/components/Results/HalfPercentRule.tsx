import { formatNumberAsCurrency } from "../../utils/helpers";

export default function HalfPercentRule(props: any) {
  return (
    <div>
      <h5 className="mt-8 text-md text-gray-500">
        <strong>50% Rule</strong>
      </h5>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Total Monthly Income
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {`$${formatNumberAsCurrency(props.totalMonthlyIncome)}`}
            </dd>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              50% estimation for expenses
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {`$${formatNumberAsCurrency(props.halfPercentMonthlyExpense)}`}
            </dd>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              {"Monthly Mortgage (P&I)"}
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {`$${formatNumberAsCurrency(props.calculateMortgage)}`}
            </dd>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              50% Rule Cash Flow
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {`$${formatNumberAsCurrency(props.halfPercentRuleCashFlow)}`}
            </dd>
          </div>
        </div>
      </dl>
    </div>
  );
}
