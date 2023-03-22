export default function FAQHeader() {
  return (
    <div>
      {/* This example requires Tailwind CSS v2.0+ */}
      {/* <div className="pb-5 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
                Job Postings
            </h3>
            <p className="mt-2 max-w-4xl text-sm text-gray-500">Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus. Fringilla egestas justo massa purus sagittis malesuada.</p>
            </div> */}

      <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
        <h3 className="text-lg leading-6 font-medium text-gray-900">FAQ</h3>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">
          Workcation is a property rental website. Etiam ullamcorper massa
          viverra consequat, consectetur id nulla tempus. Fringilla egestas
          justo massa purus sagittis malesuada.
        </p>

        <div className="mt-3 sm:mt-0 sm:ml-4">
          <a href="/">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Back to Home
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
