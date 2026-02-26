import React from "react";
import { FaEnvelope, FaLock, FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        
        {/* LEFT SIDE */}
        <div className="left-panel">
          <div className="overlay">
            <h5>EXPERIENCE ELEGANCE</h5>
            <h1>LIFESTYLE</h1>
            <p>Curated experiences for the modern minimalist.
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

          <form>
            <label>Email Address</label>
            <div className="input-box">
              <FaEnvelope className="icon" />
              <input type="email" placeholder="name@example.com" />
            </div>

            <label>Password</label>
            <div className="input-box">
              <FaLock className="icon" />
              <input type="password" placeholder="••••••••" />
              <FaEye className="eye-icon" />
            </div>

            <div className="options">
              <div>
                <input type="checkbox" /> Remember me
              </div>
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className="signin-btn">
              SIGN IN
            </button>

            <div className="divider">
              <span>OR CONTINUE WITH</span>
            </div>

            <div className="social-buttons">
              <button className="google-btn">
                <FcGoogle /> Google
              </button>
              <button className="apple-btn">
                <FaApple /> Apple
              </button>
            </div>

           <p className="register">New to the club? <Link to="/signup">Create an account</Link></p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;