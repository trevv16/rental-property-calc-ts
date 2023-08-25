import { useState } from "react";
import { Switch } from "@headlessui/react";

import { formatNumberAsCurrency } from "../../utils/helpers";
import { Deal, TimeUnits } from "../../lib/deal";

type Expense = {
  name: string;
  amount: number;
};

type ExpenseGroup = {
  groupName: string;
  items: Expense[];
  subtotal: number;
};

const calculateExpenseTotal = (expenses: Expense[]): number =>
  expenses.reduce((acc, curr) => acc + curr.amount, 0);

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type ExpenseBreakdownProps = {
  deal: Deal;
  units: TimeUnits;
};

export default function ExpenseBreakdown({
  deal,
  units,
}: ExpenseBreakdownProps) {
  const fixedExpenseGroup = deal.getFixedExpenseBreakdown(units);
  const variableExpenseGroup = deal.getVariableExpenseBreakdown(units);
  const expenses: ExpenseGroup[] = [
    {
      groupName: "Fixed Expenses",
      items: fixedExpenseGroup,
      subtotal: calculateExpenseTotal(fixedExpenseGroup),
    },
    {
      groupName: "Variable Expenses",
      items: variableExpenseGroup,
      subtotal: calculateExpenseTotal(variableExpenseGroup),
    },
  ];
  const [enabled, setEnabled] = useState(false);
  const expenseTotal = expenses.reduce((acc, curr) => acc + curr.subtotal, 0);

  return (
    <>
      <div className="shadow rounded-lg mt-8 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Monthly Expense Breakdown
            </h3>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Switch.Group as="div" className="flex items-center">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={classNames(
                  enabled ? "bg-indigo-600" : "bg-gray-200",
                  "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                )}
              >
                <span
                  aria-hidden="true"
                  className={classNames(
                    enabled ? "translate-x-5" : "translate-x-0",
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
        <div className="-mx-4 mt-4 flow-root sm:mx-0">
          {expenses.map((expense) => (
            <>
              <table className="mb-8 min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      {expense
                        ? expense.groupName !== "root"
                          ? expense.groupName
                          : ""
                        : "Name"}
                    </th>
                    <th
                      scope="col"
                      className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                    ></th>
                    <th
                      scope="col"
                      className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                    ></th>
                    <th
                      scope="col"
                      className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {expense.items.map((expenseItem) => (
                    <tr
                      key={`expenseItem-${expenseItem.name}`}
                      className="border-b border-gray-200"
                    >
                      <td className="py-4 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="text-gray-900">{expenseItem.name}</div>
                      </td>
                      <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell"></td>
                      <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell"></td>
                      <td className="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                        {formatNumberAsCurrency(expenseItem.amount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
                    ></th>
                    <th
                      scope="row"
                      className="pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
                    ></th>
                    <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                      {formatNumberAsCurrency(expense.subtotal)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </>
          ))}
          <table className="mb-8 min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                ></th>
                <th
                  scope="col"
                  className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                ></th>
                <th
                  scope="col"
                  className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                ></th>
                <th
                  scope="col"
                  className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
                ></th>
              </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
              <tr>
                <th
                  scope="row"
                  colSpan={3}
                  className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
                ></th>
                <th
                  scope="row"
                  className="pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
                ></th>
                <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                  {formatNumberAsCurrency(expenseTotal)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}
