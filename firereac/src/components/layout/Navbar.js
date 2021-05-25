import React from 'react'
import {Link} from 'react-router-dom'
import SigendOutLink from './SignedOutLink'
import {connect} from 'react-redux'
import SignedInLink from './SignedInLink'

const Navar =(props)=>{
    const {auth,profile} = props;
    const links = auth.uid ? <SignedInLink profile = {profile}/>: <SigendOutLink/>;
    return(
        <nav className = "nav-wrapper grey darken-3">
            <div className = "container">
                <Link to = '/' className="brand-logo">MarioPlan</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps=(state)=>{
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navar);