import React from "react";

export default function RoutineTimeline() {
  return (
    <div style={card}>
      <h3>📅 Simple Daily Routine</h3>

      <ul>
        <li>🌅 Morning → 5 min Naam Jap</li>
        <li>🎧 Day → Ek Satsang Audio</li>
        <li>🌙 Night → 2 min Prarthana</li>
      </ul>
    </div>
  );
}

const card = {
  border: "1px solid #ddd",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "15px"
};
