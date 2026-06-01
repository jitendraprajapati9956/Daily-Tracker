import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function NamJapTrackerPage() {
  cconst { user } = useAuth();
const storageKey = `namjap_entries_${user?._id}`;

const [entries, setEntries] = useState([]);

useEffect(() => {
  const saved = localStorage.getItem(storageKey);
  setEntries(saved ? JSON.parse(saved) : []);
}, [storageKey]);

useEffect(() => {
  localStorage.setItem(storageKey, JSON.stringify(entries));
}, [entries, storageKey]);

  // ADD ENTRY
  const addEntry = () => {
    if (!count) return;

    const previousTotal =
      entries.length > 0
        ? entries[0].grandTotal
        : 0;

    const newEntry = {
      id: Date.now(),

      dayNo: entries.length + 1,

      date: new Date().toLocaleDateString("en-GB"),

      todayCount: Number(count),

      grandTotal:
        previousTotal + Number(count),

      proofImage: "",
    };

    setEntries((prev) => [
      newEntry,
      ...prev,
    ]);

    setCount("");
  };
  // UPLOAD PROOF IMAGE
  const uploadProof = (id, e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const updated = entries.map((item) =>
        item.id === id
          ? {
            ...item,
            proofImage: reader.result,
          }
          : item
      );

      setEntries(updated);
    };

    reader.readAsDataURL(file);
  };
  // DELETE ENTRY
  const deleteEntry = (id) => {
    const confirmDelete = window.confirm(
      "Delete this entry?"
    );

    if (!confirmDelete) return;

    const updated = entries.filter(
      (item) => item.id !== id
    );

    // RECALCULATE TOTALS
    let running = 0;

    const recalculated = updated
      .reverse()
      .map((item, index) => {
        running += Number(item.todayCount);

        return {
          ...item,
          dayNo: index + 1,
          grandTotal: running,
        };
      })
      .reverse();

    setEntries(recalculated);
  };

  // EDIT ENTRY
  const editEntry = (id) => {
    const item = entries.find(
      (entry) => entry.id === id
    );

    const newValue = prompt(
      "Edit Today's Naam Jap",
      item.todayCount
    );

    if (
      newValue === null ||
      newValue === ""
    )
      return;

    const updated = entries.map((entry) =>
      entry.id === id
        ? {
          ...entry,
          todayCount: Number(newValue),
        }
        : entry
    );

    // RECALCULATE TOTALS
    let running = 0;

    const recalculated = updated
      .reverse()
      .map((item, index) => {
        running += Number(item.todayCount);

        return {
          ...item,
          dayNo: index + 1,
          grandTotal: running,
        };
      })
      .reverse();

    setEntries(recalculated);
  };

  // GRAPH DATA
  const chartData = [...entries]
    .reverse()
    .map((item) => ({
      day: `Day ${item.dayNo}`,
      today: item.todayCount,
      total: item.grandTotal,
    }));

  return (
    <div style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>
            📿 Naam Jap Tracker
          </h2>

          <p style={styles.subtitle}>
            Daily Naam Jap Progress
          </p>
        </div>

        <div style={styles.totalBox}>
          <span style={styles.totalLabel}>
            Current Total
          </span>

          <span style={styles.totalValue}>
            {entries.length > 0
              ? entries[0].grandTotal
              : 0}
          </span>
        </div>
      </div>

      {/* INPUT */}
      <div style={styles.card}>
        <div style={styles.inputRow}>
          <input
            type="number"
            placeholder="Enter Today's Naam Jap"
            value={count}
            onChange={(e) =>
              setCount(e.target.value)
            }
            style={styles.input}
          />

          <button
            onClick={addEntry}
            style={styles.addBtn}
          >
            ➕ Add Entry
          </button>
        </div>
      </div>



      {/* TABLE */}
      <div style={styles.card}>
        <div style={{ overflowX: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>
                  Date
                </th>

                <th style={styles.th}>
                  Day
                </th>

                <th style={styles.th}>
                  Today
                </th>

                <th style={styles.th}>
                  Total
                </th>

                <th style={styles.th}>
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {entries.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    style={styles.empty}
                  >
                    No Entries Added
                  </td>
                </tr>
              ) : (
                entries.map((item, index) => (
                  <tr
                    key={item.id}
                    style={{
                      background:
                        index % 2 === 0
                          ? "#fff"
                          : "#fafafa",
                    }}
                  >
                    {/* DATE */}
                    <td style={styles.td}>
                      {item.date}
                    </td>

                    {/* DAY */}
                    <td style={styles.td}>
                      {item.dayNo}
                    </td>

                    {/* TODAY */}
                    <td
                      style={{
                        ...styles.td,
                        color: "#2563eb",
                        fontWeight: "700",
                      }}
                    >
                      {item.todayCount}
                    </td>

                    {/* TOTAL */}
                    <td
                      style={{
                        ...styles.td,
                        color: "#16a34a",
                        fontWeight: "800",
                      }}
                    >
                      {item.grandTotal}
                    </td>

                    {/* ACTIONS */}
                    <td style={styles.td}>
                      <div style={styles.actionWrap}>
                        <button
                          onClick={() =>
                            editEntry(item.id)
                          }
                          style={styles.editBtn}
                        >
                          Edit
                        </button>

                        {/* IMAGE UPLOAD */}
                        <label style={styles.proofBtn}>
                          Proof
                          <input
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={(e) =>
                              uploadProof(item.id, e)
                            }
                          />
                        </label>

                        <button
                          onClick={() =>
                            deleteEntry(item.id)
                          }
                          style={styles.deleteBtn}
                        >
                          Delete
                        </button>
                      </div>


                    </td>
                    {/* IMAGE PREVIEW */}
                    {item.proofImage && (
                      <img
                        src={item.proofImage}
                        alt="proof"
                        style={styles.proofImage}
                      />
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* GRAPH */}
      <div style={styles.card}>
        <h3 style={styles.graphTitle}>
          📈 Naam Jap Progress Graph
        </h3>

        <div style={{ width: "100%", height: 320 }}>
          <ResponsiveContainer>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              {/* TODAY LINE */}
              <Line
                type="monotone"
                dataKey="today"
                stroke="#2563eb"
                strokeWidth={3}
              />

              {/* TOTAL LINE */}
              <Line
                type="monotone"
                dataKey="total"
                stroke="#16a34a"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>

  );
}

const styles = {
  page: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Poppins, sans-serif",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "20px",
  },

  title: {
    fontSize: "28px",
    fontWeight: "800",
    color: "#1e293b",
  },

  subtitle: {
    fontSize: "13px",
    color: "#64748b",
  },

  totalBox: {
    background: "#16a34a",
    color: "#fff",
    padding: "14px 20px",
    borderRadius: "14px",
    textAlign: "center",
  },

  totalLabel: {
    fontSize: "12px",
  },

  totalValue: {
    display: "block",
    fontSize: "28px",
    fontWeight: "800",
  },

  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "20px",
    marginBottom: "20px",
    border: "1px solid #e2e8f0",
    boxShadow:
      "0 4px 14px rgba(0,0,0,0.06)",
  },

  graphTitle: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#1e293b",
  },

  inputRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },

  input: {
    flex: 1,
    minWidth: "240px",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    fontSize: "14px",
  },

  addBtn: {
    border: "none",
    background: "#16a34a",
    color: "#fff",
    padding: "12px 18px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "700",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    background: "#16a34a",
    color: "#fff",
    padding: "14px",
    textAlign: "left",
    fontSize: "14px",
  },

  td: {
    padding: "14px",
    borderBottom: "1px solid #e2e8f0",
    fontSize: "14px",
  },

  empty: {
    textAlign: "center",
    padding: "30px",
    color: "#94a3b8",
    fontWeight: "600",
  },

  actionWrap: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },

  editBtn: {
    border: "none",
    background: "#2563eb",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },

  proofBtn: {
    border: "none",
    background: "#f59e0b",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
  proofImage: {
    width: "70px",
    height: "70px",
    objectFit: "cover",
    borderRadius: "10px",
    marginTop: "10px",
    border: "2px solid #e2e8f0",
  },
  deleteBtn: {
    border: "none",
    background: "#ef4444",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
};
