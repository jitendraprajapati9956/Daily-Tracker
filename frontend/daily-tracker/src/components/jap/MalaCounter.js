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
    <div style={card}>
      <h3>📿 Mala Counter</h3>
      <h1>{count}</h1>

      <button style={btn} onClick={addCount}>
        Tap
      </button>

      <button style={{ ...btn, background: "red" }} onClick={reset}>
        Reset
      </button>
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
