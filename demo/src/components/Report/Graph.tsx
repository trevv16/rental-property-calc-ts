import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from "recharts";
import { DateTime } from "luxon";

interface IProps {
  scheduleSummary: any[];
}

const CURRENT_DATE = DateTime.now();

const toolTipFormatter = (value: string) => {
  const formattedMonth = CURRENT_DATE.plus({ months: parseInt(value) });

  DateTime.now();
  return `${formattedMonth.toFormat("MMMM y")} | Payment ${parseInt(value)}`;
};

const Graph: React.FC<IProps> = ({ scheduleSummary }) => {
  return (
    <div className="container mx-auto m-6">
      <LineChart width={1495} height={600} data={scheduleSummary}>
        <Tooltip
          labelFormatter={toolTipFormatter}
          formatter={(value: string) =>
            `$${new Intl.NumberFormat("en").format(parseFloat(value))}`
          }
        />
        <XAxis dataKey="currentMonth" type="number">
          <Label position="bottom" value="# of Payments" />
        </XAxis>
        <YAxis
          type="number"
          tickFormatter={(value) =>
            new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "short",
            }).format(value)
          }
        />
        <CartesianGrid stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Line
          dot={false}
          type="monotone"
          name="Interest Paid"
          dataKey="interestPaid"
          stroke="#BA3F1D"
        />
        <Line
          dot={false}
          type="monotone"
          name="Principal Paid"
          dataKey="principalPaid"
          stroke="#7FB685"
        />
        <Line
          dot={false}
          type="monotone"
          name="Loan Balance"
          dataKey="outstandingLoanBalance"
          stroke="#758BFD"
        />
      </LineChart>
    </div>
  );
};

export default Graph;
