import React from 'react'

const ProjectDetails=(props)=>{
    const id = props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur test</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the Fresh Water Lee</div>
                    <div>20th May, 10am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails