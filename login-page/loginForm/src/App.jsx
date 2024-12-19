import React, { useState } from "react";

const RegistrationForm = () => {
  let [fordata, setdata] = useState(
    {
      uname: '',
      uemail: '',
      upassword: '',
      index: ""
    }
  )

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form >
        {/* Name Input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={fordata.uname}
            name="uname"
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">
          {

            fordata.index !== "" ? 'Registered' : '  Register'
          }

        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
