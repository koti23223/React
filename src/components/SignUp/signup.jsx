import React from "react";
import "./Signup.css";
import { FaUser, FaEnvelope, FaLock, FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">

        {/* Left Side */}
        <div className="col-md-6 d-none d-md-block p-4">
          <div className="left-section d-flex flex-column justify-content-end p-5 text-white">
            <h1 className="fw-bold display-5">
              Curating a life of unparalleled elegance.
            </h1>
            <p className="mt-3">
              Join an exclusive community dedicated to refined living,
              high-end design, and curated experiences.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">
          <div className="w-75">

            <h6 className="text-uppercase fw-bold text-muted">Lifestyle</h6>
            <h2 className="fw-bold mt-3">Create Account</h2>
            <p className="text-muted mb-4">
              Elevate your daily experience starting today.
            </p>

            <form>

              {/* Full Name */}
              <label>Full Name</label>
              <div className="input-box mb-3">
                <FaUser className="icon" />
                <input type="text" placeholder="Enter your full name" />
              </div>

              {/* Email */}
              <label>Email Address</label>
              <div className="input-box mb-3">
                <FaEnvelope className="icon" />
                <input type="email" placeholder="name@example.com" />
              </div>

              {/* Password */}
              <label>Password</label>
              <div className="input-box mb-3">
                <FaLock className="icon" />
                <input type="password" placeholder="••••••••" />
                <FaEye className="eye-icon" />
              </div>

              {/* Confirm Password */}
              <label>Confirm Password</label>
              <div className="input-box mb-3">
                <FaLock className="icon" />
                <input type="password" placeholder="Re-enter password" />
              </div>

              {/* Terms */}
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="terms" />
                <label className="form-check-label" htmlFor="terms">
                  I agree to the Terms of Service and Privacy Policy.
                </label>
              </div>

              <button type="submit" className="btn btn-dark w-100 py-2 mb-3">
                Create My Account
              </button>

              <div className="text-center text-muted mb-3">
                OR CONTINUE WITH
              </div>

              {/* Social Buttons */}
              <div className="d-flex gap-3 mb-4">
                <button
                  type="button"
                  className="btn btn-outline-secondary w-50 d-flex align-items-center justify-content-center"
                >
                  <FcGoogle size={20} className="me-2" />
                  Google
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary w-50 d-flex align-items-center justify-content-center"
                >
                  <FaApple size={18} className="me-2" />
                  Apple
                </button>
              </div>

              <p className="text-center">
                Already part of the community?{" "}
                <Link to="/login">Sign In</Link>
              </p>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
}