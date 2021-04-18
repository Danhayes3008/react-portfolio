import React from 'react'

const Project = ({project}) => {
    return (
        <div className="project">
            <h1 className="project-name">{project.name}</h1>
            <img src={project.src} alt='project'></img>
            <p>{project.text}</p>
        </div>
    )
}

export default Project
