import React, {Component} from 'react';
import AddFlight from './AddFlight';
import DisplayFlights from './DisplayFlights'









class Flight extends Component {

   
    render() {
        return (
            <div>

        <AddFlight/>
        <DisplayFlights/>
            </div>
        )
    }
}
export default Flight;
