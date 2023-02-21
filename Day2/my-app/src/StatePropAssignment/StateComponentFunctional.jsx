import React, { useState } from "react";
const StateComponentFunctional = () => {
  const listOfUsers = [
    {
      name: "Dev",
      age: 25,
      gender: "Male",
    },
    {
      name: "Sur",
      age: 30,
      gender: "Female",
    },
  ];
  const [users] = useState(listOfUsers);

  return (
    <div>
      <h3>
        Users Detail using USE STATE hook
      </h3>
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
            {users.map((user, index) => (
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
};
export default StateComponentFunctional;
