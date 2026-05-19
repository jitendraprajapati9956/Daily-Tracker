<<<<<<< HEAD
import React, { useEffect, useState } from "react";

const DayStatusDots = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("dailyTracker")) || {};
    const today = new Date().getDate();

    let statusArray = [];

    for (let i = 1; i <= 31; i++) {
      if (i > today) {
        statusArray.push("empty");
      } else {
        const dayData = storedData[i];

        if (dayData && dayData.jap && dayData.reading && dayData.prayer) {
          statusArray.push("perfect"); // 🟢
        } else {
          statusArray.push("missed"); // 🔴
        }
      }
    }

    setDays(statusArray);
  }, []);

  const dotStyle = (status) => ({
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    margin: "4px",
    background:
      status === "perfect"
        ? "green"
        : status === "missed"
        ? "red"
        : "#ddd",
  });

  return (
    <div style={{ marginTop: "16px" }}>
      <h4>📅 Day Status</h4>

      <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "220px" }}>
        {days.map((status, index) => (
          <div key={index} style={dotStyle(status)}></div>
        ))}
      </div>

      <p style={{ fontSize: "12px", marginTop: "6px" }}>
        🟢 Perfect &nbsp; 🔴 Missed
      </p>
    </div>
  );
};

export default DayStatusDots;
=======
import React, { useEffect, useState } from "react";

const DayStatusDots = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("dailyTracker")) || {};
    const today = new Date().getDate();

    let statusArray = [];

    for (let i = 1; i <= 31; i++) {
      if (i > today) {
        statusArray.push("empty");
      } else {
        const dayData = storedData[i];

        if (dayData && dayData.jap && dayData.reading && dayData.prayer) {
          statusArray.push("perfect"); // 🟢
        } else {
          statusArray.push("missed"); // 🔴
        }
      }
    }

    setDays(statusArray);
  }, []);

  const dotStyle = (status) => ({
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    margin: "4px",
    background:
      status === "perfect"
        ? "green"
        : status === "missed"
        ? "red"
        : "#ddd",
  });

  return (
    <div style={{ marginTop: "16px" }}>
      <h4>📅 Day Status</h4>

      <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "220px" }}>
        {days.map((status, index) => (
          <div key={index} style={dotStyle(status)}></div>
        ))}
      </div>

      <p style={{ fontSize: "12px", marginTop: "6px" }}>
        🟢 Perfect &nbsp; 🔴 Missed
      </p>
    </div>
  );
};

export default DayStatusDots;
>>>>>>> 187a771c8e17bf05e25c8a29098bdab78c94e412
