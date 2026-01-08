import React, { useState } from "react";

const App = () => {
  const allSkills = ["HTML", "CSS", "JavaScript", "React"];
  const [activeSkills, setActiveSkills] = useState([]);

  const toggleSkill = (skill) => {
    setActiveSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h2>Skill Tag Game</h2>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {allSkills.map((skill) => {
          const isActive = activeSkills.includes(skill);

          return (
            <span
              key={skill}
              onClick={() => toggleSkill(skill)}
              style={{
                padding: "8px 14px",
                borderRadius: "20px",
                cursor: "pointer",
                backgroundColor: isActive ? "green" : "#ddd",
                color: isActive ? "white" : "black",
                userSelect: "none",
              }}
            >
              {skill}
            </span>
          );
        })}
      </div>

      <div style={{ marginTop: "30px" }}>
        <strong>Active Skills:</strong>{" "}
        {activeSkills.length > 0 ? activeSkills.join(", ") : "None"}
      </div>
    </div>
  );
};

export default App;
