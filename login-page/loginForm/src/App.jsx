import React, { useState } from "react";

const RegistrationForm = () => {
  const [fordata, setdata] = useState({
    uname: "",
    uemail: "",
    upassword: "",
  });
  const [userData, setUserData] = useState([]);

  const getValue = (event) => {
    const { name, value } = event.target;
    setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    const currentUserFordata = {
      uname: fordata.uname,
      uemail: fordata.uemail,
      upassword: fordata.upassword,
    };

    setUserData((prevUserData) => [...prevUserData, currentUserFordata]);

    // Clear the input fields
    setdata({
      uname: "",
      uemail: "",
      upassword: "",
    });
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={fordata.uname}
            name="uname"
            onChange={getValue}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="uemail"
            value={fordata.uemail}
            onChange={getValue}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={fordata.upassword}
            name="upassword"
            onChange={getValue}
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>

      {/* Displaying Registered Users */}
      <div>
        <h3>Registered Users:</h3>
        <ul>
          {userData.map((user, index) => (
            <li key={index}>
              {user.uname} ({user.uemail})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RegistrationForm;
