import React from "react";
import {Table} from "react-bootstrap";
import {connect} from "react-redux";

function Ctable(props) {
  return (
    <Table responsive striped condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Customer Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default connect(state => state, null)(Ctable);
