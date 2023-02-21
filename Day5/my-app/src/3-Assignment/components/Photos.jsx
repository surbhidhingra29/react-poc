import React, { Component } from "react";
import Table from "react-bootstrap/Table";

export default class Photos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "photos",
      data: [],
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
        <h2 className="text-center txt-hd2">Photo Table</h2>
        <Table id="customers">
          <thead>
            <tr>
              <th>S.No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Profile Photo</th>

            </tr>
          </thead>
          <tbody>
            {this.state.data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>
                  <img src={user.avatar} alt="avtar" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}
