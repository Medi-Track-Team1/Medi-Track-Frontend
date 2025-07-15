import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

// Colors for gradient fills
const IP_COLOR = ["#3b82f6", "#2563eb"];
const TELE_COLOR = ["#10b981", "#059669"];

export default function ConsultTypeBar({ data }) {
  return (
    <div className="rounded-xl bg-blue-50 p-4 shadow-md">
      <h2 className="mb-2 text-blue-700 font-semibold text-sm">Consultation Types</h2>
      <ResponsiveContainer width="100%" height={260}>
        <ComposedChart layout="vertical" data={data} stackOffset="expand" margin={{ top: 10, left: 60, right: 10 }}>
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 12, fill: "#1d4ed8" }}
            width={40}
          />
          <Tooltip
            formatter={(v) => `${(v * 100).toFixed(0)} %`}
            contentStyle={{ backgroundColor: '#f0f9ff', borderColor: '#3b82f6', fontSize: 12 }}
            cursor={{ fillOpacity: 0.08 }}
          />

          <Bar dataKey="inPerson" stackId="a" radius={[0, 6, 6, 0]}>
            {data.map((_, idx) => (
              <Cell key={idx} fill={`url(#ipGrad${idx})`} />
            ))}
          </Bar>

          <Bar dataKey="tele" stackId="a" radius={[0, 6, 6, 0]}>
            {data.map((_, idx) => (
              <Cell key={idx} fill={`url(#teleGrad${idx})`} />
            ))}
          </Bar>

          <defs>
            {data.map((_, i) => (
              <linearGradient id={`ipGrad${i}`} key={`ip${i}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={IP_COLOR[0]} />
                <stop offset="100%" stopColor={IP_COLOR[1]} />
              </linearGradient>
            ))}
            {data.map((_, i) => (
              <linearGradient id={`teleGrad${i}`} key={`tele${i}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={TELE_COLOR[0]} />
                <stop offset="100%" stopColor={TELE_COLOR[1]} />
              </linearGradient>
            ))}
          </defs>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
