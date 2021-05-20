import React from 'react'
import {Link} from 'react-router-dom'
import SigendInLink from './SignedInLink'
import SigendOutLink from './SignedOutLink'


const Navar =()=>{
    return(
        <nav className = "nav-wrapper grey darken-3">
            <div className = "container">
                <Link to = '/' className="brand-logo">MarioPlan</Link>
                <SigendInLink/>
                <SigendOutLink/>
            </div>
        </nav>
    )
}

export default Navar;