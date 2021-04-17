import React from "react";
import { useState } from "react";

const Projects = () => {
  const [project] = useState([
    {
      id: 1,
      name: "Project 1",
      photo: "../../styles/img/me_temp.png",
      text: "Coming Soon"
    }
  ])
  return (
    <div className="projects">
      <h1>Projects</h1>
      <p>welcome all</p>
    </div>
  );
};

export default Projects;
