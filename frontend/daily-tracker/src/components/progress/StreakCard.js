import React from "react";

export default function StreakCard({ streak = 0 }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "20px",
      textAlign: "center"
    }}>
      <h3>🔥 Current Streak</h3>
      <h2>{streak} Days</h2>
    </div>
  );
}
