import React from "react";

export function KpiCard({ title, value, delta, icon }) {
  const isNegative = delta?.startsWith("-");

  return (
    <div
      className="relative overflow-hidden rounded-xl p-4 shadow-md transition hover:shadow-lg
                 bg-gradient-to-br from-white to-blue-100"
    >
      {/* Decorative blur bubble */}
      <div className="pointer-events-none absolute -top-6 -right-6 h-20 w-20 rounded-full bg-blue-200/40 blur-2xl" />

      <div className="flex items-center justify-between">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-wide text-blue-700">
            {title}
          </p>

          <p className="mt-1 text-4xl font-extrabold text-blue-900 drop-shadow-sm">
            {value}
          </p>

          {delta && (
            <p
              className={`mt-1 text-sm font-medium ${
                isNegative ? "text-red-500" : "text-green-600"
              }`}
            >
              {delta} vs last period
            </p>
          )}
        </div>

        <div className="shrink-0 text-blue-600 text-4xl opacity-80">
          {icon}
        </div>
      </div>
    </div>
  );
}
