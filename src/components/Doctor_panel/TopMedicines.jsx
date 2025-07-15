import React from "react";
import { FaCapsules } from "react-icons/fa6"; 

const COLORS = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-orange-500", "bg-pink-500"];

export default function TopMedicines({ data }) {
  return (
    <div className="space-y-3">
      {data.map((m, i) => (
        <div key={m.name} className="flex items-center gap-3">
          <span className={`${COLORS[i]} inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white`}>
            <FaCapsules className="h-4 w-4" />
          </span>
          <span className="flex-1 text-sm font-medium">{m.name}</span>
          <span className="text-xs text-slate-500">{m.count}</span>
          <div className="ml-2 h-2 w-1/3 rounded bg-slate-200 dark:bg-slate-700">
            <div className={`h-full rounded ${COLORS[i]}`} style={{ width: `${m.percent}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
