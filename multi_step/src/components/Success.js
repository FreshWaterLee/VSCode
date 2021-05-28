import React, { Component } from 'react'
import MuithemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    render() {
        return (
            <MuithemeProvider>
                <React.Fragment>
                    <AppBar title ="Enter User Details" />
                    <h1>Thank You For Your Submission</h1>
                    <p>You will get an email with further instructions</p>
                </React.Fragment>
            </MuithemeProvider>
        );
    }
}
export default Success