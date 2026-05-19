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
    <div className="card">

      <h2 className="section-title">
        🏆 Krupa Points
      </h2>

      <h1
        style={{
          fontSize: "54px",
          color: "#f59e0b",
          textAlign: "center"
        }}
      >
        {points}
      </h1>

      <p
        style={{
          textAlign: "center",
          marginTop: "10px",
          color: "#64748b"
        }}
      >
        Consistency Score 🙏
      </p>

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
