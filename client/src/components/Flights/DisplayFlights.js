import React, { Component } from 'react';

class DisplayFlights extends Component {
    constructor(){
        super();
       this.state = {
           flightsList : []
       }
      }
    render() {
        return (
            <div>
                <h1>
                    List of Flights
                </h1>
            </div>
            
        );
    }
}

export default DisplayFlights;