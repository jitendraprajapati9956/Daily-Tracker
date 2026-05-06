import React from "react";
import StreakCard from "../components/progress/StreakCard";
import { calculateStreak } from "../utils/streakCalculator";

export default function StreakPage() {
  const monthlyData = [
    { date: "1", score: 4 },
    { date: "2", score: 5 },
    { date: "3", score: 6 },
    { date: "4", score: 2 },
    { date: "5", score: 5 }
  ];

  const streak = calculateStreak(monthlyData);

  return (
    <div style={container}>
      <h2>🔥 Streak History</h2>
      <StreakCard streak={streak} />
    </div>
  );
}

const container = {
  maxWidth: "500px",
  margin: "auto",
  padding: "15px"
};
