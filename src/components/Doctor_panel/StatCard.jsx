import React from "react";

export default function StatCard({ title, value }) {
  return (
    <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-4 shadow-sm transition hover:shadow-md">
      <p className="text-sm font-medium text-blue-700">{title}</p>
      <p className="mt-2 text-3xl font-extrabold text-blue-900 drop-shadow-sm">
        {value}
      </p>
    </div>
  );
}
