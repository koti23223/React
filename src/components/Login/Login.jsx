// Login.jsx
import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./Login.css";

const Login = () => {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {

    e.preventDefault();
    setLoading(true);

    try {

      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        loginData
      );

      const message = response.data;

      if (message === "Login Successful") {

        localStorage.setItem("userEmail", loginData.email);
        // localStorage.setItem("username",loginData.password);

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back to Lifestyle!",
          timer: 2000,
          showConfirmButton: false
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);

      } else {

        Swal.fire({
          icon: "error",
          title: "Invalid Credentials",
          text: message
        });

      }

    } catch (error) {

      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Unable to connect to server"
      });

      console.error(error);
    }

    setLoading(false);

  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="left-panel">
          <div className="overlay">
            <h5>EXPERIENCE ELEGANCE</h5>
            <h1>LIFESTYLE</h1>
            <p>
              Curated experiences for the modern minimalist.
              Design your life with intention.
            </p>
          </div>
        </div>

        <div className="right-panel">
          <h2>WELCOME BACK</h2>
          <p className="subtitle">
            Enter your credentials to access your lifestyle portal.
          </p>

          <form onSubmit={handleLogin}>

            <label>Email Address</label>

            <div className="input-box">
              <FaEnvelope className="icon" />
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={loginData.email}
                onChange={handleChange}
                required
              />
            </div>

            <label>Password</label>

            <div className="input-box">
              <FaLock className="icon" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={loginData.password}
                onChange={handleChange}
                required
              />

              {showPassword ? (
                <FaEyeSlash
                  className="eye-icon"
                  onClick={() => setShowPassword(false)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <FaEye
                  className="eye-icon"
                  onClick={() => setShowPassword(true)}
                  style={{ cursor: "pointer" }}
                />
              )}

            </div>

            <button
              type="submit"
              className="signin-btn"
              disabled={loading}
            >
              {loading ? "Signing In..." : "SIGN IN"}
            </button>

            <p className="register">
              New to the club? <Link to="/signup">Create an account</Link>
            </p>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;