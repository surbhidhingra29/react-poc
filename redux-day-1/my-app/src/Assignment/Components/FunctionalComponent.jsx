import React, { useState, useEffect } from "react";

const FunctionalComponent = (props) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setUserList(data));
  }, []);

  return (
    <div className="container">
      <h1 className="txt-hd1">
        User's details displaying in functional component with API FETCH CALL.
      </h1>
      <table id="employees">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default FunctionalComponent;
