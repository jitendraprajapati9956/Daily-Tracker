import React from "react";

export default function StreakCard({ streak = 0 }) {
  return (
    <div className="card">
      <h3>🔥 Current Streak</h3>

      <h1
        style={{
          fontSize: "42px",
          marginTop: "12px",
          color: "#2563eb"
        }}
      >
        {streak}
      </h1>

      <p>Days</p>
    </div>
  );
}