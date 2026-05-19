import React from "react";

export default function OverthinkingControl() {

  const handleControl = () => {
    alert(
      "🧠 Negative Thought Control\n\n" +
      "Step 1: 5 Pushups / Walk\n" +
      "Step 2: 30 Sec Jap\n" +
      "Step 3: Drink Water\n\n" +
      "Hu action karis, feeling pachhi avse."
    );
  };

  return (
    <div style={{ marginTop: "15px" }}>
      <button onClick={handleControl}>
        🧠 Overthinking Reset
      </button>
    </div>
  );
}
