import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ active, setActive }) {
  const { user, logout } = useAuth();

  const tabs = [
    { id: "progress", label: "Progress" },
    { id: "jap", label: "Jap" },
    { id: "mind", label: "Mind" },
    { id: "routine", label: "Routine" },
    { id: "satsang", label: "Satsang" },
    { id: "tracker", label: "📅 Tracker" },
    { id: "namjap", label: "📿 NaamJap" },
  ];

  return (
    <div className="navbar">
      <div style={{ display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={active === tab.id ? "active" : ""}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
        {user && (
          <span style={{ fontSize: "13px", color: "#64748b" }}>
            👤 {user.name}
          </span>
        )}
        <button
          onClick={logout}
          style={{
            background: "#ef4444",
            color: "#fff",
            border: "none",
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}