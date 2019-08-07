import React, {Component} from 'react';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';

class DisplayCustomers extends Component {
    
    constructor (props){
        super(props);
        this.state={
           
        customers : [],
        }

    }


    componentDidMount(){

      
       console.log('fetching');
        fetch('/api/getCustomers').then(response => response.json())
        .then(customers => this.setState(customers))
        
        
    }


    
    render() {
        console.log(this.state)
        return (
            <div>
                <p>
                   customers List
                </p>
                {/* <Table>
        <TableHead>
          <TableRow>
            
            <TableCell > Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Date Of birth</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Notes</TableCell>
          </TableRow>
          <TableBody>
          {customers.map(row => (
            <TableRow key={row.id_}>
              <TableCell component="th" scope="row">
                {row.FirstName}
              </TableCell>
              <TableCell align="right">{row.LastName}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </TableHead>




        </Table> */}
            </div>
        );
    }
}

export default DisplayCustomers;