import React from "react";

export default function GoalMeter({ totalDays = 30, completedDays = 0 }) {
  const percent = (completedDays / totalDays) * 100;

  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "20px"
    }}>
      <h3>Bhagwat Goal Progress</h3>

      <div
        style={{
          width: "100%",
          background: "#e2e8f0",
          height: "14px",
          borderRadius: "999px",
          overflow: "hidden",
          marginTop: "14px"
        }}
      >
        <div style={{
          width: `${percent}%`,
          background: "#ff9800",
          height: "100%",
          borderRadius: "10px"
        }} />
      </div>

      <p>{completedDays}/{totalDays} Days</p>
    </div>
  );
}
