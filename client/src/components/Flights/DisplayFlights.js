import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';


  
  class DisplayFlights extends Component {
      constructor(){
          super();
          this.state = {
              flightsList : []
            };
            
        }
        
        
        componentWillMount(){
            fetch('/api/getFlights')
            .then(data => data.json())
            .then(flightsList => this.setState({...this.state.flightsList, flightsList}))
            .catch(err => console.log(err));
            
        }
        
        
        
        render() {
 
       
        return (
            <div>
                <h1>
                    List of Flights
                </h1>
                <Paper>
      <Table >
        <TableHead>
          <TableRow> 
            <TableCell >Departure</TableCell>
            <TableCell align="right">Arrival</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Number of Passagers</TableCell>
            <TableCell align="right">Number of Passagers Taken</TableCell>
            <TableCell align="right">OPTIONS</TableCell>
          </TableRow>
              </TableHead>
          <TableBody>
          {this.state.flightsList.map(row => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">{row.Departure} </TableCell>
              <TableCell align="right">{row.Arrival}</TableCell>
              <TableCell align="right">{row.Cost}</TableCell>
              <TableCell align="right">{row.NbPassagers}</TableCell>
              <TableCell align="right">{row.ListOfPassagers.length}</TableCell>
              <TableCell align="right">
                  <Button>Options</Button>
              </TableCell>
              
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