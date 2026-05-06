import React, { useState } from "react";

export default function MinimumJapRule({ onComplete }) {

  const [done, setDone] = useState(false);

  const handleComplete = () => {
    setDone(true);
    onComplete && onComplete();
  };

  return (
    <div style={{ marginTop: "15px" }}>
      <h3>📿 Daily Minimum Jap (5 Min Compulsory)</h3>

      {!done ? (
        <button onClick={handleComplete}>
          Complete 5 Min Jap
        </button>
      ) : (
        <p>✅ Minimum Jap Done (No Excuse Rule)</p>
      )}
    </div>
  );
}
