import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

export default function MonthlyChart({ data }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Monthly Progress</h3>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 6]} />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#1976d2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
