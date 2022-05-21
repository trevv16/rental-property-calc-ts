export default function ReviewToggle(props: any) {
  return (
    <div className="flex items-center">
      <button
        onClick={() => props.setInReview(!props.inReview)}
        type="button"
        className={`${
          props.inReview ? "bg-indigo-600" : "bg-gray-200"
        } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        aria-pressed="false"
        aria-labelledby="annual-billing-label"
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${
            props.inReview ? "translate-x-5" : "translate-x-0"
          } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
        ></span>
      </button>
      <span className="ml-3" id="annual-billing-label">
        <span className="text-sm font-medium text-gray-900">In Review </span>
        <span className="text-sm text-gray-500">
          (Toggle to show edit mode)
        </span>
      </span>
    </div>
  );
}
