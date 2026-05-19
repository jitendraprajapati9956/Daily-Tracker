import React, { useState, useEffect } from "react";

const MalaCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("malaCount");
    if (saved) setCount(parseInt(saved));
  }, []);

  const addCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("malaCount", newCount);
  };

  const reset = () => {
    setCount(0);
    localStorage.setItem("malaCount", 0);
  };

  return (
    <div className="card">

      <h2 className="section-title">
        📿 Mala Counter
      </h2>

      <h1
        style={{
          fontSize: "64px",
          textAlign: "center",
          marginBottom: "24px",
          color: "#2563eb"
        }}
      >
        {count}
      </h1>

      <div
        style={{
          display: "flex",
          gap: "14px"
        }}
      >
        <button className="primary-btn" onClick={addCount}>
          Tap
        </button>

        <button className="secondary-btn" onClick={reset}>
          Reset
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
  textAlign: "center",
};

const btn = {
  width: "100%",
  padding: "10px",
  marginTop: "8px",
  borderRadius: "8px",
  border: "none",
  background: "#4CAF50",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
};

export default MalaCounter;
