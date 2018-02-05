import React, {Component} from "react";
import {FormGroup, ControlLabel, FormControl, Button} from "react-bootstrap";
import {connect} from "react-redux";

import {addContact} from "../redux/contacts";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      description: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      name: "",
      phone: "",
      email: "",
      description: ""
    });
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formControlsNameInput">
          <ControlLabel>Customer Name</ControlLabel>
          <FormControl value={this.state.name} required name="name" onChange={this.handleChange} componentClass="input" placeholder="Name"/>
        </FormGroup>

        <FormGroup controlId="formControlsPhoneInput">
          <ControlLabel>Phone Number</ControlLabel>
          <FormControl value={this.state.phone} name="phone" onChange={this.handleChange} componentClass="input" placeholder="Phone Number" />
        </FormGroup>

        <FormGroup controlId="formControlsEmailInput">
          <ControlLabel>Email</ControlLabel>
          <FormControl value={this.state.email} required name="email" onChange={this.handleChange} componentClass="input" placeholder="Email" />
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Description</ControlLabel>
          <FormControl value={this.state.description} name="description" onChange={this.handleChange} componentClass="textarea" placeholder="Description" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    )
  }
}

export default connect(state => state, {addContact})(Form);
