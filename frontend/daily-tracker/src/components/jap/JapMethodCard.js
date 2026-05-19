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
    <div className="card">

      <h2 className="section-title">
        📿 Jap Method
      </h2>

      <div style={{ marginBottom: "18px" }}>
        <p><b>Week:</b> {week}</p>
        <p><b>Jap Time:</b> {japTime} min</p>
      </div>

      <ol
        style={{
          paddingLeft: "20px",
          lineHeight: "2"
        }}
      >
        <li>Seedha betho, aankh bandh</li>
        <li>Slow naam jap sambhdi ne</li>
        <li>End ma shant betho</li>
        <li>Prarthana karo</li>
      </ol>

      <div
        style={{
          display: "flex",
          gap: "14px",
          marginTop: "24px",
          flexWrap: "wrap"
        }}
      >
        <button className="primary-btn" onClick={resetMind}>
          🧠 Mind Reset
        </button>

        <button className="secondary-btn" onClick={handleUrge}>
          📵 Urge Help
        </button>
      </div>

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
