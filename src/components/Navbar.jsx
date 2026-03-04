//Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  // Check login status on load
  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setUserEmail(null);
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom fixed-top shadow-sm">
        <div className="container-fluid px-4">

          {/* Brand */}
          <Link className="navbar-brand fw-bold fs-4" to="/">
            LIFESTYLE
          </Link>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarContent"
          >

            {/* Center Menu */}
            <ul className="navbar-nav mx-auto gap-4">

              <li className="nav-item">
                <Link className="nav-link text-secondary fw-medium" to="/">
                  Home
                </Link>
              </li>

              {/* Collections Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-secondary fw-medium"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Collections
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/collections/mens-shirts"
                    >
                      Mens Collection
                    </Link>
                  </li>
                  <li>
                    <Link 
                    className="dropdown-item" 
                    to="/collections/womens-dresses"
                    >
                       Womens Collection
                   </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/collections"
                    >
                      All Collections
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-secondary fw-medium"
                  to="/sustainability"
                >
                  Sustainability
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-secondary fw-medium"
                  to="/journal"
                >
                  Journal
                </Link>
              </li>

            </ul>

            {/* Right Section */}
            <div className="d-flex align-items-center gap-3">

              {userEmail ? (
                <>
                  <i className="bi bi-person-circle fs-4"></i>

                  <span className="fw-medium text-dark">
                    {userEmail}
                  </span>

                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-danger btn-sm px-3"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="btn btn-outline-dark btn-sm px-3"
                >
                  Sign In
                </Link>
              )}

              <button className="btn btn-outline-dark btn-sm">
                <i className="bi bi-cart"></i>
              </button>

            </div>

          </div>
        </div>
      </nav>

      {/* Spacer to avoid content hidden under fixed navbar */}
      <div style={{ height: "75px" }}></div>
    </>
  );
}