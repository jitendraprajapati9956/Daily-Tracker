import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ResetPasswordPage() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (password !== confirm) { setError("Passwords don't match"); return; }
    if (password.length < 6) { setError("Minimum 6 characters"); return; }

    setLoading(true); setError("");
    try {
      const res = await fetch(`/api/auth/reset-password/${token}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.message); return; }
      alert("✅ Password reset! Please sign in.");
      navigate("/login");
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2>🔒 Reset Password</h2>

        {error && <p style={styles.error}>{error}</p>}

        <input
          style={styles.input}
          placeholder="New Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          style={styles.input}
          placeholder="Confirm Password"
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        <button style={styles.btn} onClick={handleSubmit} disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0fdf4" },
  card: { background: "#fff", padding: "32px", borderRadius: "16px", width: "100%", maxWidth: "400px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" },
  input: { display: "block", width: "100%", padding: "12px", marginBottom: "14px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "15px", boxSizing: "border-box" },
  btn: { width: "100%", padding: "12px", background: "#16a34a", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" },
  error: { background: "#fee2e2", color: "#b91c1c", padding: "10px", borderRadius: "8px", marginBottom: "14px" },
};