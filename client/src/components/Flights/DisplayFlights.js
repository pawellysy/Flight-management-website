import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Options from '../Options'
import EditFlight from './EditFlight'
import { Button } from '@material-ui/core';



class DisplayFlights extends Component {
  constructor() {
    super();
    this.state = {
      flightsList: [],
      editFlight: {},
      ifEditFlight: false

    };

  }
  handleDelete = (id) => {
    fetch(`/api/DeleteFlight/${id}`, {
      method: 'DELETE',

    }).then(response => response.json)
    .then(console.log(JSON.stringify.response))
    .catch(err => console.error(err))
    
    
  }
  handleEdit = (flightToEdit) => {
    this.setState({...this.state, editFlight: flightToEdit, ifEditFlight: true});
    console.log(this.state)

  }




  componentWillMount() 
  {
    fetch('/api/getFlights')
      .then(data => data.json())
      .then(flightsList => this.setState({ ...this.state.flightsList, flightsList }))
      .catch(err => console.log(err));

  }



  render() {


    return (
      <div>
        <EditFlight FlightProps={this.state.ListOfPassagers} ifEdit={this.state.ifEditFlight} />
        <h1>
          List of Flights
                </h1>
        <Paper>
          <Table className="table">
            <TableHead style={{ textAlign: "left" }}>
              <TableRow>
                <TableCell align="right">Departure Place</TableCell>
                <TableCell align="right">Arrival Place</TableCell>
                <TableCell  >Departure</TableCell>
                <TableCell align="right">Arrival</TableCell>
                <TableCell align="right">Cost</TableCell>
                <TableCell align="right">percent taken</TableCell>
                <TableCell align="right">Delete</TableCell>
                <TableCell align="right">Edit</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.flightsList.map(row => (
                <TableRow key={row._id}>
                  <TableCell component="th" scope="row">{row.DeparturePlace} </TableCell>
                  <TableCell component="th" scope="row">{row.ArrivalPlace} </TableCell>
                  <TableCell component="th" scope="row">{row.Departure} </TableCell>
                  <TableCell align="right">{row.Arrival}</TableCell>
                  <TableCell align="right">{row.Cost}$</TableCell>
                  <TableCell align="right">{row.ListOfPassagers.length / row.NbPassagers}%</TableCell>
                  <TableCell align="right"><Button onClick={() => this.handleDelete(row._id)}> Delete </Button> </TableCell>
                  <TableCell align="right"><Button onClick={ () => this.handleEdit(row)}> Edit </Button> </TableCell>

                </TableRow>
              ))}
            </TableBody>


          </Table>


        </Paper>


      </div>



    );
  }
}

export default DisplayFlights;