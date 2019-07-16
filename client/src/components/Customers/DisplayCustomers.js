import React, {Component} from 'react';

class DisplayCustomers extends Component {
    
    constructor (props){
        super(props);
        this.state={
        customerList : [],
        }

    }


    componentDidMount(){

        console.log("fetching started")
        const options = {
            method: 'GET', 
        };
        

fetch("/api/getCustomers", options)
.then(res => res.json)
.then(customerList => (this.setState({customerList})), console.log(this.customerList))
    }
    
    render() {
        return (
            <div>
                <p>
                    Display Customers
                </p>
            </div>
        );
    }
}

export default DisplayCustomers;