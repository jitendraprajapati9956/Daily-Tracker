import React from "react";

export default function MindReset() {

  const handleReset = () => {
    alert(
      "🧠 Mind Reset Mode\n\nRepeat 11 var:\nHu Bhagwan no chu, Bhagwan mara che"
    );
  };

  return (
    <div style={{ marginTop: "15px" }}>
      <button onClick={handleReset}>
        🧠 Mind Reset
      </button>
    </div>
  );
}
