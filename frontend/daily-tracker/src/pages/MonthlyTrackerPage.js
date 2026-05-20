import React, { useState, useEffect } from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer
} from "recharts";

const HABITS = [
    "Naam Jap (5 min)",
    "Satsang / Bhajan",
    "Prarthana",
    "NoFap",
    "Exercise",
    "Study / Kaam",
    "Seva",
    "Mala (5+)",
    "No Reel > 15 min",
    "Early Wake (before 7)"
];

const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);

const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export default function MonthlyTrackerPage() {
    const today = new Date();
    const [month, setMonth] = useState(MONTHS[today.getMonth()]);
    const [year, setYear] = useState(today.getFullYear());
    const [grid, setGrid] = useState(
        () => Array.from({ length: 10 }, () => Array(31).fill(false))
    );

    const storageKey = `habitGrid_${month}_${year}`;

    // Load saved data
    useEffect(() => {
        const saved = localStorage.getItem(storageKey);
        if (saved) setGrid(JSON.parse(saved));
        else setGrid(Array.from({ length: 10 }, () => Array(31).fill(false)));
    }, [month, year]);

    // Save on change
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(grid));
    }, [grid, storageKey]);

    const toggle = (row, col) => {
        setGrid(prev => {
            const next = prev.map(r => [...r]);
            next[row][col] = !next[row][col];
            return next;
        });
    };

    // Daily score = how many habits done each day
    const dailyScores = DAYS.map(d => ({
        day: d,
        done: grid.reduce((acc, row) => acc + (row[d - 1] ? 1 : 0), 0)
    }));

    // Stats
    const totalChecks = grid.flat().filter(Boolean).length;
    const perfectDays = dailyScores.filter(d => d.done === 10).length;
    const avgScore = (dailyScores.reduce((a, b) => a + b.done, 0) / 31).toFixed(1);

    const clearAll = () => {
        if (window.confirm("બધું clear કરવું છે?")) {
            setGrid(Array.from({ length: 10 }, () => Array(31).fill(false)));
        }
    };

    return (
        <div style={s.page}>

            {/* ── Header ── */}
            <div style={s.header}>
                <div>
                    <h2 style={s.title}>📅 Monthly Habit Tracker</h2>
                    <p style={s.quote}>"Success is the Product of Daily Habits" — James Clear</p>
                </div>
                <div style={s.monthRow}>
                    <select style={s.select} value={month} onChange={e => setMonth(e.target.value)}>
                        {MONTHS.map(m => <option key={m}>{m}</option>)}
                    </select>
                    <select style={s.select} value={year} onChange={e => setYear(Number(e.target.value))}>
                        {[2024, 2025, 2026, 2027].map(y => <option key={y}>{y}</option>)}
                    </select>
                </div>
            </div>

            {/* ── Stats Row ── */}
            <div style={s.statsRow}>
                <div style={s.statBox}>
                    <span style={s.statNum}>{totalChecks}</span>
                    <span style={s.statLabel}>Total ✔️</span>
                </div>
                <div style={s.statBox}>
                    <span style={s.statNum}>{perfectDays}</span>
                    <span style={s.statLabel}>Perfect Days 🌟</span>
                </div>
                <div style={s.statBox}>
                    <span style={s.statNum}>{avgScore}</span>
                    <span style={s.statLabel}>Avg Score 📊</span>
                </div>
                <div style={s.statBox}>
                    <span style={s.statNum}>{Math.round((totalChecks / (31 * 10)) * 100)}%</span>
                    <span style={s.statLabel}>Completion 🎯</span>
                </div>
            </div>

            {/* ── Grid ── */}
            <div style={s.card}>
                <div style={{ overflowX: "auto" }}>
                    <table style={s.table}>
                        <thead>
                            <tr>
                                <th style={{ ...s.th, ...s.habitCol, textAlign: "left" }}>
                                    HABITS / PROTOCOLS
                                </th>
                                {DAYS.map(d => (
                                    <th key={d} style={{
                                        ...s.th, ...s.dayCol,
                                        background: d === today.getDate() && month === MONTHS[today.getMonth()]
                                            ? "#dcfce7" : "#f8fafc",
                                        color: d === today.getDate() && month === MONTHS[today.getMonth()]
                                            ? "#16a34a" : "#64748b",
                                        fontWeight: d === today.getDate() ? "800" : "600"
                                    }}>
                                        {d}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {HABITS.map((habit, ri) => {
                                const rowDone = grid[ri].filter(Boolean).length;
                                return (
                                    <tr key={ri} style={{ background: ri % 2 === 0 ? "#fff" : "#fafafa" }}>
                                        <td style={s.habitCell}>
                                            <span style={s.habitNum}>{ri + 1}</span>
                                            <span style={s.habitName}>{habit}</span>
                                            <span style={{
                                                ...s.rowCount,
                                                background: rowDone >= 20 ? "#dcfce7" : rowDone >= 10 ? "#fef9c3" : "#f1f5f9",
                                                color: rowDone >= 20 ? "#16a34a" : rowDone >= 10 ? "#ca8a04" : "#94a3b8"
                                            }}>
                                                {rowDone}
                                            </span>
                                        </td>
                                        {DAYS.map(d => (
                                            <td
                                                key={d}
                                                onClick={() => toggle(ri, d - 1)}
                                                style={{
                                                    ...s.cell,
                                                    background: grid[ri][d - 1] ? "#16a34a" : "transparent",
                                                    borderRadius: grid[ri][d - 1] ? "6px" : "4px",
                                                }}
                                            >
                                                {grid[ri][d - 1] && (
                                                    <span style={s.check}>✓</span>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })}

                            {/* Score row */}
                            <tr style={{ borderTop: "2px solid #e2e8f0" }}>
                                <td style={{ ...s.habitCell, fontWeight: "700", color: "#1e293b" }}>
                                    <span style={s.habitNum}>✦</span>
                                    <span>Daily Score</span>
                                </td>
                                {dailyScores.map(({ day, done }) => (
                                    <td key={day} style={{
                                        ...s.cell,
                                        fontWeight: "700",
                                        fontSize: "11px",
                                        color: done >= 8 ? "#16a34a" : done >= 5 ? "#ca8a04" : done > 0 ? "#64748b" : "#e2e8f0",
                                        background: done >= 8 ? "#dcfce7" : "transparent",
                                        borderRadius: "4px"
                                    }}>
                                        {done > 0 ? done : ""}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ── Score Chart ── */}
            <div style={s.card}>
                <h3 style={s.cardTitle}>📈 Score Graph — {month} {year}</h3>
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={dailyScores} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                        <XAxis dataKey="day" tick={{ fontSize: 11 }} interval={4} />
                        <YAxis domain={[0, 10]} ticks={[0, 2, 4, 6, 8, 10]} tick={{ fontSize: 11 }} />
                        <Tooltip
                            formatter={(v) => [`${v}/10`, "Score"]}
                            labelFormatter={(l) => `Day ${l}`}
                        />
                        <Line
                            type="monotone" dataKey="done"
                            stroke="#16a34a" strokeWidth={2.5}
                            dot={{ r: 3, fill: "#16a34a" }}
                            activeDot={{ r: 5 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* ── Legend ── */}
            <div style={s.legend}>
                <div style={s.legendItem}>
                    <span style={{ ...s.dot, background: "#16a34a" }} /> ✓ Done
                </div>
                <div style={s.legendItem}>
                    <span style={{ ...s.dot, background: "#f1f5f9", border: "1px solid #e2e8f0" }} /> Empty
                </div>
                <div style={{ ...s.legendItem, marginLeft: "auto" }}>
                    <span style={{ ...s.dot, background: "#16a34a40", width: 10, height: 10 }} />
                    Today highlighted
                </div>
                <button onClick={clearAll} style={s.clearBtn}>🗑 Clear All</button>
            </div>

        </div>
    );
}

const s = {
    page: {
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "20px 16px 40px",
        fontFamily: "'Poppins', sans-serif",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "12px",
        marginBottom: "20px",
    },
    title: {
        fontFamily: "'Nunito', sans-serif",
        fontWeight: "800",
        fontSize: "22px",
        color: "#1e293b",
        marginBottom: "4px",
    },
    quote: {
        fontSize: "12px",
        color: "#94a3b8",
        fontStyle: "italic",
    },
    monthRow: {
        display: "flex",
        gap: "8px",
    },
    select: {
        padding: "8px 12px",
        borderRadius: "8px",
        border: "1px solid #e2e8f0",
        background: "#fff",
        fontSize: "14px",
        fontFamily: "'Poppins', sans-serif",
        color: "#1e293b",
        cursor: "pointer",
        outline: "none",
    },
    statsRow: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "12px",
        marginBottom: "16px",
    },
    statBox: {
        background: "#fff",
        borderRadius: "12px",
        padding: "14px 10px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        border: "1px solid #e2e8f0",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
    },
    statNum: {
        fontSize: "22px",
        fontWeight: "800",
        fontFamily: "'Nunito', sans-serif",
        color: "#16a34a",
    },
    statLabel: {
        fontSize: "11px",
        color: "#64748b",
        fontWeight: "500",
    },
    card: {
        background: "#fff",
        borderRadius: "14px",
        padding: "20px",
        marginBottom: "16px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
        border: "1px solid rgba(226,232,240,0.8)",
    },
    cardTitle: {
        fontFamily: "'Nunito', sans-serif",
        fontWeight: "700",
        fontSize: "16px",
        color: "#1e293b",
        marginBottom: "16px",
    },
    table: {
        borderCollapse: "separate",
        borderSpacing: "2px",
        width: "100%",
        minWidth: "900px",
    },
    th: {
        padding: "8px 4px",
        fontSize: "12px",
        fontWeight: "700",
        textAlign: "center",
        borderRadius: "6px",
        userSelect: "none",
    },
    habitCol: {
        width: "200px",
        minWidth: "180px",
        padding: "8px 12px",
    },
    dayCol: {
        width: "28px",
        minWidth: "24px",
    },
    habitCell: {
        padding: "8px 10px",
        fontSize: "13px",
        color: "#1e293b",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        borderRadius: "6px",
        minWidth: "180px",
    },
    habitNum: {
        fontSize: "11px",
        fontWeight: "700",
        color: "#94a3b8",
        minWidth: "16px",
    },
    habitName: {
        flex: 1,
        fontSize: "13px",
        fontWeight: "500",
    },
    rowCount: {
        fontSize: "11px",
        fontWeight: "700",
        padding: "2px 6px",
        borderRadius: "99px",
        minWidth: "24px",
        textAlign: "center",
    },
    cell: {
        width: "28px",
        height: "28px",
        cursor: "pointer",
        textAlign: "center",
        verticalAlign: "middle",
        transition: "all 0.15s ease",
        border: "1px solid #f1f5f9",
    },
    check: {
        fontSize: "14px",
        color: "#fff",
        fontWeight: "700",
        lineHeight: 1,
    },
    legend: {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        flexWrap: "wrap",
        fontSize: "13px",
        color: "#64748b",
    },
    legendItem: {
        display: "flex",
        alignItems: "center",
        gap: "6px",
    },
    dot: {
        width: "12px",
        height: "12px",
        borderRadius: "3px",
        display: "inline-block",
    },
    clearBtn: {
        marginLeft: "auto",
        padding: "6px 14px",
        background: "#fee2e2",
        color: "#ef4444",
        border: "1px solid rgba(239,68,68,0.2)",
        borderRadius: "8px",
        fontSize: "13px",
        fontWeight: "600",
        cursor: "pointer",
        fontFamily: "'Poppins', sans-serif",
    },
};