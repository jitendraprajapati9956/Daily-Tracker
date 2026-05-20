import React from "react";

export default function SpiritualRoutineCard() {
  return (
    <div className="card">

      <h2 className="section-title">
        🧘 Spiritual Routine
      </h2>

      <div
        style={{
          display: "grid",
          gap: "18px"
        }}
      >

        <label>
          <input type="checkbox" />
          Jap Done
        </label>

        <label>
          <input type="checkbox" />
          Reading Done
        </label>

        <label>
          <input type="checkbox" />
          Prayer Done
        </label>

      </div>

    </div>
  );
}