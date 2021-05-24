import React from 'react'
import {NavLink} from 'react-router-dom'

const SigendInLink =()=>{
    return(
        <ul className = "right">
            <li><NavLink to ='/create'>New Project</NavLink></li>
            <li><NavLink to ='/'>Log Out</NavLink></li>
            <li><NavLink to ='/' className = 'btn btn-floating blue lighten-1'>NN</NavLink></li>
        </ul>
    )
}

export default SigendInLink;