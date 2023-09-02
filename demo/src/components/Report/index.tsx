import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { Deal } from "../../lib/deal";
import { useAmmortization } from "../../hooks/useAmmortiziation";
import { Divider } from "..";
import CashFlowSection from "./CashFlowSection";
import ExpenseBreakdown from "./ExpenseBreakdown";
import Graph from "./Graph";
import KPISection from "./KPISection";
import PropertyHeader from "./PropertyHeader";
import ROISection from "./ROISection";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type ReportProps = {
  deal: Deal;
};

export default function Report({ deal }: ReportProps) {
  const [units, setUnits] = useState<"annual" | "monthly">("annual");
  const noi = deal.getNOI(units);
  const schedule = useAmmortization(deal.loan, deal.purchase);

  return (
    deal.property && (
      <>
        <PropertyHeader property={deal.property} />
        <Divider />
        <div className="mt-8 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto"></div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <Switch.Group as="div" className="flex items-center">
                <Switch
                  checked={units === "annual"}
                  onChange={(value) =>
                    value ? setUnits("annual") : setUnits("monthly")
                  }
                  className={classNames(
                    units === "annual" ? "bg-indigo-600" : "bg-gray-200",
                    "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={classNames(
                      units === "annual" ? "translate-x-5" : "translate-x-0",
                      "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                    )}
                  />
                </Switch>
                <Switch.Label as="span" className="ml-3 text-sm">
                  <span className="font-medium text-gray-900">Annual</span>
                </Switch.Label>
              </Switch.Group>
            </div>
          </div>
        </div>
        <h2 className="my-8 text-lg leading-6 font-medium text-gray-900">
          <strong>KPIs</strong>
        </h2>
        <KPISection
          annualizedReturnValue={deal.getFiveYearAnnualizedReturn()}
          mortgagePaymentValue={deal.getMortgagePayment("monthly")}
        />
        <ROISection
          netOperatingIncome={deal.getNOI(units)}
          cashOnCashReturn={deal.getAnnualCashOnCashROI(
            noi,
            deal.getTotalCost()
          )}
          proFormaCap={deal.getAnnualProFormaCap()}
          purchaseCap={deal.getAnnualPurchaseCap()}
        />
        <h2 className="my-2 text-lg leading-6 font-medium text-gray-900">
          <strong>Cash Flow</strong>
        </h2>
        <CashFlowSection
          cleanIncome={deal.getIncome(units)}
          cleanExpense={deal.getExpenses(units)}
          cleanCashFlow={deal.getCashFlow(units)}
          totalMonthlyIncome={deal.getIncome("monthly")}
          calculateMortgage={deal.getMortgagePayment("monthly")}
          halfPercentMonthlyExpense={deal.getIncome("monthly") / 2} // 50% of income
          halfPercentRuleCashFlow={deal.getMonthlyHalfPercentCashFlow()}
        />
        <ExpenseBreakdown deal={deal} units={units} />
        <h2 className="my-2 text-lg leading-6 font-medium text-gray-900">
          <strong>Mortgage Ammortization</strong>
        </h2>
        <Graph scheduleSummary={schedule} />
      </>
    )
  );
}
