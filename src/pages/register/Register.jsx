import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          placeholder="Enter your username" />
        
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your email"
        />
        <label htmlFor="">Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password"
        />

        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
};

export default Register;
