import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

export default function AgeDonut({ data }) {
  const total = data.reduce((a, b) => a + b.value, 0);

  return (
    <div className="relative flex flex-col items-center bg-blue-50 p-4 rounded-xl shadow-md">
      <div className="w-full max-w-[340px]">
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Tooltip
              formatter={(v) => [`${v} patients`, "Age range"]}
              contentStyle={{ fontSize: 12, backgroundColor: '#f0f9ff', borderColor: '#3b82f6' }}
            />
            <Pie
              data={data}
              dataKey="value"
              innerRadius="60%"
              outerRadius="90%"
              paddingAngle={1}
            >
              {data.map((entry, i) => (
                <Cell key={`cell-${i}`} fill={COLORS[i]} className="cursor-pointer" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
        >
          <p className="text-[11px] tracking-wide text-blue-500">TOTAL</p>
          <p className="text-3xl font-bold text-blue-600">{total}</p>
        </motion.div>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-blue-700">
        {data.map((d, i) => (
          <span key={d.name} className="flex items-center gap-1">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ background: COLORS[i] }}
            />
            {d.name}
          </span>
        ))}
      </div>
    </div>
  );
}
