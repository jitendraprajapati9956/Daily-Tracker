import React, { useState } from "react";
import SpiritualRoutineCard from "../components/satsang/SpiritualRoutineCard";
import SatsangCard from "../components/satsang/SatsangCard";
import RoutineTimeline from "../components/routine/RoutineTimeline";
import MotivationCard from "../components/satsang/MotivationCard";
import JapTracker from "../components/jap/JapTracker";


export default function RoutinePage() {
  const [japDone, setJapDone] = useState(false);

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

  return (
    <div style={container}>
      <h2>🧭 Spiritual Routine</h2>

      <MotivationCard />

      <SpiritualRoutineCard
        japDone={japDone}
        setJapDone={setJapDone}
        selfCheck={selfCheck}
        setSelfCheck={setSelfCheck}
      />

      <SatsangCard satsang={satsang} setSatsang={setSatsang} />

      <RoutineTimeline />

      <JapTracker />

       <h4>📵 Mobile Control Plan</h4>

  <p>🔒 Jap pela mobile nai</p>
  <p>🔒 Sova 30 min pela mobile bandh</p>
  <p>🔒 Reel only 15 min (timer)</p>
  <p>📍 Mobile door charge ma mukvo</p>

  <h4>🧠 Mind bhage to su karvu?</h4>

  <p>Stop nai karvu.</p>
  <p>Repeat:</p>
  <b>“Hu karu chu etle krupa thai rahi che”</b>
    </div>
  );
}

const container = {
  maxWidth: "500px",
  margin: "auto",
  padding: "15px"
};
