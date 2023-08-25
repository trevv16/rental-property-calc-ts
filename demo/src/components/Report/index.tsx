import React, { useState } from "react";
import { Deal } from "../../lib/deal";
import PropertyHeader from "./PropertyHeader";
import { Divider, Graph } from "..";
import ROISection from "./ROISection";
import KPISection from "./KPISection";
import { useAmmortization } from "../../hooks/useAmmortiziation";
import CashFlowSection from "./CashFlowSection";
import ExpenseBreakdown from "./ExpenseBreakdown";

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
        <Graph scheduleSummary={schedule} />
      </>
    )
  );
}
