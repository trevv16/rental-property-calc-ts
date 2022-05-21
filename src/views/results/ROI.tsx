import Humanize from "humanize-plus";

export default function ROI(props: any) {
  return (
    <div>
      <div>
        <h2 className="my-8 text-lg leading-6 font-medium text-gray-900">
          <strong>Returns</strong>
        </h2>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Net Operating Income (NOI)
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {`$${Humanize.formatNumber(props.calculateAnnualNOI, 2)}`}
              </dd>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Cash on Cash ROI
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {`${Humanize.formatNumber(props.calculateCocROI, 2)}%`}
              </dd>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Pro forma cap
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {`${Humanize.formatNumber(props.proFormaCap, 2)}%`}
              </dd>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Purchase cap
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {`${Humanize.formatNumber(props.purchaseCap, 2)}%`}
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
}
