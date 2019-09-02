import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';




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
                gender: "Male",
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
        console.log(this.state)
        return (
            <div className="adding-formule">
                <h1>Add Customer</h1>
               
                <div>

                    <TextField
                        id="First-Name"
                        label="First Name"
                        margin="normal"
                        className="filler"
                        value={this.state.FirstName}
                        onChange={this.handleChange('FirstName')}
                    />

                    <TextField
                        id="Last-Name"
                        label="Last Name"
                        className="filler"
                        margin="normal"
                        value={this.state.LastName}
                        onChange={this.handleChange('LastName')}
                    />
                </div>
                <div>

                    <div>
                  
                    <FormControl>
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                        <Select
                            value={this.state.gender}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'gender',
                                id: 'gender-simple',
                            }}
                        >
                            <MenuItem value={"Male"}>Male</MenuItem>
                            <MenuItem value={"Female"}>Female</MenuItem>
                            <MenuItem value={"other"}>Other</MenuItem>
                        </Select>
                    </FormControl>
                    </div>
                    <TextField
                        className="filler"
                        id="Country"
                        label="Country"
                        margin="normal"
                        value={this.state.Country}
                        onChange={this.handleChange('Country')}
                    />
                </div>
                <div>

                    <TextField
                        className="filler"
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
                        className="filler"
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