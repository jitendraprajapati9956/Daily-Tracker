import React from "react";

export default function Navbar({ active, setActive }) {
  const handleClick = (tab) => {
    if (typeof setActive === "function") {
      setActive(tab);
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button onClick={() => handleClick("progress")}>Progress</button>
      <button onClick={() => handleClick("jap")}>Jap</button>
      <button onClick={() => handleClick("mind")}>Mind</button>
      <button onClick={() => handleClick("routine")}>Routine</button>
      <button onClick={() => handleClick("satsang")}>Satsang</button>
    </div>
  );
}
