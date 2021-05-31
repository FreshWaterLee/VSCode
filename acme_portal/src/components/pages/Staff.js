import React, { Component } from 'react'

class Staff extends Component {
    state = {
        currentUserName:'Lee',
        currentUserEmail:'Lee@FreshWater.com'
    }

    // componentDidMount(){
    //     const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    //     this.setState({
    //         currentUserEmail : idToken.idToken.claims.email,
    //         currentUserEmail : idToken.idToken.claims.email,
    //     })

    // }

    render() {
        console.log('Login_Success');
        return (
            <div>
                <h1>Wecome {this.state.currentUserName}</h1>
                <p>Email: {this.state.currentUserEmail}</p>
                <p>You have reached the authorized staff area of the portal</p>
            </div>
        )
    }
}

export default Staff;