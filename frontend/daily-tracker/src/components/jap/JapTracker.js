<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import SpiritualChart from "./SpiritualChart";

export default function JapTracker() {
  const STORAGE_KEY = "japTrackerData";

  const [days, setDays] = useState([]);
  const [showReminder, setShowReminder] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const [timerActive, setTimerActive] = useState(false);

  const todayIndex = new Date().getDate() - 1;

  // Load data
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setDays(JSON.parse(saved));
    } else {
      const initial = Array.from({ length: 30 }, () => ({
        jap: false,
        satsang: false,
        prarthana: false
      }));
      setDays(initial);
    }

    // 🔔 Daily reminder (once/day)
    const lastShown = localStorage.getItem("reminderDate");
    const today = new Date().toDateString();

    if (lastShown !== today) {
      setShowReminder(true);
      localStorage.setItem("reminderDate", today);
    }
  }, []);

  // 💾 Save to localStorage
  useEffect(() => {
    if (days.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(days));
    }
  }, [days]);

  // ⏱ Timer logic
  useEffect(() => {
    let interval = null;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
      alert("🙏 Jap complete");
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  // 🔔 Fixed 6 AM reminder
  useEffect(() => {
    const now = new Date();
    const sixAM = new Date();
    sixAM.setHours(6, 0, 0, 0);

    if (now > sixAM) sixAM.setDate(sixAM.getDate() + 1);

    const timeout = sixAM - now;

    const timer = setTimeout(() => {
      alert("📿 5 min Jap time");
    }, timeout);

    return () => clearTimeout(timer);
  }, []);

  const toggle = (index, field) => {
    const updated = [...days];
    updated[index][field] = !updated[index][field];
    setDays(updated);
  };

  // 🔥 Streak
  const streak = (() => {
    let count = 0;
    for (let i = 0; i < days.length; i++) {
      if (days[i].jap && days[i].satsang && days[i].prarthana) count++;
      else break;
    }
    return count;
  })();

  const completedDays = days.filter(
    d => d.jap && d.satsang && d.prarthana
  ).length;

  const progressPercent = Math.round((completedDays / 30) * 100);

  // ☁️ MongoDB sync (call your API)
  const syncToBackend = async () => {
    try {
      await fetch("http://localhost:5000/api/jap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(days)
      });
      alert("☁️ Synced to DB");
    } catch {
      alert("Backend not connected");
    }
  };

  return (
    <div style={container}>
      <h3>📿 30-Day Jap Tracker</h3>

      {/* Reminder */}
      {showReminder && (
        <div style={reminder}>
          🙏 Jap time thayu! Bas 10 minute.
          <button onClick={() => setShowReminder(false)} style={btn}>OK</button>
        </div>
      )}

      {/* Progress Ring */}
      <div style={ringContainer}>
        <svg width="120" height="120">
          <circle cx="60" cy="60" r="50" stroke="#eee" strokeWidth="10" fill="none"/>
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="green"
            strokeWidth="10"
            fill="none"
            strokeDasharray={314}
            strokeDashoffset={314 - (314 * progressPercent) / 100}
            transform="rotate(-90 60 60)"
          />
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
            {progressPercent}%
          </text>
        </svg>
      </div>

      <p>🔥 Streak: <b>{streak}</b> days</p>
      <p>✅ Completed: <b>{completedDays}/30</b></p>

      {/* 🎯 Badge */}
      {completedDays === 30 && (
        <div style={badge}>🎉 30/30 Complete! Krupa thai 🙏</div>
      )}

      {/* ⏱ Jap Timer */}
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <h4>⏱ Jap Timer</h4>
        <p>{Math.floor(timeLeft / 60)}:{("0" + (timeLeft % 60)).slice(-2)}</p>

        {!timerActive ? (
          <button style={btn} onClick={() => setTimerActive(true)}>Start</button>
        ) : (
          <button style={btn} onClick={() => setTimerActive(false)}>Pause</button>
        )}
      </div>

      {/* Table */}
      <div style={{ overflowX: "auto" }}>
        <table style={table}>
          <thead>
            <tr>
              <th>Day</th>
              <th>Jap</th>
              <th>Satsang</th>
              <th>Prarthana</th>
            </tr>
          </thead>

          <tbody>
            {days.map((d, i) => (
              <tr
                key={i}
                style={
                  i === todayIndex
                    ? { background: "#d4edda", fontWeight: "bold" }
                    : {}
                }
              >
                <td>{i + 1}</td>

                <td onClick={() => toggle(i, "jap")} style={cell}>
                  {d.jap ? "✔️" : "⬜"}
                </td>

                <td onClick={() => toggle(i, "satsang")} style={cell}>
                  {d.satsang ? "✔️" : "⬜"}
                </td>

                <td onClick={() => toggle(i, "prarthana")} style={cell}>
                  {d.prarthana ? "✔️" : "⬜"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SpiritualChart days={days} />

      {/* ☁️ Sync Button */}
      <button onClick={syncToBackend} style={{ ...btn, marginTop: "10px" }}>
        ☁️ Sync to MongoDB
      </button>
    </div>
  );
}

const container = {
  background: "#fff",
  padding: "15px",
  borderRadius: "10px",
  marginTop: "20px"
};

const table = {
  width: "100%",
  borderCollapse: "collapse"
};

const cell = {
  cursor: "pointer",
  fontSize: "20px"
};

const ringContainer = {
  display: "flex",
  justifyContent: "center",
  margin: "10px 0"
};

const badge = {
  background: "gold",
  padding: "10px",
  borderRadius: "10px",
  textAlign: "center",
  fontWeight: "bold",
  marginBottom: "10px"
};

const reminder = {
  background: "#ffeeba",
  padding: "10px",
  borderRadius: "8px",
  marginBottom: "10px",
  textAlign: "center"
};

const btn = {
  marginTop: "8px",
  padding: "5px 10px",
  cursor: "pointer"
};
=======
import React, { useState, useEffect } from "react";
import SpiritualChart from "./SpiritualChart";

export default function JapTracker() {
  const STORAGE_KEY = "japTrackerData";

  const [days, setDays] = useState([]);
  const [showReminder, setShowReminder] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const [timerActive, setTimerActive] = useState(false);

  const todayIndex = new Date().getDate() - 1;

  // Load data
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setDays(JSON.parse(saved));
    } else {
      const initial = Array.from({ length: 30 }, () => ({
        jap: false,
        satsang: false,
        prarthana: false
      }));
      setDays(initial);
    }

    // 🔔 Daily reminder (once/day)
    const lastShown = localStorage.getItem("reminderDate");
    const today = new Date().toDateString();

    if (lastShown !== today) {
      setShowReminder(true);
      localStorage.setItem("reminderDate", today);
    }
  }, []);

  // 💾 Save to localStorage
  useEffect(() => {
    if (days.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(days));
    }
  }, [days]);

  // ⏱ Timer logic
  useEffect(() => {
    let interval = null;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
      alert("🙏 Jap complete");
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  // 🔔 Fixed 6 AM reminder
  useEffect(() => {
    const now = new Date();
    const sixAM = new Date();
    sixAM.setHours(6, 0, 0, 0);

    if (now > sixAM) sixAM.setDate(sixAM.getDate() + 1);

    const timeout = sixAM - now;

    const timer = setTimeout(() => {
      alert("📿 5 min Jap time");
    }, timeout);

    return () => clearTimeout(timer);
  }, []);

  const toggle = (index, field) => {
    const updated = [...days];
    updated[index][field] = !updated[index][field];
    setDays(updated);
  };

  // 🔥 Streak
  const streak = (() => {
    let count = 0;
    for (let i = 0; i < days.length; i++) {
      if (days[i].jap && days[i].satsang && days[i].prarthana) count++;
      else break;
    }
    return count;
  })();

  const completedDays = days.filter(
    d => d.jap && d.satsang && d.prarthana
  ).length;

  const progressPercent = Math.round((completedDays / 30) * 100);

  // ☁️ MongoDB sync (call your API)
  const syncToBackend = async () => {
    try {
      await fetch("http://localhost:5000/api/jap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(days)
      });
      alert("☁️ Synced to DB");
    } catch {
      alert("Backend not connected");
    }
  };

  return (
    <div style={container}>
      <h3>📿 30-Day Jap Tracker</h3>

      {/* Reminder */}
      {showReminder && (
        <div style={reminder}>
          🙏 Jap time thayu! Bas 10 minute.
          <button onClick={() => setShowReminder(false)} style={btn}>OK</button>
        </div>
      )}

      {/* Progress Ring */}
      <div style={ringContainer}>
        <svg width="120" height="120">
          <circle cx="60" cy="60" r="50" stroke="#eee" strokeWidth="10" fill="none"/>
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="green"
            strokeWidth="10"
            fill="none"
            strokeDasharray={314}
            strokeDashoffset={314 - (314 * progressPercent) / 100}
            transform="rotate(-90 60 60)"
          />
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
            {progressPercent}%
          </text>
        </svg>
      </div>

      <p>🔥 Streak: <b>{streak}</b> days</p>
      <p>✅ Completed: <b>{completedDays}/30</b></p>

      {/* 🎯 Badge */}
      {completedDays === 30 && (
        <div style={badge}>🎉 30/30 Complete! Krupa thai 🙏</div>
      )}

      {/* ⏱ Jap Timer */}
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <h4>⏱ Jap Timer</h4>
        <p>{Math.floor(timeLeft / 60)}:{("0" + (timeLeft % 60)).slice(-2)}</p>

        {!timerActive ? (
          <button style={btn} onClick={() => setTimerActive(true)}>Start</button>
        ) : (
          <button style={btn} onClick={() => setTimerActive(false)}>Pause</button>
        )}
      </div>

      {/* Table */}
      <div style={{ overflowX: "auto" }}>
        <table style={table}>
          <thead>
            <tr>
              <th>Day</th>
              <th>Jap</th>
              <th>Satsang</th>
              <th>Prarthana</th>
            </tr>
          </thead>

          <tbody>
            {days.map((d, i) => (
              <tr
                key={i}
                style={
                  i === todayIndex
                    ? { background: "#d4edda", fontWeight: "bold" }
                    : {}
                }
              >
                <td>{i + 1}</td>

                <td onClick={() => toggle(i, "jap")} style={cell}>
                  {d.jap ? "✔️" : "⬜"}
                </td>

                <td onClick={() => toggle(i, "satsang")} style={cell}>
                  {d.satsang ? "✔️" : "⬜"}
                </td>

                <td onClick={() => toggle(i, "prarthana")} style={cell}>
                  {d.prarthana ? "✔️" : "⬜"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SpiritualChart days={days} />

      {/* ☁️ Sync Button */}
      <button onClick={syncToBackend} style={{ ...btn, marginTop: "10px" }}>
        ☁️ Sync to MongoDB
      </button>
    </div>
  );
}

const container = {
  background: "#fff",
  padding: "15px",
  borderRadius: "10px",
  marginTop: "20px"
};

const table = {
  width: "100%",
  borderCollapse: "collapse"
};

const cell = {
  cursor: "pointer",
  fontSize: "20px"
};

const ringContainer = {
  display: "flex",
  justifyContent: "center",
  margin: "10px 0"
};

const badge = {
  background: "gold",
  padding: "10px",
  borderRadius: "10px",
  textAlign: "center",
  fontWeight: "bold",
  marginBottom: "10px"
};

const reminder = {
  background: "#ffeeba",
  padding: "10px",
  borderRadius: "8px",
  marginBottom: "10px",
  textAlign: "center"
};

const btn = {
  marginTop: "8px",
  padding: "5px 10px",
  cursor: "pointer"
};
>>>>>>> 187a771c8e17bf05e25c8a29098bdab78c94e412
