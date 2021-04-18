import React from 'react'

const Project = ({project}) => {
    return (
        <div className="project">
            <h1 className="project-name">{project.name}</h1>
            <img src={project.Poster} alt='project'></img>
            <p>Coming soon</p>
        </div>
    )
}

export default Project
