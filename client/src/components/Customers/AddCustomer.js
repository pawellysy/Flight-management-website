import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';



class AddCustomer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            FirstName: "",
            LastName: "",
            gender: "",
            Country: "",
            Notes: "",
            DateOfBirth: "2017-05-24",



        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }


    handleSubmit = () => {

        if (this.state.FirstName !== "" && this.state.LastName !== ""
            && this.state.Country !== "" && this.state.gender !== "") {

            const options = {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(this.state)
            }
            fetch('/api/addCustomer', options).then(Response => console.log(Response));
            this.setState({
                FirstName: "",
                LastName: "",
                gender: "",
                Country: "",
                Notes: "",
                DateOfBirth: "2017-05-24",



            })
        }
        else {
            console.log("you need to specify All Fields")
        }

    }

    handleChange = name => event => {
        this.setState({ ...this.state, [name]: event.target.value });
    };

    render() {
        return (
            <div>
                <h1>Add Customer</h1>
                {/* <TextField
        id="standard-name"
        label="Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
      /> */}
                <div>

                    <TextField
                        id="First-Name"
                        label="First Name"
                        margin="normal"
                        value={this.state.FirstName}
                        onChange={this.handleChange('FirstName')}
                    />

                    <TextField
                        id="Last-Name"
                        label="Last Name"
                        margin="normal"
                        value={this.state.LastName}
                        onChange={this.handleChange('LastName')}
                    />
                </div>
                <div>

                    <select>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <TextField
                        id="Country"
                        label="Country"
                        margin="normal"
                        value={this.state.Country}
                        onChange={this.handleChange('Country')}
                    />
                </div>
                <div>

                    <TextField
                        id="Notes"
                        label="Notes"
                        margin="normal"
                        value={this.state.Notes}
                        onChange={this.handleChange('Notes')}
                    />
                </div>
                <div>

                    <TextField
                        id="Date-of-birth"
                        label="Date of birth"
                        type="date"

                        value={this.state.DateOfBirth}
                        onChange={this.handleChange('DateOfBirth')}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>

                <Button
                    variant="contained"
                    onClick={this.handleSubmit}>
                    Add new customer
                </Button>

            </div>
        );
    }
}

export default AddCustomer;