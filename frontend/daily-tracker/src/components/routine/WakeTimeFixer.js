<<<<<<< HEAD
import React, { useState } from "react";

export default function WakeTimeFixer() {

  const [wakeTime, setWakeTime] = useState("6:00 AM");

  return (
    <div style={{ marginTop: "15px" }}>
      <h3>🌅 Fix Wake-Up Time</h3>

      <select
        value={wakeTime}
        onChange={(e) => setWakeTime(e.target.value)}
      >
        <option>6:00 AM</option>
        <option>7:00 AM</option>
        <option>Custom</option>
      </select>

      <p>Fixed Time: {wakeTime}</p>
    </div>
  );
}
=======
import React, { useState } from "react";

export default function WakeTimeFixer() {

  const [wakeTime, setWakeTime] = useState("6:00 AM");

  return (
    <div style={{ marginTop: "15px" }}>
      <h3>🌅 Fix Wake-Up Time</h3>

      <select
        value={wakeTime}
        onChange={(e) => setWakeTime(e.target.value)}
      >
        <option>6:00 AM</option>
        <option>7:00 AM</option>
        <option>Custom</option>
      </select>

      <p>Fixed Time: {wakeTime}</p>
    </div>
  );
}
>>>>>>> 187a771c8e17bf05e25c8a29098bdab78c94e412
