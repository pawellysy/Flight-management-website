import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

function loadScript  (url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)

}


class AddFlight extends Component {


  constructor(props) {
    super(props);
    this.state = {


      Departure: "2018-05-24T10:30",
      Arrival: "2018-05-24T10:30",
      Cost: 0,
      NbPassagers: 1,
      ListOfPassagers: [],
      ArrivalPlace: '',
      DeparturePlace: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount(){
    this.renderMap();
  }
  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBzwTEDiXGiyN6KgHMgQruqPvASqVAitUU&libraries=places&callback=initMap")
    window.initMap = this.initMap
  }
  initMap = () => {
    this.autocompleteArrival = new window.google.maps.places.Autocomplete( document.getElementById("ArrivalPlace"))
    this.autocompleteDeparture = new window.google.maps.places.Autocomplete( document.getElementById("DeparturePlace"))
    this.autocompleteArrival.addListener('place_changed', () => {
      var place = this.autocompleteArrival.getPlace();
      this.setState({ArrivalPlace:place.formatted_address})
    }
    );
    this.autocompleteDeparture.addListener('place_changed', () => {
      var place = this.autocompleteDeparture.getPlace();
      this.setState({DeparturePlace:place.formatted_address})
    }
    );
    
  }





  handleSubmit = () => {

    if(!this.state.NbPassagers === 0){
      console.log("submitting")

      const options = {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(this.state)
      }
      fetch('/api/addFlight', options)
        .then(FlightsList => { console.log(FlightsList) });
  
      this.setState({
  
        Departure: "2018-05-24T10:30",
        Arrival: "2018-05-24T10:30",
        Cost: 0,
        NbPassagers: 1,
        ListOfPassagers: []
  
      })
    }
    else {
      
    }

  }


  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.value });
  };


  render() {
    return (
      <div className="adding-formule">
        <h1>
          Add Flight
                </h1>
        <TextField
          id="datetime-local"
          label="Departure"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          variant="outlined"
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
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div>

          <TextField
            wła="red"
            id="cost"
            label="Cost"
            margin="normal"
            onChange={this.handleChange('Cost')}
            variant="outlined"
          />

          <TextField
            id="nb-of-passagers"
            label="Number of passagers"
            margin="normal"
            onChange={this.handleChange('NbPassagers')}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="ArrivalPlace"
            label="Arrival Place"
            margin="normal"
            onChange={this.handleChange('ArrivalPlace')}
            variant="outlined"
          />

          <TextField
            id="DeparturePlace"
            label="Departure Place"
            margin="normal"
            onChange={this.handleChange('DeparturePlace')}
            variant="outlined"
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