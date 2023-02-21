import React from "react";

const PropsComponentFunctional = ({ list }) => {
  return (
    <div>
      <h3>  Users Detail using PROPS</h3>
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
            {list.map((user, index) => (
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
export default PropsComponentFunctional;
