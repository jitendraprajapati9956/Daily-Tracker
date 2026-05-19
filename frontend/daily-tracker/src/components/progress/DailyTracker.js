<<<<<<< HEAD
import React, { useState } from "react";

export default function DailyTracker({ onScoreChange }) {
  const [form, setForm] = useState({
    satsang: false,
    seva: false,
    mala: 0,
    study: false,
    jobWorkHours: 0,
    noFap: false,
    exercise: false,
    notes: ""
  });

  const calculateScore = (data) => {
    const score =
      (data.satsang ? 1 : 0) +
      (data.seva ? 1 : 0) +
      (data.study ? 1 : 0) +
      (data.noFap ? 1 : 0) +
      (data.exercise ? 1 : 0) +
      (data.mala >= 5 ? 1 : 0);

    onScoreChange(score, data.noFap);
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    const newForm = {
      ...form,
      [name]: type === "checkbox" ? checked : value
    };

    setForm(newForm);
    calculateScore(newForm);
  };

  return (
    <div className="card">
      <h3>Daily Tracker</h3>
    <div className="tracker-grid">
      <label>
        <input type="checkbox" name="satsang" onChange={handleChange} />
        Satsang
      </label>

      <label>
        <input type="checkbox" name="seva" onChange={handleChange} />
        Seva
      </label>

      <label>
        <input type="checkbox" name="study" onChange={handleChange} />
        Study
      </label>

      <label>
        <input type="checkbox" name="noFap" onChange={handleChange} />
        NoFap
      </label>

      <label>
        <input type="checkbox" name="exercise" onChange={handleChange} />
        Exercise
      </label>

      <label>
        Mala Count:
        <input type="number" name="mala" value={form.mala} onChange={handleChange} />
      </label>

      <label>
        Job Work Hours:
        <input type="number" name="jobWorkHours" value={form.jobWorkHours} onChange={handleChange} />
      </label>

      <label>
        Notes:
        <textarea name="notes" value={form.notes} onChange={handleChange} />
      </label>
    </div>
    </div>
  );
}
=======
import React, { useState } from "react";

export default function DailyTracker({ onScoreChange }) {
  const [form, setForm] = useState({
    satsang: false,
    seva: false,
    mala: 0,
    study: false,
    jobWorkHours: 0,
    noFap: false,
    exercise: false,
    notes: ""
  });

  const calculateScore = (data) => {
    const score =
      (data.satsang ? 1 : 0) +
      (data.seva ? 1 : 0) +
      (data.study ? 1 : 0) +
      (data.noFap ? 1 : 0) +
      (data.exercise ? 1 : 0) +
      (data.mala >= 5 ? 1 : 0);

    onScoreChange(score, data.noFap);
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    const newForm = {
      ...form,
      [name]: type === "checkbox" ? checked : value
    };

    setForm(newForm);
    calculateScore(newForm);
  };

  return (
    <div className="card">
      <h3>Daily Tracker</h3>
    <div className="tracker-grid">
      <label>
        <input type="checkbox" name="satsang" onChange={handleChange} />
        Satsang
      </label>

      <label>
        <input type="checkbox" name="seva" onChange={handleChange} />
        Seva
      </label>

      <label>
        <input type="checkbox" name="study" onChange={handleChange} />
        Study
      </label>

      <label>
        <input type="checkbox" name="noFap" onChange={handleChange} />
        NoFap
      </label>

      <label>
        <input type="checkbox" name="exercise" onChange={handleChange} />
        Exercise
      </label>

      <label>
        Mala Count:
        <input type="number" name="mala" value={form.mala} onChange={handleChange} />
      </label>

      <label>
        Job Work Hours:
        <input type="number" name="jobWorkHours" value={form.jobWorkHours} onChange={handleChange} />
      </label>

      <label>
        Notes:
        <textarea name="notes" value={form.notes} onChange={handleChange} />
      </label>
    </div>
    </div>
  );
}
>>>>>>> 187a771c8e17bf05e25c8a29098bdab78c94e412
