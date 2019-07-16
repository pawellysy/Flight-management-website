import React, { Component } from 'react'
import AddCustomer from './AddCustomer';
import DisplayCustomers from './DisplayCustomers';

class Customers extends Component {
    
    render() {
        return (
            <div>
               
                <AddCustomer/>
                <DisplayCustomers/>
            </div>
        );
    }
}

export default Customers;