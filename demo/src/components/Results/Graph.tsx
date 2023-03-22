import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface IProps {
  scheduleSummary: any[];
}

const Graph: React.FC<IProps> = ({ scheduleSummary }) => {
  return (
    <div className="container mx-auto m-6">
      <LineChart width={1000} height={500} data={scheduleSummary}>
        <XAxis dataKey="currentMonth" />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          name="Interest Paid"
          dataKey="interestPaid"
          stroke="#BA3F1D"
        />
        <Line
          type="monotone"
          name="Principal Paid"
          dataKey="principalPaid"
          stroke="#7FB685"
        />
        <Line
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
