import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component {
    render() {
        return (
        <TableRow>
            <TableCell>{this.props.id}</TableCell>
            <TableCell>{this.props.name}</TableCell>
            <TableCell><img src={this.props.path} alt="profile" width = '250px' height = '250px'/></TableCell>
            <TableCell>{this.props.kind}</TableCell>
            <TableCell>{this.props.description}</TableCell>
        </TableRow>
        )
    }
}

export default Customer;