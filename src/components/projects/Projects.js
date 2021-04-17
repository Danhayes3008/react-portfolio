import React from "react";
import { useState } from "react";
import Project from "./Project"

const Projects = () => {
  const [project] = useState([
    {
      id: 1,
      name: "Project 1",
      photo: "../../styles/img/me_temp.png",
      text: "Coming Soon"
    },
    {
      id: 2,
      name: "Project 2",
      photo: "../../styles/img/me_temp.png",
      text: "Coming Soon"
    },
    {
      id: 3,
      name: "Project 3",
      photo: "../../styles/img/me_temp.png",
      text: "Coming Soon"
    },
  ])
  return (
    <div className="projects">
      <h1>Projects</h1>
      <>
      {project.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </>
    </div>
  );
};

export default Projects;
