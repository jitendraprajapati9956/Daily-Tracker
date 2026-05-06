import React, { useState, useEffect } from "react";

export default function WakeUpTracker({ onBonus }) {
  const [selectedTime, setSelectedTime] = useState("6:00");

  useEffect(() => {
    const now = new Date();
    const totalMinutes = now.getHours() * 60 + now.getMinutes();

    if (totalMinutes > 510) {
      alert("⚠️ 8:30 pachi mobile = streak risk");
    } else {
      onBonus && onBonus(2); // +2 Krupa Points
    }
  }, [onBonus]);

  return (
    <div>
      <h3>🌅 Wake-Up Time</h3>
      <select onChange={(e) => setSelectedTime(e.target.value)}>
        <option value="6:00">6:00 AM</option>
        <option value="7:00">7:00 AM</option>
        <option value="custom">Custom</option>
      </select>
      <p>Selected: {selectedTime}</p>
    </div>
  );
}
