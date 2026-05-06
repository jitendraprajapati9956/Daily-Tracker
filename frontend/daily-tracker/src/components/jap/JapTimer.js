import React, { useState, useEffect } from "react";

export default function JapTimer({ onComplete }) {
  const [seconds, setSeconds] = useState(300); // 5 minutes
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
      alert("🪶 Sankalp bolo:\nAaje game te thay, hu naam chhodis nahi");
      onComplete && onComplete(); // +5 score trigger
    }

    return () => clearInterval(interval);
  }, [running, seconds, onComplete]);

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div style={{ marginTop: "15px" }}>
      <h3>📿 Morning Jap (5 Min)</h3>
      <h2>{formatTime()}</h2>

      {!running ? (
        <button onClick={() => setRunning(true)}>Start Jap</button>
      ) : (
        <button onClick={() => setRunning(false)}>Pause</button>
      )}
    </div>
  );
}
