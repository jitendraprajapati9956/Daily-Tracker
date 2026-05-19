<<<<<<< HEAD
import React, { useState } from "react";
import DailyTracker from "./jap/DailyTracker";

export default function MonthlyTracker() {
  const [records, setRecords] = useState([]);
  const [score, setScore] = useState(0);

  const handleScoreChange = (newScore, noFap) => {
    setScore(newScore);
  };

  const handleSaveDay = () => {
    const today = new Date().toLocaleDateString();

    const newEntry = {
      date: today,
      score: score
    };

    setRecords([...records, newEntry]);
  };

  return (
    <div>
      <DailyTracker onScoreChange={handleScoreChange} />

      <button onClick={handleSaveDay} style={{ marginTop: "10px" }}>
        Save Today
      </button>

      <h3>Monthly Report</h3>

      <table border="1" cellPadding="8" style={{ marginTop: "10px", width: "100%" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {records.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.score} / 6</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
=======
import React, { useState } from "react";
import DailyTracker from "./jap/DailyTracker";

export default function MonthlyTracker() {
  const [records, setRecords] = useState([]);
  const [score, setScore] = useState(0);

  const handleScoreChange = (newScore, noFap) => {
    setScore(newScore);
  };

  const handleSaveDay = () => {
    const today = new Date().toLocaleDateString();

    const newEntry = {
      date: today,
      score: score
    };

    setRecords([...records, newEntry]);
  };

  return (
    <div>
      <DailyTracker onScoreChange={handleScoreChange} />

      <button onClick={handleSaveDay} style={{ marginTop: "10px" }}>
        Save Today
      </button>

      <h3>Monthly Report</h3>

      <table border="1" cellPadding="8" style={{ marginTop: "10px", width: "100%" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {records.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.score} / 6</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
>>>>>>> 187a771c8e17bf05e25c8a29098bdab78c94e412
