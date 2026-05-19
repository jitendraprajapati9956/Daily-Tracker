import React from "react";

export default function BalanceTracker({ jobDone, japDone }) {

  return (
    <div style={{ marginTop: "15px" }}>
      <h3>⚖️ Life Balance</h3>

      <p>💼 Job Apply: {jobDone ? "✅ Done" : "❌ Not Done"}</p>
      <p>📿 Naam Jap: {japDone ? "✅ Done" : "❌ Not Done"}</p>

      <p>
        Job paisa mate che. <br />
        Naam shanti mate che.
      </p>
    </div>
  );
}
