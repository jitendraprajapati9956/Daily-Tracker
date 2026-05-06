import React, { useEffect, useState } from "react";

const JapReminder = () => {
  const [completed, setCompleted] = useState(false);

  // ⏰ 6 AM Reminder
  useEffect(() => {
    const checkReminder = () => {
      const now = new Date();
      if (now.getHours() === 6 && now.getMinutes() === 0) {
        alert("📿 Jap time thai gayo 🙏");
      }
    };

    const interval = setInterval(checkReminder, 60000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Mark Complete API
  const handleComplete = async () => {
    await fetch("/api/tracker/morning-jap", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ minutes: 5 }),
    });

    setCompleted(true);
  };

  return (
    <div>
      <h3>Morning Jap (5 min)</h3>

      {!completed ? (
        <button onClick={handleComplete}>Mark Complete</button>
      ) : (
        <p>✅ Completed</p>
      )}
    </div>
  );
};

export default JapReminder;
