import React from "react";
import { useState } from "react";
import Project from "./Project"

const Projects = () => {
  const [project] = useState([
    {
      "id": 1,
      "name": "Project 1",
      "imageUrl": 'https://unsplash.com/s/photos/city',
      text: "Coming Soon",
    },
    {
      id: 2,
      name: "Project 2",
      poster: 'https://unsplash.com/s/photos/city',
      text: "Coming Soon",
    },
    {
      id: 3,
      name: "Project 3",
      Poster: 'https://unsplash.com/s/photos/city',
      text: "Coming Soon"
    },
    {
      id: 4,
      name: "Project 4",
      Poster: 'https://unsplash.com/s/photos/city',
      text: "Coming Soon"
    },
  ])
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
