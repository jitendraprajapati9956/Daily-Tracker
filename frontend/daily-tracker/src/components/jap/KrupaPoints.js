import React, { useEffect, useState } from "react";

const KrupaPoints = () => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("trackerData")) || {};
    let score = 0;

    Object.values(data).forEach((day) => {
      if (day.jap) score += 1;
      if (day.satsang) score += 1;
      if (day.prarthana) score += 1;
    });

    setPoints(score);
  }, []);

  return (
    <div style={card}>
      <h3>🏆 Krupa Points</h3>
      <h1>{points}</h1>
      <p>Consistency score 🙏</p>
    </div>
  );
};

const card = {
  background: "#fff",
  padding: "16px",
  borderRadius: "12px",
  marginTop: "16px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  textAlign: "center",
};

export default KrupaPoints;
