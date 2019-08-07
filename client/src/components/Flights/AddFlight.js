import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


class AddFlight extends Component {

    constructor(props){
        super(props);
       this.state = {
           

                Departure : "2018-05-24T10:30",
                Arrival : "2018-05-24T10:30",
                Cost : "",
                NbPassagers: 0,
                ListOfPassagers: []

            

        }

        this.handleSubmit=this.handleSubmit.bind(this);

    }
    

handleSubmit = () =>{
  this.setState({
    
    Departure : "2018-05-24T10:30",
    Arrival : "2018-05-24T10:30",
    Cost : "",
    NbPassagers: 0,
    ListOfPassagers: []

  })

    console.log("submit");
    const options = {
      method: "POST",
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    fetch('/api/addFlight', options)
      .then(FlightsList => {console.log(FlightsList)});
   





}


handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.value });
  };


    render() {
        return (
            <div>
                <h1>
                    Add Flight
                </h1>
                <TextField
        id="datetime-local"
        label="Departure"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        onChange={this.handleChange('Departure')}
        InputLabelProps={{
          shrink: true,
        }}
      />

<TextField
        id="datetime-local"
        label="Arrival"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        onChange={this.handleChange('Arrival')}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <div>

      <TextField
        id="cost"
        label="Cost"
        margin="normal"
        onChange={this.handleChange('Cost')}
        />

        <TextField
        id="nb-of-passagers"
        label="Number of passagers"
        margin="normal"
        onChange={this.handleChange('NbPassagers')}
        />
        </div>

<div>

    <Button
     variant="contained"
     onClick={this.handleSubmit}>
        Add new Flight
    </Button>
</div>
            </div>
        );
    }
}

export default AddFlight;