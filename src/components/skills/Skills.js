import React from "react";
import { useState } from "react";
import Skill from "./Skill";

const Skills = () => {
  const [skills] = useState([
    {
      id: 1,
      text: "HTML5",
      persentage: 80,
      width: "80%",
      borderRadius: "20px",
      height: "100%",
      backgroundColor: "green",
    },
    {
      id: 2,
      text: "JavaScript",
      persentage: 75,
      width: "75%",
      borderRadius: "20px",
      height: "100%",
      backgroundColor: "green",
    },
    {
      id: 3,
      text: "Python",
      persentage: 45,
      width: "45%",
      borderRadius: "20px",
      height: "100%",
      backgroundColor: "green",
    },
    {
      id: 4,
      text: "Databases",
      persentage: 35,
      width: "35%",
      borderRadius: "20px",
      height: "100%",
      backgroundColor: "green",
    },
  ]);
  return (
    <>
      <div>
        <h1 className="Skills-title">Skills</h1>
        {skills.map((skill) => (
          <Skill key={skill.id} skills={skill} />
        ))}
      </div>
    </>
  );
};

export default Skills;
