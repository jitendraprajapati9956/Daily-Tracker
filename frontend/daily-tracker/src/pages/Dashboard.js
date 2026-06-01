import React, { useState, useEffect } from "react";
import DailyTracker from "../components/progress/DailyTracker";
import ProgressBar from "../components/progress/ProgressBar";
import StreakCard from "../components/progress/StreakCard";
import MonthlyChart from "../components/progress/MonthlyChart";
import GoalMeter from "../components/progress/GoalMeter";
import BadHabitWarning from "../components/progress/BadHabitWarning";
import { calculateStreak } from "../utils/streakCalculator";
import JapTimer from "../components/jap/JapTimer";
import JapMethodCard from "../components/jap/JapMethodCard";
import MalaCounter from "../components/jap/MalaCounter";
import KrupaPoints from "../components/jap/KrupaPoints";
import MinimumJapRule from "../components/jap/MinimumJapRule";
import EmergencyJap from "../components/mind/EmergencyJap";
import MindReset from "../components/mind/MindReset";
import RecoveryMode from "../components/mind/RecoveryMode";
import OverthinkingControl from "../components/mind/OverthinkingControl";
import RoutineTimeline from "../components/routine/RoutineTimeline";
import WakeUpTracker from "../components/routine/WakeUpTracker";
import WakeTimeFixer from "../components/routine/WakeTimeFixer";
import BalanceTracker from "../components/routine/BalanceTracker";
import DayStatusDots from "../components/routine/DayStatusDots";
import JapReminder from "../components/routine/JapReminder";
import SpiritualRoutineCard from "../components/satsang/SpiritualRoutineCard";
import SatsangCard from "../components/satsang/SatsangCard";
import MotivationCard from "../components/satsang/MotivationCard";
import Navbar from "../components/Navbar";
import MonthlyTrackerPage from "./MonthlyTrackerPage";
import NamJapTrackerPage from "./NamJapTrackerPage";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("progress");
  const [score, setScore] = useState(0);
  const [noFap, setNoFap] = useState(true);
  const [japDone, setJapDone] = useState(false);

  // // ✅ Move useEffect INSIDE component
  // useEffect(() => {
  //   const hour = new Date().getHours();

  //   if (hour > 8) {
  //     alert("⚠️ Mobile check before Jap = streak risk");
  //   }
  // }, []);

  useEffect(() => {
    const today = new Date().getDay();

    if (today === 0) {
      alert("🔥 Sunday Special: 7–10 Min Jap Today!");
    }
  }, []);

  // Dummy monthly data
  const monthlyData = [
    { date: "1", score: 3 },
    { date: "2", score: 4 },
    { date: "3", score: 5 },
    { date: "4", score: 2 },
    { date: "5", score: 6 }
  ];

  const streak = calculateStreak(monthlyData);
  const completedDays = monthlyData.filter(d => d.score >= 4).length;

  const [selfCheck, setSelfCheck] = useState({
    jap: false,
    satsang: false,
    mobile: false
  });

  const [satsang, setSatsang] = useState({
    mandir: false,
    group: false,
    bhajan: false
  });
const { user } = useAuth();

if (!user) {
  return <Navigate to="/login" />;
}
  return (
<div className="dashboard">  <div style={{ maxWidth: "1000px", margin: "auto", padding: "10px" }}>


      <h2>Dashboard</h2>

      <Navbar active={activeTab} setActive={setActiveTab} />
      {/* ================= PROGRESS ================= */}
      {activeTab === "progress" && (
        <>
          <BadHabitWarning score={score} noFap={noFap} />

          <div className="top-grid">
            <StreakCard streak={streak} />
            <GoalMeter totalDays={30} completedDays={completedDays} />
          </div>

          <ProgressBar score={score} total={6} />

          <DailyTracker
            onScoreChange={(s, nf) => {
              setScore(s);
              setNoFap(nf);
            }}
          />

          <MonthlyChart data={monthlyData} />
        </>
      )}

      {/* ================= JAP ================= */}
      {activeTab === "jap" && (
        <>
          <SpiritualRoutineCard
            japDone={japDone}
            setJapDone={setJapDone}
            selfCheck={selfCheck}
            setSelfCheck={setSelfCheck}
          />

          <JapMethodCard />
          <MalaCounter />
          <KrupaPoints />
          <JapTimer onComplete={() => setScore(prev => prev + 5)} />
          <MinimumJapRule onComplete={() => setScore(prev => prev + 5)} />
        </>
      )}

      {/* ================= MIND ================= */}
      {activeTab === "mind" && (
        <>
          <MindReset />
          <EmergencyJap onMini={() => setScore(prev => prev + 2)} />
          <RecoveryMode />
          <OverthinkingControl />
        </>
      )}

      {/* ================= ROUTINE ================= */}
      {activeTab === "routine" && (
        <>
          <RoutineTimeline />
          <DayStatusDots />
          <JapReminder />
          <WakeUpTracker />
          <WakeTimeFixer />
          <BalanceTracker jobDone={true} japDone={true} />
        </>
      )}

      {/* ================= SATSANG ================= */}
      {activeTab === "satsang" && (
        <>
          <MotivationCard />
          <SatsangCard satsang={satsang} setSatsang={setSatsang} />
        </>
      )}
      {/* === TRACKER === */}
      {activeTab === "tracker" && (
        <MonthlyTrackerPage />
      )}
      {/* === NAAM JAP TRACKER === */}
      {activeTab === "namjap" && (
        <NamJapTrackerPage />
      )}
    </div >
    </div >

  );
}
.dashboard {
  width: 100%;
  min-height: 100vh;
  background: #f8fafc;
}

.dashboard-container {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
}

.top-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .top-grid {
    grid-template-columns: 1fr;
  }

  .dashboard-container {
    padding: 10px;
  }
}
