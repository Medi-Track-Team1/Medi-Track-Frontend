import React from "react";

export default function PerfMetric({ color, value, label, delta }) {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-blue-50 p-3 shadow-sm">
      <span className={`inline-block h-8 w-1.5 rounded-full ${color} opacity-80`} />
      <div className="flex-1">
        <p className="text-sm text-blue-700">{label}</p>
        <p className="text-lg font-semibold text-blue-900">
          {value}
          {delta && (
            <span
              className={`ml-2 text-xs ${
                delta.startsWith("+") ? "text-green-600" : "text-red-500"
              }`}
            >
              {delta}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
