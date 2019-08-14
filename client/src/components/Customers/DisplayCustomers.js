import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Options from './Options'

class DisplayCustomers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayEdit: false,
      editCustomer: "",
      customers: [],
    }

  }


  componentDidMount() {


    console.log('fetching');
    fetch('/api/getCustomers').then(response => response.json())
      .then(customers => this.setState({ ...this.state.customers, customers }))


  }



  render() {
    console.log(this.state)
    return (
      <div>
        <p>
          customers List
                </p>
        <Table>
          <TableHead>
            <TableRow>

              <TableCell > Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Date Of birth</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Notes</TableCell>
              <TableCell align="right">List Of Flights</TableCell>
              <TableCell align="right">Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">{row.FirstName}</TableCell>
                <TableCell align="right">{row.LastName}</TableCell>
                <TableCell align="right">{row.DateOfBirth }</TableCell>
                <TableCell align="right">{row.Country}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.Notes}</TableCell>
                <TableCell align="right">{<p>list of Flights</p>}</TableCell>
            <TableCell align="right">{<Options name={row._id}/>} </TableCell>
              </TableRow>
            ))}
          </TableBody>




        </Table>
      </div>
    );
  }
}

export default DisplayCustomers;