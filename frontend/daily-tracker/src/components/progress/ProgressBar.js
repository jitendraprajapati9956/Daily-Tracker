<<<<<<< HEAD
import React from "react";

export default function ProgressBar({ score = 0, total = 6 }) {
  const percent = (score / total) * 100;

  return (
    <div style={{ margin: "20px 0" }}>
      <h3>Daily Progress</h3>
      <div style={{
        width: "100%",
        background: "#eee",
        height: "20px",
        borderRadius: "10px"
      }}>
        <div style={{
          width: `${percent}%`,
          background: "#4caf50",
          height: "100%",
          borderRadius: "10px",
          transition: "0.3s"
        }} />
      </div>
      <p>{score}/{total}</p>
    </div>
  );
}
=======
import React from "react";

export default function ProgressBar({ score = 0, total = 6 }) {
  const percent = (score / total) * 100;

  return (
    <div style={{ margin: "20px 0" }}>
      <h3>Daily Progress</h3>
      <div style={{
        width: "100%",
        background: "#eee",
        height: "20px",
        borderRadius: "10px"
      }}>
        <div style={{
          width: `${percent}%`,
          background: "#4caf50",
          height: "100%",
          borderRadius: "10px",
          transition: "0.3s"
        }} />
      </div>
      <p>{score}/{total}</p>
    </div>
  );
}
>>>>>>> 187a771c8e17bf05e25c8a29098bdab78c94e412
