import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
    const [isSignup, setIsSignup] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setError("");
        setLoading(true);

        const endpoint = isSignup
            ? "http://localhost:5000/api/auth/signup"
            : "http://localhost:5000/api/auth/signin";
        const body = isSignup
            ? form
            : { email: form.email, password: form.password };

        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const data = await res.json();

            if (!res.ok) { setError(data.message); return; }

            login(data.token, data.user);
            navigate("/");
        } catch {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <h2 style={styles.title}>Daily Tracker</h2>
                <p style={styles.subtitle}>{isSignup ? "Create account" : "Welcome back"}</p>

                {error && <p style={styles.error}>{error}</p>}

                {isSignup && (
                    <input
                        style={styles.input}
                        placeholder="Full Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                )}

                <input
                    style={styles.input}
                    placeholder="Email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    style={styles.input}
                    placeholder="Password"
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <button style={styles.btn} onClick={handleSubmit} disabled={loading}>
                    {loading ? "Please wait..." : isSignup ? "Sign Up" : "Sign In"}
                </button>

                {!isSignup && (
                    <p
                        style={styles.link}
                        onClick={() => navigate("/forgot-password")}
                    >
                        Forgot password?
                    </p>
                )}

                <p style={styles.toggle}>
                    {isSignup ? "Already have an account? " : "New here? "}
                    <span style={styles.link} onClick={() => setIsSignup(!isSignup)}>
                        {isSignup ? "Sign In" : "Sign Up"}
                    </span>
                </p>
            </div>
        </div>
    );
}

const styles = {
    page: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0fdf4" },
    card: { background: "#fff", padding: "32px", borderRadius: "16px", width: "100%", maxWidth: "400px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" },
    title: { textAlign: "center", marginBottom: "4px" },
    subtitle: { textAlign: "center", color: "#666", marginBottom: "24px" },
    input: { display: "block", width: "100%", padding: "12px", marginBottom: "14px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "15px", boxSizing: "border-box" },
    btn: { width: "100%", padding: "12px", background: "#16a34a", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" },
    error: { background: "#fee2e2", color: "#b91c1c", padding: "10px", borderRadius: "8px", marginBottom: "14px", fontSize: "14px" },
    link: { color: "#16a34a", cursor: "pointer", textDecoration: "underline" },
    toggle: { marginTop: "16px", textAlign: "center", fontSize: "14px" },
};