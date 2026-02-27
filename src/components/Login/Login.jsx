import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        loginData
      );

      if (response.data === "Login Successful") {
        setMessage("Login Successful!");
        
        // Optional: Save user email in localStorage
        localStorage.setItem("userEmail", loginData.email);

        // Redirect after login
        setTimeout(() => {
          navigate("/dashboard"); // change route if needed
        }, 1000);
      } else {
        setMessage("Invalid Credentials");
      }

    } catch (error) {
      setMessage("Server Error. Please try again.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        
        {/* LEFT SIDE */}
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

        {/* RIGHT SIDE */}
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

            <div className="options">
              <div>
                <input type="checkbox" /> Remember me
              </div>
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className="signin-btn" disabled={loading}>
              {loading ? "Signing In..." : "SIGN IN"}
            </button>

            {message && (
              <p style={{ marginTop: "10px", color: "red" }}>
                {message}
              </p>
            )}

            <div className="divider">
              <span>OR CONTINUE WITH</span>
            </div>

            <div className="social-buttons">
              <button type="button" className="google-btn">
                <FcGoogle /> Google
              </button>
              <button type="button" className="apple-btn">
                <FaApple /> Apple
              </button>
            </div>

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