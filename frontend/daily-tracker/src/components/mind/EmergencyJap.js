import React, { useState, useEffect } from "react";

export default function EmergencyJap({ onMini }) {
  const [seconds, setSeconds] = useState(30);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    }

    if (seconds === 0) {
      setRunning(false);
      alert("🔁 30 sec Jap Done 🙏\nDeep breath\nDrink water");
      onMini && onMini(); // +2 Krupa Points
      setSeconds(30);
    }

    return () => clearInterval(interval);
  }, [running, seconds, onMini]);

  return (
    <div style={{ marginTop: "15px" }}>
      <h3>🔁 Emergency Mini Jap</h3>
      <h2>{seconds}s</h2>

      {!running ? (
        <button onClick={() => setRunning(true)}>Start Mini Jap</button>
      ) : (
        <button onClick={() => setRunning(false)}>Stop</button>
      )}
    </div>
  );
}
