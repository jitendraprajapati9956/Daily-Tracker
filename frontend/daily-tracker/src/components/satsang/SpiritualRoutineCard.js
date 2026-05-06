import React from "react";

const SpiritualRoutineCard = () => {
  const card = {
    background: "#fff",
    padding: "16px",
    borderRadius: "12px",
    marginTop: "16px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  const checklist = {
    marginTop: "12px",
    background: "#f9f9f9",
    padding: "10px",
    borderRadius: "10px",
  };

  return (
    <>
      <div style={card}>
        <h3>🧘 Spiritual Routine</h3>

        <label>
          <input type="checkbox" /> Jap Done
        </label>
        <br />

        <label>
          <input type="checkbox" /> Reading Done
        </label>
        <br />

        <label>
          <input type="checkbox" /> Prayer Done
        </label>
      </div>

      <div style={checklist}>
        <h4>📿 Jap Checklist</h4>

        <p>☑️ Same place</p>
        <p>☑️ Fixed time</p>
        <p>☑️ No mobile</p>
        <p>☑️ Full focus</p>
      </div>
    </>
  );
};

export default SpiritualRoutineCard;
