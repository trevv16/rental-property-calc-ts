import { Header, Divider, ReviewToggle } from "../components/index";
import { Results } from "../components/Results";
import Review from "../components/Review";
import CalculatorForm from "../components/CalculatorForm";
import useForm from "../hooks/useForm";

export default function CalculatorPage() {
  const calculatorForm = useForm();

  return (
    <div className="container mx-auto p-6">
      <div className="">
        <Header />
        {calculatorForm.inReview && (
          <>
            <CalculatorForm
              setInfo={calculatorForm.setInfo}
              setPurchase={calculatorForm.setPurchase}
              setLoan={calculatorForm.setLoan}
              setOwnership={calculatorForm.setOwnership}
              setIncome={calculatorForm.setIncome}
              setUtility={calculatorForm.setUtility}
            />
          </>
        )}
      </div>
      <div className="container sm:prose-xl">
        <div>
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Review/Edit
            </h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <ReviewToggle
              inReview={calculatorForm.inReview}
              setInReview={calculatorForm.setInReview}
            />
          </div>
        </div>
        {calculatorForm.inReview && (
          <Review
            info={calculatorForm.info}
            purchase={calculatorForm.purchase}
            loan={calculatorForm.loan}
            ownership={calculatorForm.ownership}
            income={calculatorForm.income}
            utility={calculatorForm.utility}
          />
        )}
      </div>
      <Divider />
      <div className="container sm:prose-xl">
        {calculatorForm.isComplete && (
          <Results
            info={calculatorForm.info}
            purchase={calculatorForm.purchase}
            loan={calculatorForm.loan}
            ownership={calculatorForm.ownership}
            income={calculatorForm.income}
            utility={calculatorForm.utility}
          />
        )}
      </div>
    </div>
  );
}
