import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordPage() {
    const [step, setStep] = useState(1); // step 1: email, step 2: new password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Step 1 - Check email exists
    const handleEmailCheck = async () => {
        if (!email) { setError("Email દાખલ કરો"); return; }
        setLoading(true); setError("");

        try {
            const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();

            if (!res.ok) { setError(data.message); return; }
            setStep(2); // email found - go to reset step
        } catch {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    // Step 2 - Reset password
    const handleReset = async () => {
        if (password !== confirm) { setError("Passwords match નથી"); return; }
        if (password.length < 6) { setError("Minimum 6 characters"); return; }
        setLoading(true); setError("");

        try {
            const res = await fetch("http://localhost:5000/api/auth/reset-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();

            if (!res.ok) { setError(data.message); return; }

            alert("✅ Password reset થઈ ગયો! Sign in કરો.");
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

                {/* Step 1 - Email */}
                {step === 1 && (
                    <>
                        <h2 style={styles.title}>🔑 Forgot Password</h2>
                        <p style={styles.subtitle}>તમારો email દાખલ કરો</p>

                        {error && <p style={styles.error}>{error}</p>}

                        <input
                            style={styles.input}
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button style={styles.btn} onClick={handleEmailCheck} disabled={loading}>
                            {loading ? "Checking..." : "Next →"}
                        </button>

                        <p style={styles.back} onClick={() => navigate("/login")}>
                            ← Back to Login
                        </p>
                    </>
                )}

                {/* Step 2 - New Password */}
                {step === 2 && (
                    <>
                        <h2 style={styles.title}>🔒 New Password</h2>
                        <p style={styles.subtitle}>{email} માટે નવો password set કરો</p>

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

                        <button style={styles.btn} onClick={handleReset} disabled={loading}>
                            {loading ? "Saving..." : "Reset Password"}
                        </button>

                        <p style={styles.back} onClick={() => setStep(1)}>
                            ← Back
                        </p>
                    </>
                )}

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
    back: { marginTop: "14px", textAlign: "center", color: "#16a34a", cursor: "pointer", fontSize: "14px" },
};