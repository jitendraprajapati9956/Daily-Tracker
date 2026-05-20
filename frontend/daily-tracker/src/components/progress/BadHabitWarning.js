import React from "react";

export default function BadHabitWarning({ score, noFap }) {
  if (score >= 3 && noFap) return null;

  return (
    <div style={{
      background: "#ffebee",
      color: "#c62828",
      padding: "10px",
      borderRadius: "10px",
      marginBottom: "15px"
    }}>
      ⚠️ Warning: Stay focused on your Bhagwat discipline.
    </div>
  );
}
