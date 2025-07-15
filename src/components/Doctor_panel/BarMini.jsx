import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

export const BarMini = ({ data }) => (
  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={data}>
      <XAxis dataKey="name" tick={{ fill: "#1e3a8a", fontSize: 12 }} />
      <Tooltip />
      <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);

export const LineMini = ({ data }) => (
  <ResponsiveContainer width="100%" height={200}>
    <LineChart data={data}>
      <XAxis dataKey="name" tick={{ fill: "#1e3a8a", fontSize: 12 }} />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} dot={false} />
    </LineChart>
  </ResponsiveContainer>
);