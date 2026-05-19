<<<<<<< HEAD
import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

export default function MonthlyChart({ data }) {
  return (
    <div className="card">
      <h3>Monthly Progress</h3>

      <div style={{ width: "100%", height: 300 }}>
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
    </div>
  );
}
=======
import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

export default function MonthlyChart({ data }) {
  return (
    <div className="card">
      <h3>Monthly Progress</h3>

      <div style={{ width: "100%", height: 300 }}>
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
    </div>
  );
}
>>>>>>> 187a771c8e17bf05e25c8a29098bdab78c94e412
