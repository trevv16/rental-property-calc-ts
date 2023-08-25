import React from "react";
import { formatNumberAsCurrency } from "../../utils/helpers";
import { ResultCard } from "../common/ResultCard";

type ReturnOnInvestmentProps = {
  netOperatingIncome: number;
  cashOnCashReturn: number;
  proFormaCap: number;
  purchaseCap: number;
};

export default function ROISection({
  netOperatingIncome,
  cashOnCashReturn,
  proFormaCap,
  purchaseCap,
}: ReturnOnInvestmentProps) {
  return (
    <div>
      <div>
        <h2 className="my-8 text-lg leading-6 font-medium text-gray-900">
          <strong>Returns</strong>
        </h2>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
          <ResultCard
            title="Net Operating Income (NOI)"
            value={`$${formatNumberAsCurrency(netOperatingIncome, 2)}`}
          />

          <ResultCard
            title="Cash on Cash ROI"
            value={`${formatNumberAsCurrency(cashOnCashReturn, 2)}%`}
          />

          <ResultCard
            title="Pro forma cap"
            value={`${formatNumberAsCurrency(proFormaCap, 2)}%`}
          />

          <ResultCard
            title="Purchase cap"
            value={`${formatNumberAsCurrency(purchaseCap, 2)}%`}
          />
        </dl>
      </div>
    </div>
  );
}
