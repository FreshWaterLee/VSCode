import React, { Component, useState } from 'react'; 
import Header from '../components/Header';
import Customer from '../components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function Example() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });
}

export default Example;