import React from "react";
import useForm from "../hooks/useForm";
import { Deal } from "../lib/deal";
import { Header, Divider, ReviewToggle } from "../components/index";
import Review from "../components/Review";
import Report from "../components/Report";
import CalculatorForm from "../components/CalculatorForm";

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
          <div className="mt-4 flex-1 min-w-0">
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
          <div className="mt-8 flex">
            <button
              type="button"
              onClick={() => calculatorForm.populateForm()}
              className="rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Populate Form
            </button>
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
          <Report
            deal={
              new Deal(
                calculatorForm.info,
                calculatorForm.purchase,
                calculatorForm.loan,
                calculatorForm.income,
                {
                  ...calculatorForm.ownership,
                  monthlyHOAExpense: 0,
                },
                calculatorForm.utility
              )
            }
          />
        )}
      </div>
    </div>
  );
}
