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
    this.handleContact = this.handleContact.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleContact(contact) {
    addContact(contact);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formControlsNameInput">
          <ControlLabel>Customer Name</ControlLabel>
          <FormControl name="name" onChange={this.handleChange} componentClass="input" placeholder="Name"/>
        </FormGroup>

        <FormGroup controlId="formControlsPhoneInput">
          <ControlLabel>Phone Number</ControlLabel>
          <FormControl name="phone" onChange={this.handleChange} componentClass="input" placeholder="Phone Number" />
        </FormGroup>

        <FormGroup controlId="formControlsEmailInput">
          <ControlLabel>Email</ControlLabel>
          <FormControl name="email" onChange={this.handleChange} componentClass="input" placeholder="Email" />
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Description</ControlLabel>
          <FormControl name="description" onChange={this.handleChange} componentClass="textarea" placeholder="Description" />
        </FormGroup>
        <Button onClick={() => this.handleContact(this.state)} type="submit">Submit</Button>
      </form>
    )
  }
}

export default connect(state => state, {addContact})(Form);
