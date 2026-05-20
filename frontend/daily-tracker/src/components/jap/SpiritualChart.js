import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

export default function SpiritualChart({ days = [] }) {
  // Convert jap tracker data → chart score (0 to 3)
  const data = days.map((d, i) => ({
    day: i + 1,
    score:
      (d.jap ? 1 : 0) +
      (d.satsang ? 1 : 0) +
      (d.prarthana ? 1 : 0)
  }));

  return (
    <div
      style={{
        width: "100%",
        height: 260,
        background: "#fff",
        borderRadius: "10px",
        padding: "10px",
        marginTop: "15px"
      }}
    >
      <h4 style={{ textAlign: "center", marginBottom: "10px" }}>
        📊 Monthly Spiritual Graph
      </h4>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="day"
            tick={{ fontSize: 12 }}
            interval={4} // mobile friendly
          />

          <YAxis
            domain={[0, 3]}
            ticks={[0, 1, 2, 3]}
            tick={{ fontSize: 12 }}
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#4caf50"
            strokeWidth={3}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
