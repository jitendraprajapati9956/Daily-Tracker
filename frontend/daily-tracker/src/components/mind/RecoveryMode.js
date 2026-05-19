import React from "react";

export default function RecoveryMode() {

  const handleRecovery = () => {
    alert(
      "⚡ Recovery Mode Start\n\n" +
      "1 Minute Fast Jap\n" +
      "10 Deep Breaths\n" +
      "Phone Off 15 Minutes\n\n" +
      "Mind ne punish nai karo.\nRedirect karo."
    );
  };

  return (
    <div style={{ marginTop: "15px" }}>
      <button onClick={handleRecovery}>
        🔄 Kem Nai Kariyu? Recovery
      </button>
    </div>
  );
}
