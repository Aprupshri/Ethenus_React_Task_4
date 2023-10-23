import React, { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getter() {
      let get = await fetch("https://dummyjson.com/users");
      let data = await get.json();
      setData(data.users);
      console.log(data);
    }
    getter();
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <h1>Dummy Data</h1>
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Profile Pic</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>E-mail</th>
              <th>Username</th>
              <th>Domain</th>
              <th>IP</th>
              <th>University</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <img src={user.image} className="profileimage" />
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.domain}</td>
                  <td>{user.ip}</td>
                  <td>{user.university}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FetchData;
