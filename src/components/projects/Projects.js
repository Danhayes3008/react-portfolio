import React from "react";
import { useState } from "react";
import Project from "./Project";
import images from "./ProjectImages";

const Projects = () => {
  const [project] = useState([
    {
      id: 1,
      name: "Project 1",
      src: images.Image,
      text: "Coming Soon",
    },
    {
      id: 2,
      name: "Project 2",
      src: images.Thanos,
      text: "Coming Soon",
    },
    {
      id: 3,
      name: "Project 3",
      imageUrl: require("../../styles/img/me_temp.png"),
      text: "Coming Soon",
    },
    {
      id: 4,
      name: "Project 4",
      image: "../../styles/img/me_temp.png",
      text: "Coming Soon",
    },
  ]);
  return (
    <div className="projects">
      <h1 className="project-title">Projects</h1>
      <>
        {project.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </>
    </div>
  );
};

export default Projects;
