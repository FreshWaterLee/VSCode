import React from 'react'

const ProjectSummary=({project})=>{
  return(
    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.title}</span>
            <p>Posted by the Fresh Water Lee</p>
            <p className="greay-text">20rd May, 10am</p>
        </div>
    </div>
  )
}

export default ProjectSummary;