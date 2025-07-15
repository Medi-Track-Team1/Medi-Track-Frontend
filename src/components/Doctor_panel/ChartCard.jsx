// src/components/ChartCard.jsx
import React from "react";

export default function ChartCard({ title, children }) {
  return (
    <div className="rounded-xl bg-blue-50 p-4 shadow-md">
      <h2 className="mb-2 font-semibold text-blue-700">{title}</h2>
      {children}
    </div>
  );
}
