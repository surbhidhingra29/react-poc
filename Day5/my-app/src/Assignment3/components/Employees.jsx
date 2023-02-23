import React, { Component } from "react";
import Table from "react-bootstrap/Table";
export default class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "Employee",
      data: [],
      update: true,
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((responseData) => this.setState({ data: responseData.data }));
  }

  render() {
    return (
      <>
        <h3 className="text-center txt-hd2">Employees Table</h3>
        <Table  id="customers">
          <thead>
            <tr>
              <th>S.No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}
