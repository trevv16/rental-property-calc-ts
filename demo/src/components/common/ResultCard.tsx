import React from "react";

type ResultCardProps = {
  title: string;
  value: string | number;
  highlight?: boolean;
};

export function ResultCard({ title, value, highlight }: ResultCardProps) {
  return (
    <div
      className={`bg-${
        highlight ? "indigo-50" : "white"
      } overflow-hidden shadow rounded-lg`}
    >
      <div className="px-4 py-5 sm:p-6">
        <dt className="text-sm font-medium text-indigo-500 truncate">
          {title}
        </dt>
        <dd className="mt-1 text-3xl font-semibold text-gray-900">{value}</dd>
      </div>
    </div>
  );
}
