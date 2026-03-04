// Signup.jsx
import React, { useState } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await API.post("/auth/register", formData);

      alert("Signup Successful");

      navigate("/login");

    } catch (error) {

      alert("Signup Failed");

      console.log(error);

    }
  };

  return (

    <div className="container mt-5">

      <h3>Signup</h3>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <button className="btn btn-dark">
          Register
        </button>

      </form>

    </div>

  );
}