import React, { useEffect, useState } from "react";

const JapMethodCard = () => {
  const [week, setWeek] = useState(1);
  const [japTime, setJapTime] = useState(5);

  useEffect(() => {
    const startDate = localStorage.getItem("japStartDate");

    if (!startDate) {
      localStorage.setItem("japStartDate", new Date().toISOString());
      return;
    }

    const days =
      (new Date() - new Date(startDate)) / (1000 * 60 * 60 * 24);

    if (days >= 14) {
      setWeek(3);
      setJapTime(10);
    } else if (days >= 7) {
      setWeek(2);
      setJapTime(7);
    }
  }, []);

  const resetMind = () => {
    alert("Man pachu naam par laavo 🙏");
  };

  const handleUrge = () => {
    alert("1 min fast naam jap karo 🔥");
  };

  return (
    <div style={card}>
      <h3>📿 Jap Method</h3>

      <p>Week: {week}</p>
      <p>⏱ Jap Time: {japTime} min</p>

      <ol>
        <li>Seedha betho, aankh bandh</li>
        <li>Slow naam jap sambhdi ne</li>
        <li>End ma shant betho</li>
        <li>Prarthana karo</li>
      </ol>

      <button style={btn} onClick={resetMind}>
        🧠 Mind Reset
      </button>

      <button style={btn} onClick={handleUrge}>
        📵 Urge Help
      </button>

      <p style={{ marginTop: "10px", fontStyle: "italic" }}>
        “Consistency → Krupa → Feeling”
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
};

const btn = {
  display: "block",
  width: "100%",
  marginTop: "8px",
  padding: "10px",
  borderRadius: "8px",
  border: "none",
  background: "#4CAF50",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
};

export default JapMethodCard;
