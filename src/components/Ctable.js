import React, {Component} from "react";
import {Table} from "react-bootstrap";
import {connect} from "react-redux";

class Ctable extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {

  }
  render() {
    const styles = {
      textAlign: "center"
    }

    const contacts = this.props.contacts.map((contact, i) => {
      return (
        <tr key={contact + i} className="tr-animation">
          <td style={styles}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
          <td>{contact.description}</td>
          <td><i onClick={this.handleDelete} className="fa fa-trash" aria-hidden="true"></i></td>
        </tr>
      )
    })
    return (
      <Table responsive striped condensed hover>
        <thead>
          <tr>
            <th>Edit</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts}
        </tbody>
      </Table>
    )
  }
}

export default connect(state => state, null)(Ctable);
