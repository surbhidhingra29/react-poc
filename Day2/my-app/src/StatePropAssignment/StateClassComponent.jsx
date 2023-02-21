import React from "react";
class StateClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfUsers: [
        {
          name: "Yash",
          age: 40,
          gender: "Male",
        },
        {
          name: "Shruti",
          age: 30,
          gender: "Female",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h3>Users Details using STATE</h3>
        <div className="container" style= {{justifyContent: "center", display: "flex"}}>
        <table id="employees" style={{ background : "cyan", width:"80%"}}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {this.state.listOfUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default StateClassComponent;
