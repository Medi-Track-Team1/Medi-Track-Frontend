import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Paracetamol", count: 18 },
  { name: "Ibuprofen", count: 12 },
  { name: "Amoxicillin", count: 9 },
  { name: "Cetirizine", count: 6 },
];

export default function MedicineChart() {
  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 shadow-sm transition">
      <h2 className="mb-3 text-lg font-semibold text-blue-800">
        Most Prescribed Medicines
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#1e3a8a"
            tick={{ fill: "#1e3a8a", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            stroke="#1e3a8a"
            tick={{ fill: "#1e3a8a", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#eff6ff", borderColor: "#93c5fd" }}
            labelStyle={{ color: "#1e3a8a" }}
            itemStyle={{ color: "#1e3a8a" }}
          />
          <Bar dataKey="count" fill="#2563eb" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
