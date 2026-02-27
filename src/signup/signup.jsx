import React, { useState } from "react";
import "./Signup.css";
import { FaGoogle, FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!formData.terms) {
      setMessage("Please accept Terms & Conditions.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password
        }
      );

      setMessage("Registration Successful!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      setMessage("Registration Failed. Try again.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">

        {/* Left Side */}
        <div className="col-md-6 d-none d-md-block p-0 position-relative">
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

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Confirm</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="terms">
                  I agree to the Terms of Service and Privacy Policy.
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 py-2 mb-3"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create My Account"}
              </button>

              {message && (
                <p style={{ color: "red", textAlign: "center" }}>
                  {message}
                </p>
              )}

              <div className="text-center text-muted mb-3">
                OR CONTINUE WITH
              </div>

              <div className="d-flex gap-3 mb-4">
                <button
                  type="button"
                  className="btn btn-outline-secondary w-50 d-flex align-items-center justify-content-center"
                >
                  <FaGoogle className="me-2" />
                  Google
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary w-50 d-flex align-items-center justify-content-center"
                >
                  <FaApple className="me-2" />
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