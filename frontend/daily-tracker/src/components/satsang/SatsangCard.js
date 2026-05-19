<<<<<<< HEAD
import React from "react";

export default function SatsangCard({ satsang, setSatsang }) {
  const toggle = (key) => {
    setSatsang({ ...satsang, [key]: !satsang[key] });
  };

  return (
    <div style={card}>
      <h3>🪔 Satsang Activity</h3>

      <label>
        <input
          type="checkbox"
          checked={satsang.mandir}
          onChange={() => toggle("mandir")}
        />
        Mandir
      </label>

      <label>
        <input
          type="checkbox"
          checked={satsang.group}
          onChange={() => toggle("group")}
        />
        Satsang Group
      </label>

      <label>
        <input
          type="checkbox"
          checked={satsang.bhajan}
          onChange={() => toggle("bhajan")}
        />
        Ek Bhajan
      </label>
    </div>
  );
}

const card = {
  border: "1px solid #ddd",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "15px"
};
=======
import React from "react";

export default function SatsangCard({ satsang, setSatsang }) {
  const toggle = (key) => {
    setSatsang({ ...satsang, [key]: !satsang[key] });
  };

  return (
    <div style={card}>
      <h3>🪔 Satsang Activity</h3>

      <label>
        <input
          type="checkbox"
          checked={satsang.mandir}
          onChange={() => toggle("mandir")}
        />
        Mandir
      </label>

      <label>
        <input
          type="checkbox"
          checked={satsang.group}
          onChange={() => toggle("group")}
        />
        Satsang Group
      </label>

      <label>
        <input
          type="checkbox"
          checked={satsang.bhajan}
          onChange={() => toggle("bhajan")}
        />
        Ek Bhajan
      </label>
    </div>
  );
}

const card = {
  border: "1px solid #ddd",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "15px"
};
>>>>>>> 187a771c8e17bf05e25c8a29098bdab78c94e412
