import React from "react";
import MonthlyChart from "../components/progress/MonthlyChart";

export default function MonthlyReport() {
  const monthlyData = [
    { date: "1", score: 3 },
    { date: "2", score: 4 },
    { date: "3", score: 5 },
    { date: "4", score: 2 },
    { date: "5", score: 6 }
  ];

  return (
    <div style={container}>
      <h2>📊 Monthly Report</h2>
      <MonthlyChart data={monthlyData} />
    </div>
  );
}

const container = {
  maxWidth: "900px",
  margin: "auto",
  padding: "15px"
};
