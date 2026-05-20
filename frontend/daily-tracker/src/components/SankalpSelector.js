import React, { useState } from "react";

export default function SankalpSelector() {

  const [line, setLine] = useState("");

  const saveSankalp = async () => {
    await fetch("/api/tracker/sankalp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sankalpLine: line })
    });

    alert("🔥 Sankalp Saved");
  };

  return (
    <div>
      <h3>Select Sankalp</h3>

      <select onChange={(e) => setLine(e.target.value)}>
        <option value="">Select</option>
        <option value="Hu Bhagwan no chu">Hu Bhagwan no chu</option>
        <option value="Naam j mara mate badhu che">Naam j mara mate badhu che</option>
      </select>

      <button onClick={saveSankalp}>Save</button>
    </div>
  );
}
