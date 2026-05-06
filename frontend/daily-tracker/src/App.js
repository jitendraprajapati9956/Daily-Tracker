import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import MonthlyReport from "./pages/MonthlyReport";
import StreakPage from "./pages/StreakPage";
import RoutinePage from "./pages/RoutinePage";

export default function App() {
  const [activeTab, setActiveTab] = useState("progress");

  return (
    <>
      <Navbar active={activeTab} setActive={setActiveTab} />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/report" element={<MonthlyReport />} />
        <Route path="/streak" element={<StreakPage />} />
        <Route path="/routine" element={<RoutinePage />} />
      </Routes>
    </>
  );
}
